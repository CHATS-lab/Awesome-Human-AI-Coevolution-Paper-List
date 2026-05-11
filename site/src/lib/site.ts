export const SITE_TITLE = 'Human-AI Coevolution Papers';
export const SITE_DESCRIPTION =
  'A curated, searchable list of research papers on human-AI coevolution — collaboration, mutual adaptation, feedback loops, longitudinal HCI studies, and position/survey work.';
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

/**
 * Numeric indices used in place of emoji throughout the UI.
 * Kept named `ENV_EMOJI` so existing imports continue to work.
 */
export const ENV_EMOJI: Record<string, string> = {
  'Collaboration & Co-Creation': '01',
  'Mutual Adaptation': '02',
  'Human Feedback Loops': '03',
  'Longitudinal HCI Studies': '04',
  'Position & Survey': '05',
};
