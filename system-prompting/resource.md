# Composing System Prompts

**Companion Worksheet**

*This worksheet guides you through drafting a system prompt for the CUNY AI Lab Sandbox using the five-component framework.*

## What Is a System Prompt?

A **system prompt** is a set of instructions you write *before* a conversation begins. The student never sees it, but it shapes every response the AI gives. Think of it as setup instructions for a specialized tool: what task it handles, how it should operate, what guardrails to follow, and what's out of scope.

## Draft Your System Prompt

### Component 1: Context & Problem

Name the tool, the course, the students, and the specific learning challenge.

Template:
> You are a [tool type] for [course name]. Students are [relevant context]. The core problem: [specific learning challenge].

**Your context & problem:**

------------------------------------------------------------------------

### Component 2: Procedure

Tell the tool what to do, step by step.

Template:
> 1. Ask the student for [specific input] before responding.
> 2. Identify [priority concern] before addressing [secondary concerns].
> 3. For each issue, [specific action, e.g. ask a question rather than fix it].

**Your procedure:**

------------------------------------------------------------------------

### Component 3: Constraints

Define what the tool should not do and how it redirects.

Template:
> - Never [specific output to avoid].
> - If asked to [common student request], redirect by [specific alternative].
> - If uncertain about [domain content], say so explicitly.

**Your constraints:**

------------------------------------------------------------------------

### Component 4: Tone

One sentence on tone shapes how the tool communicates with every student.

Template:
> Tone: [Adjective and adjective]. Use phrases like "[example phrase]" and "[example phrase]."

**Your tone:**

------------------------------------------------------------------------

### Component 5: Output Format (Optional)

Useful when consistent structure helps students know what to expect.

Template:
> Format each response as:
> Observation: [what you notice]
> Focus: [one thing to work on]
> Next step: [a specific, actionable suggestion]
> Question: [something for the student to consider]

**Your output format:**

------------------------------------------------------------------------

## Assemble Your Full System Prompt

Combine all five components below:

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

## Test Your Prompt

1. Open the CUNY AI Lab Sandbox: [chat.ailab.gc.cuny.edu](https://chat.ailab.gc.cuny.edu/)
2. Click the settings gear at the top of a new conversation
3. Paste your system prompt into the System Prompt field
4. Select a model (see options below)
5. Ask questions your students would actually ask
6. Revise based on what breaks

## Models in the Sandbox

| Model | Best For |
|-------|----------|
| DeepSeek V3.2 | Complex, multi-step tasks |
| Kimi K2.5 | Visual and long-document tasks |
| GLM 5 | Extended reasoning and tool use |
| gpt-oss-120b | Lightweight, efficient tasks |
| Qwen3 235B | Multilingual support (100+ languages) |
| Gemma 3 27B | Everyday tasks, quick responses |
| Llama 3.1 70B | Reliable general-purpose option |

## Resources

- [CUNY AI Lab Sandbox](https://chat.ailab.gc.cuny.edu/)
- [Model Registry](https://ailab.gc.cuny.edu/models/)
- [Workshop Slides](https://cuny-ai-lab.github.io/system-prompting/)
- [GitHub Repository](https://github.com/cuny-ai-lab/system-prompting)
