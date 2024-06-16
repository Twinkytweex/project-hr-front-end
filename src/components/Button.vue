<template>
	<button class="button-comp">
		<img v-if="props.icon" :src="icons[props.icon]" alt="" />
		<span class="button-text">
			<slot> </slot>
		</span>
	</button>
</template>

<script setup>
import { defineProps } from 'vue';
import fill from '@/assets/images/static/fill.svg';

const icons = {
	fill
};
// dad
const props = defineProps({
	icon: {
		type: String,
		default: null
	}
});

// import { defineProps } from 'vue';

// const props = defineProps({
// 	button: {
// 		type: Object,
// 		required: true,
// 	},
// });
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
		font-family: var(--font-DejaVu);
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
