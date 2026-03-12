# Persona Evaluation Rubric

## Purpose

Evaluate persona effectiveness, accuracy, and integration quality to ensure personas provide measurable value without introducing hallucination or drift.

## Evaluation Criteria

### Persona Usefulness (40%)

**Framing Quality (15%)**
- **Score 4**: Excellent discussion framing, identifies all relevant stakeholder concerns
- **Score 3**: Good framing with most stakeholder perspectives represented
- **Score 2**: Basic framing, misses some important perspectives
- **Score 1**: Poor framing, limited stakeholder consideration
- **Score 0**: No meaningful framing contribution

**Spec Improvement (15%)**
- **Score 4**: Significantly improves specification completeness and clarity
- **Score 3**: Good improvements to missing elements and ambiguities
- **Score 2**: Minor improvements, some gaps remain
- **Score 1**: Minimal impact on spec quality
- **Score 0**: No contribution to spec improvement

**Evaluation Accuracy (10%)**
- **Score 4**: Highly accurate assessments with strong evidence grounding
- **Score 3**: Good accuracy with minor evidence gaps
- **Score 2**: Moderate accuracy, some unsupported claims
- **Score 1**: Poor accuracy, frequent unsupported assertions
- **Score 0**: Inaccurate or completely unsupported assessments

### Hallucination Containment (30%)

**Evidence Grounding (15%)**
- **Score 4**: All claims backed by specific, verifiable evidence
- **Score 3**: Most claims well-supported with minor evidence gaps
- **Score 2**: Some claims unsupported or based on weak evidence
- **Score 1**: Frequent unsupported claims or assumptions
- **Score 0**: Claims without evidence or based on fabrication

**Confidence Calibration (10%)**
- **Score 4**: Confidence scores accurately reflect evidence strength
- **Score 3**: Good calibration with minor over/under confidence
- **Score 2**: Moderate calibration issues, confidence misaligned
- **Score 1**: Poor calibration, confidence consistently inaccurate
- **Score 0**: No confidence calibration or completely misaligned

**Scope Compliance (5%)**
- **Score 4**: Strictly adheres to defined persona scope and mission
- **Score 3**: Good scope compliance with minor deviations
- **Score 2**: Some scope violations or mission drift
- **Score 1**: Frequent scope violations
- **Score 0**: No adherence to defined scope or mission

### Memory Quality (20%)

**Freshness Score (10%)**
- **Score 4**: Current, relevant information with proper timestamping
- **Score 3**: Recent information with minor staleness
- **Score 2**: Some outdated information affecting relevance
- **Score 1**: Significant stale information
- **Score 0**: Completely outdated or irrelevant information

**Consistency Score (10%)**
- **Score 4**: No internal contradictions or conflicting evidence
- **Score 3**: Minor inconsistencies that don't affect conclusions
- **Score 2**: Some contradictions that may impact reliability
- **Score 1**: Frequent contradictions affecting trustworthiness
- **Score 0**: Major contradictions or completely inconsistent

### Small-Model Optimization (10%)

**Context Efficiency (5%)**
- **Score 4**: Excellent performance with minimal context (≤1500 tokens)
- **Score 3**: Good performance with moderate context (≤2000 tokens)
- **Score 2**: Acceptable performance with high context (≤3000 tokens)
- **Score 1**: Poor performance, requires excessive context
- **Score 0**: Fails on small models or requires unlimited context

**Structured Output (5%)**
- **Score 4**: Consistently produces structured, parseable output
- **Score 3**: Good structure with minor formatting issues
- **Score 2**: Inconsistent structure, some parsing failures
- **Score 1**: Poor structure, frequent parsing issues
- **Score 0**: Unstructured output that cannot be parsed

## Evaluation Process

### Test Case Categories

**Should-Trigger Cases (3-5 per persona)**
- Clear persona-appropriate context and triggers
- Expected to activate correct persona routing
- Should produce persona-consistent output

**Should-Not-Trigger Cases (3-5 per persona)**
- Context outside persona scope or mission
- Triggers that should route to different personas
- Should not activate the target persona

**Ambiguous Edge Cases (2-3 per persona)**
- Overlapping contexts between personas
- Unclear trigger patterns
- Should demonstrate routing confidence scoring

### Memory Evaluation Tests

**Stale Memory Tests**
- Inject outdated information and verify detection
- Test timestamp-based invalidation
- Verify freshness scoring accuracy

**Contradiction Tests**
- Introduce conflicting evidence statements
- Verify conflict detection and resolution
- Test confidence-weighted reconciliation

**Evidence Validation Tests**
- Submit claims without supporting evidence
- Test evidence source verification
- Verify confidence threshold enforcement

## Quality Gates

### Release Ready (90-100)
- All persona triggers >90% accuracy
- Hallucination rate <5%
- Memory consistency >95%
- Small-model performance within 10% of full models
- Comprehensive test coverage with all test cases passing

### Pilot Ready (70-89)
- Core persona functionality working
- Minor trigger conflicts acceptable (<15%)
- Memory contamination controlled (<10%)
- Small-model optimization partial (<20% degradation)
- Most test cases passing (>80%)

### Development Ready (50-69)
- Basic persona switching works
- Some hallucination present (<20%)
- Memory system functional but fragile (<25% issues)
- Small-model performance issues (<30% degradation)
- Basic test coverage (>60%)

### Blocked (0-49)
- Persona triggers unreliable (>30% errors)
- High hallucination rate (>25%)
- Memory corruption issues (>30%)
- Small-model failure (>40% degradation)
- Insufficient test coverage (<50%)

## Success Metrics

### Quantitative Metrics
- **Trigger Accuracy**: Percentage of correct persona routing
- **Evidence Grounding**: Percentage of claims with evidence support
- **Hallucination Rate**: Percentage of unsupported or fabricated claims
- **Memory Consistency**: Percentage of contradiction-free memory states
- **Small-Model Performance**: Performance degradation compared to full models

### Qualitative Metrics
- **Discussion Framing**: Quality of stakeholder perspective identification
- **Spec Improvement**: Impact on specification completeness and clarity
- **Actionability**: Quality and implementability of recommendations
- **User Trust**: Confidence in persona outputs and reliability

## Evaluation Frequency

### Continuous Monitoring
- Real-time trigger accuracy tracking
- Evidence grounding verification
- Memory consistency checks
- Performance impact monitoring

### Periodic Assessment
- Weekly: Trigger accuracy and performance metrics
- Monthly: Comprehensive evaluation with all test cases
- Quarterly: Persona effectiveness and user satisfaction assessment
- Annually: Complete persona system review and optimization

This rubric ensures personas provide measurable value while maintaining accuracy, reliability, and performance across different model sizes and use cases.
