# Representative Evaluation Queries

This file contains representative queries for testing the copilot-eval-plugin functionality across different skill categories and use cases.

## Core Evaluation Skills

### Single Artifact Evaluation

```
/evaluate-artifact .github/prompts/code-review.prompt.md
/evaluate-prompt .github/prompts/feature-generation.prompt.md
/evaluate-skill skills/evaluate-artifact/SKILL.md
/evaluate-instruction .github/instructions/coding-standards.instructions.md
/evaluate-template .github/templates/issue-response.template.md
/evaluate-workflow .github/workflows/evaluation.workflow.md
/evaluate-agent .github/agents/code-reviewer.agent.md
/evaluate-context .github/contexts/project-context.context.md
/evaluate-validation .github/validation-rules/code-quality.validation.md
/evaluate-integration .github/integrations/github-integration.integration.md
```

### Batch Evaluation

```
/eval-batch .github/prompts/
/eval-batch --parallel skills/
/eval-batch --comparative .github/prompts/ --baseline v1.0
```

### Quality Gates

```
/eval-quality-gates --pre-deploy .github/prompts/
/eval-quality-gates --compliance --report detailed
/eval-quality-gates --threshold strict skills/
```

### Performance Testing

```
/eval-performance --benchmark .github/prompts/
/eval-performance --optimize --cache-results
/eval-performance --stress-test --concurrent 10
```

## Advanced Evaluation Skills

### Improvement Recommendations

```
/eval-improve .github/prompts/code-review.prompt.md --focus=clarity
/eval-improve skills/evaluate-artifact/SKILL.md --comprehensive
/eval-improve --batch .github/prompts/ --priority high
```

### Debate and Analysis

```
/eval-debate .github/prompts/code-review.prompt.md vs .github/prompts/feature-generation.prompt.md
/eval-debate --criteria effectiveness,clarity .github/prompts/
/eval-debate --consensus --multiple-evaluators skills/
```

### Rubric Validation

```
/eval-validate-rubrics rubrics/prompt-evaluation.md
/eval-validate-rubrics --thorough rubrics/skill-evaluation.md
/eval-validate-rubrics --stress-test rubrics/
```

## Security and Quality Assurance

### Adversarial Testing

```
/eval-adversarial --full-suite --target rubrics/
/eval-adversarial --attack-pattern scoring --rubric prompt.md
/eval-adversarial --stress-test performance --skill eval-batch
/eval-adversarial --smoke-test --critical-only
```

### Regression Testing

```
/eval-regression --full --baseline v1.0
/eval-regression --scoring-consistency --artifact-type prompt
/eval-regression --performance --skill eval-batch
/eval-regression --pre-release --threshold strict
```

### TL;DR Summaries

```
/eval-tldr .github/prompts/code-review.prompt.md
/eval-tldr --batch .github/prompts/
/eval-tldr --detailed --findings evaluation-results.json
```

## Edge Cases and Stress Testing

### Empty/Invalid Inputs

```
/evaluate-artifact non-existent-file.md
/eval-batch empty-directory/
/eval-quality-gates --threshold invalid
/eval-performance --stress-test --concurrent 1000
```

### Large Scale Testing

```
/eval-batch --parallel --recursive .github/
/eval-adversarial --comprehensive --report detailed
/eval-regression --full-suite --all-artifacts
```

### Concurrent Operations

```
/eval-performance --benchmark --concurrent 5 &
/eval-quality-gates --pre-deploy .github/prompts/ &
/eval-adversarial --smoke-test &
```

## Integration Testing

### Cross-Skill Workflows

```
/evaluate-artifact .github/prompts/code-review.prompt.md
/eval-improve .github/prompts/code-review.prompt.md --focus=clarity
/eval-quality-gates --pre-deploy .github/prompts/code-review.prompt.md
/eval-tldr .github/prompts/code-review.prompt.md
```

### End-to-End Pipelines

```
/eval-batch .github/prompts/ --comparative
/eval-quality-gates --compliance --report detailed
/eval-regression --pre-release --threshold strict
/eval-adversarial --smoke-test --critical-only
```

## Expected Outcomes

### Successful Evaluations Should

- Return scores between 1.0-4.0
- Provide detailed feedback and recommendations
- Generate consistent results across multiple runs
- Complete within reasonable time limits
- Handle errors gracefully with informative messages

### Quality Gates Should

- Block deployments that don't meet thresholds
- Generate compliance reports
- Provide clear pass/fail criteria
- Include remediation recommendations

### Performance Tests Should

- Benchmark evaluation speed and resource usage
- Identify bottlenecks and optimization opportunities
- Support concurrent operations
- Maintain accuracy under load

### Security Tests Should

- Identify scoring manipulation vulnerabilities
- Test edge cases and boundary conditions
- Validate input sanitization
- Ensure consistent behavior under adversarial conditions

These queries serve as the foundation for comprehensive testing and validation of the copilot-eval-plugin functionality.
