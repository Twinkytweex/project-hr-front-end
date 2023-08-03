<template>
	<div class="add-comp">
		<div class="add-cont">
			<div class="add-info">
				<span>ვერ იპოვე შესაფერისი ვაკანსია?</span>
				<span>დაგვიტოვე რეზიუმე და ჩვენ დაგიკავშირდებით!</span>
			</div>
			<div class="add-button">
				<button>
					<img :src="fill" alt="" />
					<span> განაცხადის შევსება </span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import fill from '@/assets/static/fill.svg';
</script>

<style lang="scss" scoped>
	.add-comp {
		isolation: isolate;
		background: rgba(233, 245, 253, 0.92);
		margin-top: 114px;
	}
	.add-cont {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 51px 100px;
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
		span {
			color: #fff;
			font-family: ' DejaVu Sans';
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
</style>
