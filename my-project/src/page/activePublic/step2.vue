<template>
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
</template>
<script>
import {getRequest} from '../../util/request'
export default {
  created () {
    this.findAll()
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
