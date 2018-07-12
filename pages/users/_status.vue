<template>
  <div>
    <el-form
      @submit.native.prevent="filter()">
      <div class="el-table el-table--fit el-table--border compact">
        <table :id="$style.filterTable" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <th scope="row">
              <div class="cell">가입일</div>
            </th>
            <td>
              <div class="cell">
                <el-col :span="10">
                  <el-form-item>
                    <el-date-picker
                      v-model="form.signupDateRange"
                      type="daterange" placeholder="가입일" :picker-options="filterOptions.signupDate" size="small">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </div>
            </td>

            <td rowspan="3">
              <div class="cell">
                <el-button type="primary" native-type="submit">조회</el-button>
              </div>
            </td>
          </tr>

          <tr :id="$style.group">
            <th scope="row">
              <div class="cell">그룹별</div>
            </th>
            <td>
              <div class="cell">
                <el-col :span="10">
                  <el-form-item label="생년" label-width="80px">
                    <el-col :span="11">
                      <el-date-picker
                        v-model="form.birthYearRange[0]"
                        type="year" placeholder="생년" :picker-options="filterOptions.birthYearFrom" size="small">
                      </el-date-picker>
                    </el-col>

                    <el-col :span="2" my-text-center>-</el-col>

                    <el-col :span="11">
                      <el-date-picker
                        v-model="form.birthYearRange[1]"
                        type="year" placeholder="생년" :picker-options="filterOptions.birthYearTo" size="small">
                      </el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-col>

                <el-col :span="7">
                  <el-form-item label="성별" label-width="80px">
                    <el-select
                      v-model="form.sex"
                      placeholder="성별" size="small">
                      <el-option :value="null" :label="'전체'"></el-option>
                      <el-option :value="'male'" :label="'남성'"></el-option>
                      <el-option :value="'female'" :label="'여성'"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="7">
                  <el-form-item label="회원구분" label-width="80px">
                    <el-select
                      v-model="form.status"
                      placeholder="회원구분" size="small">
                      <el-option :value="null" :label="'전체'"></el-option>
                      <el-option :value="'good'" :label="'우수'"></el-option>
                      <el-option :value="'general'" :label="'일반'"></el-option>
                      <el-option :value="'warning'" :label="'주의'"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <div class="cell">직접검색</div>
            </th>
            <td>
              <div class="cell">
                <el-col :span="10">
                  <el-form-item>
                    <el-input
                      v-model="form.query"
                      size="small">
                      <el-select :id="$style.category"
                        v-model="form.category"
                        placeholder="대상" slot="prepend">
                        <el-option :value="'name'" :label="'이름'"></el-option>
                        <el-option :value="'email'" :label="'아이디'"></el-option>
                        <el-option :value="'phone'" :label="'휴대폰'"></el-option>
                      </el-select>
                    </el-input>
                  </el-form-item>
                </el-col>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </el-form>

    <div :id="$style.list">
      <div :id="$style.total">현재 총 회원 수: {{ usersCount.length }}명</div>

      <el-table :data="filteredList" border class="compact">
        <el-table-column property="id" label="No" width="50"></el-table-column>
        <el-table-column label="등급" width="50">
          <template scope="scope">
            {{ scope.row | getUserStatus('name') }}
          </template>
        </el-table-column>
        <el-table-column label="이름(아이디)">
          <template scope="scope">
            <nuxt-link :to="`/user/${scope.row.id}`">
              {{ scope.row.name }}
              <br>
              {{ scope.row.email }}
            </nuxt-link>
          </template>
        </el-table-column>
        <el-table-column label="휴대폰" width="150">
          <template scope="scope">
        {{scope.row.phone.substr(0,3)}}-{{scope.row.phone.substr(4,4)}}-{{scope.row.phone.substr(7,4)}}
          </template>
        </el-table-column>
        <el-table-column property="nickname" label="닉네임" width="200"></el-table-column>
        <el-table-column property="gender" label="성별" width="50"></el-table-column>
        <el-table-column property="birthYear" label="생년" width="50"></el-table-column>
        <el-table-column property="userInvitees.length" label="누구친 등록수" width="60"></el-table-column>
        <el-table-column label="보유아이템" width="100">
          <template scope="scope">
            우표 {{ scope.row | getUserStampsCount }}
            <br>
            {{ scope.row | getUserPassInfo }}
          </template>
        </el-table-column>
        <el-table-column property="billingHistories.length" label="결제건수" width="100"></el-table-column>
        <el-table-column label="회원가입일" width="100">
          <template scope="scope">
            {{ scope.row.createdAt | moment('lll') }}
          </template>
        </el-table-column>
        <el-table-column label="최근접속일" width="100">
          <template scope="scope">
            {{ scope.row.lastLoginedAt | moment('lll') }}
          </template>
        </el-table-column>
        <el-table-column label="신고횟수" width="80">
          <template scope="scope">
           {{ scope.row.scnt }}
           </template>
        </el-table-column>
      </el-table>
    </div>

    <el-pagination page-size="30" layout="prev, pager, next" @current-change="handleCurrentChange"
    :current-page.sync="currentPage" :total="usersCount.length">
    </el-pagination>

    <div :id="$style.downloadButtons">
      <el-button @click="download(false)">현재 화면 목록 엑셀 다운로드</el-button>
      <el-button @click="download()">회원 전체 목록 엑셀 다운로드</el-button>
    </div>
  </div>
