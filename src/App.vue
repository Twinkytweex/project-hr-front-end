<template>
	<Header> </Header>
	<router-view />
	<ScrollUp />
	<!-- <v-pagination
		containerClass="pagination"
		:pageRange="10"
		:pageCount="Math.ceil(500 / 30)"
		:clickHandler="pagiHandler"
		:selectedPage="pageQuery"
	/> -->
	<Footer />
</template>

<script setup>
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import ScrollUp from '@/components/ScrollUp.vue';
</script>

<style></style>
