<template>
	<div class="container">
		<div class="leave-form-comp">
			<div class="leave-form-inner">
				<BackToPage> მიმდინარე ვაკანსიებზე დაბრუნება </BackToPage>
				<Button icon="fill">განაცხადის შევსება </Button>
			</div>
			<div class="line"></div>
			<div class="leave-form-text">
				<span class="leave-ques"
					>ვერ იპოვე შენი შესაბამისი განცხადება? </span
				><br />
				<span class="leave-ques"> არაუშავს, დაგვიტოვე რეზიუმე! </span
				><br />
				<div class="leave-text">
					პალიტრა ჰოლდინგი მრავალფეროვან კომპანიებს აერთიანებს, ასე
					რომ შენი ადგილის მოძებნა ჩვენთან არ გაგიჭირდება.<br />

					ჩვენ ყოველთვის ვაფასებთ განვითარებაზე ორიენტირებულ,
					მიზანდასახულსა და შრომისმოყვარე ადამიანებს. <br />თუ ფიქრობ,
					რომ ამ კრიტერიუმებს აკმაყოფილებ, გაბედდე და დატოვე შენი
					რეზიუმე. ჩვენი რეკრუტერები აუცილებლად დაგიკავშირდებიან
					შესაფერისი ვაკანსიის გამოჩენისთანავე.<br />
				</div>
				<div class="leave-our">ჩვენი კომპანიები:</div>
				<Logos />
			</div>
		</div>
	</div>
	<Form />
</template>

<script setup>
import Button from '@/components/Button.vue';
import Logos from '@/components/home/Logos.vue';
import Form from '@/components/Form.vue';

import BackToPage from '@/components/BackToPage.vue';
</script>

<style lang="scss" scoped>
.leave-form-comp {
	border-radius: 12px;
	background: #fff;
	border: 0.5px solid #e9ebee;
	padding-bottom: 100px;

	margin-bottom: 36px;
	height: 638px;
	@media only screen and (max-width: 600px) {
		height: unset;
	}
}

.leave-form-inner {
	display: flex;
	justify-content: space-between;
	padding: 25px 38px;
	@media only screen and (max-width: 600px) {
		display: none;
	}

	.leave-form-back {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		@media only screen and (max-width: 600px) {
			gap: 5px;
		}
		.leave-form-img {
			cursor: pointer;
			@media only screen and (max-width: 600px) {
				width: 17px;
			}
		}
		.leave-title {
			cursor: pointer;
			@media only screen and (max-width: 600px) {
				color: #000;
				font-family: var(--font-DejaVu);
				font-size: 14px;
				font-style: normal;
				font-weight: 400;
				line-height: normal;
			}
		}
	}
	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		border-radius: 12px;
		background: #0063bf;
		padding: 16px 48px 16px 45px;
		border: none;
		@media only screen and (max-width: 600px) {
			display: none;
		}
		span {
			color: #fff;
			font-family: var(--font-DejaVu);
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
}
.leave-form-text {
	padding: 60px 38px 100px;
	@media only screen and (max-width: 600px) {
		padding: 12px 38px 8px;
	}
}
.leave-comp {
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 0.5px solid #dce0e4;
	padding-bottom: 25px;
	margin-bottom: 25px;

	div {
		display: flex;
		align-items: center;
		.leave-title {
			font-family: var(--font-DejaVu);
			font-size: 16px;
			font-weight: 400;
			line-height: 21px;
			letter-spacing: 0em;
			text-align: left;
			@media only screen and (max-width: 600px) {
				font-size: 14px;
			}
		}
	}
}
.leave-ques {
	font-family: var(--font-DejaVu);
	font-size: 24px;
	font-weight: 400;
	line-height: 39px;
	letter-spacing: 0em;
	text-align: left;
	color: #0063bf;
	@media only screen and (max-width: 600px) {
		font-size: 16px;
	}
}
.leave-text {
	font-family: var(--font-DejaVu);
	font-size: 16px;
	font-weight: 400;
	line-height: 40px;
	letter-spacing: 0em;
	text-align: left;
	margin-bottom: 56px;
	margin-top: 28px;
}
.leave-our {
	color: #0063bf;
	font-family: var(--font-DejaVu);
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 160.555%; /* 28.9px */
	margin-bottom: 18px;
	@media only screen and (max-width: 600px) {
		font-size: 16px;
	}
}
</style>
