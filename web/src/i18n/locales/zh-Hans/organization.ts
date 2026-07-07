/**
 * Simplified Chinese (zh-Hans) translations for the organization/project namespace.
 */
import type enUS from "../en-US/organization";

const organization: Record<keyof typeof enUS, string> = {
  "projectOverview.goToProject": "进入项目",
  "projectOverview.beingDeleted": "项目正在被删除",
  "projectOverview.tryDemo": "体验 Langfuse 演示",
  "projectOverview.demoDescription":
    "我们构建了一个基于 Langfuse 文档问答的聊天机器人。与它交互即可在 Langfuse 中查看追踪。",
  "projectOverview.viewDemoProject": "查看演示项目",
  "projectOverview.newProject": "新建项目",
  "projectOverview.loading": "加载中…",
  "projectOverview.searchProjects": "搜索项目",
  "projectOverview.newOrganization": "新建组织",
  "projectOverview.getStarted": "开始使用",
  "projectOverview.createOrgHint":
    "创建一个组织即可开始。或者请你的组织管理员邀请你加入。",
  "projectOverview.inviteHint": "你需要被邀请加入一个组织才能开始使用 Langfuse。",
  "projectOverview.docs": "文档",
  "projectOverview.askAi": "询问 AI",

  "organization.title": "组织",
  "organization.description":
    "组织帮助你管理项目访问权限。每个组织可以包含多个项目和具有不同角色的团队成员。",
  "organization.demoOrganization": "演示组织",
  "organization.demoOrg": "演示组织",
  "organization.fallback": "组织",
};

export default organization;
