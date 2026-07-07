/**
 * English (en-US) translations for the settings namespace.
 * Covers rbac, projects, and organizations settings UI.
 */
const settings = {
  "common.noAccess": "No access",

  // Organizations
  "org.nameTitle": "Organization Name",
  "org.nameLabel": "Organization name",
  "org.aiFeatures": "AI Features",
  "org.confirmAiChange": "Confirm AI Features Change",

  // Projects
  "project.nameTitle": "Project Name",
  "project.nameLabel": "Project name",
  "project.hostName": "Host Name",
  "project.dataRetention": "Data Retention",
  "project.transfer.warning": "Warning",
  "project.transfer.selectOrg": "Select New Organization",
  "project.transfer.selectOrgPlaceholder": "Select organization",
  "project.transfer.confirm": "Confirm",

  // RBAC
  "rbac.orgScopes": "Organization Scopes",
  "rbac.projectScopes": "Project Scopes",
  "rbac.mutedScopes": "Muted scopes",
  "rbac.accessDenied": "Access Denied",
  "rbac.membershipInvites": "Membership Invites",
  "rbac.email": "Email",
  "rbac.orgRole": "Organization Role",
  "rbac.selectOrgRole": "Select an organization role",
  "rbac.projectRole": "Project Role",
  "rbac.selectProjectRole": "Select a project role",
} as const;

export default settings;
