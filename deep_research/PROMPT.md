# Deep Research Prompt — Human-AI Coevolution Paper Curation (v2: expansion round)

Copy-paste the prompt below into ChatGPT Deep Research, Gemini Deep Research, Perplexity Deep Research, or Claude with the research tool enabled. Drop the resulting report into this folder (`deep_research/`) as `report-YYYY-MM-DD.md`. We will then convert verified entries into `papers.yaml`.

**Difference from v1.** This is the *expansion round*. The index already has 110 verified papers (listed at the bottom of this prompt). Your job is to find papers we have **not yet included**, with the same rigour as the original curation but explicitly avoiding duplicates.

---

## PROMPT

I am expanding a curated, structured index of academic papers on **how humans must evolve to use AI well as AI advances**. The index is organized by a four-phase framework — Humans Use AI as Tool, Assistant, Executor, Organization — for how humans use AI in their work. As humans delegate more to AI, the human-side capabilities required shift from critical thinking, to evaluative expertise, to metacognitive monitoring, to systems thinking.

The index currently has 110 verified entries (titles listed below in the **Existing entries** section). I need you to produce a vetted, deduplicated list of **30–50 additional high-quality papers** that fit the same scope but are **not already in the list**. This is an expansion pass, not a re-curation.

### Inclusion criteria

A paper belongs in the index when it bears on **how humans develop and sustain the capabilities needed to use AI well at one of the four phases**. The framing is human-first: human capability is the dependent variable, AI is the changing environment around it.

Concretely, a paper fits when it does one or more of:

1. **Documents a human capability that AI use empowers or weakens** at a given phase — critical thinking, evaluative expertise, metacognitive monitoring, systems thinking. Examples: longitudinal studies of doctor trust in AI diagnoses; field studies of developer skill change under Copilot use; experiments measuring student over-reliance on chatbots.
2. **Studies the feedback humans give to AI during use, and how that feedback shapes the model** in a way that then re-shapes future human behaviour. RLHF, preference learning, training-from-use — but viewed through the sycophancy / mode-collapse / format-optimization lens, not as pure method papers.
3. **Is a position or survey piece** that argues for or characterizes how humans should evolve alongside AI.

**Calibration anchors (exemplar in-scope papers, already in the index):**

- Pedreschi et al., *Human-AI Coevolution* (Artificial Intelligence journal, 2024; arXiv:2306.13723) — the framing paper that defines coevolution as continuous human↔AI feedback loops.
- Wang et al., *Position: Towards Bidirectional Human-AI Alignment* (ICML 2024; arXiv:2406.09264) — argues that alignment must include "aligning humans to AI" as cognitive/behavioural adaptation.
- Glickman & Sharot, *How Human-AI Feedback Loops Alter Human Perceptual, Emotional and Social Judgements* (Nature Human Behaviour 2025).
- Perry et al., *Do Users Write More Insecure Code with AI Assistants?* (CCS 2023; arXiv:2211.03622).
- Bastani et al., *Generative AI Without Guardrails Can Harm Learning* (PNAS 2025).

**Out of scope:**

- Pure model-capability papers (model X scores higher on benchmark Y) even when AI is assistive.
- Pure one-shot UX studies with no temporal / training-loop / longitudinal component.
- Pure AI-on-AI ecosystem papers with no human in the loop (model collapse on purely synthetic chains, etc.). The line is fuzzy — recursive-data papers ARE in scope when the contribution discusses governance or human-in-the-loop intervention.
- Method papers that introduce a new training recipe with no human-side analysis.

### The four-phase taxonomy

Each paper you suggest should map cleanly to one of the eight phase tags:

