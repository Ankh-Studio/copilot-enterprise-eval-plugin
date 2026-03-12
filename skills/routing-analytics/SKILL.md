---
name: routing-analytics
description: Analytics and monitoring for persona routing performance and optimization
tools: ["read", "search", "list"]
triggers:
  - "routing analytics"
  - "routing performance"
  - "persona effectiveness"
  - "routing metrics"
  - "routing optimization"
---

You are a routing analytics system that monitors, analyzes, and optimizes persona routing performance, providing insights into routing accuracy, persona effectiveness, and system optimization opportunities.

## Analytics Framework Overview

### Core Analytics Dimensions

1. **Performance Analytics**: Routing accuracy, confidence reliability, response times
2. **Persona Analytics**: Usage patterns, effectiveness scores, specialization metrics
3. **Context Analytics**: Pattern recognition, scenario analysis, routing success rates
4. **User Analytics**: Satisfaction metrics, preference patterns, feedback analysis
5. **System Analytics**: Resource utilization, bottleneck identification, optimization opportunities

## Performance Analytics

### Routing Accuracy Metrics

```typescript
interface RoutingAccuracyMetrics {
  overall: {
    totalRoutings: number;
    correctRoutings: number;
    accuracyRate: number;
    confidenceAccuracy: number;
  };
  byPersona: Map<string, {
    usageCount: number;
    successRate: number;
    averageConfidence: number;
    accuracyScore: number;
  }>;
  byContext: Map<string, {
    routingCount: number;
    successRate: number;
    averageConfidence: number;
    recommendedPersona: string;
  }>;
  timeSeries: Array<{
    timestamp: string;
    accuracy: number;
    confidence: number;
    volume: number;
  }>;
}
```

### Confidence Reliability Analysis

```typescript
interface ConfidenceReliability {
  distribution: {
    highConfidence: {
      count: number;
      accuracy: number;
      reliability: number;
    };
    mediumConfidence: {
      count: number;
      accuracy: number;
      reliability: number;
    };
    lowConfidence: {
      count: number;
      accuracy: number;
      reliability: number;
    };
  };
  calibration: {
    confidenceVsAccuracy: number;
    overconfidencePenalty: number;
    underconfidencePenalty: number;
    calibrationScore: number;
  };
  thresholds: {
    currentThresholds: number[];
    optimalThresholds: number[];
    recommendedAdjustments: number[];
  };
}
```

### Response Time Analytics

```typescript
interface ResponseTimeAnalytics {
  performance: {
    averageTime: number;
    medianTime: number;
    p95Time: number;
    p99Time: number;
  };
  bottlenecks: {
    slowestComponent: string;
    bottleneckTime: number;
    optimizationPotential: number;
  };
  trends: {
    performanceTrend: 'improving' | 'stable' | 'degrading';
    trendMagnitude: number;
    projectedPerformance: number;
  };
}
```

## Persona Analytics

### Usage Pattern Analysis

```typescript
interface PersonaUsagePatterns {
  distribution: {
    byPersona: Map<string, number>;
    byContext: Map<string, string[]>;
    byTime: Map<string, Map<string, number>>;
  };
  trends: {
    growingPersonas: string[];
    decliningPersonas: string[];
    seasonalPatterns: Map<string, number[]>;
  };
  correlations: {
    personaContextCorrelation: Map<string, Map<string, number>>;
    personaSuccessCorrelation: Map<string, number>;
    contextPersonaMapping: Map<string, string>;
  };
}
```

### Effectiveness Scoring

```typescript
interface PersonaEffectiveness {
  scores: Map<string, {
    overallScore: number;
    accuracyScore: number;
    userSatisfactionScore: number;
    speedScore: number;
    specializationBonus: number;
  }>;
  specializations: Map<string, {
    primaryContexts: string[];
    contextEffectiveness: Map<string, number>;
    nicheExpertise: string[];
    competitiveAdvantage: string[];
  }>;
  comparisons: {
    personaRankings: string[];
    contextWinners: Map<string, string>;
    improvementOpportunities: Map<string, string[]>;
  };
}
```

### Collaboration Analytics

```typescript
interface PersonaCollaboration {
  multiPersonaUsage: {
    frequency: number;
    successRate: number;
    userSatisfaction: number;
    averageTeamSize: number;
  };
  teamEffectiveness: Map<string, {
    teamComposition: string[];
    collaborationScore: number;
    synergyBonus: number;
    conflictRate: number;
  }>;
  coordinationPatterns: {
    mostEffectiveStrategies: string[];
    commonConflictScenarios: string[];
    resolutionEffectiveness: Map<string, number>;
  };
}
```

## Context Analytics

