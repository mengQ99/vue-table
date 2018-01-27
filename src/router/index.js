import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/item/:detail',
			name: 'info',
			component: Info //路由所映射的组件
		}
	]
})