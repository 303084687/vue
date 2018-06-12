<template>
 <div class="activeManage">
  <!-- click点击事件 -->
   <div class="div1" @click="test()">click点击事件
     <el-button size="mini" @click.stop="test1()">子事件</el-button>
     <el-button size="mini" @click="test2()">不加stop父事件</el-button>
   </div>
   <!-- 页面跳转 -->
   <el-button size="mini" @click="tiaozhuan()">跳转事件</el-button>
   <!-- 视图 -->
  <router-view class="view"></router-view>
 </div>
</template>
<style>
 .div1{border: 1px solid black;height: 100px;width: 50%;}
</style>
<script>
export default {
  methods: {
    test () {
      console.log('点击我出父事件')
    },
    test1 () {
      console.log('点击我出子事件')
    },
    test2 () {
      console.log('不加stop出子事件和父事件')
    },
    tiaozhuan () {
      // 带参数的path跳转query参数地址栏能看见get
      // this.$router.push({path: '/step', query: {id: 1, name: 'wgl'}})
      // 带参数的name跳转params参数地址栏餐不见post,需要配置路由的name
      this.$router.push({name: 'step', params: {id: 1, name: 'wgl'}})
    }
  }
}
</script>
