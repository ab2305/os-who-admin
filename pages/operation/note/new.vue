<template>
  <div>
    <el-form :model="form" :rules="rules" label-width="120px"
      ref="form" @submit.native.prevent="write()">
      <el-form-item label="회원" prop="name">
        <el-autocomplete :fetch-suggestions="querySearchAsync" placeholder="Please input" @select="handleSelect" v-model="form.name"></el-autocomplete>
      </el-form-item>

      <el-form-item label="제목" prop="title">
        <el-input type="title" v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="내용" prop="body">
        <el-input type="textarea" v-model="form.body" :rows="20"></el-input>
      </el-form-item>

      <el-form-item>
        <el-checkbox v-model="form.isTop">상단 고정</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">완료</el-button>
        <router-link to="/operation/notes" tag="el-button">취소</router-link>
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
        name: '',
        title: '',
        body: '',
        isTop: false,
        userId: '',
      },
      rules: {
        name: [
          { required: true, message: '회원을 선택해주세요.', trigger: 'blur' },
        ],
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
    async querySearchAsync(queryString, cb) {
      const filteredUserList = await this.$axios.$get(`users?name=${queryString}`)
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
          await this.$axios.$post('note', this.form)

          this.$router.push('/operation/notes')

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
