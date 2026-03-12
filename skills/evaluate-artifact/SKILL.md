---
name: evaluate-artifact
description: Evaluate any Copilot artifact with persona-aware routing and verification
triggers:
  - "evaluate artifact"
  - "assess prompt"
  - "review skill"
  - "check instruction"
  - "validate workflow"
---

Evaluate any Copilot artifact against its structured rubric with persona-aware routing and Chain-of-Verification.

## Persona-Aware Evaluation System

### Automatic Persona Routing
Based on artifact type and context, automatically select appropriate evaluation persona:

**Technical Artifacts (skills, workflows, agents):**
- `team-staff-engineer` - Technical excellence and architecture
- `team-qa-lead` - Quality and testing implications
- `business-repo-maintainer` - Maintainability and consistency

**User-Facing Artifacts (prompts, instructions):**
- `business-product-manager` - User value and clarity
- `team-staff-engineer` - Technical feasibility
- `business-repo-maintainer` - Documentation quality

**Integration Artifacts (validation, context providers):**
- `team-staff-engineer` - Technical integration patterns
- `team-qa-lead` - Testing and validation coverage
- `business-repo-maintainer` - Consistency across repository

### Manual Persona Specification
Users can specify evaluation persona directly:
```
/evaluate-artifact .github/prompts/code-review.prompt.md --persona="team-staff-engineer"
/evaluate-artifact .github/skills/analyze-data/SKILL.md --persona="business-product-manager"
```

### Fallback Mechanism
If confidence < 70% for persona routing, use neutral evaluator with standard rubric.

## Enhanced Evaluation Process

### Phase 1: Context Analysis & Persona Selection
1. **Artifact Detection**: Identify artifact type and complexity
2. **Context Analysis**: Analyze repository context and usage patterns
3. **Persona Routing**: Select appropriate persona with confidence score
4. **Evidence Gathering**: Collect persona-specific evidence sources

### Phase 2: Persona-Driven Evaluation
1. **Mission-Aligned Analysis**: Apply persona's mission and scope
2. **Evidence-Based Assessment**: Use persona-approved evidence sources
3. **Decision Criteria**: Apply persona-specific decision factors
4. **Anti-Pattern Detection**: Identify persona-defined anti-patterns

### Phase 3: Verification & Synthesis
1. **Self-Critique**: 3 potential issues from persona perspective
2. **Evidence Verification**: Validate all evidence citations
3. **Scope Compliance**: Ensure evaluation stays within persona bounds
4. **Confidence Scoring**: Assign confidence to evaluation results

## Persona-Specific Evaluation Focus

### Staff Engineer (team-staff-engineer)
- **Technical Excellence**: Code quality, architecture patterns, performance
- **Evidence Sources**: Code analysis, performance metrics, architecture docs
- **Decision Criteria**: Maintainability, scalability, technical debt
- **Anti-Patterns**: Over-engineering, premature optimization, tech debt

### QA Lead (team-qa-lead)
- **Quality Assurance**: Test coverage, validation, error handling
- **Evidence Sources**: Test results, coverage reports, quality metrics
- **Decision Criteria**: Reliability, edge case handling, user experience
- **Anti-Patterns**: Insufficient testing, poor error handling, quality gaps

### Repo Maintainer (business-repo-maintainer)
- **Repository Health**: Consistency, documentation, contribution guidelines
- **Evidence Sources**: Contribution patterns, documentation quality, community feedback
- **Decision Criteria**: Consistency, maintainability, community standards
- **Anti-Patterns**: Inconsistent patterns, poor documentation, contribution barriers

### Product Manager (business-product-manager)
- **User Value**: Clarity, effectiveness, user experience
- **Evidence Sources**: User feedback, usage patterns, business requirements
- **Decision Criteria**: User impact, clarity, business value
- **Anti-Patterns**: Unclear instructions, poor user experience, misaligned goals

## Output Format

### Persona-Evaluated Summary
```
**Artifact**: [artifact-path]
**Persona**: [selected-persona] (Confidence: X%)
**Evidence Sources**: [persona-specific evidence]
**Overall Score**: X.X/4.0
```

### Detailed Evaluation
```
## [Persona Name] Evaluation
**Mission Alignment**: [how evaluation serves persona mission]
**Key Findings**: [persona-specific insights]
**Evidence-Based Analysis**: [cited evidence and reasoning]
**Concerns**: [persona-specific risks identified]
**Recommendations**: [actionable improvements within persona scope]
```

### Verification Results
```
## Self-Critique Verification
**Issue 1**: [potential issue] - [Evidence: support/refutation]
**Issue 2**: [potential issue] - [Evidence: support/refutation]  
**Issue 3**: [potential issue] - [Evidence: support/refutation]
**Revised Assessment**: [incorporating verified corrections]
**Confidence Score**: [0-100 based on evidence strength]
```

## Usage Examples

### Automatic Persona Selection
```bash
/evaluate-artifact .github/skills/data-analysis/SKILL.md
# Auto-selects: staff-engineer (confidence: 85%)

/evaluate-artifact .github/prompts/user-onboarding.prompt.md
# Auto-selects: product-manager (confidence: 92%)

/evaluate-artifact .github/workflows/ci-cd/WORKFLOW.md
# Auto-selects: staff-engineer (confidence: 78%)
```

### Manual Persona Selection
```bash
/evaluate-artifact .github/skills/api-integration/SKILL.md --persona="team-qa-lead"
/evaluate-artifact .github/prompts/code-review.prompt.md --persona="business-repo-maintainer"
```

### Context-Aware Evaluation
```bash
/evaluate-artifact .github/skills/feature/SKILL.md --context="production-critical"
/evaluate-artifact .github/prompts/guide.prompt.md --context="new-user-onboarding"
```

## Quality Standards

- **Persona Mission Compliance**: Evaluation must align with selected persona's mission
- **Evidence Citation Required**: All claims must reference persona-specific evidence
- **Scope Adherence**: Stay within persona's defined scope and expertise
- **Confidence Scoring**: Provide accurate confidence based on evidence strength
- **Fallback Protocol**: Use neutral evaluator when persona confidence is low

## Anti-Pattern Prevention

The system prevents:
- **Persona Mission Violation**: Evaluations outside persona scope
- **Evidence-Free Claims**: Assertions without persona-specific citations
- **Scope Creep**: Evaluations beyond persona expertise
- **Low Confidence Routing**: Forcing persona selection with insufficient confidence
- **Conflicting Recommendations**: Suggestions that violate persona principles

This persona-aware evaluation system ensures artifacts are assessed from the most relevant expert perspective while maintaining evidence-based rigor and consistent quality standards.
