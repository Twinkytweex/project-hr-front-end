<template>
	<v-pagination
		v-show="Math.ceil(props.count / props.perPage) > 1"
		containerClass="pagination"
		:pageRange="8"
		:clickHandler="pagiHandler"
		:pageCount="Math.ceil(props.count / props.perPage)"
		:selectedPage="currentPage"
	/>
</template>

<script setup lang="ts">
	import { computed } from 'vue';

	import { useRoute, useRouter } from 'vue-router';

	const props = defineProps({
		count: {
			type: Number,
			required: true,
		},
		perPage: {
			type: Number,
			default: 24,
		},
		onChange: {
			type: Function,
			required: true,
		},
	});

	const route = useRoute();
	const router = useRouter();

	const currentPage = computed(() =>
		Math.max(1, parseInt(route.query.page as string) || 1)
	);

	function pagiHandler(pageNum) {
		router.push({
			query: {
				...route.query,
				page: pageNum,
			},
		});
		return props.onChange(pageNum);
	}
</script>
