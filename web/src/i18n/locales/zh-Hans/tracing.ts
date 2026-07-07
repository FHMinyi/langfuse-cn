/**
 * Simplified Chinese (zh-Hans) translations for the tracing namespace.
 */
import type enUS from "../en-US/tracing";

const tracing: Record<keyof typeof enUS, string> = {
  "traces.title": "追踪",
  "traces.help.description":
    "一条追踪代表一次函数/API 调用。追踪包含观测。查看文档了解更多。",
  "traces.help.descriptionHtml": "一条追踪代表一次函数/API 调用。追踪包含观测。参见",
  "traces.help.docsLink": "文档",
  "traces.help.descriptionSuffix": "了解更多。",
};

export default tracing;
