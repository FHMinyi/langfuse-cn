/**
 * Translate tRPC error messages for user-facing display.
 *
 * Strategy (per the i18n plan, Stage 4):
 * 1. If the backend message exactly matches a whitelist entry in the `error`
 *    namespace (`message.*` keys), return the translated string.
 * 2. Otherwise, return the original message unchanged. This deliberately
 *    leaves developer-facing / technical messages (which may expose
 *    ClickHouse, Postgres, or internal queue names) in English — translating
 *    those would be misleading rather than helpful.
 *
 * This function is safe to call with any string: it never throws and always
 * returns a string suitable for display.
 */

// Static whitelist of known user-facing messages.
// Populated from the `message.*` keys in locales/*/error.ts.
// Importing the en-US bundle gives us the key list at compile time.
import enUSError from "@/src/i18n/locales/en-US/error";

/** Extract the `message.` prefix keys as a readonly tuple. */
const MESSAGE_KEYS = Object.keys(enUSError).filter((k) =>
  k.startsWith("message."),
) as `message.${string}`[];

/** The raw English message string for each whitelist key. */
const WHITELIST_MESSAGES: ReadonlySet<string> = new Set(
  MESSAGE_KEYS.map((k) => k.slice("message.".length)),
);

/**
 * Translate a backend error message string.
 *
 * @param message - The raw `error.message` from a TRPCClientError (English).
 * @param t - The i18next `t` function bound to the `error` namespace.
 * @returns The translated string, or the original if not in the whitelist.
 */
export function translateErrorMessage(
  message: string | undefined | null,
  t: (key: string) => string,
): string | undefined {
  if (!message) return message;

  // Exact match against the whitelist
  if (WHITELIST_MESSAGES.has(message)) {
    return t(`message.${message}`);
  }

  // Not in whitelist — return original (may be a developer-facing message)
  return message;
}
