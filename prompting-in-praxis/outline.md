# Prompting in Praxis - Workshop Outline

## Workshop Information

**Title:** Prompting in Praxis  
**Duration:** 90 minutes  
**Format:** Interactive workshop with hands-on Open WebUI exercises  
**Platforms:** 
- [CUNY Open WebUI Experimental Pilot](https://openwebui.cuny.qzz.io/) for model comparison
- [Historical OCR Tool](https://huggingface.co/spaces/milwright/historical-ocr) for document analysis

**Learning Objectives:**
- Understand fundamental concepts of Large Language Model prompting
- Practice prompt engineering techniques for historical research and document analysis
- Compare outputs across multiple AI models using Open WebUI
- Develop critical evaluation skills for AI-generated content
- Apply prompting techniques to real-world academic and research scenarios

## Detailed Agenda

### Opening: Mad-Lib Warm-Up (10 minutes)

**Activity:** Collaborative completion of "Anatomy of a Prompt" using term bank

**Term Bank:** `API`, `Batch Prompting`, `Model`, `Prompt`, `Training Data`, `Embeddings`, `System Message`, `Temperature`, `Top-p`, `Tokens`

**Template:**
> A(n) **[Prompt]** begins with a **[System Message]** that tells the **[Model]** which role to play. By lowering **[Temperature]** or **[Top-p]**, you shrink the model's creative range. Once authenticated with a secret key, the request travels through an **[API]**. After slicing language from your prompt into **[Tokens]**, the AI system consults its **[Training Data]** to predict the next steps in the sequence based on mathematical vectors called **[Embeddings]**. Even so, gym class heroes like to speed things up with **[Batch Prompting]**.

**Purpose:** Introduce key terminology through interactive engagement before technical deep-dive

### Platform Introduction: Open WebUI Setup (10 minutes)

**Guided Setup:**
1. **Account Creation:** Navigate to [https://openwebui.cuny.qzz.io/](https://openwebui.cuny.qzz.io/) and sign up with CUNY credentials
2. **Interface Tour:** Overview of key features
   - Model selection dropdown
   - Temperature controls
   - System message settings
   - Image upload capabilities
   - Conversation history
3. **Model Overview:** Available models and their capabilities
   - **GPT-4o** - OpenAI's flagship with vision capabilities
   - **Claude 3.5 Sonnet** - Anthropic's advanced reasoning model
   - **Gemini Pro Vision** - Google's multimodal model
   - **Llama models** - Meta's open-source alternatives
   - **Mistral models** - Including vision-capable variants

### Core Concepts Deep-Dive (15 minutes)

**Interactive Glossary Review:**

#### Key Concepts
- **Generative AI:** Pattern-based content generation from training data
- **Large Language Model (LLM):** Transformer networks trained on vast text corpora
- **Vision Language Model (VLM):** Multimodal models processing text and images
- **Training Data:** Source material influencing model behavior and knowledge

#### Prompting Fundamentals
- **Prompt Engineering:** Systematic design and refinement of input instructions
- **System Messages:** Persistent behavioral instructions
- **Temperature (0-2):** Creativity vs. consistency control
- **Top-p:** Token selection probability threshold
- **Context Window:** Memory limitations and conversation length

#### Infrastructure Understanding
- **API Integration:** How interfaces communicate with model providers
- **Model Providers:** Organizations hosting and serving AI models
- **Batch Processing:** Efficient handling of multiple requests

### Hands-On Exercise 1: Document Completion (20 minutes)

**Objective:** Explore how different models handle incomplete historical texts

**Setup in Open WebUI:**
1. Select GPT-4o model
2. Set temperature to 0.2 (focused completion)
3. Input provided historical document excerpt with missing sections

**Prompt Template:**
```
Complete the incomplete paragraph in the following excerpt from a primary source:

[Provided historical document with gaps]

Instructions:
- Maintain the original writing style and historical period
- Fill gaps with contextually appropriate content
- Indicate uncertainty where historical facts are unclear
- Preserve the document's original tone and perspective
```

**Comparative Analysis:**
- Test identical prompt with Claude 3.5 Sonnet
- Adjust temperature to 0.5 and 0.8 to observe creativity vs. accuracy trade-offs
- Document differences in:
  - Historical accuracy
  - Writing style consistency
  - Handling of ambiguous content
  - Response confidence levels

### Hands-On Exercise 2: Document OCR Analysis with Historical OCR (25 minutes)

**Objective:** Use specialized OCR tools for historical document transcription and analysis

**Materials:** Provided historical documents (handwritten recipe card, 18th-century engraving, manuscript page)

**Setup:**
1. Navigate to Historical OCR tool: https://huggingface.co/spaces/milwright/historical-ocr
2. Upload historical document images (handwritten texts, archival materials, manuscripts)
3. Use specialized historical document processing capabilities

**Process:**
1. **Upload Document:** Select historical document image for analysis
2. **OCR Processing:** Let the Historical OCR tool extract text optimized for historical materials
3. **Review Results:** Examine transcription accuracy and document insights
4. **Compare with Text Models:** Copy OCR output to Open WebUI for further analysis

**Follow-up Analysis in Open WebUI:**
Use the OCR results with text models for enhanced interpretation:

```
Based on this OCR transcription from a historical document:

[Paste Historical OCR results here]

Provide:
1. Historical context and significance
2. Enhanced metadata following Dublin Core standards
3. Corrections to any transcription errors you notice
4. Analysis of writing style and period characteristics
```

**Comparative Analysis:**
- Compare Historical OCR accuracy with different document types
- Evaluate text model interpretation of OCR results
- Assess combined OCR + LLM workflow effectiveness
- Document strengths and limitations of each approach

### Exercise 3: Live Model Comparison Workshop (15 minutes)

**Collaborative Activity:** Real-time model comparison using participant-selected documents

**Process:**
1. **Document Selection:** Participants vote on document for analysis
2. **Parallel Processing:** Split into groups, each using different models
3. **Results Comparison:** Share outputs and identify variations
4. **Evaluation Matrix:** Collective assessment of model strengths/limitations

**Evaluation Framework:**
- **Transcription Accuracy:** Character-level precision
- **Contextual Understanding:** Historical awareness and appropriate interpretations  
- **Metadata Extraction:** Identification of dates, authors, locations, themes
- **Accessibility Features:** Quality of alt-text descriptions
- **Response Structure:** Organization and completeness
- **Confidence Calibration:** Appropriate uncertainty handling

### Wrap-Up and Practical Applications (5 minutes)

**Key Takeaways:**
- Prompt engineering as iterative refinement process
- Model selection based on task requirements
- Critical evaluation of AI outputs in academic contexts
- Integration strategies for research workflows

**Next Steps:**
- Continued experimentation with Open WebUI platform
- Application to participants' specific research domains
- Development of personal prompt libraries
- Collaborative sharing of effective prompting strategies

## Materials Needed

- Access to [CUNY Open WebUI](https://openwebui.cuny.qzz.io/)
- Historical document samples (provided)
- Laptop/device for each participant
- Projection for guided demonstrations
- Printed reference materials (glossary, prompt templates)

## Assessment and Outcomes

**Formative Assessment:**
- Active participation in exercises
- Quality of prompt design and refinement
- Critical analysis of model outputs
- Collaborative sharing and feedback

**Workshop Success Indicators:**
- Participants can articulate differences between AI models
- Effective use of temperature and system message controls
- Development of evaluation criteria for AI-generated content
- Integration of prompting techniques into research workflows
- Understanding of ethical considerations and limitations

## Technical Requirements

- Stable internet connection
- CUNY credentials for Open WebUI access
- Modern web browser
- Basic familiarity with uploading files and web interfaces