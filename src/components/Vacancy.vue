<template>
	<div class="container">
		<div class="vacancy-comp">
			<div class="vacancy-header">
				<BackToPage v-if="!isMobile">
					მიმდინარე ვაკანსიებზე დაბრუნება
				</BackToPage>
				<Button class="not-mobile" icon="fill" @click="fillForm"
					>განაცხადის შევსება
				</Button>
			</div>
			<div class="line"></div>
			<Card vacancy_layout :card="card" />
			<div class="vacancy-description">
				"გამომცემლობა პალიტრა L" "პალიტრა ჰოლდინგის" შვილობილი
				კომპანიაა, რომელიც 2005 წელს დაარსდა და დღეს ქართულ საგამომცემლო
				სივრცეში ყველაზე დიდ და წარმატებულ გამომცემლობას
				წარმოადგენს.გამომცემლობა ორიენტირებულია ხარისხსა და სიახლეებზე.
				ჩვენ მკითხველს ჟანრობრივად მრავალფეროვან ლიტერატურას, საკითხავის
				უდიდეს პალიტრას ვთავაზობთ. კლასიკურ ლიტერატურასთან ერთად,
				აქტიურად გამოვცემთ თანამედროვე უცხოური პროზის თარგმანებს,
				საბავშვო ლიტერატურას, ვცდილობთ, მაქსიმალურად ახლოს ვიყოთ ქართველ
				მკითხველთან, მივცეთ საშუალება, თავად ჩაერთოს წიგნის შერჩევასა და
				საგამომცემლო პროცესში, იკითხოს მხოლოდ საუკეთესო.
			</div>

			<div class="vacancy-conditions">
				<span class="vacancy-actions">მოვალეობები</span>
				<ul>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
				</ul>
				<span class="vacancy-actions vacancy-requests">მოთხოვნები</span>
				<ul>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
				</ul>
				<span class="vacancy-actions vacancy-condit">პირობები</span>
				<ul>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
					<li>ციფრული დიზაინის შექმნა</li>
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
import Card from '@/components/home/Card.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { isMobile, displayVacancyForm } from '@/store';

const route = useRoute();

const card = computed(() => {
	return {
		id: route.params.id
	};
});

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
