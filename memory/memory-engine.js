/**
 * Memory Storage Engine
 * Provides persistent storage for persona interactions, patterns, and learning data
 */

class MemoryEngine {
  constructor(config = {}) {
    this.config = {
      storagePath: config.storagePath || './memory/data',
      maxMemorySize: config.maxMemorySize || 100 * 1024 * 1024, // 100MB
      retentionPeriod: config.retentionPeriod || 90 * 24 * 60 * 60 * 1000, // 90 days
      compressionEnabled: config.compressionEnabled || true,
      indexRefreshInterval: config.indexRefreshInterval || 60000, // 1 minute
      ...config
    };
    
    this.storage = new Map();
    this.indexes = new Map();
    this.lastAccess = new Map();
    this.compressionCache = new Map();
    
    this.initialize();
  }

  /**
   * Initialize the memory engine
   */
  async initialize() {
    await this.loadStorage();
    await this.buildIndexes();
    this.startIndexRefresh();
    this.startCleanup();
  }

  /**
   * Store persona interaction data
   */
  async storeInteraction(interaction) {
    const key = this.generateInteractionKey(interaction);
    const timestamp = Date.now();
    
    const record = {
      id: this.generateId(),
      timestamp,
      type: 'interaction',
      persona: interaction.persona,
      context: interaction.context,
      artifact: interaction.artifact,
      outcome: interaction.outcome,
      confidence: interaction.confidence,
      userSatisfaction: interaction.userSatisfaction,
      duration: interaction.duration,
      metadata: interaction.metadata || {}
    };

    await this.store(key, record);
    await this.updateIndexes(record);
    
    return record.id;
  }

  /**
   * Store context pattern data
   */
  async storePattern(pattern) {
    const key = this.generatePatternKey(pattern);
    const timestamp = Date.now();
    
    const record = {
      id: this.generateId(),
      timestamp,
      type: 'pattern',
      pattern: pattern.pattern,
      context: pattern.context,
      frequency: pattern.frequency || 1,
      confidence: pattern.confidence,
      recommendedPersona: pattern.recommendedPersona,
      successRate: pattern.successRate,
      lastSeen: timestamp,
      evolution: pattern.evolution || 'stable'
    };

    await this.store(key, record);
    await this.updateIndexes(record);
    
    return record.id;
  }

  /**
   * Store learning data
   */
  async storeLearning(learning) {
    const key = this.generateLearningKey(learning);
    const timestamp = Date.now();
    
    const record = {
      id: this.generateId(),
      timestamp,
      type: 'learning',
      category: learning.category,
      data: learning.data,
      confidence: learning.confidence,
      impact: learning.impact,
      validation: learning.validation || {},
      metadata: learning.metadata || {}
    };

    await this.store(key, record);
    await this.updateIndexes(record);
    
    return record.id;
  }

  /**
   * Retrieve persona interaction history
   */
  async getInteractions(filters = {}) {
    const query = {
      type: 'interaction',
      ...filters
    };
    
    return await this.query(query);
  }

  /**
   * Retrieve context patterns
   */
  async getPatterns(filters = {}) {
    const query = {
      type: 'pattern',
      ...filters
    };
    
    return await this.query(query);
  }

  /**
   * Retrieve learning data
   */
  async getLearning(filters = {}) {
    const query = {
      type: 'learning',
      ...filters
    };
    
    return await this.query(query);
  }

  /**
   * Query memory storage
   */
  async query(query) {
    const results = [];
    
    for (const [key, record] of this.storage) {
      if (this.matchesQuery(record, query)) {
        results.push(this.deserializeRecord(record));
      }
    }
    
    return this.sortResults(results, query);
  }

  /**
   * Get persona performance metrics
   */
  async getPersonaMetrics(persona, timeRange = null) {
    const interactions = await this.getInteractions({
      persona,
      ...(timeRange && { timestamp: { $gte: timeRange.start, $lte: timeRange.end } })
    });

    return {
      totalInteractions: interactions.length,
      averageConfidence: this.calculateAverage(interactions, 'confidence'),
      averageSatisfaction: this.calculateAverage(interactions, 'userSatisfaction'),
      averageDuration: this.calculateAverage(interactions, 'duration'),
      successRate: this.calculateSuccessRate(interactions),
      contextDistribution: this.calculateContextDistribution(interactions),
      performanceTrend: this.calculatePerformanceTrend(interactions)
    };
  }

  /**
   * Get context pattern effectiveness
   */
  async getPatternEffectiveness(contextPattern) {
    const patterns = await this.getPatterns({
      pattern: contextPattern
    });

    if (patterns.length === 0) {
      return null;
    }

    const latest = patterns[patterns.length - 1];
    
    return {
      pattern: contextPattern,
      frequency: latest.frequency,
      confidence: latest.confidence,
      recommendedPersona: latest.recommendedPersona,
      successRate: latest.successRate,
      evolution: latest.evolution,
      reliability: this.calculateReliability(patterns),
      predictionAccuracy: this.calculatePredictionAccuracy(patterns)
    };
  }

