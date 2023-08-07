<template>
	<div class="container">
		<div class="card-comp">
			<div class="card-title">
				<span class="title">გრაფიკული დიზაინერი </span>
				<div>
					<span class="title more">შეავსე განაცხადი</span>
					<img :src="arrow" alt="" />
				</div>
				<span class="card-logo">
					<img :src="palitral" alt="" />
				</span>
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
				<div class="card-image-desktop">
					<img :src="palitral" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import palitral from '@/assets/images/logos/palitral.svg';
	import location from '@/assets/images/static/location.svg';
	import time from '@/assets/images/static/time.svg';
	import arrow from '@/assets/images/static/arrow.svg';
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
			@media only screen and (max-width: 600px) {
				font-size: 16px;
			}
		}

		div {
			display: flex;
			flex-wrap: wrap;
			gap: 4px;
			@media only screen and (max-width: 600px) {
				display: none;
			}

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
		@media only screen and (max-width: 600px) {
			font-size: 12px;
		}
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
			display: flex;
			gap: 6px;
			align-items: center;
			border-radius: 24px;
			background: #fbf3fc;
			padding: 8px 16px;
			@media only screen and (max-width: 600px) {
				padding: 6px 10px;
			}

			span {
				color: #6b1e6c;
				font-family: 'Noto Sans Georgian';
				font-size: 12px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
				@media only screen and (max-width: 600px) {
					font-size: 10px;
				}
			}
		}
		.card-info {
			display: flex;
			gap: 6px;
			align-items: center;
			border-radius: 24px;
			background: #f3fcf5;
			padding: 8px 16px;
			span {
				color: #1a602e;
				font-family: 'Noto Sans Georgian';
				font-size: 12px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
				@media only screen and (max-width: 600px) {
					font-size: 10px;
				}
			}
		}
	}
	.card-logo {
		display: none;
		@media only screen and (max-width: 600px) {
			display: flex;
		}
	}
	.card-image-desktop {
		@media only screen and (max-width: 600px) {
			display: none;
		}
	}
</style>
