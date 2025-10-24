# Critical Play with Large Language Models

_A CUNY AI Lab workshop exploring how game mechanics can reveal AI limitations through playful interactions._

Designed for graduate students and instructors interested in critical approaches to AI pedagogy. This workshop demonstrates how game-based interactions can serve as analytical scaffolds for understanding and critiquing large language model capabilities and limitations.

**Workshop Date:** Thursday, October 16, 2024
**Duration:** 90 minutes
**Format:** Interactive workshop with hands-on activities
**Facilitator:** Zach Muhlbauer (Teaching and Learning Center | Interactive Technology & Pedagogy Lab)

_This workshop was originally conducted as part of the Teaching and Learning Center at the CUNY Graduate Center._

## About the CUNY AI Lab

The **CUNY AI Lab** is a faculty and staff-led incubator for experimentation with AI by CUNY researchers across disciplines, strengthening CUNY's position at the leading edge of technological innovation. Located at the CUNY Graduate Center and led by experienced scholars and technologists who have built widely used open publishing platforms, the Lab fosters momentum for AI experimentation while foregrounding ethical practices and values that reinforce CUNY's mission of accessible, equitable, and transformative education.

This workshop is part of the CUNY AI Lab's commitment to developing critical AI literacy among faculty, staff, and students across the university system.

## Overview

Through hands-on activities, participants design games that expose AI behaviors including confabulation (generating plausible but incorrect information), reasoning failures, and context limitations.

## Key Concepts

- **Critical Play:** Using Mary Flanagan's framework of critical game design to examine AI systems
- **Playful Interactions:** Six types of interactions that reveal AI limitations (reflecting, jesting, imitating, challenging, tricking, contriving)
- **Game Mechanics as Scaffolds:** How game rules make AI failures immediately visible and pedagogically useful

## Workshop Structure

1. **Introductions** (10 min) - Welcome and participant introductions
2. **Game Mechanics Demo** (10 min) - Jeopardy! board emulator showing AI confabulation
3. **Critical Play Theory** - Mary Flanagan's iterative design model
4. **Playful Interactions** - Taxonomy of AI interaction types
5. **Quick Demo** (10 min) - Word association game with constrained prompts
6. **Critical Design Activity** (15 min) - Participants design their own AI-revealing games
7. **Shareback and Playtest** (15 min) - Present and test game designs

## Interactive Tools

