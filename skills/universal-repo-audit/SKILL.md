---
name: universal-repo-audit
description: Universal repository audit that auto-detects repo type and orchestrates appropriate evaluation strategies with ADR generation
license: MIT
compatibility:
  Requires file system access, directory traversal, pattern recognition, and ADR generation capabilities.
  Compatible with any repository type and size.
metadata:
  author: matthewvandusen
  version: '1.0'
  category: analysis
  tags: universal-audit repo-detection adr-generation orchestration multi-language
  capabilities: auto-detection dynamic-skill-selection architectural-decisions comprehensive-analysis
allowed-tools: Read ListDir GrepSearch Bash(find:*,ls:*)
---

# Universal Repository Audit

Perform comprehensive repository analysis with automatic technology detection, dynamic skill orchestration, and architectural decision generation for improvement planning.

## Core Process

### Phase 1: Repository Type Detection
- **Technology Stack Analysis**: Detect primary languages, frameworks, and tools
- **Architecture Pattern Recognition**: Identify organizational and code patterns
- **Repository Classification**: Categorize as frontend, backend, full-stack, or specialized
- **Skill Mapping**: Determine appropriate evaluation skills for detected stack

### Phase 2: Dynamic Skill Orchestration
- **Skill Selection**: Choose evaluation skills based on repository type
- **Context Passing**: Share detection findings with selected skills
- **Parallel Execution**: Run compatible skills simultaneously
- **Result Aggregation**: Collect and normalize skill outputs

### Phase 3: ADR Generation
- **Assessment Synthesis**: Combine all findings into unified analysis
- **Architectural Decision**: Create structured ADR for improvements
- **Implementation Roadmap**: Generate step-by-step improvement plan
- **Success Metrics**: Define measurable improvement criteria

### Phase 4: Comprehensive Reporting
- **Executive Summary**: High-level repository health and recommendations
- **Detailed Analysis**: Technical findings with evidence and impact
- **Action Plan**: Prioritized next steps with time estimates
- **Resource Planning**: Team skill requirements and implementation timeline

## Repository Type Detection Logic

### Frontend Repositories
**React Detection:**
- package.json with react dependency
- .jsx/.tsx files present
- React-specific patterns (useState, useEffect, components)

**Vue Detection:**
- package.json with vue dependency  
- .vue files present
- Vue-specific patterns and structure

**Angular Detection:**
- package.json with @angular dependencies
- .ts files with Angular decorators
- Angular CLI configuration files

### Backend Repositories
**Node.js Detection:**
- package.json with express, fastify, or similar
- server.js, app.js, or index.js entry points
- API route patterns and middleware usage

**Python Detection:**
- requirements.txt or pyproject.toml
- Django, Flask, or FastAPI patterns
- .py files with web framework imports

**Java Detection:**
- pom.xml or build.gradle
- Spring Boot or Jakarta EE patterns
- .java files with framework annotations

### Full-Stack Applications
**MEAN/MERN Stack:**
- Combined frontend and backend patterns
- Monorepo structure with multiple package.json
- API integration patterns

**Django/React Stack:**
- Python backend with React frontend
- Django REST Framework patterns
- Build configuration for React assets

## Skill Orchestration Matrix

### React Repository
```
repo-assessment → recommend-workspace-pack → artifact → adr-authoring
```

### Vue Repository  
```
repo-assessment → recommend-vue-pack → artifact → adr-authoring
```

### Python/Django Repository
```
repo-assessment → recommend-python-arch → code-quality → adr-authoring
```

### Node.js Repository
```
repo-assessment → recommend-node-patterns → security-audit → adr-authoring
```

### Generic Repository
```
repo-assessment → best-practices → artifact → adr-authoring
```

## ADR Generation Template

