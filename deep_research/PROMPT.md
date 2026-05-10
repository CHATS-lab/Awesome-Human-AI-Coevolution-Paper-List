# Deep Research Prompt — Human-AI Coevolution Paper Curation

Copy-paste the prompt below into ChatGPT Deep Research, Gemini Deep Research, Perplexity Deep Research, or Claude with the research tool enabled. Drop the resulting report into this folder (`deep_research/`) as `report-YYYY-MM-DD.md`. We will then convert the verified entries into `papers.yaml`.

---

## PROMPT

I am building a curated, structured list of academic papers on **Human-AI coevolution** — the process by which humans and AI systems continuously shape and reshape each other through repeated interaction. I need you to produce a vetted, deduplicated list of **40–60 high-quality papers** that I can use as the seed for the repository.

### Inclusion criteria (a paper qualifies only when BOTH directions of influence are present)

A paper belongs in this list when it studies, measures, or explicitly argues for **mutual influence**:

1. **Humans → AI**: humans shape AI behavior via training data, feedback signals, preferences, demonstrations, deployment choices, prompting strategies, or longitudinal use.
2. **AI → Humans**: AI shapes human skill, behavior, cognition, language, workflows, decisions, or the data distribution humans subsequently produce.

A paper that only shows one direction (a pure capability paper, or a pure one-shot UX study with no training-loop / temporal component) does **not** qualify, even if widely cited in adjacent areas.

