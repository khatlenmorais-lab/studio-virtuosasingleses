# Codex CLI Troubleshooting Guide

## Common Issues and Solutions

### 1. Command Not Found
**Error**: `codex: command not found`

**Solutions**:
- Verify installation: `npm list -g @openai/codex-cli`
- Check PATH: `echo $PATH`
- Reinstall: `npm install -g @openai/codex-cli`

### 2. Authentication Issues
**Error**: Authentication failed or API key issues

**Solutions**:
- Login again: `codex auth login`
- Check API key: `codex auth status`
- Verify network connectivity

### 3. Permission Denied
**Error**: Permission denied when executing

**Solutions**:
- Fix permissions: `chmod +x $(which codex)`
- Run as administrator (Windows)
- Check file ownership

### 4. Version Compatibility
**Error**: Incompatible version

**Solutions**:
- Update Codex CLI: `npm update -g @openai/codex-cli`
- Check version: `codex --version`
- Verify requirements

## Diagnostic Commands

Run these commands to gather diagnostic information:

```bash
# System information
uname -a                    # OS information
node --version             # Node.js version
npm --version              # npm version
python --version           # Python version

# Codex CLI information
codex --version            # Codex version
codex --help               # Available commands
codex auth status          # Authentication status

# Installation information
which codex                # Codex location
npm list -g @openai/codex-cli  # npm installation info
pip show codex-cli         # pip installation info (if applicable)

# Environment
echo $PATH                 # PATH variable
env | grep -i codex        # Codex-related environment variables
```

## Getting Help

### 1. Check Logs
- VS Code Developer Console: Help > Toggle Developer Tools
- Kiro Output Channel: View > Output > Select "Kiro"

### 2. Community Support
- GitHub Issues: https://github.com/openai/codex-cli/issues
- OpenAI Community: https://community.openai.com/

### 3. Documentation
- Official Docs: https://docs.openai.com/codex-cli
- API Reference: https://docs.openai.com/api-reference

## Reporting Issues

When reporting issues, please include:

1. **System Information**: OS, Node.js/Python version
2. **Codex CLI Version**: Output of `codex --version`
3. **Error Messages**: Complete error output
4. **Steps to Reproduce**: What you were trying to do
5. **Diagnostic Output**: Results of diagnostic commands above

This information helps maintainers quickly identify and resolve issues.