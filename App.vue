<template>
	<div class="wrapper">
		<div class="main">
			<div>
				<nav>
					<div class="image">
						<img alt="logo" src="../src/assets/picsvg_download.svg" width="60" height="40" />
					</div>
					<div class="link">
						<router-link to="/">Головна</router-link>
						<router-link to="/about">Контакти</router-link>
						<router-link to="/products">Наш товар</router-link>
						<router-link to="/guarantee">Гарантія якості</router-link>
					</div>
					<div class="tel"><a href="tel:0506165098"> Телефон консультанта : 050-616-50-98</a></div>
				</nav>
			</div>
			<div>
				<h1>ЗДОРОВ’Я УКРАЇНИ</h1>
				<div class="motto">Нутриціологія Фітотерапія Дієтологія</div>
			</div>
			<div class="rout"><router-view /></div>
			<div>
				<h5>© 2024 Авторські права охороняються законом!</h5>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	//text-align: center;
	height: 100%;
	color: #2c3e50;
}

html,
body {
	height: 100%;
}

.wrapper {
	min-height: 100%;
}

.rout {
	flex: 1 1 auto;
}

.main {
	display: flex;
	flex-direction: column;
	// justify-content: space-between;
	min-height: 100%;
	max-width: 1200px;
	margin: 0 auto;
	position: relative;

	h1 {
		color: yellow;
		background-color: blue;
		text-align: center;
	}

	.motto {
		background-color: yellow;
		text-align: center;
		color: blue;
		font-size: 24px;
		margin-bottom: 10px;
	}

	h5 {
		text-align: center;
	}

	.tel {
		a {
			color: rgb(237, 243, 140);
		}
	}

	nav {
		padding: 25px;
		background-color: green;
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: sticky;
		top: 0;
		z-index: 2;

		a {
			font-weight: bold;
			color: #eff1f3;
			font-size: 18px;

			&.router-link-exact-active {
				color: #dceb09;
			}
		}
	}

	.link {
		display: flex;
		flex-direction: row;
		gap: 20px;
	}

	@media (max-width:580px) {
		nav {
			flex-direction: column;
		}

		.image {
			display: none;
		}

		.link {
			display: flex;
			flex-direction: column;
		}

		.tel {
			display: none;
		}
	}
}
</style>
