/**
 * Simplified Chinese (zh-Hans) translations for the components namespace.
 */
import type enUS from "../en-US/components";

const components: Record<keyof typeof enUS, string> = {
  "datePicker.pickDate": "选择日期",
  "datePicker.selectTimeRange": "选择时间范围",
  "datePicker.startTime": "开始时间",
  "datePicker.endTime": "结束时间",
  "datePicker.selectFromCalendar": "从日历选择",

  "onboarding.addItems": "向数据集添加条目",
  "onboarding.uploadCsv": "上传 CSV",
  "onboarding.addManually": "手动添加",
  "onboarding.createItem": "创建数据集条目",
  "onboarding.addViaCode": "通过代码添加",
  "onboarding.selectTraces": "选择追踪",

  "trace.viewOptions": "视图选项",
  "trace.showGraph": "显示图表",
  "trace.showComments": "显示评论",
  "trace.showScores": "显示评分",
  "trace.showDuration": "显示耗时",
  "trace.showCostTokens": "显示成本/Token",

  "table.showFilters": "显示筛选器",
  "table.hideFilters": "隐藏筛选器",
  "table.clearAllFilters": "清除所有筛选器",
  "table.filterWithAi": "AI 筛选",
  "table.filterValuesPlaceholder": "筛选值",
  "table.searchPlaceholder": "搜索",
  "table.enterValuePlaceholder": "输入值…",

  "modelParams.noApiKey": "项目中未设置 LLM API 密钥。",
  "modelParams.advancedSettings": "模型高级设置",
  "modelParams.temperature": "温度",
  "modelParams.outputTokenLimit": "输出 Token 上限",
  "modelParams.topP": "Top P",
  "modelParams.maxReasoningTokens": "最大推理 Token",
  "modelParams.provider": "提供商",
  "modelParams.modelName": "模型名称",

  "viewPresets.betaHint": "反映你当前的表格设置,不应用任何已保存的自定义表格视图",
  "viewPresets.searchViews": "搜索视图…",
  "viewPresets.noViewsFound": "未找到视图",
  "viewPresets.removeDefault": "取消设为我的默认",
  "viewPresets.setDefault": "设为我的默认",
  "viewPresets.removeProjectDefault": "取消设为项目默认",
  "viewPresets.setProjectDefault": "设为项目默认",
  "viewPresets.saveTitle": "保存当前表格视图",
  "viewPresets.viewName": "视图名称",
  "viewPresets.thisWillSave": "这将保存当前的:",
  "viewPresets.filters": "筛选器",
  "viewPresets.active": "个活跃",
  "viewPresets.searchTerm": "搜索词",
};

export default components;
