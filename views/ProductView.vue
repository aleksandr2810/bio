<template>
	<div class="card">
		<div class="images">
			<div><img alt="logo" :src="currentProduct.picture" width="300" /></div>
			<div><img v-if="currentProduct.picture2" alt="logo" :src="currentProduct.picture2" width="300" /></div>
			<div><img v-if="currentProduct.picture3" alt="logo" :src="currentProduct.picture3" width="300" /></div>
		</div>
		<div class="info">
			<div>
				<h2>{{ currentProduct.title }}</h2>
			</div>
			<div>
				<h3>{{ currentProduct.name }}</h3>
			</div>
			<div class="phone" @click="onPhone">Як з нами зв'язатись</div>
			<div class="price">
				{{ (currentProduct.price * getPrices).toFixed() }} грн
			</div>
			<div><button @click="onBackClick()">Назад</button></div>
			<div>
				<h3>Склад :</h3>
				<table>
					<caption>
						<h3>{{ currentProduct.composition.title }}</h3>
					</caption>
					<tr>
						<th></th>
						<th>Кількість</th>
						<th>ДП %</th>
					</tr>
					<tr>
						<td>{{ currentProduct.composition.name1 }}</td>
						<td>{{ currentProduct.composition.quantity }}</td>
						<td>{{ currentProduct.composition.dp }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name2">
						<td>{{ currentProduct.composition.name2 }}</td>
						<td>{{ currentProduct.composition.quantity2 }}</td>
						<td>{{ currentProduct.composition.dp1 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name3">
						<td>{{ currentProduct.composition.name3 }}</td>
						<td>{{ currentProduct.composition.quantity3 }}</td>
						<td>{{ currentProduct.composition.dp2 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name4">
						<td>{{ currentProduct.composition.name4 }}</td>
						<td>{{ currentProduct.composition.quantity4 }}</td>
						<td>{{ currentProduct.composition.dp3 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name5">
						<td>{{ currentProduct.composition.name5 }}</td>
						<td>{{ currentProduct.composition.quantity5 }}</td>
						<td>{{ currentProduct.composition.dp4 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name6">
						<td>{{ currentProduct.composition.name6 }}</td>
						<td>{{ currentProduct.composition.quantity6 }}</td>
						<td>{{ currentProduct.composition.dp5 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name7">
						<td>{{ currentProduct.composition.name7 }}</td>
						<td>{{ currentProduct.composition.quantity7 }}</td>
						<td>{{ currentProduct.composition.dp6 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name8">
						<td>{{ currentProduct.composition.name8 }}</td>
						<td>{{ currentProduct.composition.quantity8 }}</td>
						<td>{{ currentProduct.composition.dp7 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name9">
						<td>{{ currentProduct.composition.name9 }}</td>
						<td>{{ currentProduct.composition.quantity9 }}</td>
						<td>{{ currentProduct.composition.dp8 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name10">
						<td>{{ currentProduct.composition.name10 }}</td>
						<td>{{ currentProduct.composition.quantity10 }}</td>
						<td>{{ currentProduct.composition.dp9 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name11">
						<td>{{ currentProduct.composition.name11 }}</td>
						<td>{{ currentProduct.composition.quantity11 }}</td>
						<td>{{ currentProduct.composition.dp10 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name12">
						<td>{{ currentProduct.composition.name12 }}</td>
						<td>{{ currentProduct.composition.quantity12 }}</td>
						<td>{{ currentProduct.composition.dp11 }}</td>
					</tr>
					<tr v-if="currentProduct.composition.name13">
						<td>{{ currentProduct.composition.name13 }}</td>
						<td>{{ currentProduct.composition.quantity13 }}</td>
						<td>{{ currentProduct.composition.dp12 }}</td>
					</tr>
				</table>
				<h4>{{ currentProduct.composition.text1 }}<br>
					{{ currentProduct.composition.text2 }}<br>
					{{ currentProduct.composition.text3 }}
				</h4>
			</div>
			<div>
				<h2>Фармакологічні властивості:</h2>
				<ul v-for="text in currentProduct.properties" :key="text">
					<li>{{ text }}</li>
				</ul>
			</div>
			<div>
				<h2>Показання до застосування:</h2>
				<ul v-for="text in currentProduct.application" :key="text">
					<li>{{ text }}</li>
				</ul>
			</div>
			<div v-if="currentProduct.way">
				<h3>Спосіб застосування: </h3>
				{{ currentProduct.way }}
			</div>
			<div v-else>
				<h3>Спосіб застосування: </h3>
				<ul v-for="text in currentProduct.ways" :key="text">
					<li><mark>{{ text.one }}</mark> {{ text.two }}</li>
				</ul>
			</div>
			<div><button @click="onBackClick()">Назад</button></div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

	name: 'ProductView',
	data() {
		return {
			currentProduct: {},
		}
	},
	computed: {
		...mapGetters([
			'getProductById', 'getPrices',
		]),
		productId() {
			return this.$route.params.productId
		}
	},
	methods: {
		onBackClick() {
			this.$router.push({
				name: 'products',
			})
		},
		onPhone() {
			this.$router.push({
				name: 'about',
			})
		}
	},
	created() {
		this.currentProduct = this.getProductById(this.productId)
	},
}
</script>

<style lang="scss" scoped>
.card {
	display: flex;

	// .images {
	// 	//display: flex;
	// }
}

@media (max-width:580px) {
	.card {
		flex-direction: column;
	}
}

table {
	text-align: left;
	border-collapse: collapse;
	background-color: #f6f6f6;
}

/* Spacing */
td,
th {
	border: 1px solid #999;
	padding: 20px;
}

th {
	background: rgb(239, 243, 5);
	color: white;
	border-radius: 0;
	padding: 10px;
}

.info>div:not(:last-child) {
	margin-bottom: 30px;
}

p {
	line-height: 1.3;
}

.phone {
	cursor: pointer;
	padding: 10px 50px;
	border: 2px solid rgb(246, 64, 64);
	border-radius: 25px;
	max-width: 200px;
	text-align: center;
	background-color: white;
	color: white;
	font-size: 18px;
	background-color: rgb(245, 139, 139);
	transition: all 0.5s ease 0s;

	&:hover {
		background-color: rgb(245, 39, 39);
	}

}

button {
	padding: 10px 30px;
	background-color: green;
	color: white;
	font-size: 18px;
	border-radius: 15px;
	cursor: pointer;
}

.price {
	font-size: 28px;
	//font-weight: 700;
}
</style>