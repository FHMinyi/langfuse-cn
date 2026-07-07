/**
 * English (en-US) translations for the pages namespace.
 * Covers page-level strings in pages/** not owned by a feature namespace.
 */
const pages = {
  // Settings index
  "settings.debugInfo": "Debug Information",
  "settings.metadata": "Metadata",
  "settings.projectMembers": "Project Members",
  "settings.orgMembers": "Organization Members",
  "settings.integrations": "Integrations",
  "settings.blobStorage": "Blob Storage",

  // Account settings
  "account.displayName": "Display Name",
  "account.deleteAccount": "Delete Account",
  "account.email": "Email",
  "account.password": "Password",
  "account.changePassword": "Change Password",

  // Sign-up
  "signUp.title": "Sign up | Langfuse",
  "signUp.verifyTitle": "Verify your email | Langfuse",
  "signUp.name": "Name",
  "signUp.namePlaceholder": "Jane Doe",
  "signUp.email": "Email",
  "signUp.password": "Password",

  // Dashboards new
  "dashboardNew.name": "Dashboard Name",
  "dashboardNew.namePlaceholder": "Enter dashboard name",
  "dashboardNew.descriptionPlaceholder": "Describe the purpose of this dashboard. Optional, but very helpful.",

  // Scores analytics
  "scoresAnalytics.errorLoading": "Error Loading Scores",
  "scoresAnalytics.noScores": "No Scores Available",
  "scoresAnalytics.selectScore": "Select a Score",
  "scoresAnalytics.viewDistribution": "View distribution and trends over time",

  // Model detail
  "modelDetail.notFound": "Model not found",
  "modelDetail.configuration": "Model configuration",
  "modelDetail.selectTier": "Select tier",
  "modelDetail.usageType": "Usage Type",
  "modelDetail.price": "Price",
  "modelDetail.observations": "Model observations",
  "modelDetail.viewAll": "View all",
} as const;

export default pages;