| Tag | Phase | Human capability at risk | Typical setup |
|---|---|---|---|
| `phase-1` | Humans Use AI as Tool | Critical thinking | AI answers questions; the human judges. Failure mode: passive acceptance / sycophancy / cognitive offloading. |
| `emerging-phase-2` | Tool → Assistant | Reasoning + early evaluation | AI moves beyond answering toward producing ideation/draft material. |
| `phase-2` | Humans Use AI as Assistant | Evaluative expertise | AI produces bounded artifacts (drafts, code snippets, partial implementations); the human verifies. Failure mode: polished but flawed work approved on surface signals. |
| `emerging-phase-3` | Assistant → Executor | Evaluation + early monitoring | Humans delegate sequences of steps but still drive the workflow. |
| `phase-3` | Humans Use AI as Executor | Metacognitive monitoring | AI completes end-to-end workflows; humans set goals and intervene when execution drifts. Failure mode: vigilance loss / undetected drift. |
| `emerging-phase-4` | Executor → Organization | Monitoring + early governance | Governance-layer interventions, RLAIF/constitutional systems, ecosystem-level feedback dynamics. |
| `phase-4` | Humans Use AI as Organization | Systems thinking | AI coordinates systems of work across many agents. No domain has officially entered Phase 4 yet — papers here should be flagged as projection. |
| `framework` | Cross-cutting | Spans phases | Surveys, position pieces, theoretical frameworks. |

For each paper you propose, **suggest exactly one** phase tag, with a one-sentence rationale connecting the paper to that phase's failure mode or required capability.

### Topic gaps you should specifically look for

The 110 existing entries skew heavily toward (a) coding/Copilot studies, (b) chatbot/cognitive-offloading work, (c) RLHF/sycophancy method papers, and (d) writing/co-creation studies. The expansion round should preferentially fill gaps:

- **Phase 3 (Executor) is underweight (only 8 entries).** Look for: agent vigilance/oversight studies; HRI mutual adaptation over time; field studies of autonomous coding agents (SWE-agent / Devin / Cursor in real teams); medical AI overseeing entire diagnostic workflows; agent-induced privacy/safety incidents.
- **Phase 4 / Emerging Phase 4 is sparse (7 entries).** Look for: governance-layer empirical work on multi-agent systems; managed-agent system case studies; AI-coordinated research pipelines with human PIs; constitutional/policy frameworks evaluated empirically.
- **Healthcare, law, finance, education** beyond chatbots — domains where AI is materially shifting professional practice and there are longitudinal/empirical studies.
- **Skill atrophy / de-skilling longitudinal studies** in non-coding professions (radiology, legal drafting, customer service).
- **AI-mediated communication beyond writing** — voice / video / negotiation / mediation studies.
- **Cross-cultural studies** — most current entries are US/EU/Asia tech-worker samples; look for studies in different cultural or socioeconomic contexts.
- **Older but foundational HCI / cognitive science papers** if they directly inform the framework (e.g., classic vigilance-decrement work, automation-bias literature). Don't dive too deep into pre-1990 material unless directly cited by the framework.

### Deliverable schema

Produce a markdown report. For each candidate paper, emit one entry in this exact format:

```markdown
### N. <Paper title>
- **Authors:** <full author list, in order>
- **Institutions:** <comma-separated, abbreviations OK: MIT, CMU, Stanford>
- **Date (v1 / earliest public release):** <YYYY-MM-DD>
- **Publisher / venue:** <e.g., "CHI 2024", "NeurIPS 2017", "Nature Human Behaviour 2025", or "arXiv">
- **Phase tag:** <one of: phase-1, emerging-phase-2, phase-2, emerging-phase-3, phase-3, emerging-phase-4, phase-4, framework>
- **Secondary themes (CC/MA/HF/LH/PS):** <one or more of: Collaboration & Co-Creation, Mutual Adaptation, Human Feedback Loops, Longitudinal HCI Studies, Position & Survey>
- **Keywords:** <3–6 specific keywords; avoid generic "AI", "LLM", "human-AI">
- **Primary link:** <single canonical URL — prefer publisher page > arXiv abs > project page>
- **arXiv ID (if any):** <e.g., 2306.13723>
- **Other source links:**
  - arxiv: <url or omit>
  - publisher_page: <DOI / ACL Anthology / NeurIPS Proceedings / ScienceDirect / ACM DL url, or omit>
  - homepage: <url or omit>
  - code: <github url or omit>
  - dataset: <url or omit>
- **TLDR (1–3 factual sentences):** <(1) what coevolutionary / human-side phenomenon the paper targets, (2) what it actually does/measures/argues, (3) the strongest concrete outcome>
- **Phase rationale (one sentence):** <connect the paper's experimental setup or argument to the failure mode or human-capability requirement of the chosen phase>
- **Why this fills a gap (one sentence):** <why this entry adds value beyond the 110 existing entries — e.g., "first longitudinal Phase 3 study in radiology", "non-Western sample on AI-tutor reliance", etc.>
- **Verification notes:** <which authoritative source you confirmed metadata against — arXiv, ACM DL, OpenReview, ACL Anthology, NeurIPS proceedings, ScienceDirect, IEEE Xplore, etc. Flag any field you could NOT verify and leave it blank.>
```

