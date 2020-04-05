<template>
	<div id="app">
		<h1>Progress</h1>
		<h2>进度条定制</h2>
		<h3>线性进度条</h3>
		<mr-progress :percentage="percentage" />
		<h3>环形进度条</h3>
		<mr-progress :percentage="percentage" type="circle" />
		<h2>进度条内容定制</h2>
		<mr-progress :percentage="percentage">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :percentage="percentage">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<mr-progress :percentage="percentage" type="circle">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<mr-progress :percentage="percentage" textInside> </mr-progress>
		<button @click="add" class="button">加</button>
		<button @click="subtract" class="button">减</button>
		<h2>进度条颜色定制</h2>
		<mr-progress :strokeColor="color" :percentage="percentage">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :strokeColor="color" :percentage="percentage" type="circle">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<mr-progress :strokeBgColor="color" :percentage="percentage">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :strokeBgColor="color" :percentage="percentage" type="circle">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<mr-progress :strokeColor="colorArr" :percentage="percentage">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :strokeColor="colorArr" :percentage="percentage" type="circle">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<button @click="add" class="button">加</button>
		<button @click="subtract" class="button">减</button>
		<h2>进度条宽度定制</h2>
		<mr-progress :width="200" :percentage="percentage">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :width="200" :percentage="percentage" type="circle">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<button @click="add" class="button">加</button>
		<button @click="subtract" class="button">减</button>
		<h2>进度条进度线宽度定制</h2>
		<mr-progress :strokeWidth="25" :percentage="percentage">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :strokeWidth="25" :percentage="percentage" type="circle">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<button @click="add" class="button">加</button>
		<button @click="subtract" class="button">减</button>
		<h2>进度条样式定制</h2>
		<mr-progress :strokeWidth="25" :percentage="percentage" strokeLinecap="round">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :strokeWidth="25" :percentage="percentage" strokeLinecap="butt">
			<span class="percentage">{{ percentage }}%</span>
		</mr-progress>
		<mr-progress :strokeWidth="25" :percentage="percentage" type="circle" strokeLinecap="round">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<mr-progress :strokeWidth="25" :percentage="percentage" type="circle" strokeLinecap="butt">
			<span class="percentage">进度：{{ percentage }}</span>
		</mr-progress>
		<button @click="add" class="button">加</button>
		<button @click="subtract" class="button">减</button>
	</div>
</template>

<script>
import mrProgress from '../src';
export default {
	name: 'App',
	data() {
		return {
			color: '#e6a23c',
			colorArr: [
				{ color: '#d0021b', percentage: 0 },
				{ color: '#1989fa', percentage: 20 },
				{ color: '#e6a23c', percentage: 40 },
				{ color: '#5cb87a', percentage: 60 },
				{ color: '#b8e986', percentage: 80 },
				{ color: '#6f7ad3', percentage: 100 },
			],
			percentage: 20,
			strokeLinecap: 'butt',
		};
	},
	components: {
		mrProgress,
	},
	methods: {
		add() {
			if (this.percentage >= 100) {
				return;
			}
			this.percentage += 10;
		},
		subtract() {
			if (this.percentage <= 0) {
				return;
			}
			this.percentage -= 10;
		},
	},
};
</script>

<style>
.percentage {
	color: #666;
}
.button {
	width: 50px;
	height: 30px;
	text-align: center;
	line-height: 30px;
}
</style>
