# Composing System Prompts - Workshop Outline

## Workshop Information

**Title:** Composing System Prompts
**Date:** Monday, March 16, 2026
**Duration:** 90 minutes
**Format:** Interactive workshop (Week 1 of 3-week series: Using the CAIL Sandbox in the Classroom)
**Facilitators:** Stefano Morello & Zach Muhlbauer (CUNY AI Lab)

**Learning Objectives:**
- Distinguish system prompts from user prompts and understand their pedagogical role
- Evaluate system prompt quality through progressive examples (weak, mediocre, strong)
- Draft a system prompt using the five-component framework
- Apply advanced strategies including conditional behavior, epistemic guardrails, and multilingual support

## Detailed Agenda

### Workshop Roadmap: Three Weeks, Three Skills

| Week | Date | Topic |
|------|------|-------|
| **Week 1** | March 16 | **Composing System Prompts** -- Define how the AI thinks, responds, and engages with students |
| Week 2 | March 23 | **Curating Knowledge Collections** -- Upload syllabi, readings, and sources to ground AI models in course materials |
| Week 3 | March 30 | **Customizing Skills & Tools** -- Build specialized skills, tools, and workflows tailored to courses |

### What Is a System Prompt?

**Key Concepts:**
- A system prompt is a set of instructions written *before* a conversation begins
- The user (student) never sees it, but it shapes every response the AI gives
- **Key distinction:** The *user prompt* is what someone types in the chat. The *system prompt* is what the instructor composes behind the scenes.

### Where It Lives in Open WebUI

Two locations in the CUNY AI Lab Sandbox:

1. **Chat-Level System Prompt** - Click the settings gear at the top of any new conversation to set a prompt for that session
2. **Model Configuration** - Go to Workspace -> Models to create a custom model with a permanent system prompt

### Why System Prompts Matter

**Without System Prompt:** The AI does the work for the student.
> "Here's a strong introduction you could use: 'Throughout history, the question of racial identity has been central to American culture. In this essay, I will argue that...'"

**With System Prompt:** The AI scaffolds learning.
> "Let's work through this. What's the main argument you want your reader to encounter first? Try telling me in one sentence what your paper is really about -- don't worry about making it perfect yet."

### Models in the CUNY AI Lab Sandbox

All open-weight models, no data retained on external servers:
- **DeepSeek V3.2** - Large model; strong at complex, multi-step tasks
- **Kimi K2.5** - Reads text, images, and video; good for visual and long-document tasks
- **GLM 5** - Large model; extended step-by-step reasoning and tool use
- **gpt-oss-120b** - OpenAI's open-weight model; lightweight and efficient
- **Qwen3 235B** - Large model; strong multilingual support across 100+ languages
- **Gemma 3 27B** - Smaller, faster model; good for everyday tasks
- **Llama 3.1 70B** - Mid-size model; reliable general-purpose option

---

## Part I: The Anatomy of a Good System Prompt

### Example 1: Composition & Writing

**Weak:** "Help students write better."
- No role assignment, no boundaries, no success criteria

**Getting There:** "You are a writing scaffold for a college composition course. Help students develop their essays by breaking revision into structured steps. Ask them to identify their thesis before giving feedback. Don't write essays for them."
- Assigns a role, includes a basic pedagogical move, sets one boundary
- Missing: no procedural instructions, no awareness of student population, no edge-case handling

**Strong:** Full revision scaffold for English 101 position paper with:
- Procedure: request assignment prompt and draft, identify highest-priority concerns, ask questions rather than providing fixes
- Constraints: never generate substitute text, redirect "just fix it" requests, do not grade or evaluate
- Tone: warm and direct ("I notice..." and "What if you tried...")

### Example 2: Primary Source Analysis (History)

**Weak:** "Analyze historical documents."
- No methodological framework, no period focus, no handling of hallucinated facts

**Getting There:** "You are a history source-analysis tool. Help students analyze primary sources from American history. Ask them to consider the author, audience, and context of each document. Don't just summarize the document for them."
- Assigns a role, references a real methodology, sets a boundary
- Missing: no procedural steps, no handling of uncertainty, no historiographical perspective

**Strong:** Source-analysis tool for U.S. history survey (Reconstruction through Civil Rights) using Wineburg's historical thinking heuristics:
- Four moves: Sourcing, Contextualization, Close Reading, Corroboration
- Procedure: identify source first, guide through moves one at a time, ask why details matter, synthesize
- Constraints: never offer guidance before student attempts, never invent dates/names/events
- Tone: patient and curious

### Example 3: Close Reading & Literary Analysis

**Weak:** "Help with literary analysis."
- Defaults to plot summary, no theoretical framework, no requirement for textual evidence

**Getting There:** "You are a close-reading scaffold. Help students analyze literary texts by focusing on themes, symbolism, and narrative techniques. Don't just summarize the plot. Ask students to point to specific passages."
- Names specific analytical categories, addresses plot-summary problem, requires textual evidence
- Missing: no procedural steps, no critical framework, no attention to cultural context

**Strong:** Close-reading tool for introductory English course using New Criticism:
- Procedure: ask what student notices about language, examine textual features, connect to larger themes, guide toward interpretive claim
- Framework: treat text as self-contained object, look for tension/irony/paradox/ambiguity, reflect on method
- Constraints: facilitate multiple interpretations, redirect to text when students reach for biography/history
- Tone: encouraging and accessible

---

## Part II: Drafting Your System Prompt

### Five Core Components

1. **Context & Problem** - What course, what students, what learning challenge?

Template:
> You are a [tool type] for [course name]. Students are [relevant context]. The core problem: [specific learning challenge].

2. **Procedure** - What steps should the tool follow?

Template:
> 1. Ask the student for [specific input] before responding. 2. Identify [priority concern] before addressing [secondary concerns]. 3. For each issue, [specific action].

3. **Constraints** - What should it refuse to do, and how should it redirect?

Template:
> Never [specific output to avoid]. If asked to [common student request], redirect by [specific alternative]. If uncertain about [domain content], say so explicitly.

4. **Tone** - What register and affect should it use?

Template:
> Tone: [Adjective and adjective]. Use phrases like "[example phrase]" and "[example phrase]."

5. **Output Format** - How should it structure responses? (Optional)

Template:
> Format each response as: Observation: [what you notice] / Focus: [one thing to work on] / Next step: [actionable suggestion] / Question: [something for the student to consider]

---

## Part III: Advanced Strategies & Tips

### Going Further

- **Conditional Behavior:** "If the student submits a draft, focus on structure before style. If they ask a yes/no question, reframe it as an open one."
- **Conversational Brevity:** "Respond to one thing at a time. Do not front-load your full analysis."
- **Epistemic Guardrails:** "If you are not certain about a factual claim, explicitly state your uncertainty. Never fabricate citations."
- **Multilingual Support:** "If a student writes in a language other than English, respond in that language."

### Common Pitfalls

- **Too Long & Too Detailed** - A 2,000-word prompt can confuse the model. Prioritize the most important instructions.
- **Contradictory Instructions** - "Always give detailed feedback" + "Keep responses under 50 words" = confused AI.
- **Forgetting the Student's Perspective** - Test your prompt with questions your students actually ask.
- **Set It and Forget It** - System prompts need iteration. Use them, notice what breaks, revise.

## Materials Needed

- Laptop/projection for demos
- Access to CUNY AI Lab Sandbox (chat.ailab.gc.cuny.edu)
- System prompt templates (available in companion worksheet)
