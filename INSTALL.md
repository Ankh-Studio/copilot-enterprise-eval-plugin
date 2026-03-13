# Enterprise Evaluation Installation Guide

## Install the Plugin

```bash
# From GitHub repository
copilot plugin install Ankh-Studio/copilot-enterprise-eval-plugin

# Or from local directory
copilot plugin install ./copilot-enterprise-eval-plugin
```

## Verify Installation

````bash
# List installed plugins
copilot plugin list

# Check available skills
copilot skills list

# Check available agents
copilot agent list
```bash

## Start Using

```bash
# Start Copilot CLI interactive session
copilot

# Evaluate an artifact
/artifact .github/prompts/my-prompt.prompt.md

# Use the evaluator agent
/agent evaluator
```bash

## What's Included

- **Enterprise Evaluation Skills**: Production-grade artifact evaluation with Chain-of-Verification methodology
- **Evaluator Agent**: `/agent evaluator` - Specialized enterprise evaluation assistant
- **Automated Hooks**: Quality checks during generation/editing with enterprise compliance
- **Enterprise Rubrics**: Structured evaluation criteria for all artifact types with governance and compliance

The plugin automatically detects artifact types and applies the appropriate enterprise evaluation rubric.
````
