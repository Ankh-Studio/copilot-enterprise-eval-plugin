---
provides:
  - React repository assessment
  - Java Spring repository assessment
  - Frontend pack recommendations
  - Backend pack recommendations
  - Component evaluation
  - Accessibility analysis
  - UI pattern detection
  - Team enablement guidance
---

# Copilot Repository Assessment Plugin

**Repository assessment and pack recommendation toolkit for development teams, with React and Java
Spring support.**

This plugin provides comprehensive assessment capabilities for development teams, with specialized
tools for React and Java Spring repository analysis, pack recommendations, and component evaluation
for improving frontend consistency and backend architecture.

## 🎯 What Makes This Different

**React & Spring-Focused Assessment**: Specialized analysis framework specifically designed for
React development teams and Java Spring workflows with TypeScript support.

**Full-Stack Recommendations**: Curated frontend and backend guidance with practical pack
recommendations for improving UI consistency, accessibility, and Spring Boot architecture.

**Team Enablement**: Built-in guidance for engineering teams without dedicated designers to improve
frontend and backend development practices.

## 🚀 Why Choose Copilot Repository Assessment?

- **🔍 Technology Analysis**: Comprehensive evaluation of React, TypeScript, and Java Spring
  repositories
- **⚡ One-Command Assessment**: Complete repository analysis in a single interaction
- **🎯 Actionable Recommendations**: Get specific improvement suggestions for frontend and backend
  workflows
- **📋 Pack Guidance**: Built-in pack recommendations for UI patterns, accessibility, and Spring
  Boot architecture
- **🌐 Team-Focused**: Specialized for engineering teams requiring frontend and backend guidance

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Enterprise Copilot Evaluation](#enterprise-copilot-evaluation)
- [Quick Start](#quick-start)
- [Plugin Structure](#plugin-structure)
- [Development](#development)
  - [Local Testing](#local-testing)
- [License](#license)
- [Support](#support)

## 📊 Plugin Skills Overview

This plugin provides **repository assessment and pack recommendation skills** for React and Java
Spring development:

### 🔍 Core Assessment Skills

- `repo-assessment` - Comprehensive repository analysis with React, TypeScript, and Java Spring
  detection
- `recommend-workspace-pack` - Frontend and backend pack recommendations for UI patterns,
  accessibility, and Spring Boot
- `artifact` - Component evaluation with quality assessment and improvement guidance

## Installation

### 🚀 Quick Install (Recommended)

Install directly from GitHub - this is the fastest way to get started:

```bash
copilot plugin install Ankh-Studio/copilot-eval-plugin
```

### 📦 Alternative Installation Methods

#### From Local Path

```bash
copilot plugin install ./copilot-eval-plugin
```

#### From Specific Version

```bash
# Install a specific version
copilot plugin install Ankh-Studio/copilot-eval-plugin@v2.0.0
```

#### From Marketplace (if available)

```bash
# If added to a marketplace
copilot plugin install copilot-enterprise-eval@marketplace-name
```

### ✅ Verification

After installation, verify the plugin is working:

```bash
# Test repository assessment
/repo-assessment

# List all available skills
copilot plugin list
```

### 🔄 Updates

To update to the latest version:

```bash
# Reinstall from GitHub (gets latest version)
copilot plugin install Ankh-Studio/copilot-eval-plugin

# Or install specific version
copilot plugin install Ankh-Studio/copilot-eval-plugin@v2.0.0
```

## Usage

### Repository Assessment

```bash
# Complete repository analysis (auto-detects technology stack)
/repo-assessment

# Analyze specific repository path
/repo-assessment ./my-project

# Quick analysis for large repositories
/repo-assessment --depth quick

# Backend-focused analysis
/repo-assessment --focus backend

# Frontend-focused analysis
/repo-assessment --focus frontend
```

### Example Output

```bash
Repository Assessment Results:
✅ Technology Stack Detected: React + TypeScript + Java Spring
✅ Repository Type: Full-stack Application
✅ Architecture Patterns: Component-based, Spring Boot REST API
⚠️  Issues: Missing accessibility testing, inconsistent styling, Spring security gaps

Recommended Actions:
1. Install frontend-a11y-ux pack for accessibility patterns
2. Implement frontend-ui-radix-tailwind for consistency
3. Add spring-security-pack for authentication patterns
4. Set up automated testing for components and Spring controllers

Pack Recommendations:
Frontend:
- frontend-a11y-ux: Accessibility patterns and testing
- frontend-ui-radix-tailwind: UI consistency and design system
- frontend-data-tanstack-axios: Data fetching patterns

Backend:
- spring-security-pack: Authentication and authorization patterns
- spring-testing-pack: Comprehensive testing strategies
- spring-architecture-pack: Best practices and design patterns
```

## Plugin Structure

```
copilot-eval-plugin/
├── plugin.json              # Plugin manifest
├── skills/
│   ├── repo-assessment/       # Repository analysis
│   ├── recommend-workspace-pack/  # Pack recommendations
│   ├── artifact/               # Component evaluation
│   └── adr-authoring/           # ADR generation
├── packs/                    # Frontend guidance packs
└── README.md                # This file
```

## Development

### Local Testing

```bash
# Test repository assessment
/repo-assessment

# Test with specific repository path
/repo-assessment ./test-project

# Test pack recommendations
/recommend-workspace-pack
```

## License

MIT License - see LICENSE file for details.

## Support

For issues and questions:

- Create an issue on GitHub
- Check the Copilot CLI Plugin Docs
