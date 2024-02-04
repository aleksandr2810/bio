<template>
	<div class="filter">
		<product-filter />
	</div>
	<div class="product">
		<div v-for="product in getFilteredList" :key="product.id" class="cards" @click="onProductClick(product.id)">
			<!-- <div class="card"> -->
			<div><img alt="logo" :src="product.picture" width="200" height="220" /></div>
			<h3>{{ product.title }}</h3>
			<div class="price"> {{ (product.price * getPrices).toFixed() }} грн</div>
			<!-- </div> -->
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductFilter from '@/components/ProductFilter.vue';

export default {
	name: "ProductsList",
	components: {
		ProductFilter,
	},
	computed: {
		...mapGetters(['getFilteredList', 'getPrices']),
	},
	methods: {
		onProductClick(id) {
			this.$router.push({
				name: 'product',
				params: {
					productId: id,
				}
			})
		}
	},
}
</script>

<style lang="scss" scoped>
.filter {
	margin-bottom: 20px;
}
.product {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	gap: 10px;
}

.price {
	font-size: 28px;
	//font-weight: 700;
}

.cards {
	cursor: pointer;
	flex: 0 0 250px;
	padding: 10px;
	//background-color: rgb(245, 243, 243);
	border: 1px solid gray;
	border-radius: 5px;
	box-shadow: 3px 3px 3px gray;
	transition: all 0.5s ease 0s;

	&:hover {
		//border: 2px solid gray;
		box-shadow: 5px 5px 5px gray;
		//background-color: rgb(183, 183, 233);
	}
}
</style>