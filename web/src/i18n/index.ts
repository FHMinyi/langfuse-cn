/**
 * i18n initialization (react-i18next).
 *
 * Design (informed by prior community PRs #9676, #8884, #14236, all of which
 * upstream declined — see issue #12890):
 *
 * - Locale code follows BCP-47: `en-US` (source of truth) and `zh-Hans`.
 * - en-US is synchronously preloaded as the fallback bundle so that every key
 *   resolves even before a non-English locale finishes lazy-loading. This
 *   avoids the "raw key flashes" problem.
 * - Non-English locales are loaded on demand via dynamic `import()`, one
 *   namespace per resource bundle, so unused locales never enter the bundle.
 * - Each namespace is registered independently (`addResourceBundle(ns, …)`)
 *   so callers opt in with `useTranslation("common")` and get ns-level code
 *   splitting — NOT a single merged `translation` bundle (the "fake multi-ns"
 *   mistake in PR #9676).
 * - Language detection is client-side (localStorage → navigator → htmlTag).
 *   This decouples i18n from the Next.js Pages Router `i18n` route config,
 *   so the same setup survives a future migration to the App Router.
 *   Trade-off: the first SSR paint is English; the locale swaps after
 *   hydration. Acceptable for a self-hosted internal tool.
 *
 * Namespace list is explicit (not `require.context`) because the project uses
 * Turbopack, which does not support webpack's `require.context`. The list is
 * short and stable; add a namespace here when you add a locale file.
 */

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Source-of-truth locale: synchronously imported as the fallback bundle.
import enUSCommon from "./locales/en-US/common";
import enUSAuth from "./locales/en-US/auth";
import enUSTracing from "./locales/en-US/tracing";
import enUSOrganization from "./locales/en-US/organization";
import enUSError from "./locales/en-US/error";
import enUSDashboard from "./locales/en-US/dashboard";
import enUSDataset from "./locales/en-US/dataset";
import enUSPrompt from "./locales/en-US/prompt";
import enUSEvaluation from "./locales/en-US/evaluation";
import enUSModel from "./locales/en-US/model";
import enUSSettings from "./locales/en-US/settings";
import enUSWorkflow from "./locales/en-US/workflow";
import enUSApi from "./locales/en-US/api";
import enUSComponents from "./locales/en-US/components";
import enUSEe from "./locales/en-US/ee";
import enUSPages from "./locales/en-US/pages";

/** Supported locale codes (BCP-47). */
export const SUPPORTED_LOCALES = ["en-US", "zh-Hans"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

/** Default / fallback locale. Keys always resolve against this bundle. */
export const DEFAULT_LOCALE: SupportedLocale = "en-US";

/**
 * Explicit namespace registry. Each entry is the default export of the
 * en-US namespace file. Add a line here when introducing a new namespace.
 */
const enUSNamespaces = {
  common: enUSCommon,
  auth: enUSAuth,
  tracing: enUSTracing,
  organization: enUSOrganization,
  error: enUSError,
  dashboard: enUSDashboard,
  dataset: enUSDataset,
  prompt: enUSPrompt,
  evaluation: enUSEvaluation,
  model: enUSModel,
  settings: enUSSettings,
  workflow: enUSWorkflow,
  api: enUSApi,
  components: enUSComponents,
  ee: enUSEe,
  pages: enUSPages,
} as const;

/** Namespace names, derived from the registry so they stay in sync. */
export const NAMESPACES = Object.keys(enUSNamespaces) as (keyof typeof enUSNamespaces)[];

/**
 * Lazy-load a non-English locale's namespace bundles.
 *
 * Returns a partial map of namespace → resources; missing namespaces simply
 * fall back to en-US (already registered), so a partially translated locale
 * never shows raw keys.
 *
 * The dynamic `import()` paths are string literals so the bundler can split
 * each locale+namespace into its own chunk.
 */
async function loadLocaleBundle(locale: SupportedLocale): Promise<Record<string, unknown>> {
  switch (locale) {
    case "zh-Hans": {
      const [
        { default: common },
        { default: auth },
        { default: tracing },
        { default: organization },
        { default: error },
        { default: dashboard },
        { default: dataset },
        { default: prompt },
        { default: evaluation },
        { default: model },
        { default: settings },
        { default: workflow },
        { default: api },
        { default: components },
        { default: ee },
        { default: pages },
      ] = await Promise.all([
        import("./locales/zh-Hans/common"),
        import("./locales/zh-Hans/auth"),
        import("./locales/zh-Hans/tracing"),
        import("./locales/zh-Hans/organization"),
        import("./locales/zh-Hans/error"),
        import("./locales/zh-Hans/dashboard"),
        import("./locales/zh-Hans/dataset"),
        import("./locales/zh-Hans/prompt"),
        import("./locales/zh-Hans/evaluation"),
        import("./locales/zh-Hans/model"),
        import("./locales/zh-Hans/settings"),
        import("./locales/zh-Hans/workflow"),
        import("./locales/zh-Hans/api"),
        import("./locales/zh-Hans/components"),
        import("./locales/zh-Hans/ee"),
        import("./locales/zh-Hans/pages"),
      ]);
      return { common, auth, tracing, organization, error, dashboard, dataset, prompt, evaluation, model, settings, workflow, api, components, ee, pages };
    }
    default:
      return {};
  }
}

/**
 * Ensure a locale's bundles are registered with i18next. Idempotent: calling
 * twice for the same locale is a no-op after the first load.
 */
export async function loadLocale(locale: SupportedLocale): Promise<void> {
  if (locale === DEFAULT_LOCALE) return; // already registered synchronously
  const bundle = await loadLocaleBundle(locale);
  for (const [ns, resources] of Object.entries(bundle)) {
    if (resources && !i18n.hasResourceBundle(locale, ns)) {
      i18n.addResourceBundle(locale, ns, resources, /* deep */ true, /* overwrite */ false);
    }
  }
  if (i18n.language !== locale) {
    await i18n.changeLanguage(locale);
  }
}

if (!i18n.isInitialized && typeof window !== "undefined") {
  // Register the fallback locale synchronously for every namespace.
  for (const [ns, resources] of Object.entries(enUSNamespaces)) {
    i18n.addResourceBundle(DEFAULT_LOCALE, ns, resources, true, true);
  }

  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: DEFAULT_LOCALE,
      supportedLngs: [...SUPPORTED_LOCALES],
      ns: NAMESPACES,
      defaultNS: "common",
      resources: {
        [DEFAULT_LOCALE]: enUSNamespaces,
      },
      detection: {
        // localStorage persists the user's choice across sessions; navigator
        // and htmlTag pick up the browser's preferred language on first visit.
        order: ["localStorage", "navigator", "htmlTag"],
        caches: ["localStorage"],
        lookupLocalStorage: "langfuse_locale",
      },
      interpolation: {
        // react-i18next escapes by default; React already escapes values.
        escapeValue: false,
      },
      react: {
        // Suspend while a lazy locale bundle loads, so components re-render
        // once the new language is ready instead of flashing raw keys.
        useSuspense: false,
      },
    })
    .then(async () => {
      // If detection picked a non-English locale on first load, fetch its
      // bundle now so the first meaningful paint is already translated.
      const detected = i18n.language as SupportedLocale;
      if (detected !== DEFAULT_LOCALE && SUPPORTED_LOCALES.includes(detected)) {
        await loadLocale(detected);
      }
    });
}

export default i18n;
