/**
 * Simplified Chinese (zh-Hans) translations.
 *
 * This file MUST mirror the key structure of `../en-US/common.ts`. The
 * `satisfies` constraint enforces this at compile time: any key present in
 * en-US but missing here is a type error, and any extra key here that does not
 * exist in en-US is also a type error.
 */
import type enUS from "../en-US/common";

const common: Record<keyof typeof enUS, string> = {
  // 语言切换器
  "language.label": "语言",
  "language.english": "English",
  "language.chinese": "简体中文",

  // 通用操作
  "action.save": "保存",
  "action.cancel": "取消",
  "action.delete": "删除",
  "action.create": "创建",
  "action.edit": "编辑",
  "action.remove": "移除",
  "action.confirm": "确认",
  "action.close": "关闭",
  "action.back": "返回",
  "action.next": "下一步",
  "action.previous": "上一步",
  "action.refresh": "刷新",
  "action.retry": "重试",
  "action.copy": "复制",
  "action.download": "下载",

  // 通用状态
  "state.loading": "加载中…",
  "state.noData": "暂无数据",
  "state.error": "出错了",
  "state.success": "成功",
  "state.saved": "已保存",
  "state.deleted": "已删除",

  // 导航 — 用户菜单(侧边栏)
  "nav.user.accountSettings": "账户设置",
  "nav.user.theme": "主题",
  "nav.user.featurePreview": "功能预览",
  "nav.user.regions": "区域",
  "nav.user.regions.current": "当前",
  "nav.user.signOut": "退出登录",

  // 导航 — 侧边栏主菜单
  "nav.search": "跳转至…",
  "nav.organizations": "组织",
  "nav.projects": "项目",
  "nav.home": "首页",
  "nav.dashboards": "仪表盘",
  "nav.tracing": "追踪",
  "nav.sessions": "会话",
  "nav.users": "用户",
  "nav.monitors": "监控",
  "nav.prompts": "提示词",
  "nav.playground": "试验场",
  "nav.scores": "评分",
  "nav.evaluators": "评估器",
  "nav.humanAnnotation": "人工标注",
  "nav.datasets": "数据集",
  "nav.experiments": "实验",
  "nav.upgrade": "升级",
  "nav.cloudStatus": "云服务状态",
  "nav.preview": "预览(快速)",
  "nav.settings": "设置",
  "nav.bookACall": "预约通话",
  "nav.assistant": "助手",
  "nav.support": "支持",

  // 导航 — 分组标签
  "nav.group.observability": "可观测性",
  "nav.group.promptManagement": "提示词管理",
  "nav.group.evaluation": "评估",
};

export default common;
