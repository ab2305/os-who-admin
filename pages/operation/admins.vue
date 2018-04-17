<template>
  <div>
    <el-table :data="list" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column label="No" width="80">
        <template scope="scope">{{scope.row.id}}</template>
      </el-table-column>
      <el-table-column label="이름(아이디)" width="250">
            <template scope="scope">{{scope.row.user.name}}({{scope.row.user.email}})</template>
      </el-table-column>
      <el-table-column label="휴대폰" property="user.phone" width="250">
        <template scope="scope">
        {{scope.row.user.phone.substr(0,3)}}-{{scope.row.user.phone.substr(4,4)}}-{{scope.row.user.phone.substr(7,4)}}
        </template>
      </el-table-column>
      <el-table-column label="닉네임" property="user.nickname" width="250"></el-table-column>
      <el-table-column label="가입일">
        <template scope="scope">{{ scope.row.user.createdAt | moment('lll') }}</template>
      </el-table-column>
    </el-table>

    <div>
      <router-link to="/operation/admin/new" tag="el-button">등록</router-link>
      <el-button @click="deleteAdmins()" :disabled="!multipleSelection.length">삭제</el-button>
    </div>
  </div>
</template>

<script>
export default {
layout: "authorized",

async asyncData({ app }) {
const list = await app.$axios.$get("/admins")

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
async deleteAdmins() {
try {
const promises = this.multipleSelection
.map(async ({ id }) => this.$axios.$delete(`/admins/${id}`))

await Promise.all(promises)

this.$notify({
message: "관리자를 삭제했습니다.",
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
