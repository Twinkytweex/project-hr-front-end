<!--<template>-->
<!--	<div-->
<!--		class="header-comp container"-->
<!--		:class="{ 'header-mini': route.name != 'home' }"-->
<!--	>-->
<!--		<div class="header-logo">-->
<!--			<router-link to="/">-->
<!--				<img class="palitra-svg" :src="palitra" alt=""-->
<!--			/></router-link>-->
<!--		</div>-->
<!--		<div class="header-body">-->
<!--			<BackToPage v-if="route.name != 'home' && isMobile">-->
<!--				მიმდინარე ვაკანსიებზე დაბრუნება-->
<!--			</BackToPage>-->
<!--			<div class="header-title">-->
<!--				დასაქმდი პალიტრა ჰოლდინგში, <br />-->
<!--				შემოუერთდი ჩვენს გუნდს და გახდი დიდი ოჯახის წევრი!-->
<!--			</div>-->

<!--			<div class="input-cont">-->
<!--				<img :src="searchButton" alt="" />-->
<!--				<input type="text" name="" placeholder="" id="" />-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { useRoute } from 'vue-router';-->
<!--import searchButton from '@/assets/images/searchButton.svg';-->
<!--import palitra from '@/assets/images/logos/palitra.svg';-->
<!--import BackToPage from '@/components/BackToPage.vue';-->
<!--import { isMobile } from '@/store';-->

<!--const route = useRoute();-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--.header-logo {-->
<!--	padding: 20px 8px;-->
<!--}-->

<!--.header-mini {-->
<!--	.header-title,-->
<!--	.input-cont {-->
<!--		display: none;-->
<!--	}-->
<!--}-->

<!--.header-body {-->
<!--	position: relative;-->
<!--	padding: 60px 30px;-->
<!--	display: flex;-->
<!--	flex-direction: column;-->
<!--	align-items: center;-->
<!--	gap: 64px;-->
<!--	isolation: isolate;-->
<!--	margin-bottom: 55px;-->
<!--	background-image: url('@/assets/images/mainImg.svg');-->
<!--	@media only screen and (max-width: 600px) {-->
<!--		padding: 29px 15px;-->
<!--		margin-bottom: 32px;-->
<!--		gap: 32px;-->
<!--	}-->
<!--	&::before {-->
<!--		content: '';-->
<!--		position: absolute;-->
<!--		top: 0;-->
<!--		left: calc(50% - 50vw);-->
<!--		z-index: -1;-->
<!--		width: 100vw;-->
<!--		height: 100%;-->
<!--		background-color: rgba(233, 245, 253, 0.92);-->
<!--	}-->
<!--}-->

<!--.header-title {-->
<!--	color: #000;-->
<!--	text-align: center;-->
<!--	font-family: var(&#45;&#45;font-NiNo-MkeDrUli);-->
<!--	font-size: 32px;-->
<!--	font-style: normal;-->
<!--	font-weight: 400;-->
<!--	line-height: 50px;-->
<!--	@media only screen and (max-width: 600px) {-->
<!--		font-size: 16px;-->
<!--		line-height: 155.953%; /* 24.952px */-->
<!--	}-->
<!--}-->

<!--.input-cont {-->
<!--	max-width: 920px;-->
<!--	width: 100%;-->
<!--	position: relative;-->

<!--	input {-->
<!--		box-sizing: border-box;-->
<!--		border: none;-->
<!--		width: 100%;-->
<!--		border-radius: 30px;-->
<!--		padding: 15px 58px 15px 32px;-->
<!--		font-size: 1.25rem;-->
<!--		outline: none;-->
<!--		@media only screen and (max-width: 600px) {-->
<!--			font-size: 0.8rem;-->
<!--		}-->

<!--		&:focus,-->
<!--		&:hover {-->
<!--			box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);-->
<!--		}-->
<!--	}-->
<!--	img {-->
<!--		position: absolute;-->
<!--		margin: auto;-->
<!--		top: 0;-->
<!--		bottom: 0;-->
<!--		right: 8px;-->
<!--	}-->
<!--}-->
<!--</style>-->


<!--AQEDANA SATESTO-->
<!-- header.vue -->
<template>
	<div
		class="header-comp container"
		:class="{ 'header-mini': route.name != 'home' }"
	>
		<div class="header-logo">
			<router-link to="/">
				<img class="palitra-svg" :src="palitra" alt="" />
			</router-link>
		</div>
		<div class="header-body">
			<BackToPage v-if="route.name != 'home' && isMobile">
				მიმდინარე ვაკანსიებზე დაბრუნება
			</BackToPage>
			<div class="header-title">
				დასაქმდი პალიტრა ჰოლდინგში, <br />
				შემოუერთდი ჩვენს გუნდს და გახდი დიდი ოჯახის წევრი!
			</div>
			<div class="input-cont">
				<img :src="searchButton" alt="" />
				<input type="text" v-model="searchTerm" placeholder="ძიება..." />
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue';
import { useRoute } from 'vue-router';
import searchButton from '@/assets/images/searchButton.svg';
import palitra from '@/assets/images/logos/palitra.svg';
import BackToPage from '@/components/BackToPage.vue';
import { isMobile } from '@/store';

// Set up emit
const emit = defineEmits(['search-updated']);

const route = useRoute();
const searchTerm = ref('');

// Emit search term to parent on change
watch(searchTerm, (newTerm) => {
	console.log('imushava saertod?')
	emit('search-updated', newTerm);
});
</script>

<style lang="scss" scoped>
.header-logo {
	padding: 20px 8px;
}

.header-mini {
	.header-title,
	.input-cont {
		display: none;
	}
}

.header-body {
	position: relative;
	padding: 60px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
	isolation: isolate;
	margin-bottom: 55px;
	background-image: url('@/assets/images/mainImg.svg');
	@media only screen and (max-width: 600px) {
		padding: 29px 15px;
		margin-bottom: 32px;
		gap: 32px;
	}
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: calc(50% - 50vw);
		z-index: -1;
		width: 100vw;
		height: 100%;
		background-color: rgba(233, 245, 253, 0.92);
	}
}

.header-title {
	color: #000;
	text-align: center;
	font-family: var(--font-NiNo-MkeDrUli);
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: 50px;
	@media only screen and (max-width: 600px) {
		font-size: 16px;
		line-height: 155.953%; /* 24.952px */
	}
}

.input-cont {
	max-width: 920px;
	width: 100%;
	position: relative;

	input {
		box-sizing: border-box;
		border: none;
		width: 100%;
		border-radius: 30px;
		padding: 15px 58px 15px 32px;
		font-size: 1.25rem;
		outline: none;
		@media only screen and (max-width: 600px) {
			font-size: 0.8rem;
		}

		&:focus,
		&:hover {
			box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.04);
		}
	}
	img {
		position: absolute;
		margin: auto;
		top: 0;
		bottom: 0;
		right: 8px;
	}
}
</style>