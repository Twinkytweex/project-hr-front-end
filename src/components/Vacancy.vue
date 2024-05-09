<template>
	<div class="container">
		<div class="vacancy-comp">
			<div class="vacancy-header">
				<BackToPage v-if="!isMobile">
					მიმდინარე ვაკანსიებზე დაბრუნება
				</BackToPage>
				<Button class="not-mobile" icon="fill" @click="fillForm">
					განაცხადის შევსება
				</Button>
			</div>
			<div class="line"></div>
			<Card vacancy_layout :card="card" />
			<div class="vacancy-description">
				{{card.work_experience}}
			</div>

			<div class="vacancy-conditions">
				<span class="vacancy-actions">მოვალეობები</span>
				<ul>
					<li v-for="item in card.main_duty" :key="item">{{ item }}</li>
				</ul>
				<span class="vacancy-actions vacancy-requests">მოთხოვნები</span>
				<ul>
					<li v-for="item in card.required_skills" :key="item">{{ item }}</li>
				</ul>
				<span class="vacancy-actions vacancy-condit">პირობები</span>
				<ul>
					<li v-if="card.time_shift">{{card.time_shift}}</li>
					<li v-if="card.working_hours">{{card.working_hours}}</li>
					<li v-if="card.wage_net">ანაზღაურება {{card.wage_net}} ლარი</li>
					<li v-if="card.bonus">ბონუსი</li>
				</ul>
				<Button icon="fill" @click="fillForm">
					განაცხადის შევსება
				</Button>
			</div>
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import BackToPage from '@/components/BackToPage.vue';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { isMobile, displayVacancyForm } from '@/store';
import axios from 'axios';

const route = useRoute();

const card = computed(() => {
	return {
		id: route.params.id,
		work_experience: vacancy.value.work_experience,
		required_knowledge: vacancy.value.required_knowledge,
		required_skills: vacancy.value.required_skills,
		main_duty: vacancy.value.main_duty,
		bonus: vacancy.value.bonus,
		wage_net: vacancy.value.wage_net,
		time_shift: vacancy.value.time_shift,
		working_hours: vacancy.value.working_hours
	};
});

const vacancy = ref({});
async function fetchData(id) {
    try {
        const response = await axios.get('http://127.0.0.1:8069/show_vacancies');
        const filteredData = response.data;

        let foundItem = null;
        for (let i = 0; i < filteredData.length; i++) {
            if (String(filteredData[i].id) === id) {
				console.log(filteredData[i])
                foundItem = filteredData[i];
                break;
            }
        }
        if (foundItem) {
            vacancy.value = {
                work_experience: foundItem.work_experience,
                required_knowledge: foundItem.required_knowledge,
                required_skills: foundItem.required_skills,
                main_duty: foundItem.main_duty,
				bonus: foundItem.bonus,
				wage_net: foundItem.wage_net,
				time_shift: foundItem.time_shift,
				working_hours: foundItem.working_hours
            };
        } else {
            console.error('Vacancy with ID', id, 'not found');
        }

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Example usage:
fetchData(route.params.id);

// const {impData} = props;

const fillForm = () => {
	if (isMobile.value) {
		const vacancy_comp = document.querySelector('.vacancy-comp');
		vacancy_comp.style.display = 'none';
		displayVacancyForm.value = true;
	} else {
		const form_el = document.querySelector('.form-box');
		form_el.scrollIntoView();
	}
};
onMounted(fetchData);
</script>

<style lang="scss" scoped>
.vacancy-comp {
	padding: 34px 0px;
	border-radius: 12px;
	background: #fff;
	box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.02);
}
.vacancy-header {
	display: flex;
	justify-content: space-between;
	padding: 25px 38px;
	@media only screen and (max-width: 600px) {
		display: none;
		// padding: 25px 8px;
	}
	&-left {
		display: flex;
		align-items: center;
		justify-content: center;
		&-back {
			font-family: var(--font-DejaVu);
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
	.button {
		color: #fff;
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
			display: none;
		}
	}
}
.vacancy-description {
	color: #000;
	font-family: var(--font-DejaVu);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 200%; /* 32px */
	text-align: justify;
	padding: 42px 38px 56px;
	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
}
.vacancy-conditions {
	padding: 20px 38px;

	li {
		list-style-type: disc;
		color: #000;
		font-family: var(--font-DejaVu);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 200%; /* 32px */
		@media only screen and (max-width: 600px) {
			font-size: 14px;
		}
	}
	.vacancy-actions {
		color: #0063bf;
		font-family: var(--font-DejaVu);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
		}
	}
}
</style>
