<template>
	<div class="header-comp">
		<img class="palitra-svg" :src="palitra" alt="" />
		<div class="img-cont">
			<div class="overlay"></div>
			<img :src="mainImg" alt="" />
			<div class="header-title">
				<span class="header-info">დასაქმდი პალიტრა ჰოლდინგში, </span>

				<span class="header-infos">
					შემოუერთდი ჩვენს გუნდს და გახდი დიდი ოჯახის წევრი!</span
				>
			</div>
			<div class="input-cont">
				<img :src="searchButton" alt="" />
				<input type="text" name="" placeholder="ძიება " id="" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import mainImg from '../assets/images/mainImg.svg';
	import searchButton from '../assets/images/searchButton.svg';
	import palitra from '../assets/logos/palitra.svg';
</script>

<style lang="scss" scoped>
	.header-comp {
		width: 1440px;
		margin: auto;
		.palitra-svg {
			margin-left: 80px;
			margin-bottom: 20px;
		}
		.img-cont {
			z-index: 0;
			position: relative;
			width: 100%;
			height: 100%;
			.overlay {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: rgba(233, 245, 253, 0.92);
			}
			.header-title {
				display: flex;
				align-items: center;
				justify-content: center;
				.header-info {
					position: absolute;
					top: 20%;
					font-size: 32px;
					line-height: 0px;
				}
				.header-infos {
					position: absolute;
					top: 25%;
					font-size: 32px;
				}
			}

			.input-cont {
				position: absolute;
				bottom: 65px;
				right: 25%;
				left: 25%;
				// display: flex;
				// align-items: center;
				// justify-content: center;

				input {
					border: none;
					top: 80%;
					width: 700px;
					height: 40px;
					border-radius: 30px;
					padding: 15px 22px 15px 32px;
				}
			}
		}
	}
</style>
