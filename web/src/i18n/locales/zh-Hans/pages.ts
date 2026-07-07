/**
 * Simplified Chinese (zh-Hans) translations for the pages namespace.
 */
import type enUS from "../en-US/pages";

const pages: Record<keyof typeof enUS, string> = {
  "settings.debugInfo": "调试信息",
  "settings.metadata": "元数据",
  "settings.projectMembers": "项目成员",
  "settings.orgMembers": "组织成员",
  "settings.integrations": "集成",
  "settings.blobStorage": "对象存储",

  "account.displayName": "显示名称",
  "account.deleteAccount": "删除账户",
  "account.email": "邮箱",
  "account.password": "密码",
  "account.changePassword": "修改密码",

  "signUp.title": "注册 | Langfuse",
  "signUp.verifyTitle": "验证你的邮箱 | Langfuse",
  "signUp.name": "姓名",
  "signUp.namePlaceholder": "张三",
  "signUp.email": "邮箱",
  "signUp.password": "密码",

  "dashboardNew.name": "仪表盘名称",
  "dashboardNew.namePlaceholder": "输入仪表盘名称",
  "dashboardNew.descriptionPlaceholder": "描述此仪表盘的用途。可选,但非常有帮助。",

  "scoresAnalytics.errorLoading": "加载评分出错",
  "scoresAnalytics.noScores": "暂无可用评分",
  "scoresAnalytics.selectScore": "选择一个评分",
  "scoresAnalytics.viewDistribution": "查看分布和随时间变化的趋势",

  "modelDetail.notFound": "未找到模型",
  "modelDetail.configuration": "模型配置",
  "modelDetail.selectTier": "选择层级",
  "modelDetail.usageType": "用量类型",
  "modelDetail.price": "价格",
  "modelDetail.observations": "模型观测",
  "modelDetail.viewAll": "查看全部",
};

export default pages;
