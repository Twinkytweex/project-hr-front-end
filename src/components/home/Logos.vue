<!--<template>-->
<!--	<div class="container">-->
<!--		<div class="logos-comp">-->
<!--			<a href="#url" v-for="(logo, i) in logos" :key="i">-->
<!--				<img :src="logo.picture" alt="" class="carousel-images"/>-->
<!--			</a>-->
<!--		</div>-->
<!--	</div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { onMounted, ref } from 'vue';-->
<!--import axios from 'axios';-->

<!--const logos = ref([]);-->

<!--async function fetchData() {-->
<!--	try {-->
<!--		const response = await axios.get('http://127.0.0.1:8069/show_company_img');-->
<!--		// const response = await axios.get('http://192.168.0.106:8069/show_company_img');-->
<!--		// const response = await axios.get('http://192.168.120.6/show_company_img');-->
<!--		logos.value = response.data;-->
<!--		console.log('gamovida?', logos)-->
<!--	} catch (error) {-->
<!--		console.error('Error fetching data:', error);-->
<!--	}-->
<!--}-->

<!--// Call fetchData when the component is mounted-->
<!--onMounted(fetchData);-->
<!--</script>-->
<template>
	<div class="container">
		<div class="logos-comp">
			<div class="logo-wrapper">
				<!-- First set of logos -->
				<a href="#url" v-for="(logo, i) in logos" :key="i">
					<img :src="logo.icon" alt="" class="carousel-images" />
				</a>
				<!-- Duplicate set of logos for seamless scrolling -->
				<a href="#url" v-for="(logo, i) in logos" :key="'dup-' + i">
					<img :src="logo.icon" alt="" class="carousel-images" />
				</a>
			</div>
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

<style scoped>
/* Keyframes for smooth, continuous scroll */
@keyframes horizontal-scroll {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(10%);
	}
}

.logos-comp {
	overflow: hidden;
	white-space: nowrap;
	width: 100%; /* Set width of container */
}

.logo-wrapper {
	display: flex;
	gap: 25px;
	animation: horizontal-scroll 20s linear infinite;
	width: 200%; /* Keeps the wrapper width adaptive to content */
}

.carousel-images {
	max-height: 64px;
	max-width: 64px;
	display: inline-block;
}
</style>
