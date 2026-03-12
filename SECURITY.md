# Security Policy

## Supported Versions

| Version | Supported          |
|---------|--------------------|
| 1.1.0   | :white_check_mark: |
| < 1.1.0 | :x:                |

## Reporting a Vulnerability

### Security Issues

For security vulnerabilities and sensitive security concerns:

**Email:** <matt@ankhstudio.com>  
**Subject:** Security: Copilot Eval Plugin Vulnerability  
**Response Time:** Within 24 hours

### What to Include

- **Vulnerability type** (e.g., XSS, injection, authentication bypass)
- **Affected versions** of the plugin
- **Steps to reproduce** the vulnerability
- **Potential impact** assessment
- **Proof of concept** (if available)
- **Suggested mitigation** (if known)

### Response Process

1. **Acknowledgment** within 24 hours
2. **Initial assessment** within 3 business days
3. **Detailed analysis** within 7 business days
4. **Patch development** as needed
5. **Security release** coordinated with reporter
6. **Public disclosure** after patch is available

## Security Scope

### In Scope

- **Code execution vulnerabilities** in evaluation skills
- **Path traversal** issues in file handling
- **Injection vulnerabilities** in prompt processing
- **Authentication/authorization** bypasses
- **Information disclosure** of sensitive data
- **Denial of service** vulnerabilities

### Out of Scope

- **Issues in third-party dependencies** (report to respective projects)
- **Social engineering** attacks
- **Physical access** to systems
- **Network-level** attacks
- **User-generated content** security issues
- **Issues requiring physical access** to user devices

## Security Best Practices

### For Users

- **Keep plugin updated** to latest version
- **Review artifact permissions** before evaluation
- **Validate input files** from untrusted sources
- **Use in isolated environments** when possible
- **Monitor evaluation outputs** for sensitive data

### For Developers

- **Input validation** for all artifact files
- **Sanitization** of user-provided content
- **Least privilege** principle for file access
- **Secure error handling** without information disclosure
- **Regular security reviews** of evaluation logic

## Data Handling

### Data Collection

The plugin processes artifact files locally and does not:

- Collect personal information
- Transmit data to external servers
- Store evaluation results permanently
- Access files outside specified directories

### Data Retention

- **Evaluation results** are displayed in terminal only
- **Temporary files** are cleaned up after evaluation
- **No logs** of user content are maintained
- **No telemetry** or analytics data collected

## Security Contacts

### Primary Contact

Matthew Van Dusen  

- Email: <matt@ankhstudio.com>
- GitHub: @Ankh-Studio
- Response Time: 24 hours for security issues

### Repository Security

- **Private vulnerability reporting**: Use email above
- **Public issues**: Do not report security vulnerabilities publicly
- **Security discussions**: Request private discussion channels

## Security Updates

### Notification Channels

- **GitHub releases** for security advisories
- **CHANGELOG.md** for security fixes
- **Version bumping** for security releases
- **Deprecation notices** for unsupported versions

### Update Process

1. **Security assessment** of reported issue
2. **Patch development** and testing
3. **Security release** with updated version
4. **Public disclosure** after patch availability
5. **Update documentation** and security policies

## Compliance

### Standards

- **MIT License** compliance
- **GitHub security best practices**
- **Industry standard** vulnerability disclosure
- **Responsible disclosure** principles

### Legal

- **No warranty** for security claims
- **User responsibility** for secure usage
- **Limitation of liability** as per license
- **Applicable law** jurisdiction

## Security Acknowledgments

We thank security researchers and users who:

- **Report vulnerabilities** responsibly
- **Suggest security improvements**
- **Contribute security fixes**
- **Help maintain** security standards

### Hall of Fame

Security contributors will be acknowledged in:

- **Security advisories** (with permission)
- **Release notes** for security fixes
- **Contributor recognition** in documentation

---

**Note:** This security policy applies to the copilot-eval-plugin repository and its distributed code. For questions about this policy, contact <matt@ankhstudio.com>.