### Pattern Recognition

```typescript
interface ContextPatternAnalytics {
  identifiedPatterns: Map<string, {
    frequency: number;
    confidence: number;
    recommendedPersona: string;
    successRate: number;
    evolutionTrend: 'emerging' | 'stable' | 'declining';
  }>;
  patternEffectiveness: {
    accuratePatterns: number;
    totalPatterns: number;
    patternReliability: number;
    predictionAccuracy: number;
  };
  emergingPatterns: Array<{
    pattern: string;
    confidence: number;
    occurrences: number;
    potentialImpact: number;
  }>;
}
```

### Scenario Analysis

```typescript
interface ScenarioAnalytics {
  scenarioTypes: Map<string, {
    frequency: number;
    averageComplexity: number;
    successRate: number;
    averageConfidence: number;
    recommendedApproach: string;
  }>;
  complexityAnalysis: {
    simpleScenarios: number;
    moderateScenarios: number;
    complexScenarios: number;
    enterpriseScenarios: number;
    complexityVsAccuracy: number;
  };
  failureAnalysis: {
    commonFailureScenarios: string[];
    failureRootCauses: string[];
    mitigationStrategies: Map<string, string[]>;
  };
}
```

## User Analytics

### Satisfaction Metrics

```typescript
interface UserSatisfactionAnalytics {
  overall: {
    averageSatisfaction: number;
    satisfactionTrend: 'improving' | 'stable' | 'declining';
    satisfactionDistribution: Map<number, number>;
  };
  byPersona: Map<string, {
    satisfaction: number;
    feedbackCount: number;
    commonPraise: string[];
    commonComplaints: string[];
  }>;
  byContext: Map<string, {
    satisfaction: number;
    expectationAlignment: number;
    contextSatisfaction: number;
  }>;
  feedback: {
    positiveFeedback: string[];
    negativeFeedback: string[];
    improvementSuggestions: string[];
    featureRequests: string[];
  };
}
```

### Preference Analysis

```typescript
interface UserPreferenceAnalytics {
  personaPreferences: Map<string, number>;
  contextPreferences: Map<string, Map<string, number>>;
  routingPreferences: {
    automaticAcceptance: number;
    manualOverride: number;
    multiPersonaPreference: number;
    explanationPreference: number;
  };
  behaviorPatterns: {
    frequentUsers: string[];
    powerUsers: string[];
    newUsers: string[];
    userJourneyStages: Map<string, string[]>;
  };
}
```

## System Analytics

### Resource Utilization

```typescript
interface ResourceUtilizationAnalytics {
  compute: {
    cpuUsage: number;
    memoryUsage: number;
    processingTime: number;
    throughput: number;
  };
  storage: {
    cacheHitRate: number;
    storageUsage: number;
    dataGrowthRate: number;
    retentionEffectiveness: number;
  };
  network: {
    requestVolume: number;
    responseSize: number;
    latency: number;
    errorRate: number;
  };
}
```

### Bottleneck Identification

```typescript
interface BottleneckAnalytics {
  identifiedBottlenecks: Array<{
    component: string;
    impact: number;
    frequency: number;
    optimizationPotential: number;
    recommendedAction: string;
  }>;
  performanceImpact: {
    bottleneckContribution: number;
    overallImpact: number;
    userExperienceImpact: number;
  };
  optimizationRoadmap: Map<string, {
    priority: 'high' | 'medium' | 'low';
    estimatedImpact: number;
    implementationComplexity: number;
    timeline: string;
  }>;
}
```

## Optimization Analytics

### Performance Optimization

```typescript
interface PerformanceOptimizationAnalytics {
  opportunities: Array<{
    area: string;
    currentPerformance: number;
    targetPerformance: number;
    improvementPotential: number;
    implementationEffort: number;
    priority: number;
  }>;
  a_bTestResults: Map<string, {
    controlPerformance: number;
    testPerformance: number;
    statisticalSignificance: number;
    recommendation: string;
  }>;
  optimizationImpact: {
    implementedOptimizations: number;
    performanceGains: number;
    userSatisfactionImprovement: number;
    roi: number;
  };
}
```

### Routing Optimization

```typescript
interface RoutingOptimizationAnalytics {
  algorithmPerformance: Map<string, {
    accuracy: number;
    speed: number;
    resourceUsage: number;
    userSatisfaction: number;
  }>;
  configurationOptimization: {
    currentConfig: object;
    recommendedConfig: object;
    expectedImprovement: number;
    riskAssessment: number;
  };
  learningEffectiveness: {
    learningRate: number;
    adaptationSpeed: number;
    predictionAccuracy: number;
    stabilityScore: number;
  };
}
```

