<template>
	<div class="home">
		<!-- <img alt="logo" src="../assets/now.png" width="300" /> -->
		<HelloWorld />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
	name: "HomeView",
	components: {
		HelloWorld,
	},
};
</script>

<style lang="scss">

</style>
