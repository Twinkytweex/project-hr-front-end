<template>
	<div class="logos-comp container">
		<img :src="printarea" alt="" />
		<img :src="biblusi" alt="" />
		<img :src="palital" alt="" />
		<img :src="radiopalitra" alt="" />
		<img :src="flyge" alt="" />
		<img :src="hotsale" alt="" />
	</div>
</template>

<script setup>
	import printarea from '@/assets/images/logos/printarea.svg';
	import biblusi from '@/assets/images/logos/biblusi.svg';
	import palital from '@/assets/images/logos/palitral.svg';
	import radiopalitra from '@/assets/images/logos/radiopalitra.svg';
	import flyge from '@/assets/images/logos/flyge.svg';
	import hotsale from '@/assets/images/logos/hotsale.svg';
</script>

<style lang="scss" scoped>
	.logos-comp {
		display: flex;
		justify-content: space-between;
		align-items: center;
		@media only screen and (max-width: 600px) {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr 1fr;
			gap: 20px;
			padding: 0px 8px;
		}
		img {
			@media only screen and (max-width: 600px) {
				max-width: 50px;
			}
		}
	}
</style>
