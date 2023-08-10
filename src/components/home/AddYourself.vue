<template>
	<div class="container">
		<div class="add-comp">
			<div class="add-info">
				<span>ვერ იპოვე შესაფერისი ვაკანსია?</span>
				<span>დაგვიტოვე რეზიუმე და ჩვენ დაგიკავშირდებით!</span>
			</div>
			<router-link to="Leaveform/"> <Button /></router-link>
		</div>
	</div>
</template>

<script setup>
	import Button from '@/components/Button.vue';
	// import { defineProps } from 'vue';

	// const props = defineProps({
	// 	card: {
	// 		type: Object,
	// 		required: true,
	// 	},
	// });
</script>

<style lang="scss" scoped>
	.add-comp {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		isolation: isolate;

		margin-top: 114px;
		margin-bottom: 80px;
		height: 165px;
		padding: 0px 50px;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: calc(50% - 50vw);
			z-index: -1;
			width: 100vw;
			height: 100%;
			background: rgba(233, 245, 253, 0.92);
		}

		@media only screen and (max-width: 600px) {
			flex-direction: column;
			padding: 24px;
		}
	}

	.add-info {
		display: flex;
		flex-direction: column;
		gap: 8px;
		color: #000;
		font-family: var(--font-DejaVu);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			align-items: center;
		}
	}
</style>
