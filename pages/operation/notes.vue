<template>
  <div>
    <el-table :data="list" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label="No" width="80">
        <template scope="scope">{{ scope.row.isTop ? '-' : scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="제목">
        <template scope="scope">
          <nuxt-link :to="`/operation/note/${scope.row.id}/edit`">
            {{ scope.row.title }}
          </nuxt-link>
        </template>
      </el-table-column>
      <el-table-column label="수신자" width="170">
        <template scope="scope">
        {{ scope.row.user.name }}
      ({{ scope.row.user.email }})</template>
      </el-table-column>
      <el-table-column label="등록일" width="180">
        <template scope="scope">{{ scope.row.createdAt | moment('lll') }}</template>
      </el-table-column>
    </el-table>

    <div>
      <router-link to="/operation/note/new" tag="el-button">등록</router-link>
      <el-button @click="deleteNotes()" :disabled="!multipleSelection.length">삭제</el-button>
    </div>
  </div>
</template>

<script>
export default {
layout: "authorized",

async asyncData({ app }) {
const toplist = await app.$axios.$get("notes", {
params: {
top: true,
},
})

const list = await app.$axios.$get("/notes")

return { list: [...toplist, ...list] }
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
async deleteNotes() {
try {
const promises = this.multipleSelection
.map(async ({ id }) => this.$axios.$delete(`/notes/${id}`))

await Promise.all(promises)

this.$notify({
message: "공지사항을 삭제했습니다.",
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
