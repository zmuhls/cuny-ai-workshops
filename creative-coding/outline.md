# Creative Coding with Generative AI - Workshop Outline

## Workshop Information

**Title:** Creative Coding with Generative AI
**Date:** Thursday, February 19, 2026
**Duration:** 90 minutes
**Format:** Interactive workshop with live demos and hands-on activities
**Facilitators:** Zach Muhlbauer & Stefano Morello (CUNY AI Lab, New Media Lab, Teaching and Learning Center)

**Learning Objectives:**
- Understand the historical lineage from early computer art to contemporary creative coding
- Apply the creative coding triangle (rules, randomness, interpretation) to AI-assisted workflows
- Craft structured prompts that produce runnable single-file HTML art
- Iterate on AI-generated output through conversation, constraints, and parameter tuning

## Detailed Agenda

### Icebreaker: Describe an Algorithm You Already Know

**Activity:** Write a routine in three steps or fewer, framed as one of:
- **Conditional (If X then Y):** "If it's raining, grab an umbrella; otherwise, wear sunglasses."
- **Loop (Repeat until done):** Wash the dishes step by step until the sink is empty.
- **Sequence (First A then B):** Preheat the oven, mix the batter, pour it into a pan, then bake.

**Prompt:** In three steps or less, describe something you do in your everyday life and frame it as a conditional, a loop, or a sequence.

### Origins of Computer Art (1962-1965)

**Key Concepts:**
- Historical roots of computer art during the Bell Labs era
- Mixed equations with pseudo-random variations
- Generate order first; introduce disorder gradually
- Moved from plotter demonstrations to public exhibitions

### Vera Molnar: The "Machine Imaginaire"

**Key Concepts:**
- Art as a set of rules plus "a hint of disorder"
- Constrain a system; let chance disturb it
- Treat constraints as principles for art-making

### Creative Coding Today: The Web Browser as Canvas

**The Web Stack:**
- **HTML** - Foundation and walls; structure that holds everything up
- **CSS** - Paint, furniture, curtains; what makes it look like your place
- **JavaScript** - Light switches, doors, plumbing; parts that respond when you interact

**Key Concepts:**
- The browser is a portable art canvas
- Prefer portable, single-file artifacts
- Keep tools lightweight and portable

### The Creative Coding Triangle

**Framework:**
- **Rules:** Constraints and logic you set (loops, grids, conditionals)
- **Randomness:** Surprises you invite in (random values, noise, chance)
- **Interpretation:** Curatorial choices you make (color, scale, what to keep, what to throw away)

### Vibe Coding: Prompts as Prototypes

**Key Concepts:**
- "Vibe coding" attributed to Andrej Karpathy
- Prototype with prompts, then test in browser
- Generate fast; evaluate with your own eyes
- "No-review" vs reviewed iteration
- Adopt the mode that matches your goal

### Behind the Scenes: How Models Learn to Code

**Key Concepts:**
- Trained on public code: GitHub, Stack Overflow, documentation
- Learns patterns, not copy-paste
- A prompt triggers pattern matching across training data
- Output is probabilistic: same prompt can yield different results

### (Vibe) Coding with Intention

**Key Concepts:**
- Place AI-based coding on a continuum of control
- One-shot -> iterate -> constrain
- Decompose tasks to increase decision points (Xu et al., 2024)
- Utilize constraints to foster more deliberate choices

### Prompt Anatomy: Structure Prompts for Creative Code

**Five Components:**
1. Assign a role (e.g., "creative coder")
2. Constrain the stack: Canvas + vanilla JavaScript
3. Set the style: monochrome, geometric, early-computer
4. Require motion + interaction: animation loop + input
5. Demand a runnable deliverable: single HTML only

**Sample Prompt:**
> Role: You are a creative coder. Constraints: vanilla JS only; Canvas; full viewport; no external libraries. Aesthetic: monochrome; geometric; early computer art. Tech: requestAnimationFrame; mouse interaction. Output: return single HTML only (no markdown/explanation).

### Live Demo (10 minutes)

**Platform:** CUNY AI Lab Sandbox (Open WebUI) at chat.ailab.gc.cuny.edu

**Steps:**
1. Open chat.ailab.gc.cuny.edu
2. Create an account; await pending approval; then sign in
3. Confirm you're in by posting a thumbs-up in the chat
4. Choose a model: GLM 5 or Kimi K2.5

### Activity 1: Constrained Generation (10 minutes)

**Instructions:**
- Open the Configuration panel (right side)
- Add a system prompt:

> Role: You are a creative coding assistant. Constraints: Follow constraints exactly as specified. Output: Single HTML files with embedded CSS and JavaScript.

**Try user prompts with specific limits:**
- "Create a rotating spiral using only triangles"
- "Build a rain animation with exactly 4 colors"
- "Make generative art that tiles like wallpaper"

### Activity 2: Iterate and Refine (15 minutes)

**Instructions:**
- Keep your previous result and refine it through conversation
- Try follow-up prompts:
  - "Add mouse interaction"
  - "Make the movement faster"
  - "Change the color palette to sunset tones"
- Re-test each full HTML output

### Activity 3: Parameter Exploration (15 minutes)

**Instructions:**
- Experiment with max tokens (response length) and temperature (randomness, 0.0-2.0)
- Try the same prompt with different settings:
  - Temperature 0.1 (predictable) vs 1.8 (creative)
  - Max tokens 1024 (concise) vs 4096 (detailed)

**Discussion:** How do these parameters change the AI's creative output?

### Takeaways

- Teach a progression: one-shot -> iterate -> constraints
- Save prompts + parameters to reproduce results
- Share artifacts as single-page HTML sketches
- Treat curation as part of the creative act
- **Save the recipe:** System prompt, model + temperature + max tokens, the HTML file (with a date)

## Materials Needed

- Laptop/projection for demos
- Access to CUNY AI Lab Sandbox (chat.ailab.gc.cuny.edu)
- Modern web browser for testing HTML output
