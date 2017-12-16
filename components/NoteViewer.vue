<template>
 <div class="el-table el-table--fit el-table--border">
    <table cellspacing="0" cellpadding="0" border="0" :id="$style.tab">
      <tr>
        <th>회원</th>
        <td>{{form.name}}</td>
      </tr>
      <tr>
        <th>제목</th>
        <td>{{form.title}}</td>
      </tr>
      <tr>
        <th>내용</th>
        <td>{{form.body}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  layout: 'authorized',
  props: {
    form: {
      type: Object,
      default: () => ({
        name: '',
        title: '',
        body: '',
        isTop: false,
        userId: '',
      }),
    },
  },
}
</script>

<style lang="scss" module>

#tab {
  width: 100%;
  text-align: center;
  th {
    width: 300px;
    text-align: center;
  }
}
</style>