  /**
   * Get learning insights
   */
  async getLearningInsights(category = null) {
    const learning = await this.getLearning(category ? { category } : {});
    
    return {
      totalLearnings: learning.length,
      categories: this.calculateCategoryDistribution(learning),
      highImpactLearnings: learning.filter(l => l.impact > 0.8),
      recentLearnings: learning.slice(-10),
      learningTrends: this.calculateLearningTrends(learning)
    };
  }

  /**
   * Store a record in memory
   */
  async store(key, record) {
    const serialized = this.serializeRecord(record);
    
    // Check memory size limit
    if (this.getMemorySize() + serialized.length > this.config.maxMemorySize) {
      await this.cleanupOldRecords();
    }
    
    this.storage.set(key, serialized);
    this.lastAccess.set(key, Date.now());
  }

  /**
   * Update indexes for efficient querying
   */
  async updateIndexes(record) {
    // Update persona index
    if (record.persona) {
      this.updateIndex('persona', record.persona, record.id);
    }
    
    // Update context index
    if (record.context) {
      this.updateIndex('context', record.context, record.id);
    }
    
    // Update type index
    this.updateIndex('type', record.type, record.id);
    
    // Update timestamp index
    this.updateIndex('timestamp', record.timestamp, record.id);
  }

  /**
   * Update a specific index
   */
  updateIndex(indexName, key, recordId) {
    if (!this.indexes.has(indexName)) {
      this.indexes.set(indexName, new Map());
    }
    
    const index = this.indexes.get(indexName);
    if (!index.has(key)) {
      index.set(key, new Set());
    }
    
    index.get(key).add(recordId);
  }

  /**
   * Serialize a record for storage
   */
  serializeRecord(record) {
    const data = JSON.stringify(record);
    
    if (this.config.compressionEnabled && data.length > 1024) {
      return this.compress(data);
    }
    
    return data;
  }

  /**
   * Deserialize a record from storage
   */
  deserializeRecord(data) {
    if (this.isCompressed(data)) {
      data = this.decompress(data);
    }
    
    return JSON.parse(data);
  }

