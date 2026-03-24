# Vibe-Coding Prototypes

_A CUNY AI Lab workshop on building and deploying web applications with AI coding agents._

This workshop is the second in the CAIL Spotlight series. Participants use Gemini CLI -- an agentic AI tool that runs in the terminal -- to plan, build, customize, and deploy a focus timer web application from starter files to a published GitHub Pages site.

**Workshop Date:** Tuesday, March 10, 2026
**Duration:** 90 minutes (4:00-5:30 pm)
**Format:** CAIL Spotlight Workshop #2
**Facilitators:** Stefano Morello, Zach Muhlbauer, Parisa Setayesh, and Stephen Zweibel (CUNY AI Lab)
**Prerequisite:** Foundations workshop (#1), or prior familiarity with the command line and Git/GitHub

_This workshop was originally conducted as part of the CAIL Spotlight series at the CUNY Graduate Center._

## About the CUNY AI Lab

The **CUNY AI Lab** is a faculty and staff-led incubator for experimentation with AI by CUNY researchers across disciplines, strengthening CUNY's position at the leading edge of technological innovation. Located at the CUNY Graduate Center and led by experienced scholars and technologists who have built widely used open publishing platforms, the Lab fosters momentum for AI experimentation while foregrounding ethical practices and values that reinforce CUNY's mission of accessible, equitable, and transformative education.

This workshop is part of the CUNY AI Lab's commitment to developing critical AI literacy among faculty, staff, and students across the university system.

## Overview

The workshop moves from reviewing foundational concepts to understanding what makes AI tools "agentic" (iterative tool-calling loops that adapt to results), then walks through a complete plan-act-test-publish cycle using Gemini CLI inside VS Code. Participants customize a focus timer, generate an AGENTS.md documentation file, and deploy to GitHub Pages.

## Learning Objectives

- Understand the difference between one-shot AI interactions and agentic tool-calling loops
- Use Gemini CLI to plan and execute a project reorganization
- Customize a web application through iterative AI-assisted prompting
- Generate project documentation using the `/save` command (AGENTS.md)
- Deploy a web application to GitHub Pages

## Workshop Structure

### Part 0: Review + Framing (20 min)
1. **Foundations Review** - LLM code generation, CLI basics, Git concepts
2. **From Chatbots to Agents** - One-shot vs. agentic interactions
3. **The Agentic Harness** - Prompt -> check for tool calls -> execute -> return -> repeat
4. **Three Examples** - Single tool call, multi-step, try-fail-adjust

### Part 1: Setup (10 min)
5. **Install Homebrew / Node.js** - Package manager setup
6. **Install and Launch Gemini CLI** - Authentication and verification

### Part 2: Plan + Act (30 min)
7. **Planning Stage** - Download starter files, have Gemini propose a reorganization plan
8. **Acting Stage** - Review and execute the plan
9. **Open and Test** - Verify the focus timer works in browser
10. **Create AGENTS.md** - Use `/save` to document the project for future agentic use

### Part 3: Prototype + Publish (30 min)
11. **Customize** - Add features via Gemini prompts (session history, sound alerts, custom intervals)
12. **Authenticate** - GitHub CLI login
13. **Create Remote Repository** - `gh repo create`
14. **Push to GitHub** - Stage, commit, push
15. **Enable GitHub Pages** - Deploy and access published site

## Interactive Tools

- **[Gemini CLI](https://github.com/google-gemini/gemini-cli)** - Open-source AI coding agent
- **[GitHub CLI](https://cli.github.com/)** - Terminal-based GitHub interaction
- **[VS Code](https://code.visualstudio.com/)** - Development environment
- **[AGENTS.md Spec](https://agents.md)** - Documentation format for agentic tools

## Technical Details

### Slide Deck

- **[Live Slides](https://cuny-ai-lab.github.io/vibe-coding-prototypes/)** - Interactive slideshow
- **[GitHub Repository](https://github.com/cuny-ai-lab/vibe-coding-prototypes)** - Source code and materials

### Related Workshop

- **[Foundations: Coding with Generative AI](https://cuny-ai-lab.github.io/gen-dev-foundations/)** - CAIL Spotlight Workshop #1 (prerequisite)

## License

All materials are licensed under a **Creative Commons Attribution-ShareAlike (CC-BY-SA) 4.0 International Public License** unless otherwise noted.
