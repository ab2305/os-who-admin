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
        <router-link to="/operation/faqs" tag="el-button">취소</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
layout: "authorized",
data() {
return {
form: {
title: "",
body: "",
},
rules: {
title: [
{ required: true, message: "제목을 입력해주세요.", trigger: "blur" },
{ max: 500, message: "최대 500자까지 입력할 수 있습니다.", trigger: "blur" },
],
body: [
{ required: true, message: "내용을 입력해주세요.", trigger: "blur" },
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
await this.$axios.$post("faq", this.form)

this.$router.push("/operation/faqs")

this.$notify.success({
title: "등록",
message: "등록 되었습니다.",
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
