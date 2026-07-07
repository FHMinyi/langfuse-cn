/**
 * English (en-US) translations for the auth namespace.
 * Covers sign-in, sign-up, and shared auth UI strings.
 */
const auth = {
  "signIn.title": "Sign in | Langfuse",
  "signIn.heading": "Sign in to your account",
  "signIn.button": "Sign in",
  "signIn.continue": "Continue",
  "signIn.lastUsed": "Last used",
  "signIn.noAccount": "No account yet?",
  "signIn.signUp": "Sign up",
  "signIn.orActionWith": "or {{action}} with",
  "signIn.cloudTrouble":
    "If you are experiencing issues signing in, please force refresh this page (CMD + SHIFT + R) or clear your browser cache.",
  "signIn.contactUs": "(contact us)",
  "signIn.contactSupport": "Contact support if this error is unexpected.",
  "signIn.cloudRegionHint":
    "Make sure you are using the correct cloud data region.",

  "signUp.heading": "Sign up",
  "signUp.button": "Sign up",

  "field.email": "Email",
  "field.emailPlaceholder": "jsdoe@example.com",
  "field.password": "Password",
  "field.forgotPassword": "(forgot password?)",
  "field.forgotPasswordTitle": "What is this?",

  "error.unexpected": "An unexpected error occurred.",
  "error.invalidEmail": "Invalid email address",
  "error.passwordMinLength": "Password must be at least 8 characters long",
  "error.ssoCheckFailed":
    "Unable to check SSO configuration. Please try again.",
  "error.oauthAccountNotLinked":
    "Please sign in with the same provider (e.g. Google, GitHub, Azure AD, etc.) that you used to create this account.",

  "sso.workosOrganization": "WorkOS (organization)",
  "sso.workosConnection": "WorkOS (connection)",
  "sso.promptOrganizationId": "Please enter your organization ID",
  "sso.promptConnectionId": "Please enter your connection ID",
} as const;

export default auth;
