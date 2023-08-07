<template>
	<div class="container">
		<div class="success-comp">
			<span>თქვენი განაცხადი მიღებულია, წარმატებებს გისურვებთ!</span>
			<img :src="mark" alt="" />
			<p>ვაკანსიებზე დაბრუნება</p>
		</div>
	</div>
</template>

<script setup>
	import mark from '@/assets/images/static/mark.svg';
</script>

<style lang="scss" scoped>
	.success-comp {
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
		}
		&:hover {
			box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.02);
		}
	}
	span {
		color: #000;
		font-family: 'DejaVu Sans';
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 200%; /* 36px */
		@media only screen and (max-width: 600px) {
			font-size: 16px;
		}
	}
	p {
		color: #0063bf;
		font-family: DejaVu Sans;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
</style>
