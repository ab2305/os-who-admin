<template>
  <div class="content">
    <div>
      <el-row>
        <el-col :span="12" :offset="6">
          <h1 my-text-center>오류가 발생했습니다.</h1>
          <dl v-if="error.statusCode===401">
            <dd><i class="el-icon-circle-close"></i>
            접근 권한이 없습니다. 관리자 계정으로 로그인해주세요.</dd>
          </dl>
          <dl v-else-if="error.statusCode==404">
            <dd><i class="el-icon-circle-close"></i>
            페이지를 찾을 수 없습니다. 주소가 올바른지 확인하세요.</dd>
          </dl>
          <dl v-else>
            <dd><i class="el-icon-circle-close"></i></dd>
          </dl>

          <div my-text-center>
            <el-button @click="goBack()" type="primary">
              <i class="el-icon-arrow-left"></i> 돌아가기
            </el-button>

            <nuxt-link to="/logout" tag="el-button"
              v-if="$store.state.me">
              로그아웃
            </nuxt-link>
            <nuxt-link to="/" tag="el-button"
              v-else>
              홈으로 이동
            </nuxt-link>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" module>
dl {
  margin-top: 30px;
  margin-bottom: 30px;
  i {
    color: red;
  }
}
</style>
