<template>
<div>
  <el-form @submit.native.prevent="inquiry()">
    <div class="el-table el-table--fit el-table--border compact">
      <table :id="$style.filterTable" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <th scope="row">
            <div class="cell"> 기간별 조회 </div>
          </th>
          <td>
            <div class="cell">
              <el-col :span="14">
                <el-form-item>
                  <el-button type="primary" @click="periodInquiry(1)">이번달</el-button>
                  <el-button type="primary" @click="periodInquiry(2)">지난달</el-button>
                  <el-button type="primary" @click="periodInquiry(3)">최근3개월</el-button>
                  <el-button type="primary" @click="periodInquiry(4)">최근6개월</el-button>
                  <el-button type="primary" @click="periodInquiry(5)">올해</el-button>
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <el-form-item>
                  <el-col :span="12">
                    <el-date-picker v-model="frm.year" type="year" placeholder="년도" size="small">
                    </el-date-picker>
                  </el-col>

                  <el-col :span="12">
                    <el-date-picker v-model="frm.month" format="MM" type="month" placeholder="월" size="small">
                    </el-date-picker>
                  </el-col>
                </el-form-item>
              </el-col>

              <el-col :span="5">
                <el-form-item>
                  <el-col :span="2" my-text-center>~</el-col>
                  <el-col :span="11">
                    <el-date-picker v-model="till.year" type="year" placeholder="년도" size="small">
                    </el-date-picker>
                  </el-col>

                  <el-col :span="11">
                    <el-date-picker v-model="till.month" format="MM" type="month" placeholder="월" size="small">
                    </el-date-picker>
                  </el-col>
                </el-form-item>
              </el-col>
            </div>
          </td>

          <td rowspan="2">
            <div class="cell">
              <el-button type="primary" native-type="submit">조회</el-button>
            </div>
          </td>
        </tr>

        <tr>
          <th scope="row">
            <div class="cell"> 회원별 조회 </div>
          </th>
          <td>
            <div class="cell">
              <el-col :span="12">
                <el-form-item>
                  <el-input v-model="searchForm.query" size="small">
                    <el-select :id="$style.category" v-model="searchForm.category" placeholder="전체" slot="prepend">
                      <el-option :value="null" :label="'선택'"></el-option>
                      <el-option :value="'name'" :label="'이름'"></el-option>
                      <el-option :value="'email'" :label="'아이디'"></el-option>
                    </el-select>
                  </el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item>
                </el-form-item>
              </el-col>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </el-form>

  <div :id="$style.list">
    <el-table :data="userList" border show-summary :summary-method="getSummaries">
      <el-table-column label="순위">
        <template scope="scope"> {{ getRank(scope.row) }} </template>
      </el-table-column>

      <el-table-column label="이름">
        <template scope="scope"> {{scope.row.name}} </template>
      </el-table-column>

      <el-table-column label="아이디">
        <template scope="scope"> {{scope.row.email}} </template>
      </el-table-column>

      <el-table-column label="결제건수">
        <el-table-column prop="stampCount" label="우표" width="110" />
        <el-table-column prop="subscriptionCount" label="이용권" width="110" />
        <el-table-column prop="allBillingCount" label="계" width="120" />
      </el-table-column>

      <el-table-column label="결제금액">
        <el-table-column prop="stampSales" label="우표" width="110" />
        <el-table-column prop="subscriptionSales" label="이용권" width="110" />
        <el-table-column prop="allSales" label="계" width="120" />
      </el-table-column>

      <el-table-column label="환불">
        <el-table-column prop="refundCount" label="건수" width="100" />
        <el-table-column prop="refundSales" label="금액" width="100" />
      </el-table-column>
    </el-table>
  </div>

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
import ElOption from "../../node_modules/element-ui/packages/select/src/option.vue"
import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue"

