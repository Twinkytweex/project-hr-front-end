<template>
	<div class="container">
		<div class="success-comp">
			<span class="success-text"
				>თქვენი განაცხადი მიღებულია, წარმატებებს გისურვებთ!</span
			>
			<img :src="mark" alt="" />
			<p class="success-back" @click="$router.back()">ვაკანსიებზე დაბრუნება</p>
		</div>
	</div>
</template>

<script setup>
	import mark from '@/assets/images/static/mark.svg';
</script>

<style lang="scss" scoped>
	.success-comp {
		margin: 53px 83px 736px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 46px;
		border-radius: 12px;
		background: #fff;
		border: 0.5px solid #e9ebee;
		padding: 77px 38px;
		@media only screen and (max-width: 600px) {
			padding: 44px 38px;
			margin: 24px 24px 216px;
		}
		&:hover {
			box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.02);
		}
	}
	.success-text {
		color: #000;
		font-family: var(--font-DejaVu);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 200%; /* 36px */
		text-align: center;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
		}
	}
	.success-back {
		cursor: pointer;
		color: #0063bf;
		font-family: var(--font-DejaVu);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>
