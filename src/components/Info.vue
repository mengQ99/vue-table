<template>
	<div>
		<h2>Detail</h2>
		<div class="view">
			日期：{{$route.params.detail.split('/')[0]}}<br>
			姓名：{{$route.params.detail.split('/')[1]}}<br>
			地址：{{$route.params.detail.split('/')[2]}}
		</div>
	</div>
</template>
<style scoped>
.view { 
	position: absolute;
	padding: 10px; 
	line-height: 1.5;
	border: 1px solid #ccc; 
	border-radius: 3px; }
</style>