export const SITE_TITLE = 'Human–AI Coevolution Index';
export const SITE_DESCRIPTION =
  'An index of research papers on human–AI coevolution — collaboration and co-creation, mutual adaptation, feedback loops, longitudinal HCI studies, and position/survey work.';
export const REPO_OWNER = 'xli04';
export const REPO_NAME = 'Awesome-Human-AI-Coevolution-Paper-List';
export const REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const REPO_RAW_BLOB = `${REPO_URL}/blob/main`;

export const ENV_ORDER = [
  'Collaboration & Co-Creation',
  'Mutual Adaptation',
  'Human Feedback Loops',
  'Longitudinal HCI Studies',
  'Position & Survey',
] as const;

/** 2-letter abbreviation per category. */
export const ENV_ABBREV: Record<string, string> = {
  'Collaboration & Co-Creation': 'CC',
  'Mutual Adaptation': 'MA',
  'Human Feedback Loops': 'HF',
  'Longitudinal HCI Studies': 'LH',
  'Position & Survey': 'PS',
};

/**
 * Backwards-compat alias. The pages and the island used to read `ENV_EMOJI`
 * which held the visual marker (originally an emoji, then a numeric index).
 * Now it holds the 2-letter code so existing imports stay valid.
 */
export const ENV_EMOJI = ENV_ABBREV;
