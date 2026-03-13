# Copilot Eval Plugin Refocus Roadmap: Pack-Centric Team Enablement

## Strategic Vision

Transform the copilot-eval-plugin from an evaluation toolkit into a comprehensive team enablement
platform that addresses the critical gap between evaluating artifacts and teaching teams how to work
effectively after key personnel departures.

**Core Strategy**: Make packs the primary delivery mechanism, with evaluation serving as
verification rather than primary focus.

## Phase 1: Foundation (Week 1)

### 01. Repository Hygiene & Infrastructure Cleanup

- [x] Sync package.json (1.1.0) with plugin.json (1.0.0) versions
- [x] Update package.json files array to match actual structure
- [x] Port useful GitHub workflows from chore-workflow-deploy branch
- [x] Add issue/PR templates
- [x] Implement linting infrastructure (scripts, configs, workflows)
- [x] Fix GitHub workflows to run linting on PR/push to main
- [x] Fix critical linting errors (line length, code blocks, structure)
- [ ] Fix remaining linting errors (trailing spaces, formatting) - technical debt

**Success Criteria**: Clean repository foundation, no version mismatches, working CI/CD

---

## Phase 2: Pack Architecture Foundation (Week 2)

### 01. Extended Pack Schema Development

- [ ] Create `packs/schema/pack-schema-v2.yaml` with enhanced fields
- [ ] Add supported_surfaces, requires_cli, requires_coding_agent fields
- [ ] Add team_signals, required_docs, agents, skills fields
- [ ] Add hooks, templates, verification_commands fields
- [ ] Add learning_objectives, handoff_outputs fields
- [ ] Update existing packs to use new schema format

**Success Criteria**: Packs transformed from file collections into governed onboarding modules

### 02. Team Context Framework Integration

- [ ] Create `templates/team-context.yaml` for team gap analysis
- [ ] Add team_gaps, handoff_priority, copilot_constraints fields
- [ ] Add preferred_surfaces, capacity_constraints fields
- [ ] Modify repo-assessment skill to read team context
- [ ] Integrate team context into pack recommendation logic

**Success Criteria**: Personalized pack recommendations based on team needs

### 03. Pack Classification System

- [ ] Define Base Stack Packs: one main stack recommendation from repo-assess
- [ ] Define Concern Packs: accessibility, data-fetching, testing, security, release
- [ ] Define Role Packs: frontend-teammate, frontend-expert-reviewer, spec-planner,
      handoff-maintainer
- [ ] Define Constraint Packs: enterprise-safe, no-broad-writes, docs-required, regulated-change
- [ ] Create pack combination rules and conflict detection
- [ ] Build pack dependency management system

**Success Criteria**: Clear pack taxonomy that prevents instruction soup

### 04. Repo-Native Rules Generation Skill

- [ ] Create `skills/repo-rules/SKILL.md` for rules generation
- [ ] Implement repo-specific Copilot rules generation based on assessment
- [ ] Add rules for applied packs and team context
- [ ] Create `.github/copilot-instructions.md` generation workflow
- [ ] Integrate rules generation into assessment → recommend pipeline

**Success Criteria**: Rules as first-class deliverable, not optional garnish

---

## Phase 3: Role/Process Pack Development (Week 3)

### 01. Spec-Driven Development Core Pack

- [ ] Create `packs/process/spec-driven-dev-core/pack.yaml`
- [ ] Add feature specification templates and prompts
- [ ] Create implementation planning workflows
- [ ] Build review-against-spec validation systems
- [ ] Add spec-to-code traceability verification
- [ ] Create spec-driven development skills and agents

**Success Criteria**: Complete spec-driven development workflow with templates and validation

### 02. Frontend Onboarding Pack

- [ ] Create `packs/role/frontend-onboarding/pack.yaml`
- [ ] Build progressive learning curriculum for new developers
- [ ] Add safe-first-change guidelines and guardrails
- [ ] Create codebase navigation and exploration aids
- [ ] Include common pattern libraries and examples
- [ ] Add guided tour and pattern recognition skills

