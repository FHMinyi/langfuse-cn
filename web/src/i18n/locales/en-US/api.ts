/**
 * English (en-US) translations for the api namespace.
 * Covers API keys, LLM connections, setup, and onboarding.
 */
const api = {
  "common.accessDenied": "Access Denied",

  // Onboarding
  "onboarding.failedToLoad": "Failed to load onboarding",
  "onboarding.referralPlaceholder": "Colleague, Word of Mouth, X, Reddit, Event",

  // Setup
  "setup.tracingCardTitle": "Time to log your first trace, it only takes a minute",
  "setup.configureTracing": "Configure Tracing",
  "setup.newOrganization": "New Organization",
  "setup.newProject": "New Project",

  // API Keys
  "apiKey.title": "API Keys",
  "apiKey.publicKey": "Public Key",
  "apiKey.secretKey": "Secret Key",
  "apiKey.deleteTitle": "Delete API key",
  "apiKey.createTitle": "Create API Keys",
  "apiKey.apiKeysTitle": "API Keys",
  "apiKey.noteOptional": "Note (optional)",
  "apiKey.notePlaceholder": "Production key",
  "apiKey.detail.secretKey": "Secret Key",
  "apiKey.detail.publicKey": "Public Key",
  "apiKey.detail.usingMcp": "Using with MCP",
  "apiKey.detail.header": "Header",

  // LLM Connections
  "llm.title": "LLM Connections",
  "llm.updateTitle": "Update LLM Connection",
  "llm.newTitle": "New LLM Connection",
  "llm.deleteTitle": "Delete LLM Connection",
  "llm.extraHeaders": "Extra headers",
  "llm.form.customModels": "Custom models",
  "llm.form.extraHeaders": "Extra Headers",
  "llm.form.headerNamePlaceholder": "Header name",
  "llm.form.adapter": "LLM adapter",
  "llm.form.selectProvider": "Select a LLM provider",
  "llm.form.providerName": "Provider name",
  "llm.form.authMethod": "Authentication Method",
  "llm.form.awsRegion": "AWS Region",
  "llm.form.bedrockApiKey": "Bedrock API Key",
  "llm.form.defaultCredChain": "Default credential provider chain:",
  "llm.form.gcpKey": "GCP Service Account Key (JSON)",
  "llm.form.cloudRunAccount": "Cloud Run service account",
  "llm.form.apiKey": "API Key",
  "llm.form.apiBaseUrl": "API Base URL",
  "llm.form.locationOptional": "Location (Optional)",
  "llm.form.useResponsesApi": "Use Responses API",
  "llm.form.enableDefaultModels": "Enable default models",
} as const;

export default api;
