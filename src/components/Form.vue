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
						required
						placeholder="სახელი/Name"
					/>
				</div>
				<div class="forms-input-cont">
					<div class="forms-input-title">
						<label class="forms-name">გვარი </label>
						<span class="red">*</span>
					</div>
					<input v-model="formData.surname" type="text" name="" id="" placeholder="გვარი/Surname"/>
				</div>
				<div class="forms-input-cont">
					<div class="forms-input-title">
						<label class="forms-name">ტელეფონის ნომერი </label>
						<span class="red">*</span>
					</div>
					<input v-model="formData.phoneNumber" type="tel" name="" id="" placeholder="5xxxxxxxx"/>
				</div>
				<div class="forms-input-cont">
					<div class="forms-input-title">
						<label class="forms-name">მეილი </label>
						<span class="red">*</span>
					</div>
					<input v-model="formData.email" type="text" name="" id="" placeholder="example@gmail.com"/>
				</div>
			</div>
			<label class="forms-name">რეზიუმე </label>
			<span class="red">*</span>
			<!--			<div class="upload-image-input" name="img">-->
			<!--				<input-->
			<!--					required-->
			<!--					ref="inpUpload"-->
			<!--					type="file"-->
			<!--					name="document"-->
			<!--					hidden-->
			<!--					id="id_upload_cv"-->
			<!--					multiple-->
			<!--					@change="OnFileChange"-->

			<!--				/>-->
			<!--				<div v-for="f in files" :key="f.name">-->
			<!--`					{{ f.name }} ({{f.type}}) - -->
			<!--`					{{ (f.size / 1024).toFixed(2) }}KB-->
			<!--				</div>-->
			<!--&lt;!&ndash;				<div v-for="f in files" :key="f.name">{{ f.name }}</div>&ndash;&gt;-->
			<!--				<img class="upload-image" :src="upload" alt="" />-->
			<!--				<label for="id_upload_cv">-->
			<!--					<span class="upload-image-title"-->
			<!--						>ჩააგდეთ რეზიუმე ან-->
			<!--						<span class="title-upload">ატვირთეთ ფაილი</span></span>-->
			<!--				</label>-->
			<!--			</div>-->
			<div
				class="upload-image-input"
				name="img"
				@dragover.prevent="onDragOver"
				@dragleave="onDragLeave"
				@drop.prevent="onFileDrop"
			>
				<input
					required
					ref="inpUpload"
					type="file"
					name="document"
					hidden
					id="id_upload_cv"
					multiple
					@change="OnFileChange"
				/>
				<div v-for="f in files" :key="f.name">
					{{ f.name }} ({{f.type}}) - {{ (f.size / 1024).toFixed(2) }}KB
				</div>
				<img class="upload-image" :src="upload" alt="" />
				<label for="id_upload_cv">
    <span class="upload-image-title">
      ჩააგდეთ რეზიუმე ან
      <span class="title-upload">ატვირთეთ ფაილი</span>
    </span>
				</label>
			</div>
			<div class="terms-con">
				<div class="check-cont">
					<input class="checkbox" type="checkbox" v-model="formData.check_box"/>
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
				<span class="check-accept">
					აღნიშნულ ვაკანსიაზე რეზიუმეს გამოგზავნით, ადასტურებთ, რომ თანახმა ხართ თქვენი პერსონალური მონაცემები კომპანიამ დაამუშავოს (შეაგროვოს, შეინახოს, დაამუშავოს, დააჯგუფოს, წაშალოს, გაანადგუროს)
					მონაცემთა დაცვის საერთაშორისო სტანდარტებისა და საქართველოს მოქმედი კანონმდებლობის შესაბამისად.
					კომპანიის მხრიდან თქვენი მონაცემების დამუშავების მიზანია დასაქმებისთვის საჭირო პროცედურების წარმართვა და კანდიდატის შესაბამისობის დადგენა არსებული ან/და სამომავლო ვაკანსიის მოთხოვნებთან.
					თუ ამჟამად გამოცხადებული ვაკანსიის მოთხოვნებს ვერ აკმაყოფილებთ, კომპანია თქვენს რეზიუმეს განიხილავს სამომავლო ვაკანსიის მოთხოვნებთან.
					შესაბამისად, თქვენი მონაცემები დასაქმების თაობაზე გადაწყვეტილების მიღების მიზნით შეინახება არაუმეტეს 1 წლის ვადით.
				</span>
				<span class="check-accept">
					პერსონალურ მონაცემთა დაცვის შესახებ“ საქართველოს კანონის შესაბამისად, თქვენი უფლებაა,
					მიიღოთ ინფორმაცია კომპანიის მხრიდან თქვენს შესახებ დამუშავებულ მონაცემთა თაობაზე, ასევე მოითხოვოთ მონაცემების გასწორება, განახლება, შევსება,
					მონაცემთა დამუშავების შეწყვეტა, დაბლოკვა, წაშლა ან/და განადგურება,
					<br/>
					რისთვისაც უნდა მოგვმართოთ შემდეგ ელ. ფოსტაზე:
					<span class="blue">vacancy@palitra.ge</span></span>
			</div>
			<div class="confirm-cont">
				<Button @click="submitForm"> განაცხადის გაგზავნა </Button>
				<!--				<router-link to='success'>-->
				<!--					<Button @click="submitForm"> განაცხადის გაგზავნა </Button>-->
				<!--				</router-link>-->
				<!--				<router-link :to="formData.route">-->
				<!--					<Button @click="submitForm"> განაცხადის გაგზავნა </Button>-->
				<!--				</router-link>-->
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
	route: '',
	check_box: false,
	indexing: ''
});

	const OnFileChange = () => {
		files.value = [];
		files.value = Array.from(inpUpload.value.files).map((f) => ({
			name: f.name,
			type: f.type,
			size: f.size,
			icon: f.icon
		}));

		// Clear the input element so the same file can be re-uploaded if needed
		inpUpload.value = '';
	};