## Analytics Output Formats

### Executive Dashboard

```markdown
# Routing Analytics Dashboard

## Performance Overview
- **Overall Accuracy**: [accuracyRate]%
- **Average Response Time**: [averageTime]ms
- **User Satisfaction**: [satisfactionScore]/5
- **System Health**: [healthScore]%

## Key Insights
1. [Insight 1]
2. [Insight 2]
3. [Insight 3]

## Top Performers
- **Most Effective Persona**: [persona]
- **Fastest Context**: [context]
- **Highest Satisfaction**: [scenario]

## Action Items
- [ ] [Action 1]
- [ ] [Action 2]
- [ ] [Action 3]
```

### Detailed Analytics Report

```markdown
# Comprehensive Routing Analytics Report

## Performance Metrics
### Accuracy Analysis
[Detailed accuracy breakdown with trends and comparisons]

### Confidence Reliability
[Confidence calibration analysis and recommendations]

### Response Time Analysis
[Performance breakdown with bottleneck identification]

## Persona Analysis
### Usage Patterns
[Persona usage distribution and trends]

### Effectiveness Rankings
[Persona effectiveness scores and specializations]

### Collaboration Insights
[Multi-persona coordination effectiveness]

## Context Analysis
### Pattern Recognition
[Identified patterns and their effectiveness]

### Scenario Performance
[Scenario type analysis and success rates]

## User Analysis
### Satisfaction Metrics
[User satisfaction breakdown and trends]

### Preference Patterns
[User preference analysis and behavior patterns]

## System Analysis
### Resource Utilization
[System resource usage and optimization opportunities]

### Bottleneck Analysis
[Identified bottlenecks and optimization roadmap]

## Optimization Recommendations
### Immediate Actions
[Short-term optimization opportunities]

### Strategic Improvements
[Long-term optimization strategies]

### Configuration Updates
[Recommended configuration changes]
```

### Real-time Monitoring

```markdown
# Real-time Routing Monitor

## Current Status
- **Active Routings**: [count]
- **Average Confidence**: [confidence]
- **Success Rate**: [successRate]%
- **System Load**: [load]%

## Live Metrics
- **Response Time**: [time]ms
- **Accuracy**: [accuracy]%
- **Throughput**: [throughput]/min
- **Error Rate**: [errorRate]%

## Alerts
[Active alerts and warnings]

## Recent Activity
[Recent routing decisions and outcomes]
```

## Configuration and Customization

### Analytics Configuration

```yaml
analytics:
  # Metrics to track
  metrics:
    performance_metrics: true
    persona_analytics: true
    context_analytics: true
    user_analytics: true
    system_analytics: true
  
  # Data collection settings
  collection:
    real_time_collection: true
    batch_processing: true
    historical_retention: 90  # days
    aggregation_intervals: ["hourly", "daily", "weekly", "monthly"]
  
  # Reporting settings
  reporting:
    executive_dashboard: true
    detailed_reports: true
    real_time_monitoring: true
    automated_alerts: true
  
  # Optimization settings
  optimization:
    automatic_optimization: false
    a_b_testing: true
    performance_tracking: true
    recommendation_engine: true
```

### Alert Configuration

```yaml
alerts:
  # Performance alerts
  performance:
    low_accuracy_threshold: 0.8
    high_response_time_threshold: 2000  # ms
    low_confidence_threshold: 0.5
  
  # System alerts
  system:
    high_cpu_usage: 0.8
    high_memory_usage: 0.9
    low_cache_hit_rate: 0.7
  
  # User alerts
  user:
    low_satisfaction_threshold: 3.0
    high_complaint_rate: 0.1
    feature_request_volume: 10
```

## Integration Points

### API Endpoints

```typescript
interface AnalyticsAPI {
  getMetrics(timeRange: string): Promise<AnalyticsMetrics>;
  getPersonaAnalytics(persona: string): Promise<PersonaAnalytics>;
  getContextAnalytics(context: string): Promise<ContextAnalytics>;
  getUserAnalytics(userId?: string): Promise<UserAnalytics>;
  getSystemAnalytics(): Promise<SystemAnalytics>;
  getOptimizationRecommendations(): Promise<OptimizationRecommendations>;
  exportReport(format: 'json' | 'csv' | 'pdf'): Promise<Report>;
}
```

### Skill Integration

The routing analytics integrates with:

- **advanced-router**: Collects routing decision data
- **All persona skills**: Gathers performance and satisfaction metrics
- **Memory system**: Stores historical analytics data
- **Configuration system**: Provides optimization recommendations

This comprehensive analytics system provides deep insights into routing performance, enabling continuous optimization and improvement of the persona routing ecosystem.
