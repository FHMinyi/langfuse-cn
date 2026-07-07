/**
 * English (en-US) translations for the ee (enterprise) namespace.
 * Covers SSO, verified domains, billing, in-app agent, and audit logs.
 */
const ee = {
  "common.accessDenied": "Access Denied",
  "common.notAvailable": "Not available",

  // Audit logs
  "audit.title": "Organization Audit Logs",

  // Billing
  "billing.title": "Usage & Billing",
  "billing.accessRestricted": "Access Restricted",
  "billing.requiresPermissions": "This feature requires additional permissions",
  "billing.addPromoCode": "Add Promotion Code",
  "billing.promoDescription": "Enter a valid promotion code to apply it to your subscription.",
  "billing.promoPlaceholder": "PROMO2025",
  "billing.reactivate": "Reactivate Subscription",
  "billing.cancel": "Cancel Subscription",
  "billing.confirmCancellation": "Confirm Cancellation",
  "billing.keepSubscription": "Keep Subscription",
  "billing.changePlan": "Change plan",
  "billing.plans": "Plans",
  "billing.currentPlan": "Current Plan",
  "billing.startsNextPeriod": "Starts next period",
  "billing.mainFeatures": "Main features:",
  "billing.alertTitle": "Alert Title",
  "billing.alertLimit": "Limit (USD)",
  "billing.howItWorks": "How it works",
  "billing.alertTriggerOnce": "Alerts trigger once per billing cycle.",
  "billing.alertEmail": "You will receive an email when the alert is triggered.",
  "billing.alertDelay": "Alerts are evaluated with a 90 minute delay.",

  // In-app agent
  "agent.assistant": "Assistant",
  "agent.startNew": "Start new conversation",
  "agent.history": "Conversation history",
  "agent.recent": "Recent conversations",
  "agent.minimize": "Minimize assistant",
  "agent.placeholder": "Ask the assistant a question...",

  // Verified domains
  "domains.title": "Verified Domains",
  "domains.pendingVerification": "Pending verification",
  "domains.addDomain": "Add Domain",
  "domains.addDomainTitle": "Add a domain",
  "domains.domainLabel": "Domain",
  "domains.remove": "Remove",

  // SSO
  "sso.title": "SSO Configuration",
  "sso.notConfigured": "Not configured",
  "sso.provider": "Provider",
  "sso.selectProvider": "Select an SSO provider",
  "sso.displayName": "Display Name",
  "sso.displayNamePlaceholder": "Acme SSO",
  "sso.clientId": "Client ID",
  "sso.clientSecret": "Client Secret",
  "sso.issuerUrl": "Issuer URL",
  "sso.tenantId": "Tenant ID",
  "sso.baseUrl": "Base URL",
  "sso.callbackUrl": "Callback URL",
  "sso.remove": "Remove SSO",
} as const;

export default ee;
