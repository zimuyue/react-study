index.jsx => 入口文件
App.jsx => 根组件、容器组件

Home => HotList => Home切换列表的切换
     => HighList

List => 全部商品列表
Detail => 商品详情
Cart => 购物车列表
NotFound => 404页面

路由
hashRouter => http://localhost:8000/#/list => http://localhost:8000
1. 浏览器有针对于 hash 的接口来获取或操作 # 后面的内容
2. 在请求资源的时候，# 后面的内容将被全部切割掉，通过浏览器 BOM 接口来操作 hash 值

browserRouter => http://localhost:8000/list => http://localhost:8000/list => 404
1. 浏览器在初次请求资源时不会省略地址内容
   前后端对接时如果后端没有配置这个接口，则会导致页面资源丢失
2. 如果不是初次请求资源时，只是操作浏览器的前进与后退
   通过 html5 浏览器接口 history API => pushState /list 操作路由
