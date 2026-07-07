import { TRPCClientError } from "@trpc/client";
import i18n from "@/src/i18n";
import { showErrorToast } from "@/src/features/notifications/showErrorToast";
import { translateErrorMessage } from "@/src/utils/trpc-error-i18n";

// Catch network level errors, e.g. by proxy rate-limiting

/**
 * Check if error was caused by a response parsing failure.
 * This happens when infrastructure (nginx, cloudflare, etc.) returns a non-JSON
 * response body (e.g., empty body on 431, HTML error page on 502/503/504).
 */
const isResponseParseError = (error: TRPCClientError<any>): boolean => {
  return error.cause instanceof SyntaxError;
};

const httpStatusOverride: Record<number, keyof typeof errorTitleMap> = {
  429: "TOO_MANY_REQUESTS",
  524: "TIMEOUT",
};

const errorTitleMap = {
  BAD_REQUEST: "code.BAD_REQUEST",
  UNAUTHORIZED: "code.UNAUTHORIZED",
  FORBIDDEN: "code.FORBIDDEN",
  NOT_FOUND: "code.NOT_FOUND",
  TIMEOUT: "code.TIMEOUT",
  CONFLICT: "code.CONFLICT",
  PRECONDITION_FAILED: "code.PRECONDITION_FAILED",
  PAYLOAD_TOO_LARGE: "code.PAYLOAD_TOO_LARGE",
  METHOD_NOT_SUPPORTED: "code.METHOD_NOT_SUPPORTED",
  UNPROCESSABLE_CONTENT: "code.UNPROCESSABLE_CONTENT",
  TOO_MANY_REQUESTS: "code.TOO_MANY_REQUESTS",
  CLIENT_CLOSED_REQUEST: "code.CLIENT_CLOSED_REQUEST",
  INTERNAL_SERVER_ERROR: "code.INTERNAL_SERVER_ERROR",
  SERVICE_UNAVAILABLE: "code.SERVICE_UNAVAILABLE",
} as const;

const getErrorTitleAndHttpCode = (error: TRPCClientError<any>) => {
  const httpStatus: number =
    typeof error.data?.httpStatus === "number" ? error.data.httpStatus : 500;

  if (
    httpStatus === 422 &&
    error.data?.errorName === "ClickHouseResourceError"
  ) {
    // Handle ClickHouse resource limit errors with specific messaging
    return {
      errorTitle: i18n.t("code.REQUEST_TIMED_OUT", { ns: "error" }),
      httpStatus,
    };
  }

  if (httpStatus in httpStatusOverride) {
    return {
      errorTitle: i18n.t(errorTitleMap[httpStatusOverride[httpStatus]], {
        ns: "error",
      }),
      httpStatus,
    };
  }

  const titleKey =
    error.data?.code in errorTitleMap
      ? errorTitleMap[error.data?.code as keyof typeof errorTitleMap]
      : null;

  const errorTitle = titleKey
    ? i18n.t(titleKey, { ns: "error" })
    : i18n.t("code.UNEXPECTED", { ns: "error" });

  return { errorTitle, httpStatus };
};

const getErrorDescription = (httpStatus: number) => {
  switch (httpStatus) {
    case 429:
      return i18n.t("desc.rateLimit", { ns: "error" });
    case 524:
      return i18n.t("desc.timeout", { ns: "error" });
    default:
      // Check if it's a 5xx server error
      if (httpStatus >= 500 && httpStatus < 600) {
        return i18n.t("desc.serverError", { ns: "error" });
      }
      return i18n.t("desc.internal", { ns: "error" });
  }
};

export const trpcErrorToast = (error: unknown) => {
  if (error instanceof TRPCClientError) {
    // Handle infrastructure-level errors that return non-JSON responses
    // (e.g., 431 with empty body, 502/503/504 with HTML error pages)
    if (isResponseParseError(error)) {
      showErrorToast(
        i18n.t("code.UNEXPECTED_RESPONSE", { ns: "error" }),
        i18n.t("desc.unexpectedResponse", { ns: "error" }),
        "WARNING",
      );
      return;
    }

    const { errorTitle, httpStatus } = getErrorTitleAndHttpCode(error);

    const path = error.data?.path;
    const description = getErrorDescription(httpStatus);

    // Translate the backend error.message via the whitelist; messages not in
    // the whitelist fall back to the original English string.
    const translatedMessage = translateErrorMessage(error.message, (key) =>
      i18n.t(key, { ns: "error" }),
    );

    showErrorToast(
      errorTitle,
      translatedMessage ?? description,
      httpStatus >= 500 && httpStatus < 600 ? "ERROR" : "WARNING",
      path,
    );
  } else {
    showErrorToast(
      i18n.t("code.UNEXPECTED", { ns: "error" }),
      i18n.t("desc.unexpected", { ns: "error" }),
      "ERROR",
    );
  }
};
