/**
 * Simplified Chinese (zh-Hans) translations for the dataset namespace.
 */
import type enUS from "../en-US/dataset";

const dataset: Record<keyof typeof enUS, string> = {
  "common.pleaseConfirm": "请确认",
  "common.notFound": "未找到",
  "common.openMenu": "打开菜单",
  "common.search": "搜索…",
  "common.copyToClipboard": "复制到剪贴板",

  "upload.addItems": "向数据集添加条目",

  "newItem.copyTitle": "复制条目",
  "newItem.addToDatasets": "添加条目到数据集",

  "newItem.targetDatasets": "目标数据集",
  "newItem.searchDatasets": "搜索数据集…",
  "newItem.expectedOutput": "预期输出",

  "newItem.create": "创建新数据集条目",

  "editItem.title": "编辑数据集条目",

  "duplicate.title": "复制数据集",

  "versionHistory.noVersions": "未找到版本",
  "versionHistory.itemModified": "条目在此版本中已修改",
  "versionHistory.versionActions": "版本操作",
  "versionHistory.title": "版本历史",

  "schema.enforced": "已启用 Schema 约束",
  "schema.exampleObject": "示例对象",

  "runs.confirmTitle": "请确认",

  "itemView.notFound": "未找到数据集条目",
  "itemView.cannotShowDiff": "无法显示差异",

  "itemDiff.expectedOutput": "预期输出",

  "form.descriptionOptional": "描述(可选)",
  "form.metadataOptional": "元数据(可选)",

  "analytics.charts": "图表",

  "aggregate.noScores": "暂无评分",
  "aggregate.viewTrace": "查看追踪/观测",

  "media.attach": "附加媒体",
};

export default dataset;
