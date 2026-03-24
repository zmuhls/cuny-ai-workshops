# Prompting in Praxis - Workshop Companion Resource

**Workshop Platforms:** 
- [CUNY Open WebUI Experimental Pilot](https://openwebui.cuny.qzz.io/) for model comparison
- [Historical OCR Tool](https://huggingface.co/spaces/milwright/historical-ocr) for document analysis

*This resource guides you through hands-on prompting exercises using both platforms for AI model comparison and historical document analysis.*

## Quick Reference: AI-LLM Glossary

### Core Concepts
- **Generative AI:** AI that creates content based on patterns from training data
- **Large Language Model (LLM):** Neural networks trained on vast text corpora
- **Vision Language Model (VLM):** AI models that process both text and images
- **Training Data:** Source material that shapes AI model behavior and knowledge

### Prompting Techniques
- **Prompt Engineering:** Systematic design and refinement of input instructions
- **System Message:** Persistent instructions that set AI behavior and role
- **Temperature (0-2):** Controls randomness - lower = focused, higher = creative
- **Top-p:** Probability threshold for token selection

### Model Comparison Framework
- **Zero-shot:** AI performs task without examples
- **Few-shot:** AI learns from provided examples
- **Chain-of-thought:** AI explains reasoning step by step

## Exercise 1: Document Completion Worksheet

### Setup Instructions
1. Log into [Open WebUI](https://openwebui.cuny.qzz.io/)
2. Select model: **Qwen3-235B-A22B** or **GPT-OSS-120B**
3. Set temperature: **0.2** (focused completion)

### Prompt Template
```
Complete the incomplete paragraph in the following excerpt from a primary source:

[Insert your historical document excerpt here]

Instructions:
- Maintain the original writing style and historical period
- Fill gaps with contextually appropriate content
- Indicate uncertainty where historical facts are unclear
- Preserve the document's original tone and perspective
```

### Temperature Experiment Log

| Temperature | Model Used | Completion Quality | Historical Accuracy | Notes |
|-------------|------------|-------------------|-------------------|-------|
| 0.2         |            |                   |                   |       |
| 0.5         |            |                   |                   |       |
| 0.8         |            |                   |                   |       |

### Observations
**Which temperature setting produced the most historically appropriate completion?**

_______________________________________________

**How did different models handle uncertain or ambiguous content?**

_______________________________________________

## Exercise 2: Historical OCR Analysis Worksheet

### Setup Instructions
1. Navigate to Historical OCR tool: **https://huggingface.co/spaces/milwright/historical-ocr**
2. Upload historical document image
3. Process with specialized historical document capabilities

### OCR Analysis Process
1. **Upload Document:** Select historical document image for analysis
2. **OCR Processing:** Use Historical OCR tool optimized for historical materials
3. **Review Results:** Examine transcription accuracy and insights
4. **Follow-up Analysis:** Copy results to Open WebUI for enhanced interpretation

### Follow-up Analysis in Open WebUI
```
Based on this OCR transcription from a historical document:

[Paste Historical OCR results here]

Provide:
1. Historical context and significance
2. Enhanced metadata following Dublin Core standards
3. Corrections to any transcription errors you notice
4. Analysis of writing style and period characteristics
```

### Document Analysis Comparison

#### Document 1: ________________________________

| Model | Transcription Accuracy | Historical Context | Metadata Quality | Overall Score |
|-------|----------------------|-------------------|-----------------|---------------|
| GPT-4o |                      |                   |                 |               |
| Gemini Pro Vision |           |                   |                 |               |
| Claude 3.5 Sonnet |           |                   |                 |               |

#### Document 2: ________________________________

| Model | Transcription Accuracy | Historical Context | Metadata Quality | Overall Score |
|-------|----------------------|-------------------|-----------------|---------------|
| GPT-4o |                      |                   |                 |               |
| Gemini Pro Vision |           |                   |                 |               |
| Claude 3.5 Sonnet |           |                   |                 |               |

## Exercise 3: Model Comparison Matrix

### Evaluation Criteria

Rate each model's performance (1-5 scale, 5 = excellent) across different tasks:

#### Text-Based Tasks
| Model | Document Completion | Historical Context | Writing Style | Uncertainty Handling |
|-------|-------------------|-------------------|---------------|---------------------|
| GPT-4o |                   |                   |               |                     |
| Claude 3.5 Sonnet |        |                   |               |                     |
| Llama Model |              |                   |               |                     |

#### Vision-Based Tasks
| Model | OCR Accuracy | Image Description | Metadata Extraction | Document Assessment |
|-------|-------------|------------------|-------------------|-------------------|
| GPT-4o |             |                  |                   |                   |
| Gemini Pro Vision |   |                  |                   |                   |
| Mistral Vision |      |                  |                   |                   |

## Reflection Questions

### Understanding AI Capabilities
**What surprised you most about AI model performance differences?**

_______________________________________________

**Which tasks seemed most challenging for the AI models?**

_______________________________________________

### Practical Applications
**How could you integrate these prompting techniques into your research workflow?**

_______________________________________________

**What ethical considerations should guide AI use in historical research?**

_______________________________________________

### Critical Evaluation Skills
**What criteria would you use to evaluate AI-generated transcriptions for accuracy?**

_______________________________________________

**How can you identify when an AI model is "confabulating" (generating plausible but incorrect information)?**

_______________________________________________

## Prompt Library - Templates for Future Use

### Historical Document Transcription
```
Transcribe this historical document with attention to:
- Exact spelling and punctuation as written
- Notes on illegible sections [marked as unclear]
- Historical context where relevant
- Document condition observations
```

### Metadata Extraction
```
Extract bibliographic metadata from this document following Dublin Core standards:
- Title/Subject
- Creator/Author  
- Date/Period
- Description
- Type/Format
- Language
- Rights/Restrictions
```

### Comparative Analysis
```
Compare this document to [specific historical period/style/genre]:
- Stylistic similarities and differences
- Historical context alignment
- Unique features or anomalies
- Significance within broader historical narrative
```

## Best Practices for AI-Assisted Research

### Do's
- ✅ Always verify AI-generated content against primary sources
- ✅ Use multiple models for cross-verification
- ✅ Clearly document which AI tools were used and how
- ✅ Maintain critical evaluation of all AI outputs
- ✅ Consider AI as a research assistant, not authoritative source

### Don'ts
- ❌ Accept AI transcriptions without verification
- ❌ Rely solely on AI for historical interpretation
- ❌ Use AI-generated content without proper attribution
- ❌ Assume AI has access to specialized archival knowledge
- ❌ Ignore potential biases in AI training data

## Resources for Continued Learning

- [CUNY Open WebUI Documentation](https://openwebui.cuny.qzz.io/docs)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [AI Ethics in Academic Research Guidelines](https://www.cuny.edu/ai-ethics)
- [Digital Humanities AI Best Practices](https://dh.gu.se/ai-guidelines)

## Workshop Feedback

**What aspects of prompting practice would you like to explore further?**

_______________________________________________

**How confident do you feel using Open WebUI for your research needs?**

_______________________________________________

**What additional training or resources would be helpful?**

_______________________________________________