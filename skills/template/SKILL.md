---
name: pack-template-evaluator
description:
  Specialized evaluation of pack templates and prompts for quality, reusability, and pack ecosystem
  alignment
---

Evaluate pack-specific templates and prompts against comprehensive criteria for pack ecosystem
quality and developer experience.

## Process

1. **Identify template type** from pack structure:
   - **Component Templates** (`.prompt.md` files)
   - **Instruction Templates** (`.github/instructions/`)
   - **Workflow Templates** (`.github/workflows/`)
   - **Configuration Templates** (pack.yaml, etc.)

2. **Apply pack template evaluation rubric** with these criteria:
   - **Pack Integration** (Weight: 0.25): Alignment with pack schema and ecosystem
   - **Developer Experience** (Weight: 0.25): Clear guidance and examples
   - **Reusability** (Weight: 0.20): Cross-pack applicability
   - **Best Practices** (Weight: 0.15): Industry standards and patterns
   - **Documentation** (Weight: 0.15): Comprehensive usage instructions

3. **Analyze pack-specific factors**:
   - Template compatibility with pack.yaml schema
   - Integration with pack instructions and prompts
   - Support for pack constraints and requirements
   - Alignment with pack-centric development workflow

4. **Score each category** from 0-4:
   - **Score 4**: Exceeds pack ecosystem standards
   - **Score 3**: Meets pack quality expectations
   - **Score 2**: Needs improvement for pack alignment
   - **Score 1**: Significant pack integration issues
   - **Score 0**: Not compatible with pack ecosystem

5. **Generate pack-specific recommendations**:
   - Enhancement suggestions for pack integration
   - Examples of successful pack template patterns
   - Guidance on template reusability across packs
   - Best practices for pack ecosystem alignment

## Usage

Provide the path to the pack template you want evaluated:

- `packs/{pack-name}/.github/prompts/{template-name}.prompt.md`
- `packs/{pack-name}/.github/instructions/{instruction-name}.md`
- `packs/{pack-name}/pack.yaml`
- Any pack-specific template file

The skill will evaluate templates for pack ecosystem alignment, developer experience, and
reusability across different pack types and constraints.

## Examples

### React Component Template Evaluation

Analyzes React component prompts for:

- TypeScript interface quality
- Accessibility compliance
- Pack constraint integration
- Cross-pack reusability

### API Hook Template Evaluation

Evaluates API hook templates for:

- Error handling patterns
- TypeScript typing
- Integration with data fetching packs
- Reusability across frontend packs

### UX Review Template Evaluation

Assesses UX review prompts for:

- Comprehensive evaluation criteria
- Integration with design system packs
- Accessibility focus
- Cross-project applicability