export default {
components: {
ElFormItem,
ElOption,
},
layout: "authorized",
async asyncData({
app,
}) {
const userList = await app.$axios.$get("/stats/users", {
params: {
year: moment().format("YYYY"),
month: moment().format("MM"),
},
})

return {
userList,
}
},
methods: {
getToday() {
return this.$moment().startOf("day")
},

getSummaries(param) {
const {
columns,
data,
} = param
const sums = []
columns.forEach((column, index) => {
if (index === 0) {
sums[index] = "합계"
return
}
const values = data.map(item => Number(item[column.property]))
if (!values.every(value => _.isNaN(value))) {
sums[index] = `${values.reduce((prev, curr) => {
const value = Number(curr)
if (!_.isNaN(value)) {
return prev + curr
}
return prev
}, 0)}`
} else {
sums[index] = ""
}
})

return sums
},

getRank(obj) {
return (this.userList.indexOf(obj) + 1)
},

async download(isAll = true) {
const startDate = moment("2017-09")
const nowDate = moment()

const allList = await this.$axios.$get("/stats/users", {
params: {
year: startDate.year(),
month: startDate.month() + 1,
count: nowDate.diff(startDate, "months") + 1,
},
})

const list = isAll ? allList : this.userList

const formatted = [["순위", "이름", "아이디", "우표 결제건수", "이용권 결제건수", "계", "우표 결제금액", "이용권 결제금액", "계", "환불 건수", "환불 금액"]]

formatted.push(...list.map(data => [
data.id,
data.name,
data.email,
data.stampCount,
data.subscriptionCount,
data.allBillingCount,
data.stampSales,
data.subscriptionSales,
data.allSales,
data.refundCount,
data.refundSales,
]))

const download = (error, output) => {
const blob = new Blob(
[output],
{ type: "text/plain; charset=utf-8" },
)

FileSaver.saveAs(
blob,
`userstatics ${isAll ? "all" : "filtered"} ${this.$moment().format("lll")}.csv`,
)
}

csvStringify(formatted, download)
},

// not used loadUserAllData() -> use this.allList
// loadUserAllData() has error to download

/*    async loadUserAllData() {
      const standardDate = moment(['2017', '07'])
      const nowDate = moment()

      const count = nowDate.diff(standardDate, 'months') + 2

      const params = {
        count,
        year: nowDate.format('YYYY'),
        month: nowDate.format('MM'),
      }
      this.$axios.$get('/stats/users', {
        params,
      }).catch(error => Promise.reject(error))
        .then(list => list)
    }, */

// this method is button to period inquiry
periodInquiry(params) {
const m = moment()
const year = m.format("YYYY")
const month = m.format("MM")

switch (params) {
case 1:
this.frm.year = year
this.frm.month = month
break
case 2:
this.frm.year = year
this.frm.month = String(Number(month) - 1)
this.count = 2
break
case 3:
this.frm.year = year
this.frm.month = String(Number(month))
this.count = 4
break
case 4:
this.frm.year = year
this.frm.month = String(Number(month))
this.count = 7
break
case 5:
this.frm.year = year
this.frm.month = Number(month)
this.count = Number(month) + 1
break
default:
break
}

this.getAxiosUserData()
},

// this method is keyword & selected period inquiry
inquiry() {
const filter = this.searchForm.category && this.searchForm.query
const period = (this.frm.year && this.frm.month && this.till.year && this.till.month)

if (period) {
this.frm.year = moment(this.frm.year).format("YYYY")
this.frm.month = moment(this.frm.month).format("MM")

this.till.year = moment(this.till.year).format("YYYY")
this.till.month = moment(this.till.month).format("MM")

const till = moment([this.till.year, this.till.month])
const frm = moment([this.frm.year, this.frm.month])

this.count = till.diff(frm, "months") + 2
}

this.getAxiosUserData(filter, period)
},

getAxiosUserData(filter = false, period = false) {
// case by case (period or keyword)
const params = {}

params.count = this.count
if (filter) {
const param = this.searchForm.category
params[param] = this.searchForm.query
} else if (period) {
params.year = this.till.year
params.month = this.till.month
} else {
params.year = this.frm.year
params.month = this.frm.month
}

this.$axios.$get("/stats/users", {
params,
}).catch(error => Promise.reject(error))
.then((res) => {
this.userList = res
})
},
},

data() {
return {
nowList: {},
count: 2,
searchForm: {
category: null,
query: "",
},
frm: {
year: null,
month: null,
},
till: {
year: null,
month: null,
},
}
},
}
</script>
<style lang="scss" module>
@import '~assets/variables';

#filterTable {
    width: 100%;
    :global(.cell) {
        margin-top: 9px;
        margin-bottom: 9px;
    }

    :global(.el-date-editor) {
        width: 100%;
    }

    :global(.el-form-item) {
        margin-bottom: initial;
    }

    #category {
        width: 120px;
    }

    #center {
        text-align: center;
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
