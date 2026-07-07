/**
 * Simplified Chinese (zh-Hans) translations for the ee (enterprise) namespace.
 */
import type enUS from "../en-US/ee";

const ee: Record<keyof typeof enUS, string> = {
  "common.accessDenied": "访问被拒绝",
  "common.notAvailable": "不可用",

  "audit.title": "组织审计日志",

  "billing.title": "用量与账单",
  "billing.accessRestricted": "访问受限",
  "billing.requiresPermissions": "此功能需要额外权限",
  "billing.addPromoCode": "添加优惠码",
  "billing.promoDescription": "输入有效的优惠码以应用到你的订阅。",
  "billing.promoPlaceholder": "PROMO2025",
  "billing.reactivate": "重新激活订阅",
  "billing.cancel": "取消订阅",
  "billing.confirmCancellation": "确认取消",
  "billing.keepSubscription": "保留订阅",
  "billing.changePlan": "更改方案",
  "billing.plans": "方案",
  "billing.currentPlan": "当前方案",
  "billing.startsNextPeriod": "下一周期开始",
  "billing.mainFeatures": "主要功能:",
  "billing.alertTitle": "告警标题",
  "billing.alertLimit": "限额(美元)",
  "billing.howItWorks": "工作原理",
  "billing.alertTriggerOnce": "每个账单周期触发一次告警。",
  "billing.alertEmail": "告警触发时你将收到邮件通知。",
  "billing.alertDelay": "告警评估有 90 分钟延迟。",

  "agent.assistant": "助手",
  "agent.startNew": "开始新对话",
  "agent.history": "对话历史",
  "agent.recent": "最近对话",
  "agent.minimize": "最小化助手",
  "agent.placeholder": "向助手提问…",

  "domains.title": "已验证域名",
  "domains.pendingVerification": "待验证",
  "domains.addDomain": "添加域名",
  "domains.addDomainTitle": "添加域名",
  "domains.domainLabel": "域名",
  "domains.remove": "移除",

  "sso.title": "SSO 配置",
  "sso.notConfigured": "未配置",
  "sso.provider": "提供商",
  "sso.selectProvider": "选择 SSO 提供商",
  "sso.displayName": "显示名称",
  "sso.displayNamePlaceholder": "Acme SSO",
  "sso.clientId": "客户端 ID",
  "sso.clientSecret": "客户端密钥",
  "sso.issuerUrl": "签发方 URL",
  "sso.tenantId": "租户 ID",
  "sso.baseUrl": "基础 URL",
  "sso.callbackUrl": "回调 URL",
  "sso.remove": "移除 SSO",
};

export default ee;
