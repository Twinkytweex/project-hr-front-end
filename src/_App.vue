<template>

<!-- <Header /> -->

<button @click="onChange">Change</button>

	<component :is="component"></component>

		<!-- <router-view /> -->

		
		<!-- <HomeView />
		<ScrollUp />

		<Vacancy />
		<Form />
		<Success /> -->
		<!-- <LeaveForm /> -->

		<!-- <Footer /> -->



</template>

<script setup>
	import { ref } from 'vue';

	import Header from '@/components/home/Header.vue';
	import Footer from '@/components/home/Footer.vue';
	const component = ref(Header)
	let name = "header"

	function onChange() {
		if (name == "header") {
			component.value = Footer
			name = "footer"
		} else {
			component.value = Header
			name = "header"
		}

	}


	// import HomeView from '@/views/HomeView.vue';
	// import ScrollUp from '@/components/ScrollUp.vue';
	// import Vacancy from '@/components/Vacancy.vue';
	// import Form from '@/components/Form.vue';
	// import Success from '@/components/Success.vue';
	// import LeaveForm from '@/components/LeaveForm.vue';
</script>

<style></style>
