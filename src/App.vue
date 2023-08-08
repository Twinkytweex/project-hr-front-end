<template>
	<div>
		<HomeView />
		<ScrollUp />
		<Footer />
		<Vacancy />
		<Form />
		<Success />
		<LeaveForm />
	</div>
</template>

<script setup>
	import Footer from '@/components/home/Footer';
	import HomeView from '@/views/HomeView.vue';
	import ScrollUp from '@/components/ScrollUp.vue';
	import Vacancy from '@/components/Vacancy.vue';
	import Form from '@/components/Form.vue';
	import Success from '@/components/Success.vue';
	import LeaveForm from '@/components/LeaveForm.vue';
</script>

<style></style>
