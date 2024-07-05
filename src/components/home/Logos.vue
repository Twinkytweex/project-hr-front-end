<template>
	<div class="container">
		<div class="logos-comp">
			<a href="#url" v-for="(logo, i) in logos" :key="i">
				<img :src="logo.picture" alt="" class="carousel-images"/>
			</a>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';

const logos = ref([]);

async function fetchData() {
	try {
		// const response = await axios.get('http://192.168.0.106:8069/show_company_img');
		const response = await axios.get('http://192.168.120.6/show_company_img');
		logos.value = response.data;
		console.log('gamovida?', logos)
	} catch (error) {
		console.error('Error fetching data:', error);
	}
}

// Call fetchData when the component is mounted
onMounted(fetchData);
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

	//animation-name: animation-css;
	//animation-duration: 3s;
	//animation-direction: alternate;
	//animation-iteration-count: infinite;
}
.carousel-images{
	max-height: 64px;
	max-width: 64px;
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
