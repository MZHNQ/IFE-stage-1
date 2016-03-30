#任务四：定位和居中问题
任务链接：[定位和居中问题](http://ife.baidu.com/task/detail?taskId=4)
DEMO：[http://yanisj.github.io/ife-missions/task-1-4/index.html](http://yanisj.github.io/ife-missions/task-1-4/index.html)

## 基本介绍
这次任务中的参考文章：[Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/) 对我影响很大，解决了很多一直存在的疑惑。任务最后呈现的形式，也参考了文章的思路，就算是阅读笔记了。

这次加入了一些简单的交互，展现块状元素居中的三种方式，三种方式正好对应了三种不同的情形：

- 知道居中元素的具体尺寸；
- 不知道尺寸；
- 可以使用 flex。

动态更换 CSS 的居中方案，在页面上并不能看到任何变化（元素始终都保持居中）。为了让效果更直观，在右侧添加一个代码块，用以展示具体的居中代码。

代码块的语法高亮，使用了 highlight.js：

- [highlight.js](https://highlightjs.org/download/)

## 遗留问题
可能会存在一些浏览器兼容上的问题，有待调整。

## 版本调整记录
### v0.2.0
- `header` 标签改为 `nav`
- 使用 :after :before 两个伪元素，来实现角落上的黄色块
- 调整 highlight.js 需要用到的文件的路径