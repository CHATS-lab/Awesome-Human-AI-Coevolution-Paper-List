# CLAUDE.md - Human-AI Coevolution Paper List

## Project Overview

This repository is a curated list of research papers on **Human-AI coevolution** — the process by which humans and AI systems continuously influence and reshape each other. The list spans human-AI collaboration, mutual adaptation, RLHF feedback loops, longitudinal HCI deployments, and position/survey work that frames the coevolutionary lens.

**The source of truth is [`papers.yaml`](papers.yaml)** (and [`adjacent.yaml`](adjacent.yaml) for non-canonical adjacent entries). All other artifacts — `README.md`, the per-axis statistics images — are auto-generated from these YAML files.

## Canonical Update Workflow

After editing `papers.yaml`, regenerate every derived artifact locally with:

```bash
bash scripts/update_repo.sh
```

The pipeline runs `scripts/regen.py`, which:
1. Loads `papers.yaml` and `adjacent.yaml`.
2. Sorts entries newest-first, writes the YAML files back canonicalised (sorted, ISO date format).
3. Renders `README.md` directly from `readme_template/template.md` (no intermediate fragment files).
4. Emits `readme_template/statistics/{quarterly_trend,keyword_bar_chart}.png`.

Then review the diff and push:

```bash
git status --short
git diff --stat
git add papers.yaml adjacent.yaml README.md readme_template/statistics scripts requirements.txt pyproject.toml CLAUDE.md
git commit -m "..."
git push
```

Dependencies are in `requirements.txt` and `pyproject.toml`. With `uv`:

```bash
uv sync
```

## Repository Structure

```
Awesome-Human-AI-Coevolution-Paper-List/
├── papers.yaml                  ← canonical source of truth
├── adjacent.yaml                ← non-canonical supporting entries
├── README.md                    ← auto-generated; do not edit
├── CLAUDE.md                    ← this file
├── scripts/
│   ├── update_repo.sh           ← entrypoint; regenerates everything
│   └── regen.py                 ← single-pass: sort YAML + render README + emit charts
├── readme_template/
│   ├── template.md              ← README template with {{placeholders}}
│   ├── statistics/*.png         ← auto-generated stats charts
│   └── logs/                    ← regen warnings (.gitignored)
└── pyproject.toml / requirements.txt / .python-version
```

## Scope: What Counts as a Human-AI Coevolution Paper?

A paper qualifies for `papers.yaml` when **both directions of influence** are studied, measured, or argued for:

1. **Humans → AI**: humans shape AI behavior via training data, feedback, preferences, deployment choices, prompts, or longitudinal use.
2. **AI → Humans**: AI shapes human skill, behavior, cognition, workflows, language, or downstream data distributions.

Papers showing **only** one direction (a pure capability paper, or a pure behavioral-effects study with no mechanism feeding back into AI) are usually a poor fit for the main list. They may still belong in `adjacent.yaml`.

**Good signals a paper fits:**
- "Feedback loop" or "co-adaptation" appears as a load-bearing concept, not just a passing phrase.
- The paper measures *how user behavior changes* over a deployment, *and* discusses how that shifts the model or future training data.
- The paper studies RLHF / preference learning *in the context of* how the resulting model changes future user inputs.
- The paper is a position/framing piece for the coevolutionary lens (e.g., Pedreschi et al. 2024 *Human-AI Coevolution*, Wang 2026 *Humans are Missing from AI Coding Agent Research*).

**Often out of scope:**
- Pure capability papers (model X scores higher on benchmark Y), even if AI-assistive.
- Pure UX studies of one-shot interaction, with no temporal / training-loop component.
- AI-on-AI ecosystem dynamics (model collapse, recursive training on synthetic data) — explicitly excluded from this list per project scoping; see other curated lists for that subarea.

## How to Add a Paper

Edit `papers.yaml` and append a YAML object with this schema. Only `title` and `link` are required:

```yaml
- title: "Paper title (preserve official capitalization)"
  link: https://arxiv.org/abs/2306.13723        # primary canonical link
  authors:
    - First Author
    - Second Author
  institutions: [CNR, Pisa]
  date: "2023-06-23"                            # ISO YYYY-MM-DD, or YYYY-MM, or YYYY
  publisher: "Artificial Intelligence 2024"     # or "arXiv", "NeurIPS 2025", "CHI 2024", …
  envs: [Mutual Adaptation, Position & Survey]  # one or more category buckets (see below)
  keywords: [feedback loop, position, survey]   # comma-free list, no [] brackets
  tldr: |
    1–3 sentence factual summary of the paper.
  arxiv_id: "2306.13723"                        # optional; auto-populated if `link` is an arXiv URL
  sources:                                      # optional — extra discoverable links
    arxiv: https://arxiv.org/abs/2306.13723
    openreview: https://openreview.net/forum?id=…
    publisher_page: https://www.sciencedirect.com/science/article/pii/…
    homepage: https://project-page.io/
    code: https://github.com/org/repo
    dataset: https://huggingface.co/datasets/…
  bibtex: |                                     # auto-generated if absent
    @article{author2024key,
      title = {…},
      …
    }
  bibtex_confirmed: false                       # set true after verifying against the official source
```

