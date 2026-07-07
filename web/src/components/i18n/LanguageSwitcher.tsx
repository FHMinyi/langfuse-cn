"use client";

import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

import {
  SUPPORTED_LOCALES,
  loadLocale,
  type SupportedLocale,
} from "@/src/i18n";
import type { UserNavigationItem } from "@/src/components/nav/nav-user";

/** Human-readable label for a locale code, shown in the submenu. */
const LOCALE_LABELS: Record<SupportedLocale, string> = {
  "en-US": "English",
  "zh-Hans": "简体中文",
};

/**
 * Build the "Language" entry for the sidebar user menu.
 *
 * Returns a `UserNavigationItem` with `subItems` (one per supported locale),
 * matching the pattern used by the "Regions" entry. The currently active
 * locale is marked with a Check icon. Selecting a locale lazy-loads its
 * bundle (if not English) and switches i18next over; the choice is persisted
 * to localStorage by the LanguageDetector configured in `@/src/i18n`.
 *
 * This component does not render JSX directly — it produces a navigation
 * item that `NavUser` renders via its `subItems` machinery. Keeping the
 * logic here isolates i18n from the layout.
 */
export function useLanguageNavItem(): UserNavigationItem {
  const { i18n, t } = useTranslation("common");

  const current = (i18n.language as SupportedLocale) ?? "en-US";

  const handleSelect = useCallback(
    (locale: SupportedLocale) => {
      void loadLocale(locale);
    },
    [],
  );

  return {
    name: t("language.label"),
    content: t("language.label"),
    subItems: SUPPORTED_LOCALES.map((locale) => ({
      name: LOCALE_LABELS[locale],
      onClick: () => handleSelect(locale),
      content: (
        <span className="flex w-full items-center justify-between">
          {LOCALE_LABELS[locale]}
          {current === locale ? (
            <Check className="size-4" />
          ) : null}
        </span>
      ),
    })),
  };
}
