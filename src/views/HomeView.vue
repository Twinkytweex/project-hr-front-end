<template>
	<Card v-for="(card, i) in cards" :card="card" :key="i" />
	<AddYourself />
	<Logos />
</template>

<script setup>
	
	import Card from '@/components/home/Card.vue';
	import AddYourself from '@/components/home/AddYourself.vue';
	import Logos from '@/components/home/Logos.vue';
	

	import { ref } from 'vue';
	const cards = ref([
		{
			id: 156,
			item: '',
		},
		{
			id: 23,
			item: '',
		},
		{
			id: 44,
			item: '',
		},
		{
			id: 45,
			item: '',
		},
		{
			id: 78,
			item: '',
		},
	]);
</script>

<style></style>