### Rules of evidence — these are critical

- **Verify every paper exists.** For each entry, point to an authoritative source page (arXiv abstract page, ACM DL DOI, OpenReview forum, NeurIPS / ICML / ICLR proceedings, ScienceDirect / Nature / Science article, IEEE Xplore, ACL Anthology). If you cannot verify, **do not include it**.
- **Do not fabricate or guess any field.** No invented arXiv IDs, no guessed venues, no plausible-sounding author names. Leave blank when unknown.
- **Use earliest-public-release date** (arXiv v1 if it was preprinted), not the latest revision or camera-ready date.
- **One canonical link per `Primary link`.** Other URLs go under "Other source links."
- **Deduplicate aggressively** against the existing-entries list at the bottom of this prompt. Match on title (case-insensitive, ignore subtitle drift) AND on arXiv ID. If you're unsure whether a paper is already included, err on the side of excluding it.
- **One phase tag per paper.** Be conservative with emerging-* tags — only when the paper genuinely bridges two phases. Default to the cleaner phase.

### Final deliverable structure

1. **Section 1 — Calibration check** (3–5 sentences): your understanding of the scope, the phased taxonomy, and what "fills a gap" means here.
2. **Section 2 — Paper entries** (30–50 entries in the schema above, grouped first by phase tag, then by date descending within each phase).
3. **Section 3 — Borderline cases** (5–10 candidates you considered but excluded, each with a one-line reason). Helps verify your scope discipline.
4. **Section 4 — Coverage gaps that remain**: where you could not find good papers despite the existing 110 plus your 30–50 additions. This is itself a useful research signal.

Begin.

---

## Existing entries (DO NOT propose these)

The 110 papers below are already in the index. **Skip any paper whose title or arXiv ID appears below.** Match on title (case-insensitive, subtitle-loose) and on arXiv ID. When in doubt, exclude.

