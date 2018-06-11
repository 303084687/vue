// 引入组件
/* jshint esversion: 6 */
import activePublic from './page/activePublic/index.vue'
import activeManage from './page/activeManage/index.vue'
// 子页面
import step1 from './page/activePublic/step1.vue'
import step2 from './page/activePublic/step2.vue'
import step3 from './page/activePublic/step3.vue'
import step4 from './page/activePublic/step4.vue'
import manage1 from './page/activeManage/step1.vue'
export default [
  {
    // 配置路由，当路径为'/activePublic',使用组件activePublic
    path: '/activePublic',
    component: activePublic,
    children: [
      // 路径为'/activePublic'，使用组件step1
      { path: '', component: step1 },
      // 路径为'/activePublic/step1'，使用组件step1
      { path: 'step1', component: step1 },
      // 路径为'/activePublic/step2'，使用组件step2
      { path: 'step2', component: step2 },
      { path: 'step3', component: step3 },
      { path: 'step4', component: step4 }
    ]
  }, {
    // 配置路由，当路径为'/activeManage',使用组件activePublic
    path: '/activeManage',
    component: activeManage,
    children: [
      // 路径为'/activeManage'，使用组件step1
      { path: '', component: manage1 },
      // 路径为'/activePublic/step1'，使用组件step1
      { path: 'step1', component: manage1 }
    ]
  }
]
