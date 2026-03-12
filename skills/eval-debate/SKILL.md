---
name: eval-debate
description: Facilitate architecture debates with advanced persona routing and confidence scoring
triggers:
  - "architecture debate"
  - "design decision"
  - "technical tradeoff"
  - "multi-perspective analysis"
  - "persona debate"
---

Facilitate structured debates between systematically selected personas with advanced routing, confidence scoring, and conflict resolution to resolve architecture and design decisions with evidence-based reasoning.

## Advanced Persona Routing System

### Context-Aware Persona Selection
Based on decision context, artifact type, and repository patterns, automatically select appropriate personas with confidence scoring:

**Technical Architecture Decisions:**
- `team-staff-engineer` (technical excellence) - Confidence: 85-95%
- `business-repo-maintainer` (maintainability impact) - Confidence: 70-85%
- `team-qa-lead` (quality and testing implications) - Confidence: 75-90%

**Process and Workflow Decisions:**
- `business-engineering-manager` (team productivity) - Confidence: 80-90%
- `team-staff-engineer` (technical feasibility) - Confidence: 85-95%
- `business-repo-maintainer` (consistency impact) - Confidence: 65-80%

**Product Feature Decisions:**
- `business-product-manager` (user value) - Confidence: 85-95%
- `team-staff-engineer` (technical feasibility) - Confidence: 80-90%
- `team-qa-lead` (quality implications) - Confidence: 70-85%

**Starter Pack and Customization Decisions:**
- `execution-starter-pack-advisor` (integration expertise) - Confidence: 90-98%
- `business-repo-maintainer` (maintainability) - Confidence: 75-85%
- `team-staff-engineer` (technical fit) - Confidence: 80-90%

### Confidence Scoring Algorithm

**Context Analysis (40% weight):**
- Artifact type matching: 0-15 points
- Repository pattern recognition: 0-15 points
- Topic relevance: 0-10 points

**Persona Expertise Matching (35% weight):**
- Mission alignment: 0-20 points
- Scope coverage: 0-10 points
- Evidence source availability: 0-5 points

**Historical Performance (25% weight):**
- Past debate effectiveness: 0-15 points
- Evidence quality consistency: 0-10 points

**Confidence Thresholds:**
- **High Confidence (80-100%)**: Auto-select persona
- **Medium Confidence (60-79%)**: Include with justification
- **Low Confidence (40-59%)**: Consider alternative or fallback
- **Very Low Confidence (<40%)**: Use neutral evaluator

### Conflict Resolution Mechanisms

**Persona Conflict Detection:**
- Identify overlapping expertise domains
- Detect conflicting mission priorities
- Recognize evidence source competition

**Resolution Strategies:**
1. **Hierarchy Resolution**: Technical > Business > Execution for technical decisions
2. **Context Priority**: Repository-specific context > General principles
3. **Evidence Weight**: Stronger evidence sources prevail
4. **Mission Alignment**: Primary decision driver takes precedence

**Ambiguity Handling:**
- When multiple personas have similar confidence (within 10%), include all
- When confidence is low across all personas, expand to broader perspectives
- When context is unclear, use default persona set: staff-engineer, repo-maintainer, qa-lead

### Manual Persona Specification
Users can specify personas directly with confidence override:
```bash
/eval-debate --topic="API design" --personas="team-staff-engineer,business-product-manager,team-qa-lead"
/eval-debate --topic="testing strategy" --personas="team-qa-lead,business-engineering-manager,business-repo-maintainer"
/eval-debate --topic="database choice" --personas="team-staff-engineer" --confidence-min=85
```

### Fallback Mechanism
If no persona meets minimum confidence threshold (default 70%):
- Use neutral evaluator with general architecture principles
- Provide rationale for low confidence routing
- Suggest manual persona specification for better results

## Enhanced Debate Structure

### Phase 0: Routing Analysis & Setup
1. **Context Parsing**: Analyze topic, artifact type, and repository context
2. **Persona Routing**: Select personas with confidence scores
3. **Conflict Resolution**: Resolve persona selection conflicts
4. **Evidence Preparation**: Gather persona-specific evidence sources

### Phase 1: Persona Position Presentation
Each selected persona presents their position with confidence-weighted analysis:

**Format per persona:**
- **Position Statement**: Clear stance based on persona mission (Confidence: X%)
- **Evidence-Based Reasoning**: Reference persona-specific evidence sources
- **Concern Identification**: Highlight risks within persona scope
- **Recommendation**: Specific proposal with rationale and implementation confidence

### Phase 2: Cross-Persona Critique with Confidence
Personas critique other positions using weighted expertise:
- **Critique Confidence**: Assign confidence to each critique point
- **Evidence Strength**: Rate evidence quality for each claim
- **Anti-Pattern Detection**: Identify violations with severity levels
- **Improvement Suggestions**: Propose alternatives with feasibility scores