### ADR Structure
```
# ADR-[NUMBER]: [TITLE]

**Status:** Proposed
**Date:** [CURRENT_DATE]
**Confidence:** [HIGH/MEDIUM/LOW]

## Context

[REPOSITORY ASSESSMENT FINDINGS]

## Options Considered

### Option 1: [OPTION_DESCRIPTION]
**Pros:** [BENEFITS]
**Cons:** [DRAWBACKS]

### Option 2: [OPTION_DESCRIPTION]  
**Pros:** [BENEFITS]
**Cons:** [DRAWBACKS]

## Decision

[SELECTED APPROACH WITH RATIONALE]

## Tradeoffs & Consequences

### Positive Impacts
[EXPECTED BENEFITS]

### Negative Impacts  
[POTENTIAL DRAWBACKS]

## Evidence

**Assessment Data:**
[KEY FINDINGS FROM ANALYSIS]

**Component Analysis:**
[CRITICAL COMPONENTS EVALUATED]

## Follow-up Actions

- [ ] [ACTION_ITEM] - [OWNER] - [TIMELINE]
- [ ] [ACTION_ITEM] - [OWNER] - [TIMELINE]
```

## Usage

### Universal Repository Analysis
```bash
/universal-repo-audit
```

### Specific Repository Path
```bash
/universal-repo-audit ./my-project
```

### Custom Analysis Depth
```bash
/universal-repo-audit --depth comprehensive
/universal-repo-audit --depth quick
```

### ADR Generation Only
```bash
/universal-repo-audit --generate-adr-only
```

## Output Format

### Executive Dashboard
- **Repository Type:** [Detected stack and classification]
- **Health Score:** [0-100 overall assessment]
- **Critical Issues:** [Top 3 immediate concerns]
- **Recommended Actions:** [Priority list with impact]

### Technical Analysis
- **Technology Stack:** [Complete inventory with versions]
- **Architecture Patterns:** [Detected patterns with compliance]
- **Quality Metrics:** [Code quality, security, performance indicators]
- **Skill Evaluations:** [Results from orchestrated skills]

### ADR Document
- **Architectural Decision:** [Structured improvement recommendation]
- **Implementation Plan:** [Step-by-step execution guide]
- **Success Metrics:** [Measurable improvement criteria]
- **Resource Requirements:** [Team skills and timeline estimates]

## Performance Considerations

### Optimization Strategies
- **Parallel Processing:** Execute compatible skills simultaneously
- **Smart Caching:** Cache repository detection results
- **Incremental Analysis**: Process only changed files for subsequent runs
- **Resource Management**: Limit concurrent operations based on repository size

### Resource Limits
- **Maximum Repository Size**: 10,000 files
- **Analysis Timeout**: 5 minutes for comprehensive mode
- **Memory Limit**: 1GB for analysis process
- **ADR Generation**: 2 minutes maximum

## Error Handling

### Detection Failures
- **Unknown Repository Type**: Apply generic analysis pattern
- **Mixed Technologies**: Use multi-stack orchestration
- **Insufficient Data**: Provide partial analysis with confidence indicators

### Skill Execution Errors
- **Skill Unavailable**: Gracefully skip and continue with available skills
- **Timeout Failures**: Provide partial results with timeout indicators
- **Resource Constraints**: Implement fallback analysis strategies

### ADR Generation Issues
- **Insufficient Evidence**: Generate ADR with "Requires Further Investigation" status
- **Conflicting Recommendations**: Present multiple options with tradeoff analysis
- **Implementation Complexity**: Provide phased approach with risk mitigation

## Example Scenarios

### React E-commerce Site
```
Detection: React + TypeScript + Redux + Material-UI
Skills: repo-assessment → recommend-workspace-pack → artifact
ADR: Implement accessibility improvements and performance optimization
```

### Python API Backend
```
Detection: Django + PostgreSQL + Redis + Celery
Skills: repo-assessment → recommend-python-arch → code-quality  
ADR: Migrate to async patterns and implement comprehensive testing
```

### Full-Stack Application
```
Detection: React frontend + Node.js API + MongoDB
Skills: repo-assessment → recommend-full-stack → security-audit
ADR: Implement microservices architecture and enhance security posture
```

This universal audit provides comprehensive repository analysis with intelligent skill orchestration and actionable architectural decisions for any technology stack.
