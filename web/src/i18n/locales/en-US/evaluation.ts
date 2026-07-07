/**
 * English (en-US) translations for the evaluation namespace.
 * Covers evaluators, eval templates, scores, and score configs.
 */
const evaluation = {
  "common.pleaseConfirm": "Please confirm",
  "common.noAccess": "You do not have access to this page.",
  "common.openMenu": "Open menu",
  "common.delete": "Delete",
  "common.name": "Name",
  "common.version": "Version",

  // variable-mapping-card
  "varMapping.title": "Variable mapping",
  "varMapping.readonlyHint": "Only user-managed templates can be edited",
  "varMapping.object": "Object",
  "varMapping.objectNamePlaceholder": "Enter langfuse object name",
  "varMapping.objectTypePlaceholder": "Object type",
  "varMapping.optional": "Optional",
  "varMapping.selectField": "Select field",

  // template-selector / evaluator-selector
  "selector.searchEvaluators": "Search evaluators...",
  "selector.noEvaluatorFound": "No evaluator found.",
  "selector.requiresModel": "Requires project-level evaluation model",
  "selector.pausedHint":
    "The evaluator has been used in the past but is currently paused. It will not run against outputs created in this dataset run. You can reactivate it if you wish",

  // template-form
  "templateForm.name": "Name",
  "templateForm.namePlaceholder": "Select a name",
  "templateForm.defaultModel": "Use default evaluation model",
  "templateForm.evalPrompt": "Evaluation prompt",
  "templateForm.scoreType": "Score type",
  "templateForm.selectScoreType": "Select a score type",
  "templateForm.categories": "Categories",
  "templateForm.allowMultiple": "Allow multiple matches",
  "templateForm.scoreReasoning": "Score reasoning prompt",

  // select-evaluator-list
  "selectList.fromScratch": "Create from scratch",
  "selectList.codeEvaluator": "Code evaluator",
  "selectList.useExisting": "Use existing",
  "selectList.createTitle": "Create new evaluator",

  // legacy-eval-callout
  "legacy.thisEvaluator": "This evaluator",

  // inner-evaluator-form
  "innerForm.readonlyHint": "Only user-managed templates can be edited",
  "innerForm.generatedScoreName": "Generated Score Name",
  "innerForm.unsupportedFilter": "Unsupported filter detected",
  "innerForm.experimentMethod": "Experiment Method",
  "innerForm.evaluate": "Evaluate",
  "innerForm.filter": "Filter",
  "innerForm.sampling": "Sampling",
  "innerForm.delaySeconds": "Delay (seconds)",
  "innerForm.legacyTitle": "You selected a legacy evaluator",

  // evaluator-table
  "evalTable.actionRequired": "Action required",
  "evalTable.newFunctionality": "New functionality has landed.",
  "evalTable.editConfig": "Edit configuration",

  // evaluator-detail
  "evalDetail.notFound": "Evaluator not found",
  "evalDetail.unsupportedFilters": "Unsupported filters",

  // evaluation-prompt-preview
  "promptPreview.loading": "Loading variables...",

  // eval-templates-table
  "templatesTable.editEvaluator": "Edit evaluator",
  "templatesTable.cloneEvaluator": "Clone evaluator",
  "templatesTable.updateRunning": "Update running evaluators?",

  // eval-template-type-selector
  "typeSelector.type": "Type",

  // eval-template-detail
  "templateDetail.editMode": "Edit mode",

  // new-evaluator page
  "newEvaluator.selectedUpdated": "Selected Evaluator has been updated",

  // scores / score-configs (from scores scan)
  "score.common.pleaseConfirm": "Please confirm",

  // ScoreConfigSettings
  "scoreConfig.settingsTitle": "Score Configs",

  // UpsertScoreConfigDialog
  "scoreConfig.name": "Name",
  "scoreConfig.dataType": "Data type",
  "scoreConfig.selectDataType": "Select a data type",
  "scoreConfig.minimum": "Minimum (optional)",
  "scoreConfig.maximum": "Maximum (optional)",
  "scoreConfig.label": "Label",
  "scoreConfig.description": "Description (optional)",
  "scoreConfig.descriptionPlaceholder": "Provide an optional description of the score config...",

  // AnnotationForm (scores)
  "score.comment": "Score Comment",
  "score.annotate": "Annotate",
  "score.valuePlaceholder": "Value",
  "score.addOrViewComment": "Add or view score comment",
  "score.freeFormPlaceholder": "Enter free form text...",
  "score.selectCategory": "Select category",
  "score.deleteArchived": "Delete archived score",
  "score.deleteFromTrace": "Delete score from trace/observation",
} as const;

export default evaluation;
