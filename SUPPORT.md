# Support

## Getting Help

### Documentation

- **[README.md](README.md)** - Complete plugin overview and usage guide
- **[INSTALL.md](INSTALL.md)** - Installation and setup instructions
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines and development workflow

### Common Issues

#### Plugin Installation

```bash
# Verify plugin is installed
copilot plugin list

# Reinstall if needed
copilot plugin uninstall copilot-eval
copilot plugin install ./copilot-eval-plugin
```

#### Skill Not Found

```bash
# Check available skills
/skills list

# Verify plugin installation
copilot plugin list
```

#### Evaluation Errors

- Ensure artifact files exist and are readable
- Check that artifact type matches expected format
- Verify rubric files are present in `rubrics/` directory

### Reporting Issues

#### Bug Reports

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) and include:

- Plugin version (check package.json)
- Copilot CLI version
- Exact command that failed
- Error messages and output
- Artifact type being evaluated
- Expected vs actual behavior

#### Feature Requests

Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) and include:

- Use case description
- Proposed solution
- Alternative approaches considered
- Additional context

### Community

#### Discussions

- Use GitHub Issues for questions and discussions
- Search existing issues before creating new ones
- Tag issues with appropriate labels

#### Contributing

- See [CONTRIBUTING.md](CONTRIBUTING.md) for development workflow
- Follow the pull request checklist
- Test changes locally before submitting

### Plugin Limitations

#### Supported Artifact Types

- Prompts (`.prompt.md`)
- Instructions (`.md`)
- Skills (`SKILL.md`)
- Templates (`.template.md`)
- Workflows (`WORKFLOW.md`)
- Agents (`AGENT.md`)
- Context providers (`.context.md`)
- Validation rules (`.validation.md`)
- Integration patterns (`.integration.md`)

#### Evaluation Scope

- Quality assessment based on structured rubrics
- Comparative analysis between artifacts
- Improvement recommendations
- Plain-English explanations

#### What's Not Included

- Code execution or runtime testing
- Performance benchmarking
- Security vulnerability scanning
- Integration with external CI/CD systems

### Version Information

Current version: `1.1.0` (see [package.json](package.json))

#### Checking Version

```bash
# In Copilot CLI
/plugin version

# Or check package.json directly
cat package.json | grep version
```

### Contact

#### Maintainer

- Matthew Van Dusen <matt@ankhstudio.com>
- GitHub: @Ankh-Studio

#### Repository

- <https://github.com/Ankh-Studio/copilot-eval-plugin>
- Issues: <https://github.com/Ankh-Studio/copilot-eval-plugin/issues>
- Discussions: Use GitHub Issues

### Response Times

- **Bug reports**: 2-3 business days
- **Feature requests**: 1-2 weeks
- **Questions**: 3-5 business days
- **Security issues**: Immediate (see SECURITY.md)

### Professional Support

For enterprise deployments, custom integrations, or priority support:

- Contact: <matt@ankhstudio.com>
- Include "Copilot Eval Plugin Support" in subject line
