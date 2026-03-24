# Vibe-Coding Prototypes - Workshop Archive Entry

## Workshop Overview

**Title:** Vibe-Coding Prototypes
**Date:** Tuesday, March 10, 2026
**Duration:** 90 minutes (4:00-5:30 pm)
**Format:** CAIL Spotlight Workshop #2
**Facilitators:** Stefano Morello, Zach Muhlbauer, Parisa Setayesh, and Stephen Zweibel (CUNY AI Lab)

## Workshop Categories

- AI-Assisted Development
- Web Development
- Developer Tools

## Description

This workshop is the second in the CAIL Spotlight series. Participants use Gemini CLI -- an agentic AI tool that runs in the terminal -- to plan, build, customize, and deploy a focus timer web application. The session covers what makes AI tools "agentic" (iterative tool-calling loops), then walks through a complete plan-act-test-publish cycle. Participants customize the application, generate AGENTS.md documentation, and deploy to GitHub Pages.

## Materials

All materials are licensed under a **Creative Commons Attribution-ShareAlike (CC-BY-SA) 4.0 International Public License**.

This archive contains workshop plans, slides, and interactive resources.

Materials: [Live Slides](https://cuny-ai-lab.github.io/vibe-coding-prototypes/) | [GitHub Repository](https://github.com/cuny-ai-lab/vibe-coding-prototypes)

## Learning Objectives

- Understand the difference between one-shot AI interactions and agentic tool-calling loops
- Use Gemini CLI to plan and execute a project reorganization
- Customize a web application through iterative AI-assisted prompting
- Generate project documentation using the `/save` command (AGENTS.md)
- Deploy a web application to GitHub Pages

## Workshop Agenda

### Part 0: Review + Framing (20 min)

- **Foundations review** from Workshop #1: LLM code generation, CLI basics, Git
- **From chatbots to agents:** one-shot vs. agentic interactions
- **The agentic harness:** prompt -> check for tool calls -> execute -> return -> repeat
- **Three examples:**
  1. Single tool call -- search CUNY Academic Works, return citation
  2. Multi-step -- search WorldCat, filter holdings, verify ISBNs, return ordering list
  3. Try-fail-adjust -- write Python script -> 401 error -> add auth -> adjust query -> write CSV

### Part 1: Setup (10 min)

- Install Homebrew (macOS) / Node.js (Windows)
- Install and launch Gemini CLI
- Google authentication

### Part 2: Plan + Act (30 min)

- **Planning:** Download starter files, have Gemini propose a reorganization plan
- **Acting:** Review, modify, and execute the plan
- **Testing:** Open focus timer in browser, verify functionality
- **Documenting:** Use `/save` to create AGENTS.md

### Part 3: Prototype + Publish (30 min)

- **Customize:** Add features via Gemini prompts (session history, sound alerts, custom intervals)
- **Authenticate:** GitHub CLI login
- **Create repo:** `gh repo create`
- **Push:** Stage, commit, push
- **Deploy:** Enable GitHub Pages, access published site
