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
<!--dzveli-->
<!--<template>-->
<!--	<Card v-for="(card, i) in cards" :card="card" :key="i" />-->
<!--	<AddYourself :button="button"/>-->
<!--	<Logos />-->
<!--</template>-->

<!--<script setup>-->
<!--import axios from 'axios';-->
<!--import Card from '@/components/home/Card.vue';-->
<!--import AddYourself from '@/components/home/AddYourself.vue';-->
<!--import Logos from '@/components/home/Logos.vue';-->

<!--import { ref, onMounted } from 'vue';-->

<!--// Define a ref to hold the cards data-->
<!--const cards = ref([]);-->

<!--// Function to fetch data from the API-->
<!--async function fetchData() {-->
<!--	try {-->
<!--		// const response = await axios.get('http://127.0.0.1:8069/show_vacancies');-->
<!--		// const response = await axios.get('http://192.168.0.106:8069/show_vacancies');-->
<!--		// const response = await axios.get('http://192.168.120.6/show_vacancies');-->
<!--		const response = await axios.get('http://172.18.0.1:8069/show_vacancies');-->
<!--		// const response = await axios.get('https://hr.palitra.ge/show_vacancies');-->
<!--		cards.value = response.data;-->
<!--		console.log(response.data)-->
<!--		console.log('CARDS',cards)-->
<!--		// vacancy.value = response.data;-->
<!--		console.log('HOME VIEW SUCCESS')-->
<!--	} catch (error) {-->
<!--		console.error('Error fetching data:', error);-->
<!--	}-->
<!--}-->

<!--// Call fetchData when the component is mounted-->
<!--onMounted(fetchData);-->
<!--</script>-->

<!--<style></style>-->
<!--satesto-->



<!-- homeview.vue -->
<template>
	<HeaderComponent @search-updated="updateSearchTerm" />
	<Card v-for="(card, i) in filteredCards" :card="card" :key="i" />
	<AddYourself :button="button"/>
	<Logos />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import Card from '@/components/home/Card.vue';
import AddYourself from '@/components/home/AddYourself.vue';
import Logos from '@/components/home/Logos.vue';
import HeaderComponent from '@/components/home/Header.vue';

const cards = ref([]);
const searchTerm = ref('');

// Fetch vacancy data
async function fetchData() {
	try {
		// const response = await axios.get('http://172.18.0.1:8069/show_vacancies');
		const response = await axios.get('https://hr.palitra.ge/show_vacancies');
		cards.value = response.data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

// Call fetchData when the component is mounted
onMounted(fetchData);

// Update search term from header
function updateSearchTerm(term) {
	searchTerm.value = term;
}

// Filter cards based on search term
const filteredCards = computed(() => {
	return cards.value.filter(card =>
		searchTerm.value === '' || card.title_name.toLowerCase().includes(searchTerm.value.toLowerCase())
	);
});
</script>
