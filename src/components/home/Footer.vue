<template>
	<div class="container footer-comp">© Palitra Media Holding 2023.</div>
</template>

<script setup></script>

<style lang="scss" scoped>
	.footer-comp {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		// border-top: 0.4px solid #a3a3a3;
		background: #fcfcfc;
		padding-top: 76px;
		margin-top: 76px;
		margin-bottom: 20px;
		&::before {
			content: '';
			position: absolute;
			top: 0;
			width: 100vw;
			height: 100%;
			border-top: 0.4px solid #a3a3a3;
		}
	}
</style>
