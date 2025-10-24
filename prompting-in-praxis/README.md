# Prompting in Praxis

_A CUNY AI Lab workshop on language model concepts and prompting techniques for academics and instructors._

This interactive workshop introduces key concepts in Large Language Model (LLM) prompting and provides hands-on experience using the [CUNY Open WebUI experimental pilot](https://openwebui.cuny.qzz.io/) for comparing AI models. Participants develop practical skills for historical research, document analysis, and critical evaluation of AI-generated content.

**Workshop Platform:** [CUNY Open WebUI Experimental Pilot](https://openwebui.cuny.qzz.io/)  
**Duration:** 90 minutes  
**Format:** Interactive workshop with live model comparison exercises

_This workshop was originally conducted as part of the Teaching and Learning Center at the CUNY Graduate Center._

## About the CUNY AI Lab

The **CUNY AI Lab** is a faculty and staff-led incubator for experimentation with AI by CUNY researchers across disciplines, strengthening CUNY's position at the leading edge of technological innovation. Located at the CUNY Graduate Center and led by experienced scholars and technologists who have built widely used open publishing platforms, the Lab fosters momentum for AI experimentation while foregrounding ethical practices and values that reinforce CUNY's mission of accessible, equitable, and transformative education.

This workshop is part of the CUNY AI Lab's commitment to developing critical AI literacy among faculty, staff, and students across the university system.

---

## Workshop Features

- **Live Model Comparison**: Real-time comparison of outputs from Qwen3-235B-A22B, GPT-OSS-120B, Gemma-3-27B, and other models using Open WebUI
- **Hands-On Exercises**: Interactive prompting practice with historical documents and transcription tasks
- **Vision Model Integration**: Upload and analyze historical documents using the Historical OCR tool at https://huggingface.co/spaces/milwright/historical-ocr
- **Parameter Experimentation**: Explore temperature, top-p, and system message effects on outputs
- **Collaborative Learning**: Group exercises and shared evaluation of AI model performance
- **Critical Evaluation Skills**: Framework for assessing AI-generated content accuracy and reliability

---

<details>
<summary><strong>Mad-Lib Warm-Up</strong></summary>

**Term Bank:** `API`, `Batch Prompting`, `Model`, `Prompt`, `Training Data`, `Embeddings`, `System Message`, `Temperature`, `Top-p`, `Tokens`

> **Anatomy of a Prompt:**

```text
A(n) [Prompt] begins with a [System Message] that tells the [Model] which role to play.
By lowering [Temperature] or [Top-p], you shrink the model's creative range.
Once authenticated with a secret key, the request travels through an [API].
After slicing language from your prompt into [Tokens], the AI system consults its [Training Data] to predict the next steps in the sequence based on mathematical vectors called [Embeddings].
Even so, gym class heroes like to speed things up with [Batch Prompting].
```

</details>

<details>
<summary><strong>AI-LLM Glossary</strong></summary>

### Key Concepts

- **Generative AI:** A subset of artificial intelligence that processes natural language input to generate content (text, images, or music) based on patterns from training data.
- **LLM (Large Language Model):** A transformer-based neural network with billions of parameters, trained on vast text corpora to predict and generate language.
- **Vision Language Model (VLM):** A model that processes and interprets visual data (images) to extract information, used for tasks involving both text and images.
- **Training Data:** Sprawling codex of text and/or image data whose statistical patterns guide the behavior of AI models trained on it.
- **Token:** A small unit of text (often a word or sub-word) that the model processes and predicts sequentially.

### Prompting Methods

- **Prompt:** The explicit instruction or input you provide to a language model to elicit a response.
- **System Message:** A special instruction at the start of a conversation that sets persistent rules and behavior for the model, distinct from user prompts.
- **Temperature:** A sampling parameter (0–2) that controls output randomness: lower values make responses more focused while higher values increase creativity.
- **Top-p:** Helps decide which words (tokens) a model should consider when generating text, balancing common words and more varied options.

### Advanced Techniques

- **Prompt Engineering:** The systematic practice of designing, testing, and refining prompts to achieve specific outputs.
- **Fine-Tuning:** Further training a pre-trained model on custom labeled data to specialize its behavior for particular tasks.
- **Batch Prompting:** A method for submitting multiple prompt variations at once to compare outputs efficiently.
- **OCR (Optical Character Recognition):** Technology that converts different types of documents into editable and searchable text data.

### Infrastructure

- **API:** Application Programming Interface – protocols that allow different software to communicate, enabling interactions with AI models.
- **API Key:** A unique code used to authenticate and authorize access to an API, ensuring secure and controlled usage.
- **Model Provider:** The organization or platform that hosts and provides access to a specific AI model via an API.

</details>

<details>
<summary><strong>Open WebUI Access Guide</strong></summary>

**CUNY Open WebUI Experimental Pilot:** [https://openwebui.cuny.qzz.io/](https://openwebui.cuny.qzz.io/)

### Getting Started

1. **Sign Up**: Visit the CUNY Open WebUI portal and create an account using your CUNY credentials
2. **Select Models**: Choose from multiple available models including:
   - **Qwen3-235B-A22B** - Large language model with advanced multilingual reasoning capabilities
   - **GPT-OSS-120B** - High-performance open-source model with strong analytical capabilities
   - **Gemma-3-27B** - Google's efficient and responsive language model
   - **Other open-source models** - Various architectures and specialized capabilities

### Key Features

- **Multiple Model Access**: Compare outputs across different AI models
- **Vision Capabilities**: Upload and analyze images with vision-enabled models
- **Conversation History**: Save and revisit your prompting experiments
- **Temperature Controls**: Adjust creativity/determinism settings
- **System Messages**: Set persistent instructions for model behavior

### Workshop Integration

This platform provides hands-on experience with:
- Prompt engineering techniques
- Model comparison and evaluation
- Vision model capabilities for document analysis
- Temperature and parameter adjustment
- Historical document transcription workflows

</details>

<details>
<summary><strong>Hands-On Prompting Exercises</strong></summary>

**Platform:** Use [CUNY Open WebUI](https://openwebui.cuny.qzz.io/) for all exercises

### Exercise 1: Document Completion

**Objective:** Test how different models handle incomplete historical texts

**Setup in Open WebUI:**
1. Select a model (try Qwen3-235B-A22B first, then compare with GPT-OSS-120B)
2. Set temperature to 0.2 for focused completion
3. Use this prompt template:

```prompt
Complete the incomplete paragraph in the following excerpt from a primary source:

[insert your historical document excerpt here]

Maintain the original writing style and historical context.
```

**Experiment:** Try the same prompt with temperature settings of 0.2, 0.5, and 0.8 to observe how creativity affects historical accuracy.

### Exercise 2: Document OCR Analysis with Historical OCR

**Objective:** Use specialized OCR tools for historical document transcription and analysis

**Setup:**
1. Navigate to the Historical OCR tool: **https://huggingface.co/spaces/milwright/historical-ocr**
2. Upload historical document images (handwritten texts, archival materials, manuscripts)
3. Use the specialized historical document processing capabilities

**Process:**
1. **Upload Document:** Select historical document image for analysis
2. **OCR Processing:** Let the Historical OCR tool extract text and analyze document structure
3. **Review Results:** Examine transcription accuracy optimized for historical materials
4. **Compare with Text Models:** Copy OCR output to Open WebUI for further analysis

**Follow-up Analysis in Open WebUI:**
Use the OCR results with text models for enhanced interpretation:

```prompt
Based on this OCR transcription from a historical document:

[Paste Historical OCR results here]

Provide:
1. Historical context and significance
2. Enhanced metadata following Dublin Core standards
3. Corrections to any transcription errors you notice
4. Analysis of writing style and period characteristics
```

### Exercise 3: Model Comparison

**Objective:** Compare outputs across different models using the same prompt

**Process:**
1. Choose one historical document or text excerpt
2. Use identical prompts across 3 different models available in Open WebUI
3. Document differences in:
   - Accuracy of transcription
   - Interpretation of context
   - Handling of ambiguous elements
   - Response structure and completeness

</details>

<details>
<summary><strong>Live Model Comparison Workshop</strong></summary>

**Platform:** [CUNY Open WebUI](https://openwebui.cuny.qzz.io/) for real-time comparison

### Document Analysis Demonstration

**Workshop Activity:** Participants will use Open WebUI to analyze historical documents in real-time and compare results across multiple models.

#### Sample Documents Available:

1. **Handwritten Recipe Card** - Test OCR capabilities on cursive handwriting
2. **18th-Century Satirical Engraving** - Challenge vision models with mixed text/image content
3. **Historical Manuscripts** - Evaluate handling of aged document conditions

#### Live Comparison Process:

**Step 1: Setup**
- Log into Open WebUI
- Select first model (e.g., Qwen3-235B-A22B)
- Upload chosen document

**Step 2: Baseline Analysis**
```prompt
Analyze this historical document and provide:
1. Complete transcription of all visible text
2. Descriptive alt-text for accessibility
3. Historical context and significance
4. Document condition assessment
```

**Step 3: Model Switching**
- Switch to different model (e.g., Claude 3.5 Sonnet, Gemini Pro Vision)
- Use identical prompt for comparison
- Document variations in output

#### Evaluation Framework

When comparing model outputs, assess:

- **Transcription Accuracy**: Character-level precision, especially with challenging handwriting
- **Contextual Understanding**: Historical awareness and appropriate interpretations
- **Metadata Extraction**: Ability to identify dates, authors, locations, themes
- **Accessibility Features**: Quality of alt-text descriptions for visual elements
- **Response Structure**: Organization and completeness of analysis
- **Confidence Calibration**: Appropriate uncertainty when text is unclear

#### Workshop Outcomes

Participants will create a comparison matrix documenting model strengths and limitations for different document types and analysis tasks.

</details>

## Technical Requirements

**Platform Access:**
- CUNY credentials for [Open WebUI](https://openwebui.cuny.qzz.io/) signup
- Modern web browser with file upload capabilities
- Stable internet connection
- Basic familiarity with web interfaces

**Available AI Models:**
- **Qwen3-235B-A22B** - Large language model with advanced multilingual reasoning capabilities
- **GPT-OSS-120B** - High-performance open-source model with strong analytical capabilities
- **Gemma-3-27B** - Google's efficient and responsive language model
- **Other open-source models** - Various architectures and specialized capabilities

**Workshop Materials:**
- Detailed outline with structured agenda
- Companion resource with exercises and templates
- Historical document samples for analysis
- Model comparison frameworks
- Prompt library for continued use

## Workshop Innovation

- **First CUNY workshop** to integrate the Open WebUI experimental pilot
- **Real-time multi-model comparison** capabilities for academic research
- **Hands-on platform training** combined with prompting education
- **Secure, institution-based** AI access for scholarly work
- **Scalable framework** for additional CUNY AI literacy initiatives

## Teaching @ CUNY AI Toolkit

This workshop is part of the comprehensive **Teaching @ CUNY AI Toolkit**, a resource developed by the Teaching and Learning Center at the CUNY Graduate Center:

- **AI Toolkit Site:** [https://aitoolkit.commons.gc.cuny.edu/](https://aitoolkit.commons.gc.cuny.edu/)

The toolkit provides faculty and instructors across the CUNY system with practical guidance, workshop materials, and best practices for integrating AI tools into teaching and learning.

## Archive Notes

This workshop evolved from an original interactive web application into a live, interactive experience using the Open WebUI platform for real-time model comparison and the Historical OCR tool for document analysis. The current format transforms static web resources into hands-on exercises for academic research contexts.
