<template>
	<div class="container">
		<div class="add-comp">
			<div class="add-info">
				<span>ვერ იპოვე შესაფერისი ვაკანსია?</span>
				<span>დაგვიტოვე რეზიუმე და ჩვენ დაგიკავშირდებით!</span>
			</div>
			<button>
				<img :src="fill" alt="" />
				<span> განაცხადის შევსება </span>
			</button>
		</div>
	</div>
</template>

<script setup>
	import fill from '@/assets/images/static/fill.svg';
</script>

<style lang="scss" scoped>
	.add-comp {
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		isolation: isolate;
		background: rgba(233, 245, 253, 0.92);
		margin-top: 114px;
		margin-bottom: 80px;
		height: 165px;
		padding: 0px 10px;
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
		font-family: 'DejaVu Sans';
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
			align-items: center;
		}
	}

	button {
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

		span {
			color: #fff;
			font-family: ' DejaVu Sans';
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