### Phase 3: Evidence-Based Synthesis
Generate strongest approach that survives all critiques:
- **Survival Analysis**: Track which arguments survive critiques
- **Tradeoff Quantification**: Explicit scoring of tradeoff decisions
- **Implementation Confidence**: Overall confidence in synthesized solution
- **Risk Assessment**: Residual risks and mitigation strategies

## Advanced Evidence Requirements

### Persona-Specific Evidence Sources
Each persona must cite evidence according to their profile with confidence weighting:

**Staff Engineer (team-staff-engineer):**
- **Primary Sources**: code patterns, performance metrics, architecture documents
- **Confidence Boosters**: benchmarks, case studies, technical standards
- **Required Citations**: >= 3 technical evidence sources

**Repo Maintainer (business-repo-maintainer):**
- **Primary Sources**: contribution guidelines, community feedback, documentation
- **Confidence Boosters**: adoption metrics, maintenance patterns, community health
- **Required Citations**: >= 2 community evidence sources

**Engineering Manager (business-engineering-manager):**
- **Primary Sources**: sprint metrics, team velocity, delivery timelines
- **Confidence Boosters**: team satisfaction, capacity planning, ROI analysis
- **Required Citations**: >= 2 operational evidence sources

**Product Manager (business-product-manager):**
- **Primary Sources**: user feedback, usage analytics, market research
- **Confidence Boosters**: A/B test results, user interviews, competitive analysis
- **Required Citations**: >= 3 user-centric evidence sources

**QA Lead (team-qa-lead):**
- **Primary Sources**: test results, coverage metrics, quality gates
- **Confidence Boosters**: defect rates, user-reported issues, compliance audits
- **Required Citations**: >= 2 quality evidence sources

**Starter Pack Advisor (execution-starter-pack-advisor):**
- **Primary Sources**: repository analysis, dependency patterns, integration conflicts
- **Confidence Boosters**: compatibility matrices, migration guides, best practices
- **Required Citations**: >= 2 integration evidence sources

### Evidence Quality Scoring
- **Strong Evidence (4 points)**: Direct measurements, controlled studies, official documentation
- **Moderate Evidence (3 points)**: Case studies, expert opinions, community consensus
- **Weak Evidence (2 points)**: Anecdotal evidence, theoretical arguments, extrapolation
- **No Evidence (0 points)**: Claims without supporting evidence

## Enhanced Output Format

### Routing Analysis Summary
```
**Topic**: [decision topic]
**Selected Personas**: [persona list with confidence scores]
**Routing Confidence**: [overall routing confidence]
**Conflicts Resolved**: [conflict resolution summary]
**Fallback Used**: [yes/no with rationale]
```

### Phase 1: Position Presentations with Confidence
```
## [Persona Name] Position (Confidence: X%)
**Mission Alignment**: [how position serves persona mission]
**Stance**: [clear position with confidence]
**Evidence**: [cited evidence with quality scores]
**Concerns**: [identified risks with severity levels]
**Recommendation**: [specific proposal with implementation confidence]
```

### Phase 2: Cross-Critique with Weighting
```
## [Persona Name] Critique of [Other Persona] (Critique Confidence: X%)
**Valid Concerns**: [issues with evidence strength scores]
**Missing Evidence**: [gaps with impact assessment]
**Anti-Patterns**: [violations with severity levels]
**Improvements**: [suggestions with feasibility scores]
```

### Phase 3: Confidence-Weighted Synthesis
```
## Evidence-Based Synthesis (Overall Confidence: X%)
**Surviving Approach**: [strongest solution with survival rate]
**Addressed Concerns**: [how each critique was resolved with confidence]
**Tradeoff Analysis**: [quantified tradeoffs with justification scores]
**Implementation Guidance**: [specific steps with confidence levels]
**Risk Assessment**: [residual risks with mitigation strategies]
**Success Metrics**: [measurable outcomes with validation confidence]
```

## Advanced Usage Examples

### High-Confidence Auto-Routing
```bash
/eval-debate --topic="Microservice vs Monolith architecture"
# Auto-selects: staff-engineer (92%), qa-lead (85%), repo-maintainer (78%)
# Routing confidence: 85%

/eval-debate --topic="React vs Vue for new project"
# Auto-selects: product-manager (88%), staff-engineer (82%), qa-lead (75%)
# Routing confidence: 82%
```

### Manual Persona with Confidence Override
```bash
/eval-debate --topic="Database migration strategy" --personas="team-staff-engineer,business-repo-maintainer" --confidence-min=85
# Forces higher confidence threshold for persona selection

/eval-debate --topic="CI/CD pipeline design" --personas="team-qa-lead,business-engineering-manager" --confidence-min=90
# Requires very high confidence for persona inclusion
```

