---
name: pack-context-analyzer
description:
  Specialized evaluation of pack context and instructions for team enablement and pack ecosystem
  alignment
---

Evaluate pack-specific context, instructions, and team enablement content against comprehensive
criteria for pack ecosystem effectiveness.

## Process

1. **Identify context type** from pack structure:
   - **Pack Instructions** (`.github/copilot-instructions.md`)
   - **Team Context** (team-specific configurations and constraints)
   - **Domain Context** (technical stack and project requirements)
   - **Role Context** (team roles and responsibilities)

2. **Apply pack context evaluation rubric** with these criteria:
   - **Team Enablement** (Weight: 0.25): Support for team workflows and collaboration
   - **Pack Integration** (Weight: 0.25): Alignment with pack schema and constraints
   - **Context Quality** (Weight: 0.20): Accuracy, relevance, and completeness
   - **Accessibility** (Weight: 0.15): Clear formatting and efficient retrieval
   - **Maintainability** (Weight: 0.15): Easy updates and organization

3. **Analyze pack-specific factors**:
   - Team context integration with pack constraints
   - Role-based context for different team members
   - Domain-specific knowledge for technical stacks
   - Handoff and collaboration support

4. **Score each category** from 0-4:
   - **Score 4**: Exceeds pack ecosystem standards
   - **Score 3**: Meets pack quality expectations
   - **Score 2**: Needs improvement for pack alignment
   - **Score 1**: Significant pack integration issues
   - **Score 0**: Not compatible with pack ecosystem

5. **Generate pack-specific recommendations**:
   - Enhancement suggestions for team enablement
   - Examples of successful pack context patterns
   - Guidance on context reusability across teams
   - Best practices for pack ecosystem alignment

## Usage

Provide the path to the pack context you want evaluated:

- `packs/{pack-name}/.github/copilot-instructions.md`
- `packs/{pack-name}/.github/instructions/{instruction-name}.md`
- Team context files and role definitions
- Domain-specific configuration files

The skill will evaluate context for team enablement effectiveness, pack integration, and reusability
across different team structures and technical domains.

## Examples

### Team Context Analysis

Analyzes team-specific context for:

- Role-based instructions and responsibilities
- Team collaboration patterns
- Handoff procedures and knowledge transfer
- Integration with pack constraints

### Domain Context Evaluation

Evaluates technical domain context for:

- Stack-specific knowledge and patterns
- Project requirements and constraints
- Best practices for technical domains
- Integration with development workflows

### Role Context Assessment

Assesses role-specific context for:

- Developer onboarding and guidance
- Designer collaboration patterns
- Product manager workflows
- Cross-functional team coordination
