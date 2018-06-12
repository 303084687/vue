<template>
    <div class="div1">
      <div>
        我是带参数的
        <span>id为{{id}}name为{{name}}</span>
      </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      id: '',
      name: ''
    }
  },
  created () {
    // params传值
    this.id = this.$route.params.id
    this.name = this.$route.params.name
    // query传值
    // this.id = this.$route.query.id
    // this.name = this.$route.query.name
  }
}
</script>

<style>
.div1{border: 1px solid red;width: 50%;height: 200px;}
</style>
