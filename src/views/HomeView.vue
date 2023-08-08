<template>
	<Header />
	<Card v-for="(card, i) in cards" :key="i" />
	<AddYourself />
	<Logos />

	
</template>

<script setup>
	import Header from '@/components/home/Header.vue';
	import Card from '@/components/home/Card.vue';
	import AddYourself from '@/components/home/AddYourself.vue';
	import Logos from '@/components/home/Logos.vue';

	import { ref } from 'vue';
	const cards = ref([
		{
			item: '',
		},
		{
			item: '',
		},
		{
			item: '',
		},
		{
			item: '',
		},
		{
			item: '',
		},
	]);
</script>

<style></style>
