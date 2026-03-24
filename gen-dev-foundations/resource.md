# Foundations: Coding with Generative AI

**Companion Worksheet**

*This worksheet provides quick-reference commands and setup instructions for the workshop.*

## Command Line Cheat Sheet

### Navigating

| Command | What It Does |
|---------|-------------|
| `pwd` | Print your current location |
| `mkdir my-project` | Make a new folder |
| `cd my-project` | Move into a folder |
| `cd ..` | Go up one level |

### Working with Files

| Command | What It Does |
|---------|-------------|
| `touch index.html` | Create a new file |
| `ls` | List what's in the folder |
| `mv file.txt folder/` | Move a file into a folder |

## Git Cheat Sheet

### Setting Up

| Command | What It Does |
|---------|-------------|
| `git init` | Initialize a repo |
| `git add .` | Stage your changes |
| `git commit -m "message"` | Save a snapshot |

### Syncing & Inspecting

| Command | What It Does |
|---------|-------------|
| `git status` | Check what changed |
| `git log --oneline` | View commit history |
| `git push origin main` | Push to GitHub |

## Setup Checklist

### VS Code

☐ Download from code.visualstudio.com
☐ Install and open
☐ Open integrated terminal (Terminal -> New Terminal or Ctrl+`)
☐ Confirm command prompt appears

### GitHub CLI

☐ Install: `brew install gh` (macOS) / `winget install GitHub.cli` (Windows)
☐ Run `gh auth login`
☐ Choose GitHub.com -> HTTPS -> Login with web browser
☐ Confirm: "Logged in as your-username"

### Gemini CLI

**macOS:**
☐ Install Homebrew from brew.sh
☐ Add to PATH: `echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile`
☐ Run: `eval "$(/opt/homebrew/bin/brew shellenv)"`
☐ Install: `brew install gemini-cli`

**Windows:**
☐ Install Node.js LTS from nodejs.org
☐ Reopen PowerShell
☐ Install: `npm install -g @google/gemini-cli`

### Verify Everything

☐ Run `gemini` in your terminal
☐ Choose "Login with Google"
☐ Complete browser authentication
☐ Free tier: 60 requests/min, 1,000 requests/day

## Key Concepts

### What is an LLM?

A probabilistic pattern engine for text. It learns statistical relationships between tokens and predicts the most likely next token, step by step.

### How LLMs Generate Code

- Trained on large amounts of code + documentation
- Learned patterns in syntax, structure, and common solutions
- Predicts most likely next tokens in a programming language
- Does not run or test code unless connected to tools

### Strengths & Limitations

| Strengths | Limitations |
|-----------|------------|
| Autocomplete entire functions | Silent logical errors |
| Infer intent from partial instructions | Hallucinated functions or libraries |
| Generalize from known patterns | Outdated APIs |
| | Confident but wrong assumptions |

## Resources

- [CUNY AI Lab](https://ailab.gc.cuny.edu/)
- [CAIL Sandbox](https://chat.ailab.gc.cuny.edu/)
- [VS Code Documentation](https://code.visualstudio.com/docs)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Documentation](https://docs.github.com)
- [GitHub CLI](https://cli.github.com/)
