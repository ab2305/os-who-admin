<template>
  <div :id="$style.container">
    <el-form :model="form" label-width="120px"
      ref="form" @submit.native.prevent="write()">
       </el-form-item>

      <el-form-item label="email">
        <el-autocomplete :fetch-suggestions="querySearchAsync" placeholder="Please input" @select="handleSelect" v-model="form.email"></el-autocomplete>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">완료</el-button>
        <router-link to="/operation/admins" tag="el-button">취소</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
	layout: 'authorized',
	data() {
		return {
			form: {
				email: '',
				userId: '',
			},
		}
	},
	methods: {
		async querySearchAsync(queryString, cb) {
			const filteredUserList = await this.$axios.$get(`users?email=${queryString}`)
			const results = filteredUserList.map(o => ({ value: `${o.name}(${o.email})`, userId: o.id }))
			cb(results)
		},
		handleSelect(item) {
			this.form.userId = item.userId
		},
		write() {
			this.$refs.form.validate(async (isValid) => {
				if (!isValid) {
					return
				}
				try {
					await this.$axios.$post('admin', this.form)

					this.$router.push('/operation/admins')

					this.$notify.success({
						title: '등록',
						message: '등록 되었습니다.',
					})
				} catch (error) {
					this.$notify.error({
						title: '등록 실패',
						message: `status: ${error.response.status}`,
					})
				}
			})
		},
	},
}
</script>

<style lang="scss" module>
@import '~assets/variables';

#container {
  :global(.el-autocomplete) {
    width: 300px;
  }
}
</style>
