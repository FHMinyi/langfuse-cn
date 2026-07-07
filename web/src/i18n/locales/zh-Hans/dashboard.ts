/**
 * Simplified Chinese (zh-Hans) translations for the dashboard & widgets namespace.
 */
import type enUS from "../en-US/dashboard";

const dashboard: Record<keyof typeof enUS, string> = {
  // WidgetForm.tsx
  "widgetForm.configuration": "小组件配置",
  "widgetForm.dataSelection": "数据选择",
  "widgetForm.view": "视图",
  "widgetForm.selectView": "选择视图",
  "widgetForm.selectAggregation": "选择聚合方式",
  "widgetForm.selectMetrics": "选择指标",
  "widgetForm.selectAggregationCap": "选择聚合方式",
  "widgetForm.filters": "筛选器",
  "widgetForm.selectDimension": "选择维度",
  "widgetForm.none": "无",
  "widgetForm.sortColumn": "排序列",
  "widgetForm.selectSortColumn": "选择排序依据的列",
  "widgetForm.noDefaultSort": "不默认排序",
  "widgetForm.sortOrder": "排序顺序",
  "widgetForm.ascending": "升序(A-Z)",
  "widgetForm.descending": "降序(Z-A)",
  "widgetForm.visualization": "可视化",
  "widgetForm.name": "名称",
  "widgetForm.namePlaceholder": "输入小组件名称",
  "widgetForm.description": "描述",
  "widgetForm.descriptionPlaceholder": "输入小组件描述",
  "widgetForm.chartType": "图表类型",
  "widgetForm.selectChartType": "选择图表类型",
  "widgetForm.timeSeries": "时间序列",
  "widgetForm.totalValue": "总计值",
  "widgetForm.dateRange": "日期范围",
  "widgetForm.histogramBins": "分箱数量(1-100)",
  "widgetForm.histogramBinsPlaceholder": "输入分箱数量(1-100)",
  "widgetForm.breakdownLimitPlaceholder": "输入分解行数限制(0-1000)",
  "widgetForm.invalidQuery": "无效查询",

  // WidgetTable.tsx
  "widgetTable.pleaseConfirm": "请确认",

  // SelectWidgetDialog.tsx
  "selectWidgetDialog.title": "选择要添加的小组件",
  "selectWidgetDialog.loading": "正在加载小组件…",
  "selectWidgetDialog.viewType": "视图类型",
  "selectWidgetDialog.chartType": "图表类型",
  "selectWidgetDialog.name": "名称",

  // DashboardWidget.tsx
  "dashboardWidget.notFound": "未找到小组件",

  // Chart.tsx
  "chart.largeDatasetWarning": "大数据集警告",

  // PivotTable.tsx
  "pivotTable.noData": "暂无可用数据",

  // SelectDashboardDialog.tsx
  "selectDashboardDialog.title": "选择要添加小组件的仪表盘",
  "selectDashboardDialog.loading": "正在加载仪表盘…",

  // EditDashboardDialog.tsx
  "editDashboardDialog.title": "编辑仪表盘",
  "editDashboardDialog.namePlaceholder": "仪表盘名称",
  "editDashboardDialog.descriptionPlaceholder": "仪表盘描述",

  // 图表标题与描述
  "chart.userConsumption.title": "用户消耗",
  "chart.userConsumption.description": "通过在追踪中传入用户 ID 来跟踪每位用户的消耗。",
  "chart.tracesTimeSeries.description": "追踪包含 LLM 应用的详细信息,可通过 SDK 创建。",
  "chart.scores.title": "评分",
  "chart.scores.description": "已跟踪的评分总数",
  "chart.scoresAnalytics.title": "评分分析",
  "chart.scoresAnalytics.description": "随时间聚合的评分与平均值",
  "chart.scoresAnalytics.searchPlaceholder": "搜索评分…",
  "chart.scoresAnalytics.aggregateHint": "最多聚合 10,000 条评分",
  "chart.modelUsage.title": "模型用量",
  "chart.modelCosts.title": "模型成本",
  "chart.modelCosts.totalCost": "总成本",
  "chart.modelCosts.description": "将每个模型的 token 数量乘以每 token 成本计算得出。",
  "chart.traceLatency.title": "追踪延迟百分位",
  "chart.generationLatency.title": "生成延迟百分位",
  "chart.observationLatency.title": "观测延迟百分位",
  "chart.modelLatencies.title": "模型延迟",
  "chart.modelLatencies.description": "每次 LLM 生成的延迟(秒)",
  "chart.chartScores.description": "每个评分的移动平均值",
  "chart.chartScores.sdkHint": "评分用于评估 LLM 质量,可手动创建或通过 SDK 创建。",

  // ModelSelector.tsx
  "modelSelector.searchPlaceholder": "搜索模型…",
  "modelSelector.noModelFound": "未找到模型。",
  "modelSelector.selectAll": "全选",
};

export default dashboard;
