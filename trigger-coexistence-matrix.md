# Trigger/Coexistence Matrix

| Skill | Primary Use Case | Should Trigger On | Must Not Trigger On | Overlap/Conflict Risk | Recommendation |
|-------|------------------|-------------------|---------------------|----------------------|----------------|
| evaluate-artifact | General artifact evaluation | Any artifact file path | Specific evaluator requests | HIGH - overlaps with all specialized evaluators | **CONSOLIDATE** - Make this the primary evaluator, add type flags |
| evaluate-prompt | Prompt-specific evaluation | `.prompt.md` files, "evaluate prompt" | Non-prompt artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-skill | Skill-specific evaluation | `SKILL.md` files, "evaluate skill" | Non-skill artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-instruction | Instruction evaluation | Instruction files, "evaluate instruction" | Non-instruction artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-template | Template evaluation | Template files, "evaluate template" | Non-template artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-workflow | Workflow evaluation | Workflow files, "evaluate workflow" | Non-workflow artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-agent | Agent evaluation | Agent files, "evaluate agent" | Non-agent artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-context | Context evaluation | Context files, "evaluate context" | Non-context artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-validation | Validation evaluation | Validation files, "evaluate validation" | Non-validation artifacts | LOW - specific domain | Keep as specialized alias |
| evaluate-integration | Integration evaluation | Integration files, "evaluate integration" | Non-integration artifacts | LOW - specific domain | Keep as specialized alias |
| batch-evaluation | Multi-artifact evaluation | Multiple files, directories, "batch" | Single artifact requests | MEDIUM - may conflict with evaluate-artifact | **RENAME** to `eval-batch` |
| quality-gates | Quality enforcement | "quality gate", "gate check", policy enforcement | Simple evaluation requests | LOW - distinct purpose | **RENAME** to `eval-quality-gates` |
| performance-optimizer | Performance improvement | "optimize", "performance", caching, parallel | Evaluation requests | LOW - distinct purpose | **RENAME** to `eval-performance` |
| improve-artifact | Artifact improvement | "improve", "enhance", "fix" | Pure evaluation requests | LOW - distinct purpose | **RENAME** to `eval-improve` |
| iterative-improvement | Iterative enhancement | "iterative", "multiple rounds", "refine" | Single improvement requests | MEDIUM - overlaps with improve-artifact | **CONSOLIDATE** into improve-artifact |
| architecture-debate | Design decisions | "debate", "architecture", "design decision" | Evaluation/improvement requests | LOW - distinct purpose | **RENAME** to `eval-debate` |
| validate-rubrics | Rubric validation | "validate rubric", "check rubric" | Artifact evaluation | LOW - distinct purpose | **RENAME** to `eval-validate-rubrics` |

## Key Issues Identified

1. **HIGH RISK**: `evaluate-artifact` overlaps with all specialized evaluators
2. **MEDIUM RISK**: Generic names may collide with user project skills
3. **CONSOLIDATION OPPORTUNITY**: `iterative-improvement` could be merged into `improve-artifact`

## Naming Strategy

- Prefix evaluation skills with `eval-` to reduce collision risk
- Keep specialized evaluators as aliases for discoverability
- Consolidate overlapping functionality where clear boundaries exist
