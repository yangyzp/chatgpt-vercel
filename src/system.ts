export const setting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "",
  systemRule: ""
}

export const message = `- 使用前，请先点击左下角的齿轮设置按钮，填写你的API Key（"sk-"开头的一串字符）。
- 然后就可以和chatgpt开始对话了，因为服务器通信问题，回到可能较慢。
- [[Shift]] + [[Enter]] 换行。开头输入 [[/]] 或者 [[空格]] Prompt 预设。[[↑]] 可编辑最近一次提问。点击名称滚动到顶部，点击输入框滚动到底部。`

export type Setting = typeof setting

export const resetContinuousDialogue = false
