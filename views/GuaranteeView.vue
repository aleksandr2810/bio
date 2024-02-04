<template>
	<div class="image">
		<div v-for="(value, key) in getGuaranteeList" :key="key" class="card">
			<img alt="logo" :src="value" width="300" />
		</div>
	</div>
	<h2>Література, яка була використана:</h2>
	<ol>
		<li>
			Practical A-to-Z Reference to Drug-Free Remedies Using Vitamins, Minerals, Herbs & Food Supplements 2010, ISBN-10:
			1583334009, ISBN-13: 978-1583334003 Phyllis A. Balch, CNC
		</li>
		<li>
			Биологически активные добавки и фитопрепараты СПРАВОЧНИК 2003, ISBN: 966-8230-02-7 Н. Посохов, к.м.н., доц., М.
			Шутак, к.м.н., доц.
		</li>
		<li>
			Биодобавки доктора Аткинса, Природная альтернатива при лечении и профилактике болезней 1999, ISBN: 5-88389-044-X,
			ISBN: 5-7905-0433-7 Robert C. Atkins, M. D.
		</li>
	</ol>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	name: 'GuaranteeView',

	computed: {
		...mapGetters(['getGuaranteeList'])
	},
}
</script>

<style lang="scss" scoped>
.image {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10px;
}

.card {
	border: 1px solid blue;
	//border-radius: 10px;
}
</style>