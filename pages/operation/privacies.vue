<template>
  <div>
    <el-table :data="list" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label="제목">
        <template scope="scope">
          <nuxt-link :to="`/operation/privacy/${scope.row.id}/edit`">
            {{ scope.row.title }}
          </nuxt-link>
        </template>
      </el-table-column>
      <el-table-column label="등록일" width="240">
        <template scope="scope">{{ scope.row.createdAt | moment('lll') }}</template>
      </el-table-column>
      <el-table-column label="조회수" width="100">
        <template scope="scope">{{ scope.row.viewCount.toLocaleString() }}</template>
      </el-table-column>
    </el-table>

    <div>
      <router-link to="/operation/privacy/new" tag="el-button">등록</router-link>
      <el-button @click="deletePrivacies()" :disabled="!multipleSelection.length">삭제</el-button>
    </div>
  </div>
</template>

<script>
export default {
layout: "authorized",

async asyncData({ app }) {
const list = await app.$axios.$get("/other-notices", {
params: { category: "privacy" },
})

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
async deletePrivacies() {
try {
const promises = this.multipleSelection
.map(async ({ id }) => this.$axios.$delete(`/other-notices/${id}`, {
params: { category: "privacy" },
}))

await Promise.all(promises)

this.$notify({
message: "개인정보취급방침을 삭제했습니다.",
})

this.$router.replace("/reload")
} catch (error) {
this.$notify({
type: "error",
message: error,
})
}
},
},
}
</script>
