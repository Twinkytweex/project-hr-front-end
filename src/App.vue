<template>
<div></div>
	<Header> </Header>
	<router-view />
	<ScrollUp />
<!-- გვერდები -->
	<v-pagination
		containerClass="pagination"
		:pageRange="7"
		:pageCount="Math.ceil(100 / 2)"
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
// import { isMobile } from '@/store';

if (HTMLScriptElement.supports?.("importmap")) {
	console.log("Browser supports import maps.");
}


 
</script>

<style></style>
