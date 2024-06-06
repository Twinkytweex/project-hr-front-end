<template>
<div></div>
	<Header> </Header>
	<router-view />
	<ScrollUp />
<!-- გვერდები -->
	<v-pagination
		containerClass="pagination"
		:pageRange="7"
		:pageCount="Math.ceil(9 / 2)"
		:clickHandler="pagiHandler"
		:selectedPage="pageQuery"
	/>
 <Footer />
<!--  Page Counter	-->


</template>

<script setup>

import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import ScrollUp from '@/components/ScrollUp.vue';
// import { computed, onMounted, ref } from 'vue';
// import axios from 'axios';
// import { isMobile } from '@/store';

if (HTMLScriptElement.supports?.("importmap")) {
	console.log("Browser supports import maps.");
}

// const card = computed(() => {
// 	return {
// 		pageNumber: vacancy.value.pageNumber,
// 	};
// });

// const vacancy = ref({});
// async function fetchData() {
//     try {
//         const response = await axios.get('http://192.168.0.104:8069/show_vacancies');
// 		const filteredData = response.data;
//
// 		vacancy.value = {
// 			pageNumber: filteredData.page_number,
// 		};
// 		console.log(filteredData.page_number)
//
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
//
//
// onMounted(fetchData);

</script>

<style></style>
