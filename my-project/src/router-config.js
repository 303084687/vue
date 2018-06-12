// 引入组件
/* jshint esversion: 6 */
import activePublic from './page/activePublic/index.vue'
import activeManage from './page/activeManage/index.vue'
// 子页面
import table from './page/activePublic/table.vue'
import click from './page/activeManage/click.vue'
import child from './page/activeManage/child.vue'
export default [
  {
    // 配置路由，当路径为'/activePublic',使用组件activePublic
    path: '/activePublic',
    component: activePublic,
    children: [
      // 路径为'/activePublic'
      { path: '/', component: table }
    ]
  }, {
    // 配置路由，当路径为'/activeManage',使用组件activeManage
    path: '/activeManage',
    component: activeManage,
    children: [
      // 路径为'/activeManage'
      { path: '/', component: click }
    ]
  }, {
    path: '/step',
    name: 'step',
    component: child
  },
  // 默认路由
  {
    path: '/',
    component: click
  }
]