**Success Criteria**: New team members can safely contribute within first week

### 03. Frontend Teammate Pack

- [ ] Create `packs/role/frontend-teammate/pack.yaml`
- [ ] Define daily workflow guidance and best practices
- [ ] Add collaboration patterns and team coordination
- [ ] Create code review standards and checklists
- [ ] Build issue handling and troubleshooting procedures
- [ ] Include team communication and reporting templates

**Success Criteria**: Clear daily workflows and collaboration standards

### 04. Frontend Expert Reviewer Pack

- [ ] Create `packs/role/frontend-expert-reviewer/pack.yaml`
- [ ] Add advanced review criteria and quality gates
- [ ] Build architecture assessment frameworks
- [ ] Create performance optimization guides
- [ ] Include security review checklists and validation
- [ ] Add mentorship and knowledge transfer protocols

**Success Criteria**: Expert-level review capabilities and quality assurance

### 05. Repo Codemap Pack

- [ ] Create `packs/process/repo-codemap/pack.yaml`
- [ ] Build architecture diagram generation skills
- [ ] Add component ownership mapping systems
- [ ] Create state/data flow visualization tools
- [ ] Include "where to start" documentation generators
- [ ] Add codemap maintenance and update workflows

**Success Criteria**: Durable architecture documentation that stays current

### 06. Change Handoff Pack

- [ ] Create `packs/process/change-handoff/pack.yaml`
- [ ] Build handoff documentation templates and generators
- [ ] Add knowledge transfer workflows and checklists
- [ ] Create responsibility mapping and ownership tracking
- [ ] Include continuity planning and risk assessment
- [ ] Add handoff verification and validation systems

**Success Criteria**: Seamless knowledge transfer during personnel changes

### 07. Safe Implementation Pack

- [ ] Create `packs/constraint/safe-implementation/pack.yaml`
- [ ] Define incremental change strategies and workflows
- [ ] Add rollback procedures and recovery systems
- [ ] Create testing requirements and validation gates
- [ ] Build risk assessment and mitigation frameworks
- [ ] Include change approval and review processes

**Success Criteria**: Risk-managed implementation with rollback capabilities

---

## Phase 4: Team Enablement & Delivery (Week 4)

### 01. Team Success Metrics Framework

- [ ] Create `rubrics/team-success/` with team-centric evaluation criteria
- [ ] Define "time to first safe frontend change" metric and tracking
- [ ] Add "percent of feature work with spec file" compliance measurement
- [ ] Build "percent of PRs with spec-to-code traceability" validation
- [ ] Create "PR rework rate" reduction measurement system
- [ ] Add "number of architecture docs updated per feature" tracking

**Success Criteria**: Team-focused metrics that measure actual development effectiveness

### 02. PR-Based Delivery System

- [ ] Create `skills/pack-application/SKILL.md` for end-to-end delivery
- [ ] Build assessment → recommend packs → apply pipeline
- [ ] Add dry-run apply with conflict detection and resolution
- [ ] Create comprehensive PR generation with repo-native files
- [ ] Include architecture docs and codemap in PR output
- [ ] Add verification results and rollback procedures to PR

**Success Criteria**: Concrete, reviewable PRs that deliver complete team enablement

### 03. GitHub-Aligned Hook System

- [ ] Create `skills/github-hooks/SKILL.md` for proper hook generation
- [ ] Generate `.github/hooks/*.json` files following official GitHub layout
- [ ] Add repo-scoped hook policies and enforcement mechanisms
- [ ] Create hook validation and testing frameworks
- [ ] Integrate hooks with applied packs and team constraints
- [ ] Add hook monitoring and compliance reporting

**Success Criteria**: Enterprise-grade guardrails that align with GitHub standards

### 04. Integration Testing & Validation

- [ ] Set up comprehensive test infrastructure for pack combinations
- [ ] Test assessment → recommend → apply → verify pipeline on diverse repos
- [ ] Validate team success metrics effectiveness with real teams
- [ ] Test handoff scenarios with simulated personnel transitions
- [ ] Verify spec-driven development workflow completeness
- [ ] Performance test pack application on large repositories

