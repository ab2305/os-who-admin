<template>
  <div>
    <el-form :model="form" label-width="120px"
      ref="form" @submit.native.prevent="write()">
      <el-form-item label="문의">
        {{qna.body}}
      </el-form-item>
      <el-form-item label="답변">
        <el-input type="textarea" v-model="form.comment" :rows="20"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">작성</el-button>
        <router-link to="/operation/qnas" tag="el-button">취소</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
layout: "authorized",
validate: ({
params,
}) => /^\d+$/.test(params.id),

async asyncData({
app, params,
}) {
const qna = await app.$axios.$get(`/questions/${params.id}`)

return { qna }
},
data() {
return {
form: {
comment: "",
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
await this.$axios.$post(`questions/${this.$route.params.id}/comment`, this.form)

this.$router.replace("/reload")

this.$notify.success({
title: "등록",
message: "답변이 등록 되었습니다.",
})
} catch (error) {
this.$notify.error({
title: "등록 실패",
message: `status: ${error.response.status}`,
})
}
})
},
},
}
</script>
