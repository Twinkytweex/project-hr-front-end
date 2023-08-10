<template>
	<button class="button-comp">
		<img :src="fill" alt="" />
		<span class="button-text"> განაცხადის შევსება </span>
	</button>
</template>

<script setup>
	import fill from '@/assets/images/static/fill.svg';
</script>

<style lang="scss" scoped>
	.button-comp {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		border-radius: 12px;
		background: #0063bf;
		padding: 16px 48px 16px 45px;
		border: none;
		@media only screen and (max-width: 600px) {
			padding: 12px 31px 12px 31px;
		}

		.button-text {
			color: #fff;
			font-family: ' var(--font-DejaVu)';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			@media only screen and (max-width: 600px) {
				font-size: 12px;
			}
		}
	}
</style>
