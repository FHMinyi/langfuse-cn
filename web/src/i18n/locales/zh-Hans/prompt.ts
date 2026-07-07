/**
 * Simplified Chinese (zh-Hans) translations for the prompt namespace.
 */
import type enUS from "../en-US/prompt";

const prompt: Record<keyof typeof enUS, string> = {
  "common.pleaseConfirm": "请确认",
  "common.name": "名称",
  "common.config": "配置",
  "common.content": "内容",

  "labels.addLabel": "添加提示词标签",
  "labels.title": "提示词标签",
  "labels.searchOrCreate": "搜索或创建标签…",

  "protectedLabels.title": "受保护的提示词标签",
  "protectedLabels.searchOrEnter": "搜索或输入新标签…",
  "protectedLabels.noLabelFound": "未找到标签",

  "versionDiff.compareTitle": "与选定的提示词比较",

  "selection.addInlineRef": "添加内联提示词引用",
  "selection.promptName": "提示词名称",
  "selection.selectTextPrompt": "选择文本提示词",
  "selection.referenceBy": "引用方式",
  "selection.selectLinkType": "选择链接类型",
  "selection.label": "标签",
  "selection.version": "版本",
  "selection.tagPreview": "标签预览",

  "detail.search": "搜索…",
  "detail.newVersion": "新版本",
  "detail.usePrompt": "使用提示词",
  "detail.textPromptResolved": "文本提示词(已解析)",
  "detail.textPrompt": "文本提示词",
  "detail.prompt": "提示词",
  "detail.python": "Python",
  "detail.jsTs": "JS/TS",

  "review.title": "审查提示词变更",

  "newPrompt.prompt": "提示词",
  "newPrompt.namePlaceholder": "为你的提示词命名",
  "newPrompt.setProductionLabel": "设置 \"production\" 标签",
  "newPrompt.commitMessage": "提交信息",
  "newPrompt.commitMessagePlaceholder": "添加提交信息…",
  "newPrompt.addPromptReference": "添加提示词引用",

  "duplicate.settings": "设置",
  "duplicate.title": "复制提示词",

  "duplicateFolder.title": "复制文件夹(含提示词)",
  "duplicateFolder.targetPath": "目标文件夹路径",
  "duplicateFolder.versionSettings": "版本设置",

  "delete.promptsToDelete": "要删除的提示词:",
};

export default prompt;
