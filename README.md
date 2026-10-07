# 我的个人主页

网站地址：https://wanglin-he.github.io

个人学术主页，通过 GitHub Pages 发布。改版前的初代版本保存在 `archive/v1-original` 分支。

## 修改文字

网站的全部文字都在 `content.js` 里：

1. 在 GitHub 上打开 `content.js`，点击铅笔图标。
2. 修改引号里的文字，保留引号、逗号和括号。
3. 点击 **Commit changes** 保存到 main。GitHub Pages 会自动更新，通常需要几分钟。

正文里的链接写成 `[文字](网址)`，加粗写成 `**文字**`，例如：

```js
"I study at [Columbia University](https://www.columbia.edu)."
authors: "**Wanglin He**, Siyuan Zhang, Junyan Liu"
```

## 各个板块

| 字段 | 显示位置 |
| --- | --- |
| `name`、`tagline`、`location` | 顶部的姓名、身份、所在地 |
| `links` | 姓名下方的按钮。`icon` 可选 `email`、`github`、`linkedin`、`cv`、`scholar` |
| `bio` | 个人简介，每一项是一段 |
| `research` | Research 板块：一句话介绍 + 研究方向卡片。卡片 `icon` 可选 `wrench`、`bot`、`layers`、`cube`、`spark` |
| `projects` | Projects 板块，左图右文 |
| `publications` | Publications 板块，左图右文 |
| `education`、`experience`、`honors` | 两列表格，`label` 是左边粗体，`text` 是右边说明 |
| `updated` | 页脚的“最后更新”时间 |

某个板块的数组留空（如 `honors: []`），这个板块和导航栏里对应的入口都会自动隐藏。

## 添加项目或论文

在 `projects` 或 `publications` 数组里复制一项，改成新的内容，项与项之间用逗号隔开：

```js
{
  title: "论文标题",
  authors: "**Wanglin He**, 合作者",
  venue: "ICRA 2027",
  highlight: "Best Paper Award",   // 获奖信息会显示为红色，没有就留空 ""
  image: "images/新图片.jpg",       // 没有图片就留空 ""
  links: [
    { label: "Paper", url: "https://论文地址" },
    { label: "Code", url: "https://github.com/你的代码仓库" }
  ]
}
```

项目用 `context`（合作方或实验室）、`status`（加粗的一行，如 `Ongoing · May 2026 – Present`）和 `summary`（一到两句话介绍）代替 `authors` 和 `venue`。

表格里的某一行也可以加链接：`{ label: "ICRA 2027", text: "Best Paper Finalist", links: [{ label: "Paper", url: "https://..." }] }`。

## 图片

缩略图按 4:3 比例显示，放在 `images` 文件夹里。建议宽度 720 像素左右、存成 JPG，这样网页加载更快。
上传图片：进入 `images` 文件夹，点击 **Add file → Upload files**。

更换头像：上传一张正方形照片，修改 `content.js` 里的 `portrait`。

## 文件说明

- `content.js`：日常编辑的文字、链接和论文。
- `index.html`：页面结构和样式（颜色、字体、间距）。
- `render.js`：把内容显示到网页上的程序，通常不用改。
- `images/`：头像和缩略图。
- `cv.pdf`、`robotic-budding.pdf`：简历和论文。

仓库和网页公开可见，请只上传希望公开展示的文件。
