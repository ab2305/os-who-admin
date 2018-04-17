<template>
  <div>
    <el-table :data="list" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label="No" width="80">
        <template scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="제목">
        <template scope="scope">
          <nuxt-link :to="`/operation/faq/${scope.row.id}/edit`">
            {{ scope.row.title }}
          </nuxt-link>
        </template>
      </el-table-column>
      <el-table-column label="등록일" width="240">
        <template scope="scope">{{ scope.row.createdAt | moment('lll') }}</template>
      </el-table-column>
    </el-table>

    <div>
      <router-link to="/operation/faq/new" tag="el-button">등록</router-link>
      <el-button @click="deleteFaqs()" :disabled="!multipleSelection.length">삭제</el-button>
    </div>
  </div>
</template>

<script>
export default {
	layout: 'authorized',

	async asyncData({ app }) {
		const list = await app.$axios.$get('/faqs')

		return { list }
	},
	data() {
		return {
			multipleSelection: [],
		}
	},
	methods: {
		handleSelectionChange(val) {
			this.multipleSelection = val
		},
		async deleteFaqs() {
			try {
				const promises = this.multipleSelection
					.map(async ({ id }) => this.$axios.$delete(`/faqs/${id}`))

				await Promise.all(promises)

				this.$notify({
					message: 'FAQ를 삭제했습니다.',
				})

				this.$router.replace('/reload')
			} catch (error) {
				this.$notify({
					type: 'error',
					message: error,
				})
			}
		},
	},
}
</script>
