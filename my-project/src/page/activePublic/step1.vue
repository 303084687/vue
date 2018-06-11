<template>
  <div id="vm">
    <el-row :gutter="3" style="margin: 10px 0;">
    <el-col :span="5">
      <el-input placeholder="输入用户名称查询" v-model="username" icon="search" @change="changeUsername" style="height:36px;"></el-input>
    </el-col>
    <el-badge class="item" :value="value" :max="5">
      <el-button size="medium">评论</el-button>
    </el-badge>
      <el-radio v-model="radio" label="1">测试1</el-radio>
      <el-radio v-model="radio" label="2">测试2</el-radio>
      <el-button @click="checkOne">单选事件</el-button>
    </el-row>
    <el-table  border fit :data="tableData" highlight-current-row style="width: 100%;font-size: 12px;">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="channel_name" label="用户名称"></el-table-column>
        <el-table-column prop="channel_password" label="用户密码"></el-table-column>
        <el-table-column prop="creatTime" label="创建时间" sortable ></el-table-column>
    </el-table>
    <el-col class="toolbar" style="padding:10px;">
      <el-pagination @current-change="findAll" :current-page="currentPage" :page-size="10" layout="total, prev, pager, next, jumper" :total="total" style="float:right"></el-pagination>
    </el-col>
  </div>
</template>
<script>
import {getRequest} from '../../util/request'
export default {
  created () {
    this.findAll(1)
  },
  data () {
    return {
      currentPage: 1,
      total: 0,
      listLoading: false,
      username: '',
      tableData: [],
      value: 10,
      radio: '1'
    }
  },
  methods: {
    findAll: function (currentPage) {
      this.listLoading = true
      if (!isNaN(currentPage)) {
        this.currentPage = currentPage
      }

      if (this.username && this.username.trim() !== '') {
        // params_['channelId'] = this.username
      }
      getRequest('channel/findAll?pageNum=' + this.currentPage + '&pageSize=10')
        .then(response => {
          this.total = response.data.data.total
          this.tableData = response.data.data.list
        }).catch(response => {
          console.error(response)
        })
      this.listLoading = false
    },
    changeUsername: function () {
      console.log('我要去查询数据了')
      this.findAll(1)
    },
    checkOne: function () {
      alert('单选的值为==' + this.radio)
    }
  }
}
</script>
