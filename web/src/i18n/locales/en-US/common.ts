/**
 * English (en-US) translations — source of truth.
 *
 * Each namespace file exports a flat or nested object `as const` so that the
 * key shape is captured at the type level. zh-Hans mirrors the exact same key
 * structure via a `satisfies` constraint, giving compile-time protection
 * against missing translations.
 *
 * Add new keys here first, then mirror them in `../zh-Hans/common.ts`.
 */
const common = {
  // Language switcher
  "language.label": "Language",
  "language.english": "English",
  "language.chinese": "简体中文",

  // Generic UI actions
  "action.save": "Save",
  "action.cancel": "Cancel",
  "action.delete": "Delete",
  "action.create": "Create",
  "action.edit": "Edit",
  "action.remove": "Remove",
  "action.confirm": "Confirm",
  "action.close": "Close",
  "action.back": "Back",
  "action.next": "Next",
  "action.previous": "Previous",
  "action.refresh": "Refresh",
  "action.retry": "Retry",
  "action.copy": "Copy",
  "action.download": "Download",

  // Generic states
  "state.loading": "Loading…",
  "state.noData": "No data",
  "state.error": "Something went wrong",
  "state.success": "Success",
  "state.saved": "Saved",
  "state.deleted": "Deleted",

  // Navigation — user menu (sidebar)
  "nav.user.accountSettings": "Account Settings",
  "nav.user.theme": "Theme",
  "nav.user.featurePreview": "Feature Preview",
  "nav.user.regions": "Regions",
  "nav.user.regions.current": "Current",
  "nav.user.signOut": "Sign out",

  // Navigation — main sidebar items
  "nav.search": "Go to...",
  "nav.organizations": "Organizations",
  "nav.projects": "Projects",
  "nav.home": "Home",
  "nav.dashboards": "Dashboards",
  "nav.tracing": "Tracing",
  "nav.sessions": "Sessions",
  "nav.users": "Users",
  "nav.monitors": "Monitors",
  "nav.prompts": "Prompts",
  "nav.playground": "Playground",
  "nav.scores": "Scores",
  "nav.evaluators": "Evaluators",
  "nav.humanAnnotation": "Human Annotation",
  "nav.datasets": "Datasets",
  "nav.experiments": "Experiments",
  "nav.upgrade": "Upgrade",
  "nav.cloudStatus": "Cloud Status",
  "nav.preview": "Preview (fast)",
  "nav.settings": "Settings",
  "nav.bookACall": "Book a call",
  "nav.assistant": "Assistant",
  "nav.support": "Support",

  // Navigation — group labels
  "nav.group.observability": "Observability",
  "nav.group.promptManagement": "Prompt Management",
  "nav.group.evaluation": "Evaluation",
} as const;

export default common;
