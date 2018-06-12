<template>
 <div class="activeManage">
  <!-- click点击事件 -->
   <div class="div1" @click="test()">click点击事件
     <el-button size="mini" @click.stop="test1()">子事件</el-button>
     <el-button size="mini" @click="test2()">不加stop父事件</el-button>
   </div>
   <!-- vue复选框测试 -->
   <div>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <el-checkbox-group v-model="checkedCities" @change="checkBoxList" class="checkBoxGroup">
      <el-row>
        <el-col :span="20">
            <el-checkbox  v-for="item in tableData" :key="item.id" :label="item.id" :value="item.id" >{{item.name}}</el-checkbox>
        </el-col>
      </el-row>
    </el-checkbox-group>
    <el-button size="mini" @click="checkIds" style="margin-top:10px;">多选ids</el-button>
    <!-- 下拉框 -->
    <div style="margin-top:10px;"></div>
    <el-dropdown @command="handleCommand">
      <el-button type="primary">
        {{smyectedValue}}<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item,i) in tableData" :key="i" :command="item.id">{{item.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
import {getRequest} from '../../util/request'
export default {
  created () {
    // this.findAll()
  },
  data () {
    return {
      tableData: [],
      checkAll: false,
      checkedCities: [],
      isIndeterminate: true,
      checkName: [],
      smyectedValue: '请选择'
    }
  },
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
    },
    findAll: function (currentPage) {
      getRequest('resumeCloud/testList')
        .then(response => {
          this.tableData = response.data.data
          for (let index = 0; index < response.data.data.length; index++) {
            const element = response.data.data[index]
            this.checkName.push(element.id)
          }
          // response.data.data.forEach(element => {
          //  this.checkName.push(element.name)
          /// })
        }).catch(response => {
          console.error(response)
        })
      this.listLoading = false
    },
    // 单选
    checkBoxList (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.tableData.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.tableData.length
    },
    // 全选
    handleCheckAllChange (value) {
      console.log(value)
      this.checkedCities = value ? this.checkName : []
      this.isIndeterminate = false
    },
    checkIds () {
      console.log(this.checkedCities)
    },
    // 下拉框实践
    handleCommand (command) {
      console.log(`我被点击了,command为${command}`)
      this.tableData.every(ele => {
        if (command === ele.id) {
          this.smyectedValue = ele.name
          return false
        }
        return true
      })
    }
  }
}
</script>
