<template>
	<div>
		<img
			:class="state.scroll ? `up-down-svg up-down-svg-active` : `up-down-svg`"
			@click="handleScrollUp"
			:src="scrolUp"
			alt=""
		/>
	</div>
</template>

<script setup>
	import { reactive, onBeforeMount } from 'vue';
	import scrolUp from '@/assets/images/static/scrolUp.svg';
	const state = reactive({
		scroll: false,
		handleScroll() {
			if (document.documentElement.scrollTop >= 200) {
				state.scroll = true;
				return;
			}
			state.scroll = false;
		},
	});

	function handleScrollUp() {
		// document.body.scrollTop = document.documentElement.scrollTop = 0;
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

	onBeforeMount(() => window.addEventListener('scroll', state.handleScroll));
</script>

<style scoped lang="scss">
	.up-down-svg {
		cursor: pointer;
		position: fixed;
		bottom: 50px;
		right: 50px;
		z-index: 20;
		visibility: hidden;
		transition: visibility 0.4s ease, opacity 0.4s ease;
		&-active {
			opacity: 1;
			visibility: visible;
			z-index: 9;
		}
	}
	.display-none {
		display: none;
	}
	@media (max-width: 1080px) {
		.up-down-svg {
			display: none;
		}
	}
</style>
