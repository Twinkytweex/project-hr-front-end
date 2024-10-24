<template>
	<div class="company-page container">
		<img
			class="company-page-img"
			v-if="vacancy.length > 0"
			:src="vacancy[vacancy.length - 1].picture"
			:alt="vacancy[vacancy.length - 1].company_name"
		/>
		<p class="company-page-p" v-if="vacancy.length > 0">
			{{ vacancy[vacancy.length - 1].company_description }}
		</p>


		<div class="card-comp company-card" v-for="item in vacancy" :key="item">
			<div class="card-title">
				<span class="card-action-title">{{ item.title_name }}</span>
				<div class="card-action" v-if="!props.vacancy_layout">
					<a :href="'/form/' + item.job_id">
						<span class="card-action-title action-font">შეავსე განაცხადი <img :src="arrow" alt=""/></span>
					</a>
				</div>
				<span class="card-action-logo">
					<img class="card-action-logo-img" :src="palitral" alt="" />
				</span>
				<span class="card-action-logo-vac" v-if="props.vacancy_layout">
					<img :src="palitral" alt="" />
				</span>
			</div>
			<div class="card-date">აქტიურია: {{item.vacancy_expiration_date}}</div>
			<div class="card-bottom">
				<div class="card-tags">
					<div
						:class="`card-${tag.type}`"
						v-for="(tag, i) in tags"
						:key="i">
						<img :src="tag.icon" alt="" />
						<span>{{ tag.text }}</span>
					</div>
				</div>
				<div class="card-image-desktop" v-if="!props.vacancy_layout">
					<img :src="item.picture" alt="" class="image-show"/>
					<!-- <img :src="testimg" alt="" /> -->
				</div>
			</div>
		</div>

		<AddYourself :button="button" />
	</div>
</template>

<script setup>
import palitral from '@/assets/images/logos/palitral.svg';
import time from '@/assets/images/static/time.svg';
import location from '@/assets/images/static/location.svg';
import arrow from '@/assets/images/static/arrow.svg';
// import testimg from '@/assets/images/logos/testimg.jpeg';
import { defineProps } from 'vue';
import {  onMounted, ref, watch } from 'vue';
import AddYourself from '@/components/home/AddYourself.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

// Props definition
const props = defineProps({
	vacancy_layout: {
		card: 1,
		type: Boolean,
		default: false
	},
	carding: {
		card: 2,
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

// Route setup
const route = useRoute();
const vacancy = ref({});

// Watch for route changes to ensure `id` is available
watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      fetchData(Number(newId));
    }
  },
  { immediate: true }
);

// Computed property for the card
// const card = computed(() => {
// 	return {
// 		id: route.params.id,
// 		title_name: vacancy.value.title_name,
// 		work_experience: vacancy.value.work_experience,
// 		required_knowledge: vacancy.value.required_knowledge,
// 		required_skills: vacancy.value.required_skills,
// 		main_duty: vacancy.value.main_duty,
// 		bonus: vacancy.value.bonus,
// 		wage_net: vacancy.value.wage_net,
// 		wage_agreed: vacancy.value.wage_agreement,
// 		time_shift: vacancy.value.time_shift,
// 		working_hours: vacancy.value.working_hours,
// 		company_id: vacancy.value.company_id,
// 		job_id: vacancy.value.id
// 	};
// });

// Fetch data based on the ID
async function fetchData() {
	try {
		// Fetch all vacancies from the API
		// const response = await axios.get('http://172.18.0.1:8069/show_vacancies');
		const response = await axios.get('http://hr.palitra.ge/show_vacancies');

		// Get company_id from route params
		const companyId = Number(route.params.id);

		// Filter the vacancies that belong to the specified company ID
		const foundItems = response.data.filter(item => Number(item.company_id) === companyId);

		if (foundItems.length > 0) {
			// Populate vacancy with the details of all matching items
			vacancy.value = foundItems.map(foundItem => ({
				work_experience: foundItem.work_experience,
				required_knowledge: foundItem.required_knowledge,
				required_skills: foundItem.required_skills,
				main_duty: foundItem.main_duty,
				bonus: foundItem.bonus,
				wage_net: foundItem.wage_net,
				wage_agreement: foundItem.wage_agreement,
				time_shift: foundItem.time_shift,
				working_hours: foundItem.working_hours,
				title_name: foundItem.title_name,
				company_id: foundItem.company_id,
				job_id:foundItem.id,
				vacancy_expiration_date: foundItem.recruting_end_date,
				picture: foundItem.picture,
				company_name: foundItem.company_name,
				company_description: foundItem.company_description,
			}));

			console.log('Vacancies for company_id:', companyId, vacancy.value);
		} else {
			console.error('No vacancies found for company_id:', companyId);
		}
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}


// Call fetchData when the component is mounted, if the id is available
onMounted(() => {
	if (route.params.id) {
		fetchData(Number(route.params.id));
	}
});
</script>

<style lang="scss">
.comapnay-page {
	display: flex;
	align-items: center;
	flex-direction: column;
}
.company-page-img {
	max-width: 100px;
	margin-bottom: 32px;
}
.company-page-p {
	font-family: var(--font-DejaVu);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 200%;
	text-align: justify;
	margin-bottom: 32px;
}
.company-card {
	margin-bottom: 24px;
}
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
