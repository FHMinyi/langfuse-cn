/**
 * English (en-US) translations for the prompt namespace.
 */
const prompt = {
  // Common
  "common.pleaseConfirm": "Please confirm",
  "common.name": "Name",
  "common.config": "Config",
  "common.content": "Content",

  // SetPromptVersionLabels
  "labels.addLabel": "Add prompt label",
  "labels.title": "Prompt labels",
  "labels.searchOrCreate": "Search or create label…",

  // ProtectedLabelsSettings
  "protectedLabels.title": "Protected Prompt Labels",
  "protectedLabels.searchOrEnter": "Search or enter a new label...",
  "protectedLabels.noLabelFound": "No label found",

  // PromptVersionDiffDialog
  "versionDiff.compareTitle": "Compare with selected prompt",

  // PromptSelectionDialog
  "selection.addInlineRef": "Add inline prompt reference",
  "selection.promptName": "Prompt name",
  "selection.selectTextPrompt": "Select a text prompt",
  "selection.referenceBy": "Reference by",
  "selection.selectLinkType": "Select link type",
  "selection.label": "Label",
  "selection.version": "Version",
  "selection.tagPreview": "Tag preview",

  // prompt-detail
  "detail.search": "Search...",
  "detail.newVersion": "New version",
  "detail.usePrompt": "Use Prompt",
  "detail.textPromptResolved": "Text Prompt (resolved)",
  "detail.textPrompt": "Text Prompt",
  "detail.prompt": "Prompt",
  "detail.python": "Python",
  "detail.jsTs": "JS/TS",

  // ReviewPromptDialog
  "review.title": "Review Prompt Changes",

  // NewPromptForm
  "newPrompt.prompt": "Prompt",
  "newPrompt.namePlaceholder": "Name your prompt",
  "newPrompt.setProductionLabel": "Set the \"production\" label",
  "newPrompt.commitMessage": "Commit message",
  "newPrompt.commitMessagePlaceholder": "Add commit message...",
  "newPrompt.addPromptReference": "Add prompt reference",

  // duplicate-prompt
  "duplicate.settings": "Settings",
  "duplicate.title": "Duplicate prompt",

  // duplicate-folder
  "duplicateFolder.title": "Duplicate folder including prompts",
  "duplicateFolder.targetPath": "Target folder path",
  "duplicateFolder.versionSettings": "Version settings",

  // delete
  "delete.promptsToDelete": "Prompts to delete:",
} as const;

export default prompt;