### Context-Enhanced Debates
```bash
/eval-debate --topic="Testing strategy" --context="startup-environment" --confidence-min=70
/eval-debate --topic="Code review process" --context="enterprise-team" --confidence-min=80
/eval-debate --topic="Frontend framework choice" --context="e-commerce-platform" --confidence-min=85
```

## Quality Standards & Validation

### Routing Quality Metrics
- **Confidence Accuracy**: Routing confidence matches actual debate effectiveness
- **Persona Appropriateness**: Selected personas contribute meaningfully to debate
- **Conflict Resolution**: Resolved conflicts lead to better synthesis
- **Fallback Appropriateness**: Fallback used only when genuinely necessary

### Debate Quality Standards
- **Evidence Citation Required**: All persona claims must cite appropriate evidence
- **Confidence Scoring**: All positions and critiques include confidence scores
- **Mission Alignment**: Each position must align with persona's defined mission
- **Synthesis Strength**: Final recommendation must survive all valid critiques

### Anti-Pattern Prevention
The enhanced system prevents:
- **Low Confidence Routing**: Forcing persona selection with insufficient confidence
- **Evidence-Free Claims**: Assertions without persona-specific evidence citations
- **Unresolved Conflicts**: Persona conflicts left unaddressed in synthesis
- **Ignoring Confidence**: Disregarding confidence scores in decision making
- **Mission Violation**: Personas operating outside their defined scope

This advanced debate system ensures architecture decisions benefit from sophisticated persona routing, confidence-weighted analysis, and systematic conflict resolution while maintaining evidence-based rigor and practical applicability.

## Output Format

### Debate Summary
```
**Topic**: [decision topic]
**Personas**: [selected personas]
**Evidence Sources**: [cited evidence types]
```

### Phase 1: Position Presentations
```
## [Persona Name] Position
**Mission**: [persona mission]
**Stance**: [clear position]
**Evidence**: [specific evidence citations]
**Concerns**: [identified risks]
**Recommendation**: [specific proposal]
```

### Phase 2: Cross-Critique
```
## [Persona Name] Critique of [Other Persona]
**Valid Concerns**: [specific issues identified]
**Missing Evidence**: [gaps in reasoning]
**Anti-Patterns**: [violations detected]
**Improvements**: [constructive suggestions]
```

### Phase 3: Synthesis
```
## Evidence-Based Synthesis
**Surviving Approach**: [strongest solution]
**Addressed Concerns**: [how each critique was resolved]
**Tradeoff Justification**: [why certain tradeoffs are acceptable]
**Implementation Guidance**: [specific next steps]
**Success Metrics**: [how to validate the decision]
**Confidence Score**: [0-100 based on evidence strength]
```

## Usage Examples

### Automatic Persona Selection
```bash
/eval-debate --topic="Should we adopt TypeScript?"
# Automatically selects: staff-engineer, repo-maintainer, qa-lead

/eval-debate --topic="How to structure our CI/CD pipeline?"
# Automatically selects: engineering-manager, staff-engineer, repo-maintainer
```

### Manual Persona Selection
```bash
/eval-debate --topic="Microservices vs monolith" --personas="team-staff-engineer,business-engineering-manager,business-repo-maintainer"

/eval-debate --topic="Testing strategy for new feature" --personas="team-qa-lead,business-product-manager,team-staff-engineer"
```

### Context-Specific Debates
```bash
/eval-debate --topic="Starter pack selection" --context="frontend-react"
# Automatically selects: starter-pack-advisor, repo-maintainer, staff-engineer

/eval-debate --topic="Code review process" --context="team-size-5"
# Automatically selects: repo-maintainer, engineering-manager, staff-engineer
```

## Quality Standards

- **Evidence Citation Required**: Every claim must reference persona-specific evidence
- **Mission Alignment**: Each position must align with persona's defined mission
- **Scope Compliance**: Arguments must stay within persona's defined scope
- **Constructive Critique**: Critiques must be specific and actionable
- **Synthesis Strength**: Final recommendation must survive all valid critiques

## Anti-Pattern Prevention

The system prevents:
- **Persona Mission Violation**: Positions outside persona scope
- **Evidence-Free Claims**: Assertions without supporting citations
- **Vague Critiques**: Generalized attacks without specific concerns
- **Compromise Solutions**: Weak compromises that don't address core concerns
- **Implementation Gaps**: Recommendations without clear next steps

This structured debate system ensures architecture decisions are thoroughly examined from multiple expert perspectives with evidence-based reasoning, resulting in robust, well-vetted solutions.
