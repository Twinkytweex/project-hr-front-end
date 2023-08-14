<template>
	<Header> </Header>
	<router-view />
	<ScrollUp />
	<Footer />
</template>

<script setup>
	import Header from '@/components/home/Header.vue';
	import Footer from '@/components/home/Footer.vue';
	import ScrollUp from '@/components/ScrollUp.vue';
</script>

<style></style>
