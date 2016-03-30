#任务三：三栏式布局
任务链接：[三栏式布局](http://ife.baidu.com/task/detail?taskId=3)
DEMO：[http://yanisj.github.io/ife-missions/task-1-3/index.html](http://yanisj.github.io/ife-missions/task-1-3/index.html)

## 基本介绍
这个任务主要用到的就是双飞翼布局，这种布局的特点就是：左右两栏定宽，中间一栏自适应，相关的参考文章有：
- [那些年，奇妙的圣杯与双飞翼，还有负边距](https://segmentfault.com/a/1190000004579886)
- [双飞翼布局介绍-始于淘宝UED](http://www.imooc.com/wenda/detail/254035)

我也做了一个简单的 DEMO：
- [双飞翼布局 DEMO](http://jsbin.com/sarugo/4/edit?html,css,output)

## 遇到的问题
本来在布局完成后，想简单的对 `<body>` 使用 `overflow: hidden` 来闭合浮动，解决包含块坍塌的问题，结果没有成功。换成 clearfix 方案后解决问题。

我不理解为什么这里的 `overflow: hidden`，会失效。
- 如果说是 BFC 不能闭合这里的浮动：
  奇怪的是我用 `position: abusolute` 同样是触发了 BFC，成功闭合了浮动；
- 那么就是说 `overflow: hidden` 没有能触发 BFC？
  暂时不得而知。

## 版本调整记录