#任务二：零基础 HTML 及 CSS 编码（一）
任务链接：[零基础 HTML 及 CSS 编码（二）](http://ife.baidu.com/task/detail?taskId=2)
DEMO：[http://yanisj.github.io/ife-missions/task-1-2/index.html](http://yanisj.github.io/ife-missions/task-1-2/index.html)

## 版本调整记录
### 第一版

整个页面尺寸完全固定，按照效果图严格执行，所有尺寸标注见：[详细标注](./img/详细标注.png)。

其中有两处未按图进行，因为考虑到这两处的格式可能意义不大:
- 表格上面的说明文字；
- 侧边栏的题目。

由于需要实现效果，HTML 结构做了一些调整：
- 文章作者和发表时间的两个 `<em>` 标签用了一个 `<div>` 包裹，便于设置 `margin-bottom`；
- 图片栏内部结构大改，所有图片以列表形式展现，`<li>` 内部增加一个 `<div>` 作为文字和图片的容器。这里 `<li>` 控制图片纵向排列，`<div>` 的 `display` 设置为 `inline-block`，使得 `<div>` 的宽度由其子元素决定，方便以后调整图片大小时不用对容器进行改动；
- 表格添加 `<thead>` `<tbody>` `<tfoot>`，这个改动涉及语义，需要去修改任务一；
- 表单中，每行都用一个 `<div>` 包裹，方便实现结构。

CSS 代码还有优化的空间。

### `v0.2.0`

- HTML 结构按任务一 `v0.2.0` 调整
- CSS 作相应的调整，保证页面正常显示


## 写作中的记录
### `margin-bottom`
我很希望，在设置 `<p>` `<list>` 等文章内容格式时，他们的纵向间隔统一用 `margin-bottom` 来控制，但是遇到一个问题。

每篇文章的 container，有一个内边距，如果所有内部元素都用 `margin-bottom` 来控制，最后一个元素的 `margin-bottom` 会与 container 的 `padding-bottom` 叠加，导致每篇文章最后的空白高度不一致。

### `<em>`
添加一个 `<div>` 来包裹 `<em>`。

### 表格
修改表格结构，加上 `<thead>` `<tbody>` `<tfoot>`；
表格上方的说明文字，我暂时没有特地去设置样式；
表格中，单元格的宽度，我没有设置，其自动的宽度就和效果图上的宽度完全一致。

### Footer
我没有给 `footer` 确定高度，只给了它上下的 `padding`，如果以后需要在 `footer` 中添加内容，可以保证不受到干扰。