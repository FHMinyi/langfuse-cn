/**
 * Simplified Chinese (zh-Hans) translations for the settings namespace.
 */
import type enUS from "../en-US/settings";

const settings: Record<keyof typeof enUS, string> = {
  "common.noAccess": "无权限",

  "org.nameTitle": "组织名称",
  "org.nameLabel": "组织名称",
  "org.aiFeatures": "AI 功能",
  "org.confirmAiChange": "确认 AI 功能变更",

  "project.nameTitle": "项目名称",
  "project.nameLabel": "项目名称",
  "project.hostName": "主机名",
  "project.dataRetention": "数据保留",
  "project.transfer.warning": "警告",
  "project.transfer.selectOrg": "选择新组织",
  "project.transfer.selectOrgPlaceholder": "选择组织",
  "project.transfer.confirm": "确认",

  "rbac.orgScopes": "组织权限范围",
  "rbac.projectScopes": "项目权限范围",
  "rbac.mutedScopes": "已静默的权限",
  "rbac.accessDenied": "访问被拒绝",
  "rbac.membershipInvites": "成员邀请",
  "rbac.email": "邮箱",
  "rbac.orgRole": "组织角色",
  "rbac.selectOrgRole": "选择组织角色",
  "rbac.projectRole": "项目角色",
  "rbac.selectProjectRole": "选择项目角色",
};

export default settings;
