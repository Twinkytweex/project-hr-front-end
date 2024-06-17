<!--<template>-->
<!--	<Card v-for="(card, i) in cards" :card="card" :key="i" />-->
<!--	<AddYourself :button="button" />-->
<!--	<Logos />-->
<!--</template>-->

<!--<script setup>-->
<!--	import Card from '@/components/home/Card.vue';-->
<!--	import AddYourself from '@/components/home/AddYourself.vue';-->
<!--	import Logos from '@/components/home/Logos.vue';-->

<!--	import { ref } from 'vue';-->
<!--	const cards = ref([-->
<!--		{-->
<!--			id: 1,-->
<!--			item: '',-->
<!--		},-->
<!--		{-->
<!--			id: 2,-->
<!--			item: '',-->
<!--		},-->
<!--		{-->
<!--			id: 3,-->
<!--			item: '',-->
<!--		},-->
<!--		{-->
<!--			id: 4,-->
<!--			item: '',-->
<!--		},-->
<!--		{-->
<!--			id: 5,-->
<!--			item: '',-->
<!--		},-->
<!--	]);-->
<!--</script>-->

<!--<style></style>-->

<template>
	<Card v-for="(card, i) in cards" :card="card" :key="i" />
	<AddYourself :button="button"/>
	<Logos />
</template>

<script setup>
import axios from 'axios';
import Card from '@/components/home/Card.vue';
import AddYourself from '@/components/home/AddYourself.vue';
import Logos from '@/components/home/Logos.vue';

import { ref, onMounted } from 'vue';

// Define a ref to hold the cards data
const cards = ref([]);

// Function to fetch data from the API
async function fetchData() {
	try {
		// const response = await axios.get('http://127.0.0.1:8069/show_vacancies');
		// const response = await axios.get('http://192.168.0.104:8069/show_vacancies');
		const response = await axios.get('http://192.168.120.6/show_vacancies');
		cards.value = response.data;
		// vacancy.value = response.data;

	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

// Call fetchData when the component is mounted
onMounted(fetchData);
</script>

<style></style>
