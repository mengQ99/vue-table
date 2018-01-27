<template>
	<div>
    <el-date-picker v-model="date" type="date" placeholder="选择日期"></el-date-picker>
    <el-input v-model="name" placeholder="姓名"></el-input>
    <el-input v-model="address" placeholder="地址"></el-input>
    <el-button type="primary" @click="add">添加</el-button>
	</div>
</template>
<script>
export default {
	data(){
		return {
			date: '',
			name: '',
			address: ''
		}
	},
	methods: {
		add(){
		  let item = {
		    date: this.date.toLocaleDateString()
		      .split('/').join('-')
		      .replace(/-(\d+)/g, (match, s) => {
		        if(s.length == 1){
		          return '-0' + s
		        }else{
		          return '-' + s
		        }
		    }),
		    name: this.name,
		    address: this.address
		  }
		  this.$emit('add', item)
		  this.name = this.date = this.address = ''
		}
	}
}
</script>