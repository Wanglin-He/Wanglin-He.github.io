# 我的个人主页

网站地址：https://wanglin-he.github.io

个人学术主页，通过 GitHub Pages 发布。网页内容依据简历和项目材料整理。

## 修改三个项目

`content.js` 中的 `projects` 数组包含三个项目。修改 `title`（标题）、`summary`（简述）、`contribution`（个人贡献）、`dates`（时间）和 `tags`（关键词）。

添加项目链接：`links: [{ label: "Code", url: "https://github.com/你的项目" }]`。

添加截图：将图片放入本文件所在目录，在该项目的 `image` 中填写文件名，如 `"robot.jpg"`。留空则不显示图片。

`cv.pdf` 是经本人确认公开的完整简历。

## 修改文案和链接

1. 打开仓库中的 `content.js`，点击铅笔图标。
2. 修改引号里的文字，保留引号、逗号和括号。
3. 点击 **Commit changes** 保存到 main。GitHub Pages 会自动更新，通常需要几分钟。

`name` 是网页姓名；`tagline` 是姓名下方的一句话；`bio` 每一项是一段介绍。

正文中的链接写成：`I study at [学校名称](https://学校网址).`

社交链接在 `links` 中添加，例如：

```js
links: [
  { label: "GitHub", url: "https://github.com/Wanglin-He" },
  { label: "Email", url: "mailto:你的邮箱" },
  { label: "CV", url: "cv.pdf" }
],
```

使用 CV 链接前，先通过 **Add file → Upload files** 把 `cv.pdf` 上传到仓库顶层。
Google Scholar 或论文地址也按相同方式添加。

## 添加论文

将 `publications: []` 替换为以下格式，填写真实信息。多篇论文就在数组内添加多个对象，用逗号隔开。

```js
publications: [
  {
    title: "论文标题",
    authors: "作者列表",
    venue: "会议 / 期刊与年份",
    summary: "一句话介绍这项工作。",
    links: [
      { label: "Paper", url: "https://论文地址" },
      { label: "Code", url: "https://github.com/你的代码仓库" }
    ]
  }
],
```

## 更换头像

上传新照片，修改 `content.js` 中的 `portrait` 文件名即可。目前用 CSS 裁切照片，原始文件未修改。

## 文件说明

- `content.js`：日常编辑的文字、链接和论文。
- `index.html`：页面结构和样式。
- `render.js`：将内容显示在网页上的程序，通常不用改。
- `portrait.png`：头像。

仓库和网页公开可见，请只上传希望公开展示的文件。
