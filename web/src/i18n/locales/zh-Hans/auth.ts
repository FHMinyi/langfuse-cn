/**
 * Simplified Chinese (zh-Hans) translations for the auth namespace.
 * Mirrors the key structure of `../en-US/auth.ts` (enforced at compile time).
 */
import type enUS from "../en-US/auth";

const auth: Record<keyof typeof enUS, string> = {
  "signIn.title": "登录 | Langfuse",
  "signIn.heading": "登录你的账户",
  "signIn.button": "登录",
  "signIn.continue": "继续",
  "signIn.lastUsed": "上次使用",
  "signIn.noAccount": "还没有账户?",
  "signIn.signUp": "注册",
  "signIn.orActionWith": "或使用以下方式{{action}}",
  "signIn.cloudTrouble":
    "如果你在登录时遇到问题,请强制刷新本页(CMD + SHIFT + R)或清除浏览器缓存。",
  "signIn.contactUs": "(联系我们)",
  "signIn.contactSupport": "如遇意外错误,请联系支持团队。",
  "signIn.cloudRegionHint": "请确保你使用了正确的云数据区域。",

  "signUp.heading": "注册",
  "signUp.button": "注册",

  "field.email": "邮箱",
  "field.emailPlaceholder": "jsdoe@example.com",
  "field.password": "密码",
  "field.forgotPassword": "(忘记密码?)",
  "field.forgotPasswordTitle": "这是什么?",

  "error.unexpected": "发生了意外错误。",
  "error.invalidEmail": "邮箱地址无效",
  "error.passwordMinLength": "密码长度至少为 8 个字符",
  "error.ssoCheckFailed": "无法检查 SSO 配置,请重试。",
  "error.oauthAccountNotLinked":
    "请使用创建此账户时所用的同一提供商登录(如 Google、GitHub、Azure AD 等)。",

  "sso.workosOrganization": "WorkOS(组织)",
  "sso.workosConnection": "WorkOS(连接)",
  "sso.promptOrganizationId": "请输入你的组织 ID",
  "sso.promptConnectionId": "请输入你的连接 ID",
};

export default auth;
