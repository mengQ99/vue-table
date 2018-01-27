import Mock from 'mockjs'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { items } from './people'

export default {
	bootstrap(){
		let mock = new MockAdapter(axios) // 用于模拟请求

		//获取数据 items
		mock.onGet('/items/list').reply(config => { //config 为前台传来的数据
			let arr = [...items.values()] //将键值以数组形式展开
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, arr]) //状态码200 返回数据 此处的 `arr`  ElementUI要求为数组否则报错
				}, 300)
			})
		})

		//新增 item
		mock.onGet('/items/add').reply(config => {
			let i = config.item
			i.id = Mock.Random.guid()
			items.set(i.id, i)
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve([200, {
						code: 200,
						msg: '新增成功！'
					}])
				}, 600)
			})
		})		
	}
}