  /**
   * Generate unique ID
   */
  generateId() {
    return `mem_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Generate interaction key
   */
  generateInteractionKey(interaction) {
    return `interaction_${interaction.persona}_${interaction.context}_${Date.now()}`;
  }

  /**
   * Generate pattern key
   */
  generatePatternKey(pattern) {
    return `pattern_${pattern.pattern}_${pattern.context}`;
  }

  /**
   * Generate learning key
   */
  generateLearningKey(learning) {
    return `learning_${learning.category}_${Date.now()}`;
  }

  /**
   * Check if record matches query
   */
  matchesQuery(record, query) {
    for (const [key, value] of Object.entries(query)) {
      if (typeof value === 'object' && value !== null) {
        if (!this.matchesComplexQuery(record[key], value)) {
          return false;
        }
      } else if (record[key] !== value) {
        return false;
      }
    }
    return true;
  }

  /**
   * Match complex query conditions
   */
  matchesComplexQuery(recordValue, queryValue) {
    for (const [operator, operand] of Object.entries(queryValue)) {
      switch (operator) {
        case '$gte':
          if (recordValue < operand) return false;
          break;
        case '$lte':
          if (recordValue > operand) return false;
          break;
        case '$gt':
          if (recordValue <= operand) return false;
          break;
        case '$lt':
          if (recordValue >= operand) return false;
          break;
        case '$ne':
          if (recordValue === operand) return false;
          break;
        case '$in':
          if (!operand.includes(recordValue)) return false;
          break;
        case '$nin':
          if (operand.includes(recordValue)) return false;
          break;
        default:
          return false;
      }
    }
    return true;
  }

  /**
   * Sort query results
   */
  sortResults(results, query) {
    if (query.sort) {
      const [field, order] = query.sort.split(':');
      results.sort((a, b) => {
        const aVal = a[field];
        const bVal = b[field];
        
        if (order === 'desc') {
          return bVal > aVal ? 1 : bVal < aVal ? -1 : 0;
        } else {
          return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
        }
      });
    }
    
    return results;
  }

  /**
   * Calculate average value from array of records
   */
  calculateAverage(records, field) {
    if (records.length === 0) return 0;
    
    const sum = records.reduce((acc, record) => acc + (record[field] || 0), 0);
    return sum / records.length;
  }

  /**
   * Calculate success rate
   */
  calculateSuccessRate(interactions) {
    if (interactions.length === 0) return 0;
    
    const successful = interactions.filter(i => i.outcome === 'success').length;
    return successful / interactions.length;
  }

  /**
   * Calculate context distribution
   */
  calculateContextDistribution(interactions) {
    const distribution = {};
    
    for (const interaction of interactions) {
      const context = interaction.context || 'unknown';
      distribution[context] = (distribution[context] || 0) + 1;
    }
    
    return distribution;
  }

  /**
   * Calculate performance trend
   */
  calculatePerformanceTrend(interactions) {
    if (interactions.length < 2) return 'insufficient_data';
    
    const sorted = interactions.sort((a, b) => a.timestamp - b.timestamp);
    const recent = sorted.slice(-Math.floor(sorted.length / 2));
    const older = sorted.slice(0, Math.floor(sorted.length / 2));
    
    const recentAvg = this.calculateAverage(recent, 'userSatisfaction');
    const olderAvg = this.calculateAverage(older, 'userSatisfaction');
    
    if (recentAvg > olderAvg + 0.1) return 'improving';
    if (recentAvg < olderAvg - 0.1) return 'declining';
    return 'stable';
  }

  /**
   * Calculate pattern reliability
   */
  calculateReliability(patterns) {
    if (patterns.length === 0) return 0;
    
    const avgConfidence = this.calculateAverage(patterns, 'confidence');
    const avgSuccessRate = this.calculateAverage(patterns, 'successRate');
    
    return (avgConfidence + avgSuccessRate) / 2;
  }

  /**
   * Calculate prediction accuracy
   */
  calculatePredictionAccuracy(patterns) {
    if (patterns.length === 0) return 0;
    
    let correctPredictions = 0;
    let totalPredictions = 0;
    
    for (const pattern of patterns) {
      if (pattern.successRate > 0.7) {
        correctPredictions++;
      }
      totalPredictions++;
    }
    
    return totalPredictions > 0 ? correctPredictions / totalPredictions : 0;
  }

  /**
   * Calculate category distribution
   */
  calculateCategoryDistribution(learning) {
    const distribution = {};
    
    for (const item of learning) {
      const category = item.category || 'unknown';
      distribution[category] = (distribution[category] || 0) + 1;
    }
    
    return distribution;
  }

  /**
   * Calculate learning trends
   */
  calculateLearningTrends(learning) {
    const sorted = learning.sort((a, b) => a.timestamp - b.timestamp);
    const recent = sorted.slice(-10);
    
    return {
      averageImpact: this.calculateAverage(recent, 'impact'),
      averageConfidence: this.calculateAverage(recent, 'confidence'),
      trend: this.calculatePerformanceTrend(recent.map(l => ({ ...l, userSatisfaction: l.impact })))
    };
  }

  /**
   * Get current memory size
   */
  getMemorySize() {
    let size = 0;
    for (const [key, value] of this.storage) {
      size += value.length;
    }
    return size;
  }

  /**
   * Cleanup old records
   */
  async cleanupOldRecords() {
    const cutoffTime = Date.now() - this.config.retentionPeriod;
    const toDelete = [];
    
    for (const [key, record] of this.storage) {
      const parsed = this.deserializeRecord(record);
      if (parsed.timestamp < cutoffTime) {
        toDelete.push(key);
      }
    }
    
    for (const key of toDelete) {
      this.storage.delete(key);
      this.lastAccess.delete(key);
    }
    
    await this.rebuildIndexes();
  }

  /**
   * Rebuild all indexes
   */
  async rebuildIndexes() {
    this.indexes.clear();
    
    for (const [key, record] of this.storage) {
      const parsed = this.deserializeRecord(record);
      await this.updateIndexes(parsed);
    }
  }

  /**
   * Start index refresh timer
   */
  startIndexRefresh() {
    setInterval(() => {
      this.rebuildIndexes();
    }, this.config.indexRefreshInterval);
  }

  /**
   * Start cleanup timer
   */
  startCleanup() {
    setInterval(() => {
      this.cleanupOldRecords();
    }, 24 * 60 * 60 * 1000); // Daily cleanup
  }

  /**
   * Load storage from disk
   */
  async loadStorage() {
    // Implementation would load from disk based on storagePath
    // For now, initialize with empty storage
  }

  /**
   * Build initial indexes
   */
  async buildIndexes() {
    await this.rebuildIndexes();
  }

  /**
   * Compression utilities (placeholder implementations)
   */
  compress(data) {
    // Simple compression placeholder
    return `compressed:${data}`;
  }

  decompress(data) {
    // Simple decompression placeholder
    return data.replace('compressed:', '');
  }

  isCompressed(data) {
    return data.startsWith('compressed:');
  }
}

module.exports = MemoryEngine;
