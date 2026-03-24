# Creative Coding with Generative AI

**Companion Worksheet**

*This worksheet guides you through creating browser-based generative art using AI-assisted prompting on the CUNY AI Lab Sandbox.*

## The Creative Coding Triangle

| Element | What It Does | Your Role |
|---------|-------------|-----------|
| **Rules** | Constraints and logic you set (loops, grids, conditionals) | Define the boundaries |
| **Randomness** | Surprises you invite in (random values, noise, chance) | Invite the unexpected |
| **Interpretation** | Curatorial choices you make (color, scale, what to keep) | Decide what stays |

## Prompt Anatomy

Structure your prompts with these five components:

1. **Role:** Assign a role (e.g., "creative coder")
2. **Stack Constraints:** Canvas + vanilla JavaScript, no external libraries
3. **Style:** Monochrome, geometric, early-computer aesthetic
4. **Motion + Interaction:** Animation loop + mouse/keyboard input
5. **Deliverable:** Single HTML file only (no markdown or explanation)

### Sample System Prompt

> Role: You are a creative coding assistant. Constraints: Follow constraints exactly as specified. Output: Single HTML files with embedded CSS and JavaScript.

## Activity 1: Constrained Generation (10 min)

Add the system prompt above to the Configuration panel, then try these user prompts:

- "Create a rotating spiral using only triangles"
- "Build a rain animation with exactly 4 colors"
- "Make generative art that tiles like wallpaper"

**Your prompt:**

------------------------------------------------------------------------

**What happened?**

------------------------------------------------------------------------

## Activity 2: Iterate and Refine (15 min)

Keep your previous result and refine it through conversation. Try follow-up prompts:

- "Add mouse interaction"
- "Make the movement faster"
- "Change the color palette to sunset tones"

**What changed after each iteration?**

------------------------------------------------------------------------

**What did you keep, and what did you discard?**

------------------------------------------------------------------------

## Activity 3: Parameter Exploration (15 min)

Try the same prompt with different settings:

**Temperature 0.1 (predictable) result:**

------------------------------------------------------------------------

**Temperature 1.8 (creative) result:**

------------------------------------------------------------------------

**How did the parameters change the output?**

------------------------------------------------------------------------

## Save the Recipe

For each piece you want to reproduce, record:

**System prompt used:**

------------------------------------------------------------------------

**Model + temperature + max tokens:**

------------------------------------------------------------------------

**User prompt(s):**

------------------------------------------------------------------------

**HTML file saved?** ☐ Yes (with date)

## Resources

- [CUNY AI Lab Sandbox](https://chat.ailab.gc.cuny.edu/)
- [System Prompts & Points of Departure](https://github.com/cuny-ai-lab/creative-coding/blob/main/prompts.md)
- [Model Registry](https://ailab.gc.cuny.edu/models/)
- Processing Foundation: [processing.org](https://processing.org/) / [p5js.org](https://p5js.org/)
