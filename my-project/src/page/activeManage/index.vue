<template>
 <div class="activeManage">
  <!-- click点击事件 -->
   <div class="div1" @click="test()">click点击事件
     <el-button size="mini" @click.stop="test1()">子事件</el-button>
     <el-button size="mini" @click="test2()">不加stop父事件</el-button>
   </div>
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
    }
  }
}
</script>