const showAlert = () => {
	alert('გთხოვთ ვაკანსიის გამოსაგზავნად, შეავსოთ ყველა სავალდებულო ველი!')
};

const showAlertNumber = () => {
	alert('ნომერი უნდა იყოს 9 ნიშნა!')
};

const showAlertEmail = () => {
	alert('გთხოვთ ვაკანსიის გამოსაგზავნად, ჩაწეროთ სწორი მეილი!')
};

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9._%+-]*@[a-zA-Z]+\.[a-zA-Z]{2,}$/; // Basic email validation regex
    return emailRegex.test(email);
}

// Phone number validation function
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{9}$/; // Regex to check if phone number is exactly 9 digits
    return phoneRegex.test(phoneNumber);
}

const submitForm = async () => {
	try {
		if (!formData.value || !inpUpload.value.files || inpUpload.value.files.length === 0) {
			return showAlert();
		}else if (formData.value.name === '' || formData.value.surname === '' || formData.value.email === '' || formData.value.phoneNumber === '' || formData.value.check_box === false) {
			return showAlert();
		}else if (!validateEmail(formData.value.email)){
			return showAlertEmail();
		}else if (!validatePhoneNumber(formData.value.phoneNumber)){
			return showAlertNumber();
		}else {
			console.log('Sent Successfully')
			const formDataToSend = new FormData();
			formDataToSend.append('id', route.params.id || '');
			formDataToSend.append('name', formData.value.name || '');
			formDataToSend.append('surname', formData.value.surname || '');
			formDataToSend.append('email', formData.value.email || '');
			formDataToSend.append('phoneNumber', formData.value.phoneNumber || '');

			// Append file data as binary
			// formDataToSend.append('file', inpUpload.value.files[0]);
			var numb = 0
			Array.from(inpUpload.value.files).forEach((file, index) => {

				formDataToSend.append(`file${index + 1}`, file);
				numb += 1
			});
			formDataToSend.append('indexing', numb);

			// await fetch('http://172.18.0.1:8069/receive_vacancies', {
			// 	method: 'POST',
			// 	body: formDataToSend
			// });
			// await fetch('http://192.168.120.6/receive_vacancies', {
			// 	method: 'POST',
			// 	body: formDataToSend
			// });
			await fetch('https://hr.palitra.ge/receive_vacancies', {
				method: 'POST',
				body: formDataToSend
			});
			window.location.href = '/success';
		}


	} catch (error) {
        console.error('Error submitting form:', error);
    }
};

// Handle drag-over event (to show feedback)
const onDragOver = (event) => {
  event.currentTarget.classList.add('dragging');
};

// Handle drag-leave event (to remove feedback)
const onDragLeave = (event) => {
  event.currentTarget.classList.remove('dragging');
};

// Handle drop event
const onFileDrop = (event) => {
  const droppedFiles = Array.from(event.dataTransfer.files);
  files.value = [...files.value, ...droppedFiles.map((f) => ({
    name: f.name,
    type: f.type,
    size: f.size,
  }))];

  // Optionally, you can update the input element's file list (if needed)
  inpUpload.value.files = event.dataTransfer.files;
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
	//height: 224px;
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
.upload-image-input.dragging {
  border: 2px dashed #007bff;
  background-color: rgba(0, 123, 255, 0.1);
}
</style>
