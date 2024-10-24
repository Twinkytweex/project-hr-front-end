<template>
<div></div>
	<Header> </Header>
	<router-view />
	<ScrollUp />
<!-- გვერდები -->
	<v-pagination
		containerClass="pagination"
		:pageRange="7"
		:pageCount="1"
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
import { onMounted, ref } from 'vue';
import axios from 'axios';

if (HTMLScriptElement.supports?.("importmap")) {
	console.log("Browser supports import maps.");
}

const pages = ref([]);

async function fetchData() {
	try {
		// const response = await axios.get('http://127.0.0.1:8069/show_company_img');
		// const response = await axios.get('http://192.168.0.106:8069/show_company_img');
		// const response = await axios.get('http://192.168.120.6/show_company_img');
		// const response = await axios.get('http://172.18.0.1:8069/show_company_img');
		const response = await axios.get('https://hr.palitra.ge/show_company_img');
		pages.value = response.data;
		console.log('APP SUCCESS', pages)
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

onMounted(fetchData);

</script>

<style></style>
