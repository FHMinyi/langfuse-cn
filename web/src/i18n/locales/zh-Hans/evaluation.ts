/**
 * Simplified Chinese (zh-Hans) translations for the evaluation namespace.
 */
import type enUS from "../en-US/evaluation";

const evaluation: Record<keyof typeof enUS, string> = {
  "common.pleaseConfirm": "请确认",
  "common.noAccess": "你没有此页面的访问权限。",
  "common.openMenu": "打开菜单",
  "common.delete": "删除",
  "common.name": "名称",
  "common.version": "版本",

  "varMapping.title": "变量映射",
  "varMapping.readonlyHint": "仅用户管理的模板可编辑",
  "varMapping.object": "对象",
  "varMapping.objectNamePlaceholder": "输入 Langfuse 对象名称",
  "varMapping.objectTypePlaceholder": "对象类型",
  "varMapping.optional": "可选",
  "varMapping.selectField": "选择字段",

  "selector.searchEvaluators": "搜索评估器…",
  "selector.noEvaluatorFound": "未找到评估器。",
  "selector.requiresModel": "需要项目级评估模型",
  "selector.pausedHint":
    "该评估器过去曾使用,但目前已暂停。它不会对此数据集运行中的输出执行。如需要可以重新激活。",

  "templateForm.name": "名称",
  "templateForm.namePlaceholder": "选择一个名称",
  "templateForm.defaultModel": "使用默认评估模型",
  "templateForm.evalPrompt": "评估提示词",
  "templateForm.scoreType": "评分类型",
  "templateForm.selectScoreType": "选择评分类型",
  "templateForm.categories": "分类",
  "templateForm.allowMultiple": "允许多重匹配",
  "templateForm.scoreReasoning": "评分理由提示词",

  "selectList.fromScratch": "从零开始创建",
  "selectList.codeEvaluator": "代码评估器",
  "selectList.useExisting": "使用现有的",
  "selectList.createTitle": "创建新评估器",

  "legacy.thisEvaluator": "此评估器",

  "innerForm.readonlyHint": "仅用户管理的模板可编辑",
  "innerForm.generatedScoreName": "生成的评分名称",
  "innerForm.unsupportedFilter": "检测到不支持的筛选器",
  "innerForm.experimentMethod": "实验方法",
  "innerForm.evaluate": "评估对象",
  "innerForm.filter": "筛选器",
  "innerForm.sampling": "采样",
  "innerForm.delaySeconds": "延迟(秒)",
  "innerForm.legacyTitle": "你选择了一个旧版评估器",

  "evalTable.actionRequired": "需要操作",
  "evalTable.newFunctionality": "新功能已上线。",
  "evalTable.editConfig": "编辑配置",

  "evalDetail.notFound": "未找到评估器",
  "evalDetail.unsupportedFilters": "不支持的筛选器",

  "promptPreview.loading": "正在加载变量…",

  "templatesTable.editEvaluator": "编辑评估器",
  "templatesTable.cloneEvaluator": "克隆评估器",
  "templatesTable.updateRunning": "更新运行中的评估器?",

  "typeSelector.type": "类型",

  "templateDetail.editMode": "编辑模式",

  "newEvaluator.selectedUpdated": "所选评估器已更新",

  "score.common.pleaseConfirm": "请确认",

  "scoreConfig.settingsTitle": "评分配置",

  "scoreConfig.name": "名称",
  "scoreConfig.dataType": "数据类型",
  "scoreConfig.selectDataType": "选择数据类型",
  "scoreConfig.minimum": "最小值(可选)",
  "scoreConfig.maximum": "最大值(可选)",
  "scoreConfig.label": "标签",
  "scoreConfig.description": "描述(可选)",
  "scoreConfig.descriptionPlaceholder": "提供评分配置的可选描述…",

  "score.comment": "评分评论",
  "score.annotate": "标注",
  "score.valuePlaceholder": "值",
  "score.addOrViewComment": "添加或查看评分评论",
  "score.freeFormPlaceholder": "输入自由文本…",
  "score.selectCategory": "选择分类",
  "score.deleteArchived": "删除已归档评分",
  "score.deleteFromTrace": "从追踪/观测中删除评分",
};

export default evaluation;
