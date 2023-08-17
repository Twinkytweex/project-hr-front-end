<template>
	<div class="container">
		<div class="card-comp" :class="{ none_border: props.vacancy_layout }">
			<div class="card-title">
				<router-link
					:to="{ name: 'form', params: { id: props.card.id } }"
				>
					<span class="card-action-title"
						>გრაფიკული დიზაინერი ({{ card.id }})
					</span>
				</router-link>

				<div class="card-action" v-if="!props.vacancy_layout">
					<router-link
						:to="{ name: 'form', params: { id: props.card.id } }"
					>
						<span class="card-action-title action-font"
							>შეავსე განაცხადი</span
						>
						<img :src="arrow" alt="" />
					</router-link>
				</div>
				<span class="card-action-logo">
					<img class="card-action-logo-img" :src="palitral" alt="" />
				</span>
				<span class="card-action-logo-vac" v-if="props.vacancy_layout">
					<img :src="palitral" alt="" />
				</span>
			</div>
			<div class="card-date">აქტიურია: 25.08.2023 - მდე</div>
			<div class="card-bottom">
				<div class="card-tags">
					<div
						:class="`card-${tag.type}`"
						v-for="(tag, i) in tags"
						:key="i"
					>
						<img :src="tag.icon" alt="" />
						<span>{{ tag.text }}</span>
					</div>
				</div>
				<div class="card-image-desktop" v-if="!props.vacancy_layout">
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
import { defineProps } from 'vue';
import { ref } from 'vue';

const props = defineProps({
	vacancy_layout: {
		type: Boolean,
		default: false
	},
	card: {
		type: Object,
		required: true
	}
});

const tags = ref([
	{
		type: 'location',
		text: 'თბილისი',
		icon: location
	},
	{
		type: 'duration',
		text: 'სრული განაკვეთი',
		icon: time
	}
]);
</script>

<style lang="scss" scoped>
.card-comp {
	// cursor: pointer;
	border-radius: 18px;
	border: 0.5px solid #e9ebee;
	background: #fff;
	padding: 20px 24px;
	&:not(:last-child) {
		margin-bottom: 24px;
	}
	&:hover {
		box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
	}
}
.card-title {
	display: flex;
	justify-content: space-between;
	padding-bottom: 8px;

	.card-action-title {
		color: #0063bf;
		font-family: var(--font-DejaVu);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		@media only screen and (max-width: 600px) {
			font-size: 16px;
		}
	}

	.action-font {
		font-size: 14px;
	}
}
.card-date {
	color: #65798a;
	font-family: var(--font-DejaVu);
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
.card-tags {
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
			font-family: var(--font-Noto-Sans);
			font-size: 12px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			@media only screen and (max-width: 600px) {
				font-size: 10px;
			}
		}
	}
	.card-duration {
		display: flex;
		gap: 6px;
		align-items: center;
		border-radius: 24px;
		background: #f3fcf5;
		padding: 8px 16px;
		span {
			color: #1a602e;
			font-family: var(--font-Noto-Sans);
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
.card-action-logo {
	display: none;

	@media only screen and (max-width: 600px) {
		display: flex;
		height: 20px;
	}
}
.card-action {
	cursor: pointer;

	& > a {
		display: flex;
		align-items: center;
	}

	@media only screen and (max-width: 600px) {
		display: none;
	}
	&:hover {
		box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.02);
	}
}
.card-image-desktop {
	cursor: pointer;
	@media only screen and (max-width: 600px) {
		display: none;
	}
}
@media only screen and (max-width: 600px) {
	.card-action-logo-vac {
		display: none;
	}
}
.none_border {
	border: unset;
	padding: 20px 38px;
}
</style>
