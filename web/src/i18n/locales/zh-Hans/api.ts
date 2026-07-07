/**
 * Simplified Chinese (zh-Hans) translations for the api namespace.
 */
import type enUS from "../en-US/api";

const api: Record<keyof typeof enUS, string> = {
  "common.accessDenied": "访问被拒绝",

  "onboarding.failedToLoad": "加载引导页失败",
  "onboarding.referralPlaceholder": "同事、口碑、X、Reddit、活动",

  "setup.tracingCardTitle": "记录你的第一条追踪,只需一分钟",
  "setup.configureTracing": "配置追踪",
  "setup.newOrganization": "新建组织",
  "setup.newProject": "新建项目",

  "apiKey.title": "API 密钥",
  "apiKey.publicKey": "公钥",
  "apiKey.secretKey": "密钥",
  "apiKey.deleteTitle": "删除 API 密钥",
  "apiKey.createTitle": "创建 API 密钥",
  "apiKey.apiKeysTitle": "API 密钥",
  "apiKey.noteOptional": "备注(可选)",
  "apiKey.notePlaceholder": "生产环境密钥",
  "apiKey.detail.secretKey": "密钥",
  "apiKey.detail.publicKey": "公钥",
  "apiKey.detail.usingMcp": "配合 MCP 使用",
  "apiKey.detail.header": "请求头",

  "llm.title": "LLM 连接",
  "llm.updateTitle": "更新 LLM 连接",
  "llm.newTitle": "新建 LLM 连接",
  "llm.deleteTitle": "删除 LLM 连接",
  "llm.extraHeaders": "额外请求头",
  "llm.form.customModels": "自定义模型",
  "llm.form.extraHeaders": "额外请求头",
  "llm.form.headerNamePlaceholder": "请求头名称",
  "llm.form.adapter": "LLM 适配器",
  "llm.form.selectProvider": "选择 LLM 提供商",
  "llm.form.providerName": "提供商名称",
  "llm.form.authMethod": "认证方式",
  "llm.form.awsRegion": "AWS 区域",
  "llm.form.bedrockApiKey": "Bedrock API 密钥",
  "llm.form.defaultCredChain": "默认凭证提供链:",
  "llm.form.gcpKey": "GCP 服务账号密钥(JSON)",
  "llm.form.cloudRunAccount": "Cloud Run 服务账号",
  "llm.form.apiKey": "API 密钥",
  "llm.form.apiBaseUrl": "API 基础 URL",
  "llm.form.locationOptional": "位置(可选)",
  "llm.form.useResponsesApi": "使用 Responses API",
  "llm.form.enableDefaultModels": "启用默认模型",
};

export default api;
