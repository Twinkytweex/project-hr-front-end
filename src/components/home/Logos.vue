<template>
	<div class="container">
		<div class="logos-comp">
			<a href="#url" v-for="(logo, i) in logos" :key="i">
				<img :src="logo.icon" alt="" />
			</a>
		</div>
	</div>
</template>
<script setup>
import printarea from '@/assets/images/logos/printarea.svg';
import biblusi from '@/assets/images/logos/biblusi.svg';
import palital from '@/assets/images/logos/palitral.svg';
import radiopalitra from '@/assets/images/logos/radiopalitra.svg';
import flyge from '@/assets/images/logos/flyge.svg';
import hotsale from '@/assets/images/logos/hotsale.svg';
import { ref } from 'vue';

const logos = ref([
	{
		icon: printarea
	},
	{
		icon: biblusi
	},
	{
		icon: palital
	},
	{
		icon: radiopalitra
	},
	{
		icon: flyge
	},
	{
		icon: hotsale
	},
	{
		icon: printarea
	},
	{
		icon: biblusi
	},
	{
		icon: palital
	},
	{
		icon: radiopalitra
	},
	{
		icon: flyge
	},
	{
		icon: hotsale
	},
	{
		icon: printarea
	},
	{
		icon: biblusi
	},
	{
		icon: palital
	},
	{
		icon: radiopalitra
	},
	{
		icon: flyge
	},
	{
		icon: hotsale
	}
]);
</script>

<style lang="scss" scoped>
// animation cycle
// animation-direction: alternate;
// animation-iteration-count: infinite;
// @keyframes animation-css {
// 	from {
// 		transform: translate(0px, 0px);
// 	}
// 	25% {
// 	}
// 	50% {
// 	}
// 	to {
// 		transform: translate(100px, 100px);
// 	}
// }
.logos-comp {
	display: flex;
	gap: 25px;
	overflow-x: auto;
	// animation-name: animation-css;
	// animation-duration: 3s;
	// animation-direction: alternate;
	// animation-iteration-count: infinite;
}
// .logos-comp {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	@media only screen and (max-width: 600px) {
// 		display: grid;
// 		grid-template-columns: 1fr 1fr 1fr 1fr;
// 		gap: 20px;
// 		padding: 0px 8px;
// 	}
// 	img {
// 		@media only screen and (max-width: 600px) {
// 			max-width: 50px;
// 		}
// 	}
// }
</style>