After editing, run `bash scripts/update_repo.sh`.

### Field Specifications

**Title.** Use the paper's canonical public title from the linked source. Normalize LaTeX or typography artifacts. Keep official abbreviations.

**Link.** Prefer project homepage > arXiv > venue page. Only one. Other links go in `sources:`.

**Authors.** Include all of them.

**Institutions.** Common abbreviations preferred (MIT, CMU, Stanford, CNR). Use `Unknown` only if no source specifies one.

**Date.** Use the **earliest known public release date** (arXiv v1 / first preprint), not the latest revision. ISO format. If only month is known, use `"YYYY-MM"`; if only year, use `"YYYY"`.

**Publisher.** Use the publication venue. Format: `Venue Year` (e.g. `CHI 2024`, `NeurIPS 2025`, `Artificial Intelligence 2024`). Use `arXiv` if only on arXiv. Presentation type may appear in parentheses (e.g. `ICLR 2025 (Oral)`).

**Repository scope.**
- `papers.yaml` is for direct human-AI coevolution papers — both-directional influence, as defined above.
- Don't include pure capability or one-shot UX papers in the main list.
- Use `adjacent.yaml` for non-coevolution-but-relevant works that materially inform the area: foundational RLHF papers, single-direction behavioral studies later cited by coevolution work, related theoretical frameworks.

**Adjacent papers (`adjacent.yaml`).**
- Optional supporting context, not part of the canonical main list.
- Adjacent entries are excluded from the README's main list and the stats charts.

### Category buckets (the `envs:` field)

Pick one or more of these five categories. They are the top-level grouping axis (analogous to Web/Mobile/Desktop in GUI-Agents-Paper-List).

- **Collaboration & Co-Creation** — Humans and AI working jointly on a task: pair programming, co-writing, mixed-initiative interfaces, complementarity, hybrid teams. Coevolution shows up as how the human's strategy and the AI's outputs reshape each other within and across sessions.
- **Mutual Adaptation** — Both human and AI behavior change in response to each other over time. Includes longitudinal deployments where AI is adapted to users (fine-tuning, personalization) *and* users adapt to AI (workflow shifts, skill changes, prompt strategies).
- **Human Feedback Loops** — RLHF, preference learning, training-from-use, learning from demonstrations or critiques. The coevolution lens: how the trained model shapes future inputs that become future training data.
- **Longitudinal HCI Studies** — Real-world or field deployments over weeks/months that measure how human behavior, skill, or norms shift around an AI system. Empirical and behavioral first; the AI-side mechanism may be lighter.
- **Position & Survey** — Framing pieces that argue *for* (or characterize, taxonomize) the coevolutionary lens itself: position papers, surveys, theoretical frameworks. Examples: Pedreschi et al. 2024 *Human-AI Coevolution* (Artificial Intelligence journal); Wang 2026 *Position: Humans are Missing from AI Coding Agent Research*.

A paper can span multiple categories (e.g. `[Mutual Adaptation, Longitudinal HCI Studies]`).

### Keywords

Each keyword is a string in the YAML list (no `[]` wrapping). Include:
- the paper's commonly used abbreviation if any (`Copilot`, `RLHF`)
- one or two artifact types (`benchmark`, `dataset`, `framework`, `model`, `survey`, `position`, `field study`)
- one to three core technical ideas / problem settings (`feedback loop`, `co-creation`, `model collapse`, `preference learning`, `skill atrophy`, `personalization`)

Avoid generic / scope-duplicate tags like `human-AI`, `coevolution`, `LLM`, `AI`.

Keyword casing:
- General-concept keys are lowercase: `feedback loop`, `co-creation`, `preference learning`
- Official paper / system / model names keep their canonical casing: `Copilot`, `RLHF`, `InstructGPT`, `ChatGPT`

### TLDR

1–3 sentences, factual and contribution-first. Should answer:
1. What coevolutionary phenomenon or gap is the paper targeting?
2. What does the paper actually introduce, measure, or argue?
3. What is the strongest concrete outcome or takeaway?

## How to Verify a Paper's BibTeX

Auto-generated BibTeX may be approximate. To mark a paper's BibTeX as verified:

1. Open the venue's official BibTeX export (ACL Anthology, OpenReview, ScienceDirect, ACM DL).
2. Replace the entry's `bibtex:` block in `papers.yaml` with the official text.
3. Set `bibtex_confirmed: true`.
4. Run `bash scripts/update_repo.sh`.

## Source Verification

When adding new papers, **always verify metadata against an authoritative online source** before committing:
- arXiv ID and v1 date should match `arxiv.org/abs/<id>`.
- Publisher venue should match the official venue page (DOI, ACL Anthology, OpenReview, IEEE, ACM DL, ScienceDirect, etc.).
- Author list should match the venue's official record (correct ordering, full names).

Don't fabricate or guess fields — leave them blank if unverifiable.

## Other Workflow Notes

- Errors during regen are logged to `readme_template/logs/error.log`.
- The README only renders the 500 most recent papers (GitHub truncates rendering at ~512KB). The full list is `papers.yaml`.
