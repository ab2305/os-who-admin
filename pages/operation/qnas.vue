<template>
  <div>
    <el-table :data="list" @selection-change="handleSelectionChange">
      <el-table-column label="No" width="80">
        <template scope="scope">{{scope.row.id }}</template>
      </el-table-column>
      <el-table-column label="문의">
        <template scope="scope">
          <nuxt-link :to="`/operation/qna/${scope.row.id}/reply/edit`">
            {{ scope.row.comment ? scope.row.body+' (1)' : scope.row.body }}
          </nuxt-link>
        </template>
      </el-table-column>
      <el-table-column label="문의자" width="170">
        <template scope="scope">
        {{ scope.row.user.name }}
      ({{ scope.row.user.email }})</template>
      </el-table-column>
      <el-table-column label="등록일" width="180">
        <template scope="scope">{{ scope.row.createdAt | moment('lll') }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
layout: "authorized",

async asyncData({ app }) {
const list = await app.$axios.$get("/questions")
return { list: [...list] }
},
methods: {
handleSelectionChange(val) {
this.multipleSelection = val
},
},
}
</script>
