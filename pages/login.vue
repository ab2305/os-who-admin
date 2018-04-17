<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <h1 my-text-center>누굴까 관리자 로그인</h1>

      <el-form :model="form" :rules="rules" label-width="120px"
        ref="form" @submit.native.prevent="login()">
        <el-form-item label="이메일" prop="email">
          <el-input type="email" v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="비밀번호" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" native-type="submit">로그인</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
layout: "anonymous",
data() {
return {
form: {
email: "",
password: "",
},
rules: {
email: [
{ required: true, message: "이메일을 입력해주세요.", trigger: "blur" },
{ type: "email", message: "이메일 형식으로 입력해주세요.", trigger: "blur" },
],
password: [
{ required: true, message: "비밀번호를 입력해주세요.", trigger: "blur" },
],
},
}
},
methods: {
login() {
this.$refs.form.validate(async (isValid) => {
if (!isValid) {
return
}

try {
await this.$store.dispatch("login", this.form)

this.$router.push("/dashboard")

this.$notify.success({
title: "로그인",
message: "로그인 되었습니다.",
})
} catch (error) {
this.$notify.error({
title: "로그인 실패",
message: `status: ${error.response.status}`,
})

// TODO: focus
}
})
},
},
}
</script>
