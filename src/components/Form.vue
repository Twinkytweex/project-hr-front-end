<template>
	<div class="container">
		<div class="form-box" >
			<div class="forms-comp">
				<div class="forms-input-cont">
					<div class="forms-input-title">
						<label for="validationTooltip01" class="forms-name form-label"
							>სახელი
						</label>
						<span class="red">*</span>
					</div>
					<input
						v-model="formData.name"
						type="text"
						name=""
						id="validationTooltip01"

		required=""
					/>
				</div>
				<div class="forms-input-cont">
					<div class="forms-input-title">
						<label class="forms-name">გვარი </label>
						<span class="red">*</span>
					</div>
					<input v-model="formData.surname" type="text" name="" id="" />
				</div>
				<div class="forms-input-cont">
					<div class="forms-input-title">
						<label class="forms-name">ტელეფონის ნომერი </label>
						<span class="red">*</span>
					</div>
					<input v-model="formData.phoneNumber" type="tel" name="" id="" />
				</div>
				<div class="forms-input-cont">
					<div class="forms-input-title">
						<label class="forms-name">მეილი </label>
						<span class="red">*</span>
					</div>
					<input v-model="formData.email" type="text" name="" id="" />
				</div>
			</div>
			<label class="forms-name">რეზიუმე </label>
			<span class="red">*</span>
			<div class="upload-image-input" name="img">
				<input
					required
					ref="inpUpload"
					type="file"
					name="document"
					hidden
					id="id_upload_cv"
					@change="OnFileChange"

				/>
				<div v-for="f in files" :key="f.name">{{ f.name }}</div>
				<img class="upload-image" :src="upload" alt="" />
				<label for="id_upload_cv">
					<span class="upload-image-title"
						>ჩააგდეთ რეზიუმე ან
						<span class="title-upload">ატვირთეთ ფაილი</span></span
					>
				</label>
			</div>
			<div class="terms-con">
				<div class="check-cont">
					<input class="checkbox" type="checkbox" />
					<div class="check-text-mobile">
						<span class="check-text"
							>ვეთანხმები ჩემი პირადი მონაცემების
						</span>
						<span class="check-text">
							დამუშავებას <span class="red">*</span></span
						>
					</div>
					<span class="check-text none-mobile"
						>ვეთანხმები ჩემი პირადი მონაცემების დამუშავებას
					</span>
					<span class="none-mobile red">*</span>
				</div>
				<span class="check-accept"
					>ვეთანხმები ჩემ მიერ მოწოდებული პირადი მონაცემების
					დამუშავებას პალიტრა ჰოლდინგის ან-და მისი შვილობილი
					კომპანიების მიერ, პოტენციური დასაქმების მიზნით. ვაცნობიერებ,
					რომ ჩემ მიერ მოწოდებული პირადი ინფორმაცია შესაძლოა შენახული
					იყოს მაქსიმუმ 2 წლის ვადით, ხოლო მოგვიანებით წაიშლება.</span
				>
				<span class="check-accept"
					>კომპანიის ბაზიდან მონაცემების ვადაზე ადრე წასაშლელად
					კანდიდატმა უნდა
					<br />
					მოგვმართოს ელ. ფოსტაზე:
					<span class="blue">vacancy@palitra.ge</span></span
				>
			</div>
			<div class="confirm-cont">
				<router-link to="success">
					<Button @click="submitForm"> განაცხადის გაგზავნა </Button>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import Button from '@/components/Button.vue';
import upload from '@/assets/images/upload.svg';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const inpUpload = ref(null);
const files = ref([]);
const route = useRoute();

const formData = ref({
	id: '',
	name: '',
	surname: '',
	email: '',
	phoneNumber: '',
	file: null,
});

const OnFileChange = () => {
	files.value = Array.from(inpUpload.value.files).map((f) => {
		console.log(f)
		return {
			name: f.name,
		};
	});
};


const submitForm = async () => {
    try {
        if (!formData.value || !inpUpload.value.files || inpUpload.value.files.length === 0) {
            console.error('Form data or file is missing.');
            return;
        }

        const formDataToSend = new FormData();
		formDataToSend.append('id', route.params.id || '');
        formDataToSend.append('name', formData.value.name || '');
        formDataToSend.append('surname', formData.value.surname || '');
        formDataToSend.append('email', formData.value.email || '');
        formDataToSend.append('phoneNumber', formData.value.phoneNumber || '');

        // Append file data as binary
        formDataToSend.append('file', inpUpload.value.files[0]);

        await fetch('http://127.0.0.1:8069/receive_vacancies', {
            method: 'POST',
            body: formDataToSend
        });

    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

onMounted(() => {});
</script>
<style lang="scss" scoped>
.form-box {
	border-radius: 12px;
	background: #fff;
	border: 0.5px solid #e9ebee;
	padding: 38px;
}
.forms-comp {
	display: grid;
	grid-template-columns: 1fr 1fr;
	row-gap: 32px;
	column-gap: 90px;
	padding-bottom: 32px;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}

	&:hover {
		box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.02);
	}
}
.forms-name {
	color: #474747;
	font-family: var(--font-DejaVu);
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 200%; /* 32px */
	@media only screen and (max-width: 600px) {
		font-size: 14px;
	}
}
.forms-input-cont {
	width: 100%;
	input {
		border-radius: 12px;
		border: 1px solid #e9ebee;
		padding: 15px 12px;
		max-width: 575px;
		width: 100%;
		outline: none;
		font-size: 16px;
		font-family: var(--font-DejaVu);

		box-sizing: border-box;

		&:focus {
			box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.02);
		}
	}
}
.upload-image-input {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 30px;
	border-radius: 16px;
	border: 1px dashed #7abfff;
	background: #fafdfe;
	max-width: 1215px;
	width: 100%;
	height: 224px;
	.upload-image-title {
		font-family: var(--font-DejaVu);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 200%;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
		}
		.title-upload {
			color: #0063bf;
			cursor: pointer;
		}
	}
}

.terms-con {
	display: flex;
	flex-direction: column;
	margin-top: 46px;
	.checkbox {
		width: 28px;
		height: 28px;
	}
	.check-text {
		color: #000;
		font-family: var(--font-DejaVu);
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 200%; /* 36px */
		@media only screen and (max-width: 600px) {
			font-size: 14px;
		}
	}
	.check-accept {
		color: #5d6f7f;
		font-family: var(--font-DejaVu);
		font-size: 15px;
		font-style: normal;
		font-weight: 400;
		line-height: 200%; /* 32px */
		margin-bottom: 16px;
		@media only screen and (max-width: 600px) {
			font-size: 14px;
		}
	}
	.blue {
		color: #0063bf;
		cursor: pointer;
	}
}
.check-cont {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	gap: 10px;
}
.test-input {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.check-text-mobile {
	display: none;
	@media only screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}
}
.none-mobile {
	@media only screen and (max-width: 600px) {
		display: none;
	}
}
.confirm-cont {
	display: flex;
	justify-content: end;
	padding-top: 32px;
	@media only screen and (max-width: 600px) {
		justify-content: center;
		align-items: center;
	}
	.button-slot {
		color: #fff;
		font-family: var(--font-DejaVu);
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

		@media only screen and (max-width: 600px) {
			font-size: 12px;
		}
	}
}
</style>
