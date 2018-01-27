<template>
  <div class="hello">
    <Add @add="add"/>
    <el-table :data="tableData" style="width: 100%" @current-change="viewInfo">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <router-view></router-view>
  </div>
</template>

<script>
import Add from './Add'
import router from '../router'
export default {
  name: 'HelloWorld',
  data () {
    return {
      //tableData: this.$store.state.items
    }
  },
  created(){ //vue创建好后 调用 getData 获取数据 初次数据渲染
    this.$store.dispatch('getData')
  },
  components: {
    Add: Add
  },
  methods: {
    add(item){
      this.$store.dispatch('add', item)
    },
    // current-change 参数为 { currentRow, oldCurrentRow } 
    viewInfo(val){ //router.push 相当于点击 router-link
      // val 是一个包含当前行信息的 object
      router.push({ name: 'info', params: { detail: val.date + '/' + val.name + '/' + val.address } })
    }
  },
  computed: {
    tableData(){
      return this.$store.getters.tableData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
