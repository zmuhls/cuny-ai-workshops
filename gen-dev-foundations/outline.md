# Foundations: Coding with Generative AI - Workshop Outline

## Workshop Information

**Title:** Foundations: Coding with Generative AI
**Date:** Spring 2026
**Duration:** 90 minutes
**Format:** CAIL Spotlight Workshop #1
**Facilitators:** Stefano Morello, Zach Muhlbauer, Parisa Setayesh, and Stephen Zweibel (CUNY AI Lab)

**Learning Objectives:**
- Understand how large language models generate code through probabilistic pattern matching
- Set up a development environment with VS Code and the integrated terminal
- Navigate the command line and perform basic file operations
- Initialize a Git repository and push code to GitHub
- Install and authenticate with Gemini CLI

## Detailed Agenda

### Part 1: Concepts & Context (30 minutes)

#### Icebreaker (10 min)

**Prompt:** "Where does coding live in your imagination?"

Turn to your neighbor and discuss:
- A. "Name a technical difficulty from your everyday life, work, or research."
- B. "How might you address that challenge if coding came easier to you?"

#### Demo: Vibe Coding in Action

Live walkthrough: building something from scratch with an AI coding agent. Observe how prompts via Gemini CLI turn a plain-language idea into working code, step by step, inside VS Code.

#### Concept: What is a Large Language Model?

**Definition:** A probabilistic pattern engine for text.
- Learns statistical relationships between tokens (not "facts")
- Predicts the most likely next token, step by step
- Generates output by repeating that prediction process

**Pipeline:** Tokens -> Vectors -> Attention -> Probabilities -> Output

#### Concept: How Does an LLM Actually Produce an Answer?

1. **Tokenize** - Break your prompt into tokens
2. **Embed** - Turn tokens into vectors
3. **Transform** - Attention mixes information across tokens
4. **Predict + decode** - Choose the next token; repeat

**Key insight:** Your prompt shapes the probability space. Wording changes can dramatically shift output.

#### Concept: How Do LLMs Generate Code?

- Code is just another language pattern
- Trained on large amounts of code + documentation
- Learned patterns in syntax, structure, and common problem solutions
- Predicts most likely next tokens in a programming language
- Does not run or test the code unless connected to tools

#### Concept: Strengths & Limitations

**What Works:**
- Autocomplete entire functions, not just words
- Infer intent from partial instructions
- Generalize from patterns seen before

**Where Things Go Wrong:**
- Silent logical errors
- Hallucinated functions or libraries
- Outdated APIs
- Confident but wrong assumptions

---

### Part 2: Development Environment (30 minutes)

#### What is VS Code?

A free code editor that works like a smart writing desk for programmers. Highlights code, catches errors, and connects to tools like Git and AI assistants.

**Why VS Code?**
- Free, open-source, runs on Mac, Windows, and Linux
- Built-in terminal, Git support, thousands of extensions
- Where AI coding agents (like Gemini CLI) do their work

#### Setup: Setting Up VS Code

1. Download VS Code from code.visualstudio.com
2. Install and open VS Code
3. Open the integrated terminal: Terminal -> New Terminal (or Ctrl+`)
4. Confirm it works -- command prompt should appear at the bottom

#### Concept: What is the Command Line?

A text-based interface for controlling your computer. Instead of clicking buttons, you type commands.

#### Tool: Command Line Basics -- Navigating

| Command | Action | Example Output |
|---------|--------|---------------|
| `pwd` | Print your current location | ~/my-project |
| `mkdir my-project` | Make a new folder | my-project |
| `cd my-project` | Move into a folder | -> my-project |
| `cd ..` | Go up one level | <- ~/ |

#### Tool: Command Line Basics -- Working with Files

| Command | Action | Example Output |
|---------|--------|---------------|
| `touch index.html` | Create a new file | index.html |
| `ls` | List what's in the folder | index.html / style.css / img/ |
| `mv index.html my-project` | Move a file into a folder | index.html -> my-project |

#### Concept: What is Git? What is GitHub?

**Git (Local):** A version control system that tracks every change. Go back in time, undo mistakes, work in parallel.

**GitHub (Cloud):** A website that stores Git repositories online. Share code, collaborate, host websites.

#### Tool: Git Basics -- Setting Up

| Command | Action |
|---------|--------|
| `git init` | Initialize a repo |
| `git add .` | Stage your changes |
| `git commit -m "first commit"` | Save a snapshot |

#### Tool: Git Basics -- Syncing & Inspecting

| Command | Action |
|---------|--------|
| `git status` | Check what changed |
| `git log --oneline` | View history |
| `git push origin main` | Push to GitHub |

#### Setup: Logging into GitHub

1. Install GitHub CLI: `brew install gh` (macOS) / `winget install GitHub.cli` (Windows)
2. Start login: `gh auth login`
3. Choose GitHub.com -> HTTPS -> Login with a web browser
4. Copy the one-time code, approve in browser
5. Confirm: "Logged in as your-username"

#### Setup: Pushing to GitHub

1. Create a README file: `touch README.md`
2. Stage your files: `git add README.md`
3. Commit: `git commit -m "first commit"`
4. Create a GitHub repo: `gh repo create my-project --public --source=.`
5. Push: `git push -u origin main`
6. Visit github.com/your-username/my-project

---

### Part 3: Installation & Setup (30 minutes)

#### Installing Gemini CLI

**macOS (Terminal):**
1. Install Homebrew from brew.sh
2. Add Homebrew to PATH
3. Install: `brew install gemini-cli`

**Windows (PowerShell):**
1. Install Node.js LTS from nodejs.org
2. Reopen PowerShell
3. Install: `npm install -g @google/gemini-cli`

#### Login Step

1. Run `gemini` in your terminal
2. Choose "Login with Google" and follow browser prompt
3. Free tier: 60 requests/min, 1,000 requests/day

#### Troubleshooting

Group troubleshooting session for VS Code, GitHub CLI, Git, Gemini CLI installation issues.

#### What's Next

**Upcoming Workshop:** Vibe-Coding Prototypes (March 10, 4:00-5:30 pm)
- Use AI from the command line to build a small prototype
- Model prompting, project design, and troubleshooting
- Prerequisite: this workshop, or prior familiarity with CLI and Git/GitHub

## Materials Needed

- Laptop with internet access
- Modern web browser
- Admin access for software installation (VS Code, Homebrew/Node.js, Gemini CLI)
