/**
 * Simplified Chinese (zh-Hans) translations for the model namespace.
 */
import type enUS from "../en-US/model";

const model: Record<keyof typeof enUS, string> = {
  "common.pleaseConfirm": "请确认",
  "common.editModel": "编辑模型",
  "common.deleteModel": "删除模型",
  "common.cloneModel": "克隆模型",

  "settings.title": "模型定义",

  "upsert.modelName": "模型名称",
  "upsert.matchPattern": "匹配模式",
  "upsert.tokenizer": "分词器",
  "upsert.selectUnit": "选择单位",
  "upsert.tokenizerConfig": "分词器配置",

  "pricing.prices": "价格",
  "pricing.tiers": "定价层级",

  "tierPrice.usageType": "用量类型",
  "tierPrice.keyPlaceholder": "键名(如 input、output)",
  "tierPrice.pricePerUnit": "每单位价格",
  "tierPrice.remove": "移除价格",
  "tierPrice.addPrice": "添加价格",

  "tierPrefill.hint": "从模板预填充用量类型:",

  "tierConditions.conditions": "条件",
  "tierConditions.usageDetailPattern": "用量详情模式(正则)",
  "tierConditions.operator": "运算符",
  "tierConditions.value": "值",
  "tierConditions.caseSensitive": "区分大小写",

  "tierAccordion.tierName": "层级名称",

  "priceUnit.select": "选择单位",

  "pricePreview.usageType": "用量类型",

  "priceBreakdown.noPrices": "暂无价格",
  "priceBreakdown.title": "价格明细",
  "priceBreakdown.price": "价格",
};

export default model;
