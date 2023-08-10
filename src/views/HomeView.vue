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
			id: 1,
			item: '',
		},
		{
			id: 2,
			item: '',
		},
		{
			id: 3,
			item: '',
		},
		{
			id: 4,
			item: '',
		},
		{
			id: 5,
			item: '',
		},
	]);
</script>

<style></style>
