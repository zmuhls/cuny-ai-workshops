# Vibe-Coding Prototypes - Workshop Outline

## Workshop Information

**Title:** Vibe-Coding Prototypes
**Date:** Tuesday, March 10, 2026
**Duration:** 90 minutes (4:00-5:30 pm)
**Format:** CAIL Spotlight Workshop #2
**Facilitators:** Stefano Morello, Zach Muhlbauer, Parisa Setayesh, and Stephen Zweibel (CUNY AI Lab)
**Prerequisite:** Foundations workshop (#1), or prior familiarity with the command line and Git/GitHub

**Learning Objectives:**
- Understand the difference between one-shot AI interactions and agentic tool-calling loops
- Use Gemini CLI to plan and execute a project reorganization
- Customize a web application through iterative AI-assisted prompting
- Generate project documentation using the `/save` command (AGENTS.md)
- Deploy a web application to GitHub Pages

## Detailed Agenda

### Part 0: Review + Framing (20 minutes)

#### Foundations Review

Reference: [Workshop #1 deck](https://cuny-ai-lab.github.io/gen-dev-foundations/#1)

**Quick review questions:**
- "How do LLMs generate code?" -- Code is just another language pattern. The model predicts the next token based on syntax, structure, and problem-solving patterns.
- "What are the four commands we learned through the CLI?" -- `pwd`, `cd`, `cd ..`, `ls`
- "What is git and what does it do?" -- A version-control system that tracks every change.

#### From Chatbots to Agents

**Prior AI tool usage:** ChatGPT, Claude, Copilot, Gemini -- "You type something, it 'types' back."

**What's happening:** Next-token prediction, very fast. Trained on a lot of text, learned patterns. Fluent but not "grounded."

**Tools & groundedness:** Sometimes the model searches the web, reads an uploaded file, or runs code. A *tool* is a function it can call: "search this," "fetch that," "calculate this."

**Agentic means it adapts:**
- **Regular (One shot):** You ask -> maybe one tool call -> answer
- **Agentic (It keeps going):** Look at the result -> decide what to do next -> call another tool -> repeat until the task seems done

**The agentic harness:** Something runs the loop: send a prompt -> check if it wants a tool -> run the tool -> feed the result back -> repeat. Examples: Claude Code, Cursor, Gemini CLI.

#### Three Progressively Complex Examples

1. **One tool call:** "What's the most recent article in CUNY Academic Works about open access?" -- Searches repository, returns citation.

2. **A few steps:** "Find recent books on music theory we don't already own." -- Searches WorldCat -> filters by holdings -> checks Primo -> verifies ISBNs -> returns ordering list.

3. **Try, fail, adjust:** "Check if these 20 ILL-requested titles are available in our catalog." -- Writes Python script -> 401 error -> adds authentication -> adjusts query from title to ISBN -> writes CSV.

---

### Part 1: Setup (10 minutes)

#### Install Homebrew / Node.js

**macOS:**
1. Install Homebrew from brew.sh
2. Add to PATH
3. Confirm: `brew --version`

**Windows:**
1. Install Node.js LTS from nodejs.org
2. Reopen PowerShell
3. Confirm: `node --version`

#### Install and Launch Gemini CLI

1. Install: `brew install gemini-cli` (macOS) / `npm install -g @google/gemini-cli` (Windows)
2. Run `gemini` in terminal
3. Complete Google login flow
4. Confirm Gemini is ready for prompts

---

### Part 2: Plan + Act (30 minutes)

#### Planning Stage

1. Download and unzip the starter files
2. `cd` into the unzipped folder from terminal
3. Run `gemini` to start the agent
4. Instruct: "Propose a plan to reorganize this directory; wait for my approval to implement it."

#### Acting Stage

Review and modify the plan where relevant, then instruct the agent to act on it.

**Expected result:** Reorganized directory with `index.html`, `css/style.css`, `js/timer.js`, `js/helpers.js`, `js/app-init.js`, `assets/icon.svg`, `config.json`.

#### Open and Test Project

1. Check file structure in terminal or Finder
2. Double-click `index.html` to open in browser
3. Try the focus timer: start, pause, reset
4. Check console for errors (`Cmd+Option+J` / `Ctrl+Shift+J`)
5. If broken, ask Gemini to fix it

#### Create AGENTS.md

Use the `/save` command to capture what the agent learned during reorganization. Gemini writes an `AGENTS.md` documenting: project purpose, file structure, and conventions.

---

### Part 3: Prototype + Publish (30 minutes)

#### Customize the Focus Timer

1. Prompt Gemini to add a feature (session history, sound alerts, custom intervals)
2. Keep changes in the right files: CSS in `css/`, JS in `js/`
3. Test locally in the browser
4. Revise one change at a time
5. Keep the app simple enough to publish today

#### Authenticate with GitHub CLI

1. Install: `brew install gh` (macOS) / `npm install -g gh` (Windows)
2. Run `gh auth login`
3. Choose GitHub.com -> HTTPS -> Login with web browser
4. Complete authentication
5. Confirm: `gh auth status`

#### Create Remote Repository

1. Initialize git locally: `git init`
2. Create repo on GitHub: `gh repo create REPO --public --source=.`
3. Confirm remote: `git remote -v`

#### Push to GitHub

1. Stage files: `git add .`
2. Commit: `git commit -m "first prototype"`
3. Push: `git push`

#### Enable GitHub Pages

1. Go to github.com/USERNAME/REPO
2. Click Settings tab
3. Click Pages in left sidebar
4. Under Source, select Deploy from a branch
5. Choose main -> / (root) and click Save
6. Visit USERNAME.github.io/REPO

## Materials Needed

- Laptop with internet access
- Modern web browser
- VS Code installed (from Workshop #1)
- Git and GitHub CLI configured (from Workshop #1)
- Admin access for software installation
- Starter files (provided as download link)
