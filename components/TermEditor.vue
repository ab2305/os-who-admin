<template>
  <div>
    <el-form :model="form" :rules="rules" label-width="120px"
      ref="form" @submit.native.prevent="write()">
      <el-form-item label="제목" prop="title">
        <el-input type="title" v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="내용" prop="body">
        <el-input type="textarea" v-model="form.body" :rows="20"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">완료</el-button>
        <router-link to="/operation/terms" tag="el-button">취소</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
	layout: 'authorized',
	props: {
		form: {
			type: Object,
			default: () => ({
				title: '',
				body: '',
			}),
		},
		isEdit: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			rules: {
				title: [
					{ required: true, message: '제목을 입력해주세요.', trigger: 'blur' },
					{ max: 500, message: '최대 500자까지 입력할 수 있습니다.', trigger: 'blur' },
				],
				body: [
					{ required: true, message: '내용을 입력해주세요.', trigger: 'blur' },
				],
			},
		}
	},
	methods: {
		write() {
			this.$refs.form.validate(async (isValid) => {
				if (!isValid) {
					return
				}

				try {
					if (this.isEdit) {
						await this.$axios.$put(`other-notices/${this.$route.params.id}`, this.form)
					} else {
						await this.$axios.$post('other-notice', this.form)
					}

					this.$router.push('/operation/terms')

					this.$notify.success({
						title: this.isEdit ? '수정' : '등록',
						message: this.isEdit ? '이용약관을 수정했습니다.' : '이용약관을 등록했습니다.',
					})
				} catch (error) {
					this.$notify.error({
						title: this.isEdit ? '수정 실패' : '등록 실패',
						message: `status: ${error.response.status}`,
					})
				}
			})
		},
	},
}
</script>
