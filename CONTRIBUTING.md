# Contributing

## What belongs in this repo

- **evaluation skills** - Skills that assess Copilot artifacts against structured rubrics
- **rubric files** - Evaluation criteria for prompts, instructions, skills, agents, workflows, validation rules, and integration artifacts
- **artifact scoring/improvement workflows** - Processes for evaluation → improvement → re-evaluation cycles
- **docs that help reviewers understand and apply the plugin** - Clear, accurate documentation that matches implementation

## What does not belong here

- **vague generic helper skills** - Skills without specific evaluation focus or trigger boundaries
- **undocumented claims about accuracy or performance** - All performance claims must be evidence-based and documented
- **overlapping skills without clear trigger boundaries** - Each skill should have a distinct purpose and use case
- **docs that describe behavior the repo does not implement** - Documentation must match actual functionality

## Contribution requirements

- **update docs when behavior changes** - Keep README, INSTALL.md, and other documentation in sync with code
- **include or update eval cases for any new skill/rubric/workflow** - Ensure new functionality is testable and validated
- **keep skill descriptions narrow and trigger-specific** - Each skill should have a clear, focused purpose
- **test install flow locally** - Verify `copilot plugin install` works before submitting
- **verify examples and command names against GitHub docs** - Use officially documented command syntax
- **avoid placeholders in public docs** - Replace all placeholder text with actual values

## Pull request checklist

- [ ] **intent is clear** - PR description explains what problem this solves
- [ ] **docs match implementation** - All documentation reflects actual behavior
- [ ] **examples were tested** - Commands and workflows work as documented
- [ ] **drift with README/INSTALL/plugin.json is resolved** - Consistent information across all files
- [ ] **new or changed skills have trigger and non-trigger examples** - Clear usage scenarios provided

## Development workflow

1. **Fork the repository** and create a feature branch
2. **Make your changes** following the guidelines above
3. **Test locally**:

   ```bash
   copilot plugin install ./copilot-eval-plugin
   copilot plugin list
   /skills list
   ```

4. **Update documentation** to match any behavior changes
5. **Submit pull request** with clear description and checklist completion

## Code style

- Use clear, descriptive skill names that indicate purpose
- Keep skill descriptions focused and specific
- Follow existing file structure and naming conventions
- Ensure all examples are copy-paste runnable

## Questions?

- Open an issue for discussion before starting major changes
- Check existing issues for similar proposals
- Review recent PRs to understand current patterns
