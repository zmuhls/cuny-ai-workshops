# Vibe-Coding Prototypes

**Companion Worksheet**

*This worksheet guides you through building, customizing, and deploying a web application using Gemini CLI.*

## Agentic AI: Key Concepts

| Concept | Description |
|---------|------------|
| **Tool** | A function the model can call: "search this," "fetch that," "calculate this" |
| **One-shot** | You ask -> maybe one tool call -> answer |
| **Agentic** | Look at result -> decide what to do next -> call another tool -> repeat |
| **Harness** | The loop: send prompt -> check for tool call -> run tool -> feed result back -> repeat |

## Setup Checklist

☐ Homebrew installed (macOS) or Node.js installed (Windows)
☐ Gemini CLI installed: `brew install gemini-cli` / `npm install -g @google/gemini-cli`
☐ Gemini running: type `gemini` in terminal
☐ Google login completed

## Part 2: Plan + Act

### Planning Stage

1. Download and unzip the starter files
2. `cd` into the unzipped folder
3. Run `gemini`
4. Type: "Propose a plan to reorganize this directory; wait for my approval to implement it."

**What did the plan propose?**

------------------------------------------------------------------------

**What did you modify before approving?**

------------------------------------------------------------------------

### Acting Stage

Review and approve the plan. Expected directory structure:

```
index.html
css/style.css
js/timer.js
js/helpers.js
js/app-init.js
assets/icon.svg
config.json
```

### Test the Project

☐ File structure looks correct
☐ `index.html` opens in browser
☐ Focus timer starts, pauses, and resets
☐ No console errors

### Create AGENTS.md

Use the `/save` command to generate documentation.

☐ AGENTS.md created with project purpose, file structure, and conventions

## Part 3: Prototype + Publish

### Customize the Focus Timer

Prompt Gemini to add a feature. Try one of these or your own:
- "Add a session history that logs completed focus sessions"
- "Add a sound alert when the timer finishes"
- "Let me set custom time intervals"

**Feature you added:**

------------------------------------------------------------------------

**What worked? What broke?**

------------------------------------------------------------------------

### Publish to GitHub Pages

**Step-by-step:**

☐ `git init`
☐ `gh repo create REPO --public --source=.`
☐ `git add .`
☐ `git commit -m "first prototype"`
☐ `git push`
☐ Settings -> Pages -> Deploy from branch -> main -> / (root) -> Save
☐ Visit USERNAME.github.io/REPO

**Your published URL:**

------------------------------------------------------------------------

## Reflection

**What was the most useful Gemini CLI interaction?**

------------------------------------------------------------------------

**Where did the agent struggle or need correction?**

------------------------------------------------------------------------

**How does agentic coding differ from chatbot-style AI?**

------------------------------------------------------------------------

## Resources

- [CUNY AI Lab](https://ailab.gc.cuny.edu/)
- [CAIL Sandbox](https://chat.ailab.gc.cuny.edu/)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub CLI](https://cli.github.com/)
- [GitHub Documentation](https://docs.github.com)
- [AGENTS.md Specification](https://agents.md)
