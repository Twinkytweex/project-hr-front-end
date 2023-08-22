<template>
	<Vacancy> </Vacancy>
	<Form v-if="!isMobile || displayVacancyForm"></Form>
</template>

<script setup>
import Vacancy from '@/components/Vacancy.vue';
import Form from '@/components/Form.vue';
import { useRoute } from 'vue-router';
import { onBeforeMount } from 'vue';
import { isMobile, displayVacancyForm } from '@/store';
const route = useRoute();

onBeforeMount(() => {
	// fetch card
	console.log(route.params.id);
});
</script>

<style></style>
