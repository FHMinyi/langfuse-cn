/**
 * English (en-US) translations for the dashboard & widgets namespace.
 * Covers widget configuration form, dashboard dialogs, chart titles/descriptions.
 */
const dashboard = {
  // WidgetForm.tsx
  "widgetForm.configuration": "Widget Configuration",
  "widgetForm.dataSelection": "Data Selection",
  "widgetForm.view": "View",
  "widgetForm.selectView": "Select a view",
  "widgetForm.selectAggregation": "Select aggregation",
  "widgetForm.selectMetrics": "Select metrics",
  "widgetForm.selectAggregationCap": "Select Aggregation",
  "widgetForm.filters": "Filters",
  "widgetForm.selectDimension": "Select a dimension",
  "widgetForm.none": "None",
  "widgetForm.sortColumn": "Sort Column",
  "widgetForm.selectSortColumn": "Select a column to sort by",
  "widgetForm.noDefaultSort": "No default sort",
  "widgetForm.sortOrder": "Sort Order",
  "widgetForm.ascending": "Ascending (A-Z)",
  "widgetForm.descending": "Descending (Z-A)",
  "widgetForm.visualization": "Visualization",
  "widgetForm.name": "Name",
  "widgetForm.namePlaceholder": "Enter widget name",
  "widgetForm.description": "Description",
  "widgetForm.descriptionPlaceholder": "Enter widget description",
  "widgetForm.chartType": "Chart Type",
  "widgetForm.selectChartType": "Select a chart type",
  "widgetForm.timeSeries": "Time Series",
  "widgetForm.totalValue": "Total Value",
  "widgetForm.dateRange": "Date Range",
  "widgetForm.histogramBins": "Number of Bins (1-100)",
  "widgetForm.histogramBinsPlaceholder": "Enter number of bins (1-100)",
  "widgetForm.breakdownLimitPlaceholder": "Enter breakdown row limit (0-1000)",
  "widgetForm.invalidQuery": "Invalid query",

  // WidgetTable.tsx
  "widgetTable.pleaseConfirm": "Please confirm",

  // SelectWidgetDialog.tsx
  "selectWidgetDialog.title": "Select widget to add",
  "selectWidgetDialog.loading": "Loading widgets...",
  "selectWidgetDialog.viewType": "View Type",
  "selectWidgetDialog.chartType": "Chart Type",
  "selectWidgetDialog.name": "Name",

  // DashboardWidget.tsx
  "dashboardWidget.notFound": "Widget not found",

  // Chart.tsx
  "chart.largeDatasetWarning": "Large Dataset Warning",

  // PivotTable.tsx
  "pivotTable.noData": "No data available",

  // SelectDashboardDialog.tsx
  "selectDashboardDialog.title": "Select dashboard to add widget to",
  "selectDashboardDialog.loading": "Loading dashboards...",

  // EditDashboardDialog.tsx
  "editDashboardDialog.title": "Edit Dashboard",
  "editDashboardDialog.namePlaceholder": "Dashboard name",
  "editDashboardDialog.descriptionPlaceholder": "Dashboard description",

  // Chart titles & descriptions
  "chart.userConsumption.title": "User consumption",
  "chart.userConsumption.description":
    "Consumption per user is tracked by passing their ids on traces.",
  "chart.tracesTimeSeries.description":
    "Traces contain details about LLM applications and can be created using the SDK.",
  "chart.scores.title": "Scores",
  "chart.scores.description": "Total scores tracked",
  "chart.scoresAnalytics.title": "Scores Analytics",
  "chart.scoresAnalytics.description": "Aggregate scores and averages over time",
  "chart.scoresAnalytics.searchPlaceholder": "Search score...",
  "chart.scoresAnalytics.aggregateHint": "Aggregate of up to 10,000 scores",
  "chart.modelUsage.title": "Model Usage",
  "chart.modelCosts.title": "Model costs",
  "chart.modelCosts.totalCost": "Total cost",
  "chart.modelCosts.description":
    "Calculated multiplying the number of tokens with cost per token for each model.",
  "chart.traceLatency.title": "Trace latency percentiles",
  "chart.generationLatency.title": "Generation latency percentiles",
  "chart.observationLatency.title": "Observation latency percentiles",
  "chart.modelLatencies.title": "Model latencies",
  "chart.modelLatencies.description": "Latencies (seconds) per LLM generation",
  "chart.chartScores.description": "Moving average per score",
  "chart.chartScores.sdkHint":
    "Scores evaluate LLM quality and can be created manually or using the SDK.",

  // ModelSelector.tsx
  "modelSelector.searchPlaceholder": "Search models...",
  "modelSelector.noModelFound": "No model found.",
  "modelSelector.selectAll": "Select All",
} as const;

export default dashboard;
