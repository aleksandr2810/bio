<template>
	<div class="container">
		<div>
			<label>
				<font-awesome-icon :icon="['fas', 'magnifying-glass']" size="1.3x" color="red" class="icon" />
				<input ref="prod" v-model="filterData.title" type="text" placeholder="Пошук" />
				<button @click="onReset">✖</button>
			</label>
		</div>
		<!-- <button @click="onReset">Очистити</button> -->
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	name: 'ProductFilter',

	data() {
		return {
			filterData: {},
		}
	},
	watch: {
		filterData: {
			handler(newFilterValue) {
				this.updateFilter(newFilterValue)
			},
			deep: true,
		},
	},
	methods: {
		...mapActions(['updateFilter']),
		onReset() {
			this.filterData = {}
		},
	},
	mounted() {
		this.$refs.prod.focus()
		this.filterData = {}
	},
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	gap: 20px;
	padding: 10px 10px;
	background-color: yellowgreen;
}

label {
	position: relative;

	.icon {
		padding-right: 10px;
		position: absolute;
		left: 5px;
		top: 2px;
		z-index: 1;
	}

	button {
		position: absolute;
		right: 0;
		top: 0;
		z-index: 1;
		background-color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
	}

	// &::after {
	// 	content: '✖';
	// 	position: absolute;
	// 	right: 30px;
	// 	top: 0;
	// 	z-index: 1;
	// }
}

// .icon {
// 	padding-right: 10px;
// }

// button {
// 	background-color: white;
// 	border: none;
// 	border-radius: 5px;
// 	cursor: pointer;
// }

input {
	//position: relative;
	padding-right: 20px;
	padding-left: 25px;
	min-width: 275px;
	height: 30px;
	border-radius: 5px;
	border: none;
	outline: none;
}
</style>