- **[Jeopardy LM Demo](https://zmuhls.github.io/jeopardy-lm/)** - Interactive Jeopardy emulator for testing LLM knowledge boundaries
- **[Open WebUI (CUNY)](https://openwebui.cuny.qzz.io/)** - Platform for game design and playtest demonstrations

## Technical Details

### Built With

- [Reveal.js 4.5.0](https://revealjs.com/) - HTML presentation framework
- Custom Canvas visualizations (network graph, arcade game, chess board, word vectors, ripple causation)
- No build process required - runs directly in browser

### Features

- Responsive design (1400x900 with 4% margin)
- Vertical navigation for nested slides
- Timing indicators on activity slides
- Section-based styling for workshop phases
- Animated canvas visualizations that initialize on slide entry

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/zmuhls/critical-play.git
   cd critical-play
   ```

2. Open `index.html` directly in your browser - no build step required

3. Navigate with arrow keys:
   - Right/Left: Move between main sections
   - Down/Up: Explore nested slides within sections

## Slide Reference

### Title Slide
- Section: Intro
- Visualization: Animated network graph

### Welcome and Introductions (10 min)
- Name and pronouns
- Field of study or work
- Favorite game
- Visualization: Retro arcade game

### Game Mechanics as Analytical Scaffolds
- Chess.com example: ChatGPT making illegal moves
- Visualization: Chess board with illegal move attempts

### Jeopardy! Board Emulator
Three category types to test AI:
1. **Simple category** - Accurate baseline (e.g., US Presidents)
2. **Obscure real category** - Mixed results (e.g., Byzantine Empresses)
3. **Fictitious category** - Confabulation trigger (e.g., Emu Wars of 1932)

### Critical Play Theory
- Mary Flanagan's iterative design model
- Set goal → Develop rules → Prototype → Playtest → Revise → Repeat

### Playful Interactions Taxonomy

| Type | What it does | Try this |
|------|--------------|----------|
| **Reflecting** | Prompting AI to self-represent | Ask about self-understanding |
| **Jesting** | Generating humor/nonsense | Request absurd combinations |
| **Imitating** | Persona mimicry | Ask it to role-play |
| **Challenging** | Testing until failure | Push logical limits |
| **Tricking** | Boundary bypassing | Try jailbreak techniques |
| **Contriving** | Impossible content | Request non-existent things |

### Critical Design Activity (15 min)

**Game Format Options:**
- 20 Questions
- Exquisite Corpse
- Two Truths and a Lie
- Word Association
- Trivia/Quiz Games
- Riddles/Puzzles
- Chess/Game Annotation
- Role Play/Improv
- Storytelling Chains
- Debate/Argument
- Mad Libs

**Target AI Limitations:**
- Confabulation (generating plausible but factually incorrect or fabricated information)
- Logic inconsistency/reasoning failures
- Context window limitations
- Bias/stereotypes/harmful associations
- Sycophancy (excessive agreement)
- Instruction following failures
- Calibration issues (false confidence)
- Knowledge cutoff/temporal awareness
- Lack of theory of mind
- Safety guardrail bypasses

**Prompt Crafting:**
- **System prompt:** Configure AI behavior and constraints
  - Example: "You are playing 20 Questions. I'm thinking of a famous person. Ask me yes/no questions to guess who it is. Every question you ask must rhyme with your previous question. Do not provide explanations or commentary."
- **User prompt:** First message to start the game
  - Example: "I've thought of someone. Go ahead and ask your first question!"
- **Optional settings:** Temperature (0.0-1.5), Max tokens (50-1000)

### Shareback and Playtest (15 min)
Present game designs including:
- System prompt
- Starter prompt(s)
- Optional settings
- Expected outcomes

## Visualizations

Each visualization is self-contained and initializes when its slide becomes visible:

- `networkCanvas` - Animated network graph (title slide)
- `arcadeCanvas` - Retro arcade game (introductions)
- `chessCanvas` - Chess board with illegal moves (game mechanics slide)
- `vectorCanvas` - Word association semantic relationships (demo slide)
- `dominoCanvas` - Ripple causation chain reaction (expected outcomes slide)

## Research & Citations

- Flanagan, M. (2009). *Critical Play: Radical Game Design*. MIT Press.
- Petridis, S., Bazhydai, M., Kinzler, K. D., & Ahl, R. E. (2023). Interrogating AI: Characterizing Emergent Playful Interactions with ChatGPT. *CHI EA '23: Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems*.
- Palisade Research (2025). Playing chess against a stronger opponent can trigger frontier AI agents to cheat. *TIME Magazine*. [Article](https://time.com/7259395/ai-chess-cheating-palisade-research/)
- Nightly-Knight (Chess.com). Playing chess against ChatGPT | It is a cheater! [Blog post](https://www.chess.com/blog/Nightly-Knight/playing-chess-against-chatgpt-it-is-a-cheater)
- Acher, M. (2024). Debunking the Chessboard: Confronting GPTs Against Chess Engines. [Research blog](https://blog.mathieuacher.com/GPTsChessEloRatingLegalMoves/)
- r/ChatGPT community discussions on playful AI interactions

## Archive Notes

This workshop builds upon an original Reveal.js presentation with enhanced canvas visualizations and integrated Open WebUI platform access for live game design and playtesting. The current format combines interactive presentation elements with hands-on AI critique activities.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

This workshop is part of ongoing research into critical AI pedagogy. Feedback and contributions are welcome via issues or pull requests.

## Contact

For questions or workshop facilitation inquiries, contact via the Teaching and Learning Center or Interactive Technology & Pedagogy Lab.
