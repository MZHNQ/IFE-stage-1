# 任务一：零基础 HTML 编码
任务链接：[任务一：零基础 HTML 编码](http://ife.baidu.com/task/detail?taskId=1)
DEMO：[http://yanisj.github.io/ife-missions/task-1-1/index.html](http://yanisj.github.io/ife-missions/task-1-1/index.html)

## 基本介绍

- 尽量按 HTML5 标准使用标签，使用到的新标签包括：`header`，`article`，`aside`，`footer`；
- 有一些标签的使用，导致和效果图有所不同，个人一直以来的习惯是保持 HTML 不受效果的干扰，真实编写中完全可以靠 CSS 加以控制;
- “文章作者” 和 “文章发表时间”，都使用 `em` 标签，参考的是[第一阶段任务概要说明](http://mp.weixin.qq.com/s?__biz=MzA4MjUyNjY3Nw==&mid=401956006&idx=1&sn=bbf72ea5c17894c3a5423d8b3bdb7d9a#rd)这个页面中的用法；
- 侧边栏 `form` 中，用 `p` 标签包裹 `input`，参考的是百度注册界面。

## 遗留问题

- 我暂时不确定，文章一级标题是不是应该用 `h2`，因为侧边栏的标题理论上说级别会高于文章的一级标题；
- 导航部分本来想用上 HTML 的新标签 `nav`，但查阅了 `nav` 的用法后产生了疑问，需要再考虑一下。

## 版本调整记录
### v0.2.0
- 整个页面的 `<header>` 中添加 `<nav>`；
- 为 `<article>` 添加 `<header>`；
- 将图片栏改为 `<section>`；
- 将图片和说明文字改为 `<figure>` 这一套格式。

####参考
- [任务一学习笔记（一）](https://github.com/brilliantyy/Baidu_IFE/blob/master/task_one/%E4%BB%BB%E5%8A%A1%E4%B8%80%EF%BC%9A_%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%88%E4%B8%80%EF%BC%89.md)
- [任务二学习笔记（二）](https://github.com/brilliantyy/Baidu_IFE/blob/master/task_one/%E4%BB%BB%E5%8A%A1%E4%B8%80%EF%BC%9A%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%EF%BC%88%E4%BA%8C%EF%BC%89.md)