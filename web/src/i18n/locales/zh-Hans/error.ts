/**
 * Simplified Chinese (zh-Hans) translations for the error namespace.
 *
 * For the `message.*` whitelist, the KEY is the original English backend
 * message and the VALUE is the Chinese translation. This is deliberate:
 * the lookup runs against the live `error.message` string from the backend,
 * so the key must match exactly what the server emits.
 */
import type enUS from "../en-US/error";

const error: Record<keyof typeof enUS, string> = {
  // 错误码标题(toast 标题)
  "code.BAD_REQUEST": "错误请求",
  "code.UNAUTHORIZED": "未授权",
  "code.FORBIDDEN": "禁止访问",
  "code.NOT_FOUND": "未找到",
  "code.TIMEOUT": "请求超时",
  "code.CONFLICT": "冲突",
  "code.PRECONDITION_FAILED": "前置条件失败",
  "code.PAYLOAD_TOO_LARGE": "请求体过大",
  "code.METHOD_NOT_SUPPORTED": "不支持的方法",
  "code.UNPROCESSABLE_CONTENT": "无法处理的内容",
  "code.TOO_MANY_REQUESTS": "请求过多",
  "code.CLIENT_CLOSED_REQUEST": "客户端关闭了请求",
  "code.INTERNAL_SERVER_ERROR": "内部服务器错误",
  "code.SERVICE_UNAVAILABLE": "内部服务器错误",
  "code.UNEXPECTED": "意外错误",
  "code.UNEXPECTED_RESPONSE": "意外响应",
  "code.REQUEST_TIMED_OUT": "请求超时",

  // 通用兜底描述
  "desc.rateLimit": "触发速率限制,请稍后重试。",
  "desc.timeout": "请求处理时间过长,请稍后重试。",
  "desc.serverError":
    "内部服务器错误。我们已收到此问题的告警并将着手修复。如持续出现请联系支持团队。",
  "desc.internal": "内部错误",
  "desc.unexpected": "发生了意外错误。",
  "desc.unexpectedResponse":
    "请求无法完成。我们已收到通知并正在调查。请重试,如持续出现请联系支持团队。",

  // 已知面向用户的后端消息白名单(精确匹配)
  "message.Project not found": "未找到项目",
  "message.Trace not found": "未找到追踪",
  "message.Session not found in project": "未在此项目中找到会话",
  "message.No comment with this id in this project.": "此项目中没有该 ID 的评论。",
  "message.Invalid email address": "邮箱地址无效",
  "message.Invalid input, projectId is required": "输入无效,需要 projectId",
};

export default error;
