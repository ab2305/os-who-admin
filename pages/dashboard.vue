<template>
  <div :class="$style.container">

    <h4>매출 현황</h4>
    <div class="el-table el-table--fit el-table--border">
      <table :class="$style.tbl" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <th rowspan="2">
            <div class="cell">구분</div>
          </th>
          <th colspan="3" width="300px">
            <div class="cell">오늘</div>
          </th>
          <th colspan="3" width="300px">
            <div class="cell">어제</div>
          </th>
          <th colspan="3" width="300px">
            <div class="cell">금월 합계</div>
          </th>
          <th colspan="3" width="300px">
            <div class="cell">전월 합계</div>
          </th>
        </tr>
        <tr :class="$style.thsize">
          <th>
            <div class="cell">우표</div>
          </th>
          <th>
            <div class="cell">이용권</div>
          </th>
          <th>
            <div class="cell">계</div>
          </th>
          <th>
            <div class="cell">우표</div>
          </th>
          <th>
            <div class="cell">이용권</div>
          </th>
          <th>
            <div class="cell">계</div>
          </th>
          <th>
            <div class="cell">우표</div>
          </th>
          <th>
            <div class="cell">이용권</div>
          </th>
          <th>
            <div class="cell">계</div>
          </th>
          <th>
            <div class="cell">우표</div>
          </th>
          <th>
            <div class="cell">이용권</div>
          </th>
          <th>
            <div class="cell">계</div>
          </th>
        </tr>
        <tr>
          <th>
            <div class="cell">건수</div>
          </th>
          <td>
            <div class="cell">{{today.stampCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{today.subscriptionCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{today.allBillingCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{yesterday.stampCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{yesterday.subscriptionCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{yesterday.allBillingCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{thisMonth.stampCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{thisMonth.subscriptionCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{thisMonth.allBillingCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{preMonth.stampCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{preMonth.subscriptionCount.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{preMonth.allBillingCount.toLocaleString()}}</div>
          </td>
        </tr>
        <tr>
          <th>
            <div class="cell">금액</div>
          </th>
          <td>
            <div class="cell">{{today.stampSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{today.subscriptionSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{today.allSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{yesterday.stampSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{yesterday.subscriptionSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{yesterday.allSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{thisMonth.stampSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{thisMonth.subscriptionSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{thisMonth.allSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{preMonth.stampSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{preMonth.subscriptionSales.toLocaleString()}}</div>
          </td>
          <td>
            <div class="cell">{{preMonth.allSales.toLocaleString()}}</div>
          </td>
        </tr>
    </table>
    </div>
    <br><br>

    <h4>가입 현황</h4>
    <div class="el-table el-table--fit el-table--border" :class="$style.tbl">
      <table :class="$style.tbl" cellspacing="0" cellpadding="0" border="0">
      <tr>
      <th colspan="2">
        <div class="cell">구분</div>
      </th>
      <th width="250">
        <div class="cell">오늘</div>
      </th>
      <th width="250">
        <div class="cell">어제</div>
      </th>
      <th width="250">
        <div class="cell">금월 합계</div>
      </th>
      <th width="250">
        <div class="cell">전월 합계</div>
      </th>
      <th width="250">
        <div class="cell">누적 합계</div>
      </th>
    </tr>
    <tr>
      <th rowspan="2" width="100">
        <div class="cell">누구야</div>
      </th>
      <th width="100">
        <div class="cell">가입</div>
      </th>
      <td>
        <div class="cell">{{today.usersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{yesterday.usersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{thisMonth.usersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{preMonth.usersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">
        {{(today.usersCount + yesterday.usersCount
        + thisMonth.usersCount + preMonth.usersCount).toLocaleString()}}</div>
      </td>
    </tr>
    <tr>
      <th>
        <div class="cell">탈퇴</div>
      </th>
      <td>
        <div class="cell">{{today.secedersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{yesterday.secedersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{thisMonth.secedersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{preMonth.secedersCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">
        {{(today.secedersCount + yesterday.secedersCount
        + thisMonth.secedersCount + preMonth.secedersCount).toLocaleString()}}</div>
      </td>
    </tr>
   <tr>
      <th rowspan="2">
        <div class="cell">누구친</div>
      </th>
      <th>
        <div class="cell">등록</div>
      </th>
      <td>
        <div class="cell">{{today.inviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{yesterday.inviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{thisMonth.inviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{preMonth.inviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">
        {{(today.inviteesCount + yesterday.inviteesCount
        + thisMonth.inviteesCount + preMonth.inviteesCount).toLocaleString()}}</div>
      </td>
    </tr>
    <tr>
      <th>
        <div class="cell">가입</div>
      </th>
      <td>
        <div class="cell">{{today.lgoinInviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{yesterday.lgoinInviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{thisMonth.lgoinInviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">{{preMonth.lgoinInviteesCount.toLocaleString()}}</div>
      </td>
      <td>
        <div class="cell">
          {{(today.lgoinInviteesCount + yesterday.lgoinInviteesCount
            + thisMonth.lgoinInviteesCount + preMonth.lgoinInviteesCount).toLocaleString()}}
        </div>
      </td>
    </tr>
  </table>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
layout: "authorized",
async asyncData({ app }) {
const month = moment().format("M")
const year = moment().format("YYYY")

const daily = await app.$axios.$get("/stats/daily", {
params: {
count: 2,
},
})

const monthly = await app.$axios.$get("/stats/monthly", {
params: {
year, month, count: 2,
},
})

const today = daily[0]
const yesterday = daily[1]
const thisMonth = monthly[0]
const preMonth = monthly[1]

return {
today, yesterday, thisMonth, preMonth,
}
},
}
</script>

<style lang="scss" module>

.container {
  table {
    width: 100%;
  }
}
.tbl {
  th {
    text-align: center
  }
  td {
    text-align: right;
  }
}

.thsize {
  th {
    width: 90px;
  }
}

</style>