**Success Criteria**: Reliable team enablement across diverse repository types

### 05. Documentation & Training Materials

- [ ] Update README.md for pack-centric team enablement value proposition
- [ ] Create comprehensive pack application guides and tutorials
- [ ] Add team success metrics documentation and best practices
- [ ] Build handoff scenario training materials and templates
- [ ] Create troubleshooting guides for common pack issues
- [ ] Add success stories and case studies for different team types

**Success Criteria**: Complete documentation that enables self-service team onboarding

---

## Success Metrics

### Team Enablement Metrics

- [ ] Teams can safely contribute within first week of pack application
- [ ] 80%+ of feature work includes spec files with implementation plans
- [ ] 75%+ of PRs demonstrate spec-to-code traceability
- [ ] 50%+ reduction in PR rework rate after pack adoption
- [ ] Architecture docs updated for 90%+ of new features
- [ ] Handoff scenarios completed with < 1 day productivity loss

### Completion Criteria

- [ ] All 4 phases completed with comprehensive pack library
- [ ] Assessment → recommend → apply → verify pipeline working end-to-end
- [ ] Team success metrics validated across diverse repository types
- [ ] GitHub-aligned hooks generated and tested successfully
- [ ] Complete documentation enables self-service team onboarding

### Quality Gates

- Repository hygiene and clean infrastructure foundation
- Functional assessment skill with team context integration
- Complete pack taxonomy with conflict detection and resolution
- PR-based delivery system generating concrete, reviewable changes
- Team success metrics measuring actual development effectiveness

---

## Anti-Goals

### What We're NOT Building

❌ **Generic evaluation tools** - We're building team enablement packs ❌ **Persona management
systems** - Focus on team gaps and workflows ❌ **Memory and pattern engines** - Use existing AI
capabilities ❌ **Performance optimization subsystems** - Leverage platform performance ❌
**Community pack marketplaces** - Focus on team-specific enablement ❌ **Generic code generation
skills** - Build spec-driven development workflows ❌ **Complex routing and coordination** - Keep
pack application simple and direct

### Scope Boundaries

- **DO**: Build packs that help teams work effectively together
- **DON'T**: Create general-purpose development tools
- **DO**: Generate concrete PRs with repo-native files
- **DON'T**: Build abstract recommendation systems
- **DO**: Measure team success through development outcomes
- **DON'T**: Optimize for evaluation accuracy metrics
- **DO**: Create handoff processes that preserve knowledge
- **DON'T**: Build personnel management systems

---

## Timeline Summary

| Week | Focus              | Deliverables                                                  |
| ---- | ------------------ | ------------------------------------------------------------- |
| 1    | Foundation         | Clean repository, working infrastructure                      |
| 2    | Pack Architecture  | Extended pack schema, team context, classification system     |
| 3    | Role/Process Packs | Spec-driven development, onboarding, teammate, reviewer packs |
| 4    | Team Enablement    | Success metrics, PR delivery, GitHub hooks, documentation     |

**Total Estimated Effort**: 4 weeks focused on pack-centric team enablement

---

## Next Steps After Completion

1. **User Testing**: Gather feedback from teams using the pack system
2. **Pattern Library**: Build repository pattern knowledge base from successful applications
3. **Advanced Features**: Consider additional pack types based on team needs
4. **Integration**: Explore integration with existing development workflows
5. **Ecosystem**: Assess need for additional team-specific pack categories

---

This roadmap transforms the copilot-eval-plugin from a general evaluation toolkit into a focused
pack-centric team enablement system. The strategic shift emphasizes:

- **Packs as primary delivery mechanism** with evaluation serving as verification
- **Team context integration** for personalized recommendations
- **Spec-driven development workflows** with traceability
- **PR-based delivery** generating concrete, reviewable changes
- **Team success metrics** measuring actual development outcomes
- **GitHub-aligned hooks** for enterprise-grade guardrails

The 4-week timeline delivers a comprehensive pack ecosystem that helps teams work more effectively
together while maintaining clean, well-documented repositories.
