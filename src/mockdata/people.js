import Mock from 'mockjs'

const items = new Map()
const Random = Mock.Random

for(let i = 0; i < 5; i++){
	let item = {
		id: Random.guid(), // GUID
		name: Random.cname(), // 中文名
		date: Random.date('yyyy-MM-dd'), //日期
		address: Random.county(true) // 地址 包括区市
	}
	items.set(item.id, item)
}

export { items }