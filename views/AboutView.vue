<template>
	<div class="about">
		<h3> Консультант Константин :</h3>
		<div>
			<a href="https://t.me/https://t.me/konstantin_kurbatsky"> <font-awesome-icon :icon="['fab', 'telegram']" /> :  050-616-50-98</a> <br>
			<hr>
			<a href="tel:0633122594"> <font-awesome-icon :icon="['fas', 'phone']" /> :  063-312-25-94</a>
		</div>
		<div class="info">
			<div class="email"><font-awesome-icon :icon="['far', 'envelope']" /> : <a href="mailto:konstantinkurbackij@gmail.com">konstantinkurbackij@gmail.com</a></div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.about {
	// overflow: hidden;
	// height: 100%;
	// position: relative;
	//background: url("../assets/white.jpg") 0 0 / cover no-repeat;
	display: flex;
	justify-content: space-around;
	//z-index: 20;
}
@media (max-width:580px) {
	.about{
		flex-direction: column;
	}
}
.info {
	//background-color: rgb(200, 205, 241);
	padding: 10px;
}
.email{
	font-size: 20px;
	color: rgb(1, 1, 22);
}
a {
	color: rgb(3, 125, 3);
	text-decoration: none;
	font-size: 20px;
	//font-weight: 600;
}
</style>
