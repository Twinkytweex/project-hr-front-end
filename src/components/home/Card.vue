<template>
	<div class="container">
		<div class="card-comp" :class="{ none_border: props.vacancy_layout }">
			<div class="card-title">
				<router-link
					:to="{ name: 'form', params: { id: props.card.id } }"
				>
					<span class="card-action-title">
						{{ card.title_name }}
					</span>
				</router-link>

				<div class="card-action" v-if="!props.vacancy_layout">
					<router-link
						:to="{ name: 'form', params: { id: props.card.id } }"
					>
						<span class="card-action-title action-font"
							>შეავსე განაცხადი</span
						>
						<img :src="arrow" alt="Vacany-palitra" />
					</router-link>
				</div>
				<span class="card-action-logo">
					<img class="image-show" :src="companyLogo" alt="" />
				</span>
				<span class="card-action-logo-vac" v-if="props.vacancy_layout">
					<img :src="palitral" alt="" />
				</span>
			</div>
			<div class="card-date">{{ card.recruting_start_date }}</div>
			<div class="card-bottom">
				<div class="card-tags">
					<div
						:class="`card-${tag.type}`"
						v-for="(tag, i) in tags"
						:key="i"
					>
						<img :src="tag.icon" alt="Palitra Holding Company Tags" />
						<span>{{ tag.text }}</span>
					</div>
				</div>
				<div class="card-image-desktop" v-if="!props.vacancy_layout">
<!--					<img :src="palitral" alt="" />-->
					<a :href="'/company/' + props.card.company_id">
<!--			API GATISHULIA DROEBIT SURATZE			-->
<!--						<img :src="card.picture" alt="" class="image-show"/>-->
<!--						{{companyLogo }}-->
							<img :src='companyLogo' alt="Palitra Holding Companies" class="image-show"/>
					</a>
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
import { ref, computed } from 'vue';


const logoMap = {
	23: require('@/assets/palitra-logo/axali-ambebi.jpg'),
	15: require('@/assets/palitra-logo/gamomcemloba-lelo.jpg'),
	24: require('@/assets/palitra-logo/palitral.png'),
	26: require('@/assets/palitra-logo/adline.png'),
	8: require('@/assets/palitra-logo/elvamarket.png'),
	36: require('@/assets/palitra-logo/winepack.png'),
	14: require('@/assets/palitra-logo/interlogistic.png'),
	// 44: require('@/assets/palitra-logo/'),xcopmany
	// 47: require('@/assets/palitra-logo/adline.png'),ekodevelopment
	13: require('@/assets/palitra-logo/colorgroup-colorpress.png'),
	// 48: require('@/assets/palitra-logo/'),litbox
	// 45: require('@/assets/palitra-logo/'),mziani veli
	// 49: require('@/assets/palitra-logo/adline.png'),niusrumi 2
	// 46: require('@/assets/palitra-logo/adline.png'),specmontaji
	12: require('@/assets/palitra-logo/colorgroup-colorpress.png'),
	10: require('@/assets/palitra-logo/logisticcenter.png'),
	27: require('@/assets/palitra-logo/mediakvirispalitra.png'),
	9: require('@/assets/palitra-logo/merkuri.png'),
	42: require('@/assets/palitra-logo/new_pack.jpeg'),
	43: require('@/assets/palitra-logo/new_print.jpeg'),
	22: require('@/assets/palitra-logo/news_room.png'),
	21: require('@/assets/palitra-logo/palitra_news.png'),
	37: require('@/assets/palitra-logo/palitra_studio.png'),
	18: require('@/assets/palitra-logo/palitraholding.png'),
	35: require('@/assets/palitra-logo/printarea.png'),
	40: require('@/assets/palitra-logo/radio_bomond.png'),
	20: require('@/assets/palitra-logo/radio_palitra.png'),
	19: require('@/assets/palitra-logo/reshenal_solution_hotsale.png'),
	16: require('@/assets/palitra-logo/samartlisjgufi.png'),
	32: require('@/assets/palitra-logo/saswavlocentripalitra.png'),
	25: require('@/assets/palitra-logo/saqmege.png'),
	39: require('@/assets/palitra-logo/translatege.png'),
	41: require('@/assets/palitra-logo/favoritistili.png'),
	17: require('@/assets/palitra-logo/fasadi.png'),
	38: require('@/assets/palitra-logo/flyge.png'),
	11: require('@/assets/palitra-logo/geopaperjep.png'),
	1: require('@/assets/palitra-logo/kriala.jpeg'),
};

const companyLogo = computed(() => {
  return logoMap[props.card.company_id];
});

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
		text: props.card.time_shift,
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
@media only screen and (max-width: 600px) {

	margin: 0px 11px}
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
.image-show{
	max-height: 64px;
	max-width: 64px;
}
</style>