**Exemplar in-scope papers (use these as the calibration anchor):**
- Pedreschi, Pappalardo, Ferragina, Baeza-Yates et al., *Human-AI Coevolution* (Artificial Intelligence journal, 2024; arXiv:2306.13723) — the framing paper that defines coevolution as endless human↔AI feedback loops.
- Zora Zhiruo Wang, *Position: Humans are Missing from AI Coding Agent Research* (2026, https://zorazrw.github.io/files/position-haicode.pdf) — argues AI coding-agent research has over-optimized for solo autonomy and under-studied human-centered coevolutionary design.
- Christiano et al., *Deep Reinforcement Learning from Human Preferences* (NeurIPS 2017) — the canonical RLHF paper, only in-scope when discussed through the coevolutionary lens (preferences → model → future behavior).

**Out of scope:**
- Pure model-capability papers (e.g., "model X scores higher on benchmark Y") even when AI is assistive.
- Pure one-shot UX studies with no temporal / training-loop / longitudinal component.
- AI-on-AI ecosystem dynamics (model collapse on synthetic data, recursive training between models with no human in the loop) — explicitly excluded from this list.

### Required taxonomy (each paper must be tagged with ≥1 of these 5 categories)

1. **Collaboration & Co-Creation** — humans and AI working jointly on a task (pair programming, co-writing, mixed-initiative interfaces, complementarity, hybrid teams). Coevolution shows up as how human strategy and AI outputs reshape each other.
2. **Mutual Adaptation** — both human and AI behavior measurably change in response to each other over time (personalization + workflow shift, fine-tuning + skill change).
3. **Human Feedback Loops** — RLHF, preference learning, training-from-use, learning from demonstrations/critiques, with explicit treatment of how the trained model reshapes future user inputs that become future training data.
4. **Longitudinal HCI Studies** — real-world or field deployments over weeks/months measuring how human behavior, skill, norms, or downstream artifacts shift around an AI system.
5. **Position & Survey** — framing pieces / surveys / theoretical frameworks that argue for or characterize the coevolutionary lens.

A paper can span multiple categories — note all that apply.

### Topic coverage to aim for (rough quotas, not strict)

- Coding & software engineering coevolution (Copilot longitudinal studies, AI pair-programming, Wang 2026 position): ~8–10 papers
- Writing / language coevolution (co-writing studies, homogenization of language, AI's effect on writing style and vice versa): ~8–10 papers
- RLHF / preference-learning loops viewed as coevolution (not just method papers — papers that examine the loop): ~6–8 papers
- Education, tutoring, and skill effects (longitudinal studies of AI tutors, skill atrophy / skill gain): ~5–7 papers
- Decision-making & creativity coevolution: ~4–6 papers
- Position, survey, and theoretical framing of human-AI coevolution: ~6–8 papers
- Sociotechnical / behavioral feedback (recommendation systems coevolution, AI's effect on labor and back, scientific practice): ~4–6 papers

### What to deliver

Produce a markdown report with one entry per paper, in this exact schema (so I can mechanically convert it to YAML):

```markdown
### N. <Paper title>
- **Authors:** <full author list, in order>
- **Institutions:** <comma-separated, abbreviations OK: MIT, CMU, Stanford>
- **Date (v1 / earliest public release):** <YYYY-MM-DD>
- **Publisher / venue:** <e.g., "CHI 2024", "NeurIPS 2017", "Artificial Intelligence 2024", or "arXiv">
- **Categories:** <one or more of: Collaboration & Co-Creation, Mutual Adaptation, Human Feedback Loops, Longitudinal HCI Studies, Position & Survey>
- **Keywords:** <3–6 specific keywords; avoid generic "AI", "LLM", "human-AI">
- **Primary link:** <single canonical URL — prefer project page > arXiv abs > venue page>
- **arXiv ID (if any):** <e.g., 2306.13723>
- **Other source links:**
  - arXiv: <url or omit>
  - publisher_page: <DOI / ACL Anthology / NeurIPS Proceedings / ScienceDirect / ACM DL / OpenReview url, or omit>
  - homepage: <url or omit>
  - code: <github url or omit>
  - dataset: <url or omit>
- **TLDR (1–3 factual sentences):** <(1) what coevolutionary phenomenon it targets, (2) what it actually does/argues, (3) strongest concrete outcome>
- **Why it qualifies (one sentence):** <name the human→AI mechanism AND the AI→human mechanism the paper studies>
- **Verification notes:** <which authoritative source you confirmed metadata against — arXiv, ACL Anthology, OpenReview, ACM DL, IEEE Xplore, ScienceDirect, etc. Flag any field you could NOT verify and leave it blank rather than guess.>
```

### Rules of evidence — these are critical

- **Verify every paper exists.** For each entry, you must be able to point to an authoritative source page (arXiv abstract page, ACL Anthology page, ACM DL DOI, OpenReview forum, NeurIPS proceedings, ScienceDirect article, IEEE Xplore, journal homepage). If you cannot verify a paper, **do not include it**.
- **Do not fabricate or guess any field.** No invented arXiv IDs, no guessed venues. If a field is unknown, leave it blank in the entry and note this in "Verification notes."
- **Use earliest-public-release date** (arXiv v1 if it was preprinted), not the latest revision or the camera-ready conference date.
- **One canonical link per `Primary link`.** Other URLs go under "Other source links."
- **Deduplicate.** If a paper has both an arXiv preprint and a conference version, list it once with the conference as `Publisher` and both URLs in source links.
- **Justify the "Why it qualifies" line concretely.** "Studies AI" is not enough; name the bidirectional mechanism the paper studies (e.g., "Measures how Copilot suggestions change developer code style over 6 months AND uses developer accept/reject signals as the model's RL feedback signal").
- **Prefer high-quality / well-cited / venue-verified work** at top venues (NeurIPS, ICML, ICLR, ACL, EMNLP, NAACL, CHI, CSCW, UIST, FAccT, AAAI, IJCAI, top journals). arXiv-only is fine when the work is influential, but flag it.

### Final deliverable structure

1. **Section 1 — Calibration check**: restate, in 3–5 sentences, your understanding of the inclusion criteria and what you used to filter.
2. **Section 2 — Paper entries** (40–60 entries in the schema above, grouped by Category for readability; if a paper spans categories, place it in its primary one and cross-reference).
3. **Section 3 — Borderline cases** (5–10 candidates you considered but excluded, with one-line reasons). This helps me sanity-check your scope discipline.
4. **Section 4 — Coverage gaps**: where you could not find good papers and what searches you tried.

Begin.
