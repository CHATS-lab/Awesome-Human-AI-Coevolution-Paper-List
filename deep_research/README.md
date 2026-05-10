# Deep Research Reports

This folder holds deep-research outputs that seed (and later expand) `papers.yaml`.

## Workflow

1. Copy the prompt in [`PROMPT.md`](PROMPT.md) into a deep-research-capable agent (ChatGPT Deep Research, Gemini Deep Research, Perplexity Deep Research, Claude with research enabled, etc.).
2. Save the agent's output here as `report-YYYY-MM-DD-<source>.md` — for example:
   - `report-2026-05-10-chatgpt-deep-research.md`
   - `report-2026-05-15-gemini.md`
3. Notify Claude Code in this repo: "convert the latest deep-research report to `papers.yaml` entries." Claude will:
   - Spot-check a sample of arXiv IDs / DOIs against the live web before adding them.
   - Drop any entry whose primary link does not resolve.
   - Translate the report into the YAML schema documented in [`../CLAUDE.md`](../CLAUDE.md).
   - Run `bash scripts/update_repo.sh` to regenerate the README.

## Files in this folder

- `PROMPT.md` — the canonical prompt to send to a deep-research agent.
- `report-*.md` — saved reports. Keep them around; they are useful provenance when someone questions why a paper is on the list.
