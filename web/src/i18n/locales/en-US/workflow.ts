/**
 * English (en-US) translations for the workflow namespace.
 * Covers annotation queues, automations, and batch exports.
 */
const workflow = {
  "common.pleaseConfirm": "Please confirm",
  "common.delete": "Delete",
  "common.accessDenied": "Access Denied",

  // Batch exports
  "batchExports.title": "Exports",
  "batchExports.cancelConfirm": "Cancel batch export?",

  // Automations
  "automation.webhookSecret": "Webhook Secret",
  "automation.webhookNotFound": "Webhook not found",
  "automation.selectAutomation": "Select an automation",
  "automation.secretCreated": "Webhook Secret Created",
  "automation.secretRegenerated": "Webhook Secret Regenerated",
  "automation.loadingDetails": "Loading automation details...",
  "automation.title": "Automations",
  "automation.form.eventSource": "Event Source",
  "automation.form.selectEventSource": "Select an event source",
  "automation.form.eventAction": "Event Action",
  "automation.form.eventActionsTitle": "Event Actions",
  "automation.form.filter": "Filter",
  "automation.form.howMonitorsConnect": "How Monitors Connect",
  "automation.form.namePlaceholder": "Automation name",
  "automation.form.trigger": "Trigger",
  "automation.form.action": "Action",
  "automation.form.actionType": "Action Type",
  "automation.form.selectActionType": "Select an action type",

  // WebhookActionForm
  "webhook.apiVersion": "API Version",
  "webhook.selectApiVersion": "Select API version",
  "webhook.headers": "Headers",
  "webhook.headerNamePlaceholder": "Header Name",
  "webhook.secretLabel": "Webhook Secret",

  // SlackActionForm
  "slack.channel": "Channel",
  "slack.selectChannel": "Select a channel",

  // Annotation queues
  "queue.processQueue": "Process queue",
  "queue.scoreConfigs": "Score Configs",
  "queue.searchUsers": "Search users to add...",
  "queue.name": "Name",
  "queue.descriptionOptional": "Description (optional)",
  "queue.descriptionPlaceholder": "Add description...",
  "queue.advancedSettings": "Advanced Settings",
  "queue.inQueues": "In queue(s)",
  "queue.deleteItemsTitle": "Delete queue items",
  "queue.noMoreItems": "No more items left to annotate!",
  "queue.previousItem": "Previous item",
  "queue.skipToNext": "Skip to next item",
  "queue.markCompleted": "Mark Completed",
} as const;

export default workflow;
