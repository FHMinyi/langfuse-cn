/**
 * English (en-US) translations for the error namespace.
 *
 * Two layers:
 * 1. `code.*` — titles keyed by tRPC error code, shown as the toast title.
 * 2. `message.*` — a whitelist of known user-facing backend messages mapped
 *    to translated strings. Messages not in this whitelist fall back to the
 *    original English (so developer-facing/technical messages are not
 *    mistranslated).
 *
 * The whitelist is intentionally curated: only messages that are clearly
 * user-facing ("Project not found", "Trace not found", etc.) are included.
 * Messages that expose internals (Clickhouse, Postgres, queue names) are
 * left in English.
 */
const error = {
  // Error code titles (shown as toast heading)
  "code.BAD_REQUEST": "Bad Request",
  "code.UNAUTHORIZED": "Unauthorized",
  "code.FORBIDDEN": "Forbidden",
  "code.NOT_FOUND": "Not Found",
  "code.TIMEOUT": "Timeout",
  "code.CONFLICT": "Conflict",
  "code.PRECONDITION_FAILED": "Precondition Failed",
  "code.PAYLOAD_TOO_LARGE": "Payload Too Large",
  "code.METHOD_NOT_SUPPORTED": "Method Not Supported",
  "code.UNPROCESSABLE_CONTENT": "Unprocessable Content",
  "code.TOO_MANY_REQUESTS": "Too Many Requests",
  "code.CLIENT_CLOSED_REQUEST": "Client Closed Request",
  "code.INTERNAL_SERVER_ERROR": "Internal Server Error",
  "code.SERVICE_UNAVAILABLE": "Internal Server Error",
  "code.UNEXPECTED": "Unexpected Error",
  "code.UNEXPECTED_RESPONSE": "Unexpected Response",
  "code.REQUEST_TIMED_OUT": "Request Timed Out",

  // Generic fallback descriptions
  "desc.rateLimit": "Rate limit hit. Please try again later.",
  "desc.timeout":
    "Request took too long to process. Please try again later.",
  "desc.serverError":
    "Internal server error. We've received an alert about this issue and will be working on fixing it. Please reach out to support if this persists.",
  "desc.internal": "Internal error",
  "desc.unexpected": "An unexpected error occurred.",
  "desc.unexpectedResponse":
    "The request could not be completed. We've been notified and are looking into it. Please try again or contact support if this persists.",

  // Whitelist of known user-facing backend TRPCError messages.
  // Only add messages that are safe to translate (user-facing, no internals).
  "message.Project not found": "未找到项目",
  "message.Trace not found": "未找到追踪",
  "message.Session not found in project": "未在此项目中找到会话",
  "message.No comment with this id in this project.": "此项目中没有该 ID 的评论。",
  "message.Invalid email address": "邮箱地址无效",
  "message.Invalid input, projectId is required": "输入无效,需要 projectId",

  // Dynamic message patterns are handled via regex in translateErrorMessage;
  // this static map covers exact matches only.
} as const;

export default error;
