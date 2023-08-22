<template>
	<div class="vacancy-header-left" @click="$router.back()">
		<img class="vacancy-header-img" :src="LeftArrow" alt="" />
		<span class="vacancy-header-back">
			<slot></slot>
		</span>
	</div>
</template>

<script setup>
import LeftArrow from '@/assets/images/static/LeftArrow.svg';
</script>

<style lang="scss" scoped>
.vacancy-header-left {
	gap: 8px;
	display: flex;
	align-items: center;

	@media only screen and (max-width: 600px) {
		gap: 5px;
		padding-right: 80px;
		display: flex;
	}

	.vacancy-header-img {
		cursor: pointer;

		@media only screen and (max-width: 600px) {
			width: 17px;
		}
	}
	.vacancy-header-back {
		cursor: pointer;

		@media only screen and (max-width: 600px) {
			color: #000;
			font-family: var(--font-DejaVu);
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
}
</style>
