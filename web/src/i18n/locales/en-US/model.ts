/**
 * English (en-US) translations for the model namespace.
 * Covers model definitions, pricing tiers, and price display.
 */
const model = {
  "common.pleaseConfirm": "Please confirm",
  "common.editModel": "Edit model",
  "common.deleteModel": "Delete model",
  "common.cloneModel": "Clone model",

  // ModelSettings
  "settings.title": "Model Definitions",

  // UpsertModelFormDialog
  "upsert.modelName": "Model Name",
  "upsert.matchPattern": "Match pattern",
  "upsert.tokenizer": "Tokenizer",
  "upsert.selectUnit": "Select a unit",
  "upsert.tokenizerConfig": "Tokenizer Config",

  // PricingSection
  "pricing.prices": "Prices",
  "pricing.tiers": "Pricing Tiers",

  // TierPriceEditor
  "tierPrice.usageType": "Usage type",
  "tierPrice.keyPlaceholder": "Key (e.g. input, output)",
  "tierPrice.pricePerUnit": "Price per unit",
  "tierPrice.remove": "Remove price",
  "tierPrice.addPrice": "Add Price",

  // TierPrefillButtons
  "tierPrefill.hint": "Prefill usage types from template:",

  // TierConditionsEditor
  "tierConditions.conditions": "Conditions",
  "tierConditions.usageDetailPattern": "Usage Detail Pattern (Regex)",
  "tierConditions.operator": "Operator",
  "tierConditions.value": "Value",
  "tierConditions.caseSensitive": "Case sensitive",

  // TierAccordionItem
  "tierAccordion.tierName": "Tier Name",

  // PriceUnitSelector
  "priceUnit.select": "Select unit",

  // PricePreview
  "pricePreview.usageType": "Usage Type",

  // PriceBreakdownTooltip
  "priceBreakdown.noPrices": "No prices",
  "priceBreakdown.title": "Price breakdown",
  "priceBreakdown.price": "Price",
} as const;

export default model;