1. Examining University Students' Engagement with ChatGPT in English Essay Writing: Interaction Patterns and Perceptions [The Asia-Pacific Education Researcher 2026]
2. Trust in human-AI collaboration in finance: a bibliometric-systematic literature review [AI & SOCIETY 2026]
3. Agentic AI in the Software Development Lifecycle (arXiv:2604.26275)
4. A Co-Evolutionary Theory of Human-AI Coexistence: Mutualism, Governance, and Dynamics in Complex Societies (arXiv:2604.22227)
5. SWE-chat: Coding Agent Interactions From Real Users in the Wild (arXiv:2604.20779)
6. The Triadic Loop: A Framework for Negotiating Alignment in AI Co-hosted Livestreaming (arXiv:2604.18850)
7. Strategic Algorithmic Monoculture: Experimental Evidence from Coordination Games (arXiv:2604.09502)
8. AI Assistance Reduces Persistence and Hurts Independent Performance (arXiv:2604.04721)
9. The Augmentation Trap: AI Productivity and the Cost of Cognitive Offloading (arXiv:2604.03501)
10. Reactive Writers: How Co-Writing with AI Changes How We Engage with Ideas (arXiv:2603.10374)
11. Personality and Personal AI Agents: A Co-Evolutionary Framework (PACE) [International Journal on Social and Education Sciences 2026]
12. The Path to Conversational AI Tutors: Integrating Tutoring Best Practices and Targeted Technologies to Produce Scalable AI Agents (arXiv:2602.19303)
13. Modeling Distinct Human Interaction in Web Agents (arXiv:2602.17588)
14. Impacts of Generative AI on Agile Teams' Productivity: A Multi-Case Longitudinal Study (arXiv:2602.13766) [FORGE 2026]
15. Discovering Differences in Strategic Behavior Between Humans and LLMs (arXiv:2602.10324)
16. Belief Offloading in Human-AI Interaction (arXiv:2602.08754)
17. AI-Augmented Strategic Decision-Making Under Time Constraints: An Experimental Study on Mental Representations and Strategic Foresight [Strategy Science 2026]
18. From Crafting Text to Crafting Thought: Grounding AI Writing Support to Writing Center Pedagogy (arXiv:2602.04047)
19. How RLHF Amplifies Sycophancy (arXiv:2602.01002)
20. From Future of Work to Future of Workers: Addressing Asymptomatic AI Harms for Dignified Human-AI Interaction (arXiv:2601.21920) [CHI 2026]
21. Human-AI perception: not much different, but some distinct novelties [The Bottom Line 2026]
22. How AI Impacts Skill Formation (arXiv:2601.20245)
23. Learning to Live with AI: How Students Develop AI Literacy Through Naturalistic ChatGPT Interaction (arXiv:2601.20749)
24. CooperBench: Why Coding Agents Cannot be Your Teammates Yet (arXiv:2601.13295)
25. Human-Human-AI Triadic Programming: Uncovering the Role of AI Agent and the Value of Human Partner in Collaborative Learning (arXiv:2601.12134) [CHI 2026]
26. Evolving with AI: A Longitudinal Analysis of Developer Logs (arXiv:2601.10258)
27. Becoming human in the age of AI: cognitive co-evolutionary processes [Frontiers in Psychology 2026]
28. AI in the classroom: Exploring students' interaction with ChatGPT in programming learning [Education and Information Technologies 2025]
29. Adaptive Human-Robot Collaboration using Type-Based IRL [UAI 2025]
30. Human-AI Collaboration in Software Development: A Mixed-Methods Study of Developers' Use of GitHub Copilot and ChatGPT [FSE Companion 2025]
31. Interactions with generative AI chatbots: unveiling dialogic dynamics, students' perceptions, and practical competencies in creative problem-solving [International Journal of Educational Technology in Higher Education 2025]
32. Mapping the evolution of AI in education: Toward a co-adaptive and human-centered paradigm [Computers and Education: Artificial Intelligence 2025]
33. Personalization capabilities of current technology chatbots in a learning environment: An analysis of student-tutor bot interactions [Education and Information Technologies 2025]
34. Developer Productivity With and Without GitHub Copilot: A Longitudinal Mixed-Methods Case Study (arXiv:2509.20353)
35. Monoculture or Multiplicity: Which Is It? [NeurIPS 2025]
36. Collaborative Document Editing with Multiple Users and AI Agents (arXiv:2509.11826) [CHI 2026]
37. AI Hasn't Fixed Teamwork, But It Shifted Collaborative Culture: A Longitudinal Study in a Project-Based Software Development Organization (2023-2025) (arXiv:2509.10956)
38. Artificial intelligence in adaptive strategy creation and implementation: Toward enhanced attentional control in strategy processes [Long Range Planning 2025]
39. Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task (arXiv:2506.08872)
40. When Models Know More Than They Can Explain: Quantifying Knowledge Transfer in Human-AI Collaboration (arXiv:2506.05579) [NeurIPS 2025]
41. 'ChatGPT is like a study buddy, a teacher and sometimes just a friend': a longitudinal exploration of students' interactions, perception and acceptance [Interactive Learning Environments 2025]
42. How Students (Really) Use ChatGPT: Uncovering Experiences Among Undergraduate Students (arXiv:2505.24126)
43. The Impact of Generative AI on Critical Thinking: Self-Reported Reductions in Cognitive Effort and Confidence Effects From a Survey of Knowledge Workers [CHI 2025]
44. Understanding and supporting how developers prompt for LLM-powered code editing in practice (arXiv:2504.20196)
45. Strategyproof Reinforcement Learning from Human Feedback (arXiv:2503.09561) [NeurIPS 2025]
46. Human-AI experience in integrated development environments: a systematic literature review (arXiv:2503.06195) [Empirical Software Engineering 2026]
47. How Scientists Use Large Language Models to Program (arXiv:2502.17348) [CHI 2025]
48. Creativity in Human-AI Co-Creation: A Two-Stage Model and the Da Vinci Score [HICSS 2024]
49. The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers [Management Science 2026]
50. How human-AI feedback loops alter human perceptual, emotional and social judgements [Nature Human Behaviour 2025]
51. 'It was 80% me, 20% AI': Seeking Authenticity in Co-Writing with Large Language Models (arXiv:2411.13032) [CSCW 2025]
52. Homogenizing effect of large language models (LLMs) on creative diversity: An empirical comparison of human and ChatGPT writing [ScienceDirect 2025]
53. When Stereotypes GTG: The Impact of Predictive Text Suggestions on Gender Bias in Human-AI Co-Writing (arXiv:2409.20390) [CHI 2026]
54. AI Suggestions Homogenize Writing Toward Western Styles and Diminish Cultural Nuances (arXiv:2409.11360) [CHI 2025]
55. Oh, Behave! Country Representation Dynamics Created by Feedback Loops in Music Recommender Systems (arXiv:2408.11565) [RecSys 2024]
56. Generative AI Without Guardrails Can Harm Learning [PNAS 2025]
57. Generative AI enhances individual creativity but reduces the collective diversity of novel content (arXiv:2312.00506) [Science Advances 2024]
58. Position: Towards Bidirectional Human-AI Alignment (arXiv:2406.09264) [ICML 2024]
59. A Study on Developer Behaviors for Validating and Repairing LLM-Generated Code Using Eye Tracking and IDE Actions (arXiv:2405.16081) [VL/HCC 2024]
60. Complementarity in Human-AI Collaboration: Concept, Sources, and Evidence (arXiv:2404.00029) [European Journal of Information Systems 2025]
61. An empirical study on developers' shared conversations with ChatGPT in GitHub pull requests and issues (arXiv:2403.10468) [Empirical Software Engineering 2024]
62. RECIPE4U: Student-ChatGPT Interaction Dataset in EFL Writing Education (arXiv:2403.08272)
63. Monitoring AI-Modified Content at Scale: A Case Study on the Impact of ChatGPT on AI Conference Peer Reviews (arXiv:2403.07183) [ICML 2024]
64. A Survey on Human-AI Teaming with Large Pre-Trained Models (arXiv:2403.04931)
65. Towards Understanding Sycophancy in Language Models (arXiv:2310.13548) [ICLR 2024]
66. Steroids, Sneakers, Coach: The Spectrum of Human-AI Relationships [SSRN]
67. Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of AI on Knowledge Worker Productivity and Quality [Organization Science 2026]
68. Does Writing with Language Models Reduce Content Diversity? (arXiv:2309.05196) [ICLR 2024]
69. Sea Change in Software Development: Economic and Productivity Analysis of the AI-Powered Developer Lifecycle (arXiv:2306.15033)
70. Human-AI Coevolution (arXiv:2306.13723) [Artificial Intelligence 2025]
71. The Curse of Recursion: Training on Generated Data Makes Models Forget (arXiv:2305.17493) [Nature 2024]
72. Artificial intelligence in communication impacts language and social relationships [Scientific Reports 2023]
73. Generative AI at Work (arXiv:2304.11771) [Quarterly Journal of Economics 2025]
74. The AI Ghostwriter Effect: When Users Do Not Perceive Ownership of AI-Generated Text But Self-Declare as Authors (arXiv:2303.03283) [ACM TOCHI 2024]
75. Experimental evidence on the productivity effects of generative artificial intelligence [Science 2023]
76. The Impact of AI on Developer Productivity: Evidence from GitHub Copilot (arXiv:2302.06590)
77. Co-Writing with Opinionated Language Models Affects Users' Views (arXiv:2302.00560) [CHI 2023]
78. A Mental Model Based Theory of Trust (arXiv:2301.12569)
79. Modeling the Interplay between Human Trust and Monitoring [HRI 2022]
80. Wordcraft: Story Writing With Large Language Models [IUI 2022]
81. Constitutional AI: Harmlessness from AI Feedback (arXiv:2212.08073)
82. Do Users Write More Insecure Code with AI Assistants? (arXiv:2211.03622) [ACM CCS 2023]
83. Reading Between the Lines: Modeling User Behavior and Costs in AI-Assisted Programming (arXiv:2210.14306) [CHI 2024]
84. Co-Writing Screenplays and Theatre Scripts with Language Models: An Evaluation by Industry Professionals (arXiv:2209.14958) [CHI 2023]
85. Breaking Feedback Loops in Recommender Systems with Causal Inference (arXiv:2207.01616) [ACM TORS 2025]
86. Grounded Copilot: How Programmers Interact with Code-Generating Models (arXiv:2206.15000) [OOPSLA 2023]
87. Productivity Assessment of Neural Code Completion (arXiv:2205.06537) [MAPS 2022]
88. Expectation vs. Experience: Evaluating the Usability of Code Generation Tools Powered by Large Language Models [CHI 2022 EA]
89. Training Language Models to Follow Instructions with Human Feedback (arXiv:2203.02155) [NeurIPS 2022]
90. A Mental-Model Centric Landscape of Human-AI Symbiosis (arXiv:2202.09447)
91. CoAuthor: Designing a Human-AI Collaborative Writing Dataset for Exploring Language Model Capabilities (arXiv:2201.06796) [CHI 2022]
92. AI-Mediated Communication: Language Use and Interpersonal Effects in a Referential Communication Task [CSCW 2021]
93. Asleep at the Keyboard? Assessing the Security of GitHub Copilot's Code Contributions (arXiv:2108.09293) [IEEE S&P 2022]
94. Trust-Aware Planning: Modeling Trust Evolution in Iterated Human-Robot Interaction (arXiv:2105.01220) [HRI 2023]
95. Human-AI Symbiosis: A Survey of Current Approaches (arXiv:2103.09990)
96. The Impact of Multiple Parallel Phrase Suggestions on Email Input and Composition Behaviour of Native and Non-Native English Writers (arXiv:2101.09157) [CHI 2021]
97. Learning to summarize from human feedback (arXiv:2009.01325) [NeurIPS 2020]
98. Feedback Loop and Bias Amplification in Recommender Systems (arXiv:2007.13019) [CIKM 2020]
99. Predictive Text Encourages Predictable Writing [IUI 2020]
100. AI-Mediated Communication: Definition, Research Agenda, and Ethical Considerations [Journal of Computer-Mediated Communication 2020]
101. Guidelines for Human-AI Interaction [CHI 2019]
102. Deep TAMER: Interactive Agent Shaping in High-Dimensional State Spaces [AAAI 2018]
103. Sentiment Bias in Predictive Text Recommendations Results in Biased Writing [Graphics Interface 2018]
104. Reward learning from human preferences and demonstrations in Atari (arXiv:1811.06521) [NeurIPS 2018]
105. How Algorithmic Confounding in Recommendation Systems Increases Homogeneity and Decreases Utility (arXiv:1710.11214) [RecSys 2018]
106. Human-robot mutual adaptation in collaborative tasks: Models and experiments [International Journal of Robotics Research 2017]
107. Deep Reinforcement Learning from Human Preferences (arXiv:1706.03741) [NeurIPS 2017]
108. Human-Robot Mutual Adaptation in Shared Autonomy (arXiv:1701.07851) [HRI 2017]
109. Interactive Learning from Policy-Dependent Human Feedback (arXiv:1701.06049) [ICML 2017]
110. Policy Shaping: Integrating Human Feedback with Reinforcement Learning [NeurIPS 2013]
