---
name: eval-debate
description: Facilitate architecture debates with systematic persona routing
triggers:
  - "architecture debate"
  - "design decision"
  - "technical tradeoff"
  - "multi-perspective analysis"
---

Facilitate structured debates between systematically selected personas to resolve architecture and design decisions with evidence-based reasoning.

## Persona Selection System

### Automatic Persona Routing
Based on decision context, automatically select appropriate personas:

**Technical Architecture Decisions:**
- `team-staff-engineer` (technical excellence)
- `business-repo-maintainer` (maintainability impact)
- `team-qa-lead` (quality and testing implications)

**Process and Workflow Decisions:**
- `business-engineering-manager` (team productivity)
- `team-staff-engineer` (technical feasibility)
- `business-repo-maintainer` (consistency impact)

**Product Feature Decisions:**
- `business-product-manager` (user value)
- `team-staff-engineer` (technical feasibility)
- `team-qa-lead` (quality implications)

**Starter Pack and Customization Decisions:**
- `execution-starter-pack-advisor` (integration expertise)
- `business-repo-maintainer` (maintainability)
- `team-staff-engineer` (technical fit)

### Manual Persona Specification
Users can specify personas directly:
```
/eval-debate --topic="API design" --personas="team-staff-engineer,business-product-manager,team-qa-lead"
/eval-debate --topic="testing strategy" --personas="team-qa-lead,business-engineering-manager,business-repo-maintainer"
```

## Debate Structure

### Phase 1: Persona Position Presentation
Each selected persona presents their position based on their mission and evidence requirements:

**Format per persona:**
- **Position Statement**: Clear stance based on persona mission
- **Evidence-Based Reasoning**: Reference persona-specific evidence sources
- **Concern Identification**: Highlight risks within persona scope
- **Recommendation**: Specific proposal with rationale

### Phase 2: Cross-Persona Critique
Personas critique other positions using their expertise domains:
- Identify specific flaws or oversights
- Reference missing evidence or concerns
- Point out anti-patterns being violated
- Suggest improvements within their scope

### Phase 3: Evidence-Based Synthesis
Generate strongest approach that survives all critiques:
- Address each valid concern raised
- Explain which tradeoffs are acceptable and why
- Provide implementation guidance
- Include success metrics and validation approach

## Evidence Requirements

Each persona must cite evidence according to their profile:
- **Staff Engineer**: code patterns, performance metrics, architecture documents
- **Repo Maintainer**: contribution guidelines, community feedback, documentation
- **Engineering Manager**: sprint metrics, team velocity, delivery timelines
- **Product Manager**: user feedback, usage analytics, market research
- **QA Lead**: test results, coverage metrics, quality gates
- **Starter Pack Advisor**: repository analysis, dependency patterns, conflicts

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
