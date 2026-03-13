---
name: pack-validation-validator
description:
  Specialized evaluation of pack validation rules and quality gates for pack ecosystem compliance
---

Evaluate pack-specific validation rules and quality gates against comprehensive criteria for pack
ecosystem compliance and quality assurance.

## Process

1. **Identify validation type** from pack structure:
   - **Pack Validation Rules** (pack.yaml schema validation)
   - **Quality Gates** (pre/post evaluation checks)
   - **Constraint Validation** (pack-specific requirements)
   - **Integration Validation** (tool compatibility checks)

2. **Apply pack validation evaluation rubric** with these criteria:
   - **Pack Compliance** (Weight: 0.25): Adherence to pack schema and standards
   - **Quality Assurance** (Weight: 0.25): Effective quality gate enforcement
   - **Validation Coverage** (Weight: 0.20): Comprehensive scenario handling
   - **Actionability** (Weight: 0.15): Clear and specific feedback
   - **Integration** (Weight: 0.15): Seamless tool compatibility

3. **Analyze pack-specific factors**:
   - Pack schema validation completeness
   - Quality gate effectiveness for pack ecosystem
   - Constraint validation for pack requirements
   - Integration validation with development workflows

4. **Score each category** from 0-4:
   - **Score 4**: Exceeds pack ecosystem standards
   - **Score 3**: Meets pack quality expectations
   - **Score 2**: Needs improvement for pack alignment
   - **Score 1**: Significant pack integration issues
   - **Score 0**: Not compatible with pack ecosystem

5. **Generate pack-specific recommendations**:
   - Enhancement suggestions for pack compliance
   - Examples of successful pack validation patterns
   - Guidance on quality gate optimization
   - Best practices for pack ecosystem alignment

## Usage

Provide the path to the pack validation you want evaluated:

- `packs/{pack-name}/pack.yaml` (schema validation)
- `packs/{pack-name}/.github/validation/{validation-name}.validation.md`
- Quality gate configurations and rules
- Pack constraint validation files

The skill will evaluate validation rules for pack compliance, quality assurance effectiveness, and
integration with the pack ecosystem.

## Examples

### Pack Schema Validation

Analyzes pack.yaml validation for:

- Schema completeness and accuracy
- Required field validation
- Pack constraint enforcement
- Integration with pack management tools

### Quality Gate Validation

Evaluates quality gate rules for:

- Pre-evaluation quality checks
- Post-evaluation compliance validation
- Pack-specific quality standards
- Integration with CI/CD workflows

### Constraint Validation

Assesses constraint validation for:

- Pack requirement enforcement
- Technical stack compatibility
- Team-specific constraints
- Cross-pack dependency validation
