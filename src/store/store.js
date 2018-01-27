import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		items: []
	},
	mutations: {
		getData(state, items){
			state.items = items
		}
	},
	actions: {
		async add({ dispatch }, item){
			let base = ''
			await axios.get(`${base}/items/add`, { item: item })
			dispatch('getData') //重新获取数据
		},
		async getData({ commit }){
			let base = ''
			let res = await axios.get(`${base}/items/list`)
			commit('getData', res.data)  // actions --> commit --> mutations
		}
	},
	getters: {  // 类似于计算属性
		tableData(state, getters){
			return state.items
		}
	}
})