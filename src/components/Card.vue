<template>
	<div class="card-comp container">
		<div class="card-title">
			<span class="title">გრაფიკული დიზაინერი </span>
			<div>
				<span class="title more">შეავსე განაცხადი</span>
				<img :src="arrow" alt="" />
			</div>
		</div>
		<div class="card-date">აქტიურია: 25.08.2023 - მდე</div>
		<div class="card-bottom">
			<div class="card-colors">
				<div class="card-location">
					<img :src="location" alt="" />
					<span>თბილისი</span>
				</div>
				<div class="card-info">
					<img :src="time" alt="" />
					<span>სრული განაკვეთი</span>
				</div>
			</div>
			<div class="card-logo">
				<img :src="palitral" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup>
	import palitral from '@/assets/logos/palitral.svg';
	import location from '@/assets/static/location.svg';
	import time from '@/assets/static/time.svg';
	import arrow from '@/assets/static/arrow.svg';
</script>

<style lang="scss" scoped>
	.card-comp {
		border-radius: 18px;
		border: 0.5px solid #e9ebee;
		background: #fff;
		padding: 20px 24px;
		&:hover {
			box-shadow: 0px 2px 18px 0px rgba(0, 0, 0, 0.02);
		}
	}
	.card-title {
		display: flex;
		justify-content: space-between;
		padding-bottom: 8px;
		.title {
			color: #0063bf;
			font-family: 'DejaVu Sans';
			font-size: 18px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}

		div {
			display: flex;
			flex-wrap: wrap;
			gap: 4px;

			.more {
				font-size: 14px;
				font-family: 'DejaVu Sans';
			}
		}
	}
	.card-date {
		color: #65798a;
		font-family: 'DejaVu Sans';
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		padding-bottom: 17px;
	}
	.card-bottom {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.card-colors {
		display: flex;
		gap: 12px;
		.card-location {
			color: #6b1e6c;
			font-family: 'Noto Sans Georgian';
			font-size: 12px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			display: flex;
			gap: 6px;
			align-items: center;
			border-radius: 24px;
			background: #fbf3fc;
			padding: 8px 16px;
		}
		.card-info {
			color: #1a602e;
			font-family: 'Noto Sans Georgian';
			font-size: 12px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			display: flex;
			gap: 6px;
			align-items: center;
			border-radius: 24px;
			background: #f3fcf5;
			padding: 8px 16px;
		}
	}
</style>
