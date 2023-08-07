<template>
	<div class="header-comp container">
		<div class="header-logo">
			<img class="palitra-svg" :src="palitra" alt="" />
		</div>
		<div class="header-body">
			<div class="header-title">
				დასაქმდი პალიტრა ჰოლდინგში, <br />
				შემოუერთდი ჩვენს გუნდს და გახდი დიდი ოჯახის წევრი!
			</div>

			<div class="input-cont">
				<img :src="searchButton" alt="" />
				<input type="text" name="" placeholder="" id="" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import searchButton from '@/assets/images/searchButton.svg';
	import palitra from '@/assets/images/logos/palitra.svg';
</script>

<style lang="scss" scoped>
	.header-logo {
		padding: 20px 8px;
	}

	.header-body {
		position: relative;
		padding: 60px 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 64px;
		isolation: isolate;
		margin-bottom: 55px;
		background-image: url('@/assets/images/mainImg.svg');
		@media only screen and (max-width: 600px) {
			padding: 25px 15px;
			margin-bottom: 32px;
		}
		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			height: 100%;
			background-color: rgba(233, 245, 253, 0.92);
			transform: scaleX(20);
		}
	}

	.header-title {
		color: #000;
		text-align: center;
		font-family: 'BPG Nino Mkhedruli Book';
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: 50px;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
			line-height: 155.953%; /* 24.952px */
		}
	}

	.input-cont {
		max-width: 920px;
		width: 100%;
		position: relative;

		input {
			box-sizing: border-box;
			border: none;
			width: 100%;
			border-radius: 30px;
			padding: 15px 58px 15px 32px;
			font-size: 1.25rem;
			outline: none;
			@media only screen and (max-width: 600px) {
				font-size: 0.8rem;
			}

			&:focus,
			&:hover {
				box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
			}
		}
		img {
			position: absolute;
			margin: auto;
			top: 0;
			bottom: 0;
			right: 8px;
		}
	}
</style>