</template>

<script>
import _ from "lodash"
import moment from "moment"
import csvStringify from "csv-stringify"
import FileSaver from "file-saver"

export default {
layout: "authorized",
validate: ({ params }) => /^(:?active|deleted)$/.test(params.status),

async asyncData({ app, route }) {
const params = {}
const status = route.params.status
const endpoint = status === "active" ? "users" : "seceders"

// const list = await app.$axios.$get(`/${endpoint}`)

const list = await app.$axios.$get(`/${endpoint}`, {
params: _.assign(params, {
limit: 30,
page: 1,
}),
})

const usersCount = await app.$axios.$get(
`/${endpoint}`,
{
params: _.assign(params, {
length: true,
}),
},
)

const filteredList = _.cloneDeep(list)

return {
status,
list,
usersCount,
filteredList,
}
},
data() {
return {
filterOptions: {
signupDate: {
shortcuts: [
{
text: "전체",
onClick: (picker) => {
picker.$emit("pick", [null, null])
},
},
{
text: "어제",
onClick: (picker) => {
const start = this.getToday().subtract(1, "day")
const end = this.getToday().subtract(1, "day")

picker.$emit("pick", [start, end])
},
},
{
text: "최근1주",
onClick: (picker) => {
const start = this.getToday().subtract(6, "day")
const end = this.getToday()

picker.$emit("pick", [start, end])
},
},
{
text: "이번달",
onClick: (picker) => {
const start = this.getToday().startOf("month")
const end = this.getToday()

picker.$emit("pick", [start, end])
},
},
{
text: "지난달",
onClick: (picker) => {
const start = this.getToday()
.subtract(1, "month")
.startOf("month")
const end = this.getToday()
.subtract(1, "month")
.endOf("month")
.startOf("day")

picker.$emit("pick", [start, end])
},
},
],
},
birthYearFrom: {
disabledDate: date =>
this.form.birthYearRange[1] && date > this.form.birthYearRange[1],
},
birthYearTo: {
disabledDate: date =>
this.form.birthYearRange[0] && date < this.form.birthYearRange[0],
},
},
form: {
signupDateRange: [null, null],
birthYearRange: [null, null],
sex: undefined,
status: undefined,
category: "name",
query: "",
},
currentPage: 1,
}
},
methods: {
getToday() {
return this.$moment().startOf("day")
},
async filter() {
const params = {}
const endpoint = this.status === "active" ? "users" : "seceders"
let filteredList
const {
signupDateRange,
birthYearRange,
sex,
status,
category,
query,
} = this.form

if (!_.isEmpty(_.compact(signupDateRange))) {
/* eslint-enable prefer-destructuring */
params.signupFrom = moment(signupDateRange[0]).format("YYYY-MM-DD")
params.signupTo = moment(signupDateRange[1]).format("YYYY-MM-DD")
/* eslint-enable prefer-destructuring */
}

if (!_.isEmpty(_.compact(birthYearRange))) {
/* eslint-enable prefer-destructuring */
params.birthYearFrom = moment(birthYearRange[0]).format("YYYY")
params.birthYearTo = moment(birthYearRange[1]).format("YYYY")
/* eslint-enable prefer-destructuring */
}

if (!_.isEmpty(sex)) {
params.sex = sex
}

if (!_.isEmpty(status)) {
params.status = status
}

if (!_.isEmpty(query) && category === "name") {
params.name = query
}
if (!_.isEmpty(query) && category === "email") {
params.email = query
}
if (!_.isEmpty(query) && category === "phone") {
params.phone = query
}

// filteredList = _.chain(this.list)
//   .filter(user => {
//     if (signupDateRange[0] && signupDateRange[1]) {
//       if (
//         !this.$moment(user.createdAt).isBetween(
//           signupDateRange[0],
//           signupDateRange[1],
//           "day",
//           "[]"
//         )
//       ) {
//         return false;
//       }
//     }

//     if (birthYearRange[0] && birthYearRange[1]) {
//       if (
//         !this.$moment(user.birthYear, "YYYY").isBetween(
//           birthYearRange[0],
//           birthYearRange[1],
//           "year",
//           "[]"
//         )
//       ) {
//         return false;
//       }
//     }

//     if (sex) {
//       if (user.gender !== sex) {
//         return false;
//       }
//     }

//     if (status) {
//       if (this.$options.filters.getUserStatus(user, "value") !== status) {
//         return false;
//       }
//     }

//     if (query) {
//       if (!user[category].toLowerCase().includes(query.toLowerCase())) {
//         return false;
//       }
//     }

//     return true;
//   })
//   .value();

this.currentPage = 1

params.limit = 30
params.page = this.currentPage

filteredList = await this.$axios.$get(
`/${endpoint}`,
{
params,
},
)

const filteredCount = await this.$axios.$get(
`/${endpoint}`,
{
params: _.omit(params, ["limit", "page"]),
},
)

this.filteredList = filteredList
this.usersCount.length = filteredCount.length
},
download(isAll = true) {
const list = isAll ? this.list : this.filteredList

const formatted = [
[
"No",
"등급",
"이름",
"아이디",
"휴대폰",
"닉네임",
"성별",
"생년",
"누구친 등록수",
"우표",
"무제한 이용권",
"결제건수",
"회원가입일",
"최근접속일",
"신고당한횟수",
],
]

formatted.push(...list.map(user => [
user.id,
this.$options.filters.getUserStatus(user, "value"),
user.name,
user.email,
user.phone,
user.nickname,
user.gender,
user.birthYear,
user.userInvitees.length,
this.$options.filters.getUserStampsCount(user),
this.$options.filters.getUserPassInfo(user),
user.billingHistories.length,
this.$options.filters.moment(user.createdAt, "lll"),
this.$options.filters.moment(user.lastLoginedAt, "lll"),
user.scnt,
]))

const download = (error, output) => {
const blob = new Blob([output], { type: "text/plain;charset=utf-8" })

FileSaver.saveAs(
blob,
`users ${isAll ? "all" : "filtered"} ${this.$moment().format("lll")}.csv`,
)
}

csvStringify(formatted, download)
},
async handleCurrentChange() {
const params = {}
const endpoint = this.status === "active" ? "users" : "seceders"

const userList = await this.$axios.$get(
`/${endpoint}`,
{
params: _.assign(params, {
limit: 30,
page: this.currentPage,
}),
},
)

this.filteredList = userList
return this.currentPage
},
},
}
</script>

<style lang="scss" module>
@import "~assets/variables";

#filterTable {
  width: 100%;

  :global(.cell) {
    margin-top: 9px;
    margin-bottom: 9px;
  }

  th {
    width: 80px;
  }

  :global(.el-date-editor) {
    width: 100%;
  }

  :global(.el-form-item) {
    margin-bottom: initial;
  }

  #category {
    width: 80px;
  }
}

#list {
  margin-top: $gutter-y;

  #total {
    margin-bottom: 20px;
  }
}

#downloadButtons {
  margin-top: $gutter-y;
}
</style>
