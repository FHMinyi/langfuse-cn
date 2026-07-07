/**
 * English (en-US) translations for the components namespace.
 * Covers shared/generic UI components (date picker, table controls, trace, onboarding, model params).
 */
const components = {
  // date-picker
  "datePicker.pickDate": "Pick a date",
  "datePicker.selectTimeRange": "Select time range",
  "datePicker.startTime": "Start time",
  "datePicker.endTime": "End time",
  "datePicker.selectFromCalendar": "Select from calendar",

  // DatasetItemsOnboarding
  "onboarding.addItems": "Add items to your dataset",
  "onboarding.uploadCsv": "Upload CSV",
  "onboarding.addManually": "Add Manually",
  "onboarding.createItem": "Create dataset item",
  "onboarding.addViaCode": "Add via Code",
  "onboarding.selectTraces": "Select Traces",

  // TraceSettingsDropdown
  "trace.viewOptions": "View Options",
  "trace.showGraph": "Show Graph",
  "trace.showComments": "Show Comments",
  "trace.showScores": "Show Scores",
  "trace.showDuration": "Show Duration",
  "trace.showCostTokens": "Show Cost/Tokens",

  // data-table-controls
  "table.showFilters": "Show filters",
  "table.hideFilters": "Hide filters",
  "table.clearAllFilters": "Clear all filters",
  "table.filterWithAi": "Filter with AI",
  "table.filterValuesPlaceholder": "Filter values",
  "table.searchPlaceholder": "Search",
  "table.enterValuePlaceholder": "Enter value...",

  // ModelParameters
  "modelParams.noApiKey": "No LLM API key set in project.",
  "modelParams.advancedSettings": "Model Advanced Settings",
  "modelParams.temperature": "Temperature",
  "modelParams.outputTokenLimit": "Output token limit",
  "modelParams.topP": "Top P",
  "modelParams.maxReasoningTokens": "Max. Reasoning Tokens",
  "modelParams.provider": "Provider",
  "modelParams.modelName": "Model name",

  // data-table-view-presets-drawer
  "viewPresets.betaHint": "Reflects your current table settings without applying any saved custom table views",
  "viewPresets.searchViews": "Search views...",
  "viewPresets.noViewsFound": "No views found",
  "viewPresets.removeDefault": "Remove as my default",
  "viewPresets.setDefault": "Set as my default",
  "viewPresets.removeProjectDefault": "Remove as project default",
  "viewPresets.setProjectDefault": "Set as project default",
  "viewPresets.saveTitle": "Save Current Table View",
  "viewPresets.viewName": "View name",
  "viewPresets.thisWillSave": "This will save the current:",
  "viewPresets.filters": "Filters",
  "viewPresets.active": "active",
  "viewPresets.searchTerm": "Search term",
} as const;

export default components;
