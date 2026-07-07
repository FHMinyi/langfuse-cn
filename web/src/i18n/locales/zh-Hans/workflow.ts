/**
 * Simplified Chinese (zh-Hans) translations for the workflow namespace.
 */
import type enUS from "../en-US/workflow";

const workflow: Record<keyof typeof enUS, string> = {
  "common.pleaseConfirm": "请确认",
  "common.delete": "删除",
  "common.accessDenied": "访问被拒绝",

  "batchExports.title": "导出",
  "batchExports.cancelConfirm": "取消批量导出?",

  "automation.webhookSecret": "Webhook 密钥",
  "automation.webhookNotFound": "未找到 Webhook",
  "automation.selectAutomation": "选择一个自动化",
  "automation.secretCreated": "Webhook 密钥已创建",
  "automation.secretRegenerated": "Webhook 密钥已重新生成",
  "automation.loadingDetails": "正在加载自动化详情…",
  "automation.title": "自动化",
  "automation.form.eventSource": "事件来源",
  "automation.form.selectEventSource": "选择事件来源",
  "automation.form.eventAction": "事件动作",
  "automation.form.eventActionsTitle": "事件动作",
  "automation.form.filter": "筛选器",
  "automation.form.howMonitorsConnect": "监控器如何关联",
  "automation.form.namePlaceholder": "自动化名称",
  "automation.form.trigger": "触发器",
  "automation.form.action": "动作",
  "automation.form.actionType": "动作类型",
  "automation.form.selectActionType": "选择动作类型",

  "webhook.apiVersion": "API 版本",
  "webhook.selectApiVersion": "选择 API 版本",
  "webhook.headers": "请求头",
  "webhook.headerNamePlaceholder": "请求头名称",
  "webhook.secretLabel": "Webhook 密钥",

  "slack.channel": "频道",
  "slack.selectChannel": "选择频道",

  "queue.processQueue": "处理队列",
  "queue.scoreConfigs": "评分配置",
  "queue.searchUsers": "搜索要添加的用户…",
  "queue.name": "名称",
  "queue.descriptionOptional": "描述(可选)",
  "queue.descriptionPlaceholder": "添加描述…",
  "queue.advancedSettings": "高级设置",
  "queue.inQueues": "在队列中",
  "queue.deleteItemsTitle": "删除队列条目",
  "queue.noMoreItems": "没有更多待标注的条目了!",
  "queue.previousItem": "上一条",
  "queue.skipToNext": "跳到下一条",
  "queue.markCompleted": "标记为已完成",
};

export default workflow;
