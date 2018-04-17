<template>
  <div :class="$style.container">
    <h3 :class="$style.title">기본정보</h3>
    <div class="el-table el-table--fit el-table--border">
      <table cellspacing="0" cellpadding="0" border="0">
        <tr>
          <th><div class="cell">이름</div></th>
          <td><div class="cell">{{info.name}}</div></td>
          <th><div class="cell">아이디</div></th>
          <td><div class="cell">{{info.email}}</div></td>
          <th><div class="cell">닉네임</div></th>
          <td><div class="cell">{{info.nickname}}</div></td>
        </tr>
        <tr>
          <th><div class="cell">휴대폰</div></th>
          <td><div class="cell">
            {{info.phone.substr(0,3)}}-{{info.phone.substr(4,4)}}-{{info.phone.substr(7,4)}}
          </div></td>
          <th><div class="cell">태어난해</div></th>
          <td><div class="cell">{{info.birthYear}}</div></td>
          <th><div class="cell">비밀번호</div></th>
          <td><div class="cell">{{info.password}}</div></td>
        </tr>
        <tr>
          <th><div class="cell">회원가입일</div></th>
          <td><div class="cell">{{info.createdAt | moment('lll')}}</div></td>
          <th><div class="cell">최근접속일</div></th>
          <td><div class="cell">{{info.lastLoginedAt | moment('lll')}}</div></td>
          <th><div class="cell"></div></th>
          <td><div class="cell"></div></td>
        </tr>
      </table>
    </div>

    <h3 :class="$style.title">아이템 정보</h3>
    <div class="el-table el-table--fit el-table--border">
      <table :class="$style.item" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <th><div class="cell">보유 우표</div></th>
          <td>
            <div class="cell">
              {{info.item.stamp}} 매
               <el-button @click="dialogItemVisible = true">변경</el-button>
               <el-dialog :visible.sync="dialogItemVisible" size="tiny">
                <el-form :model="itemForm" ref="itemForm" @submit.native.prevent="item()">
                  <div class="cell" align="center">
                    <el-radio-group v-model="itemForm.type">
                      <el-radio label="add">지급</el-radio><br>
                      <el-radio label="subtract">삭감</el-radio>
                    </el-radio-group>
                    <el-input-number v-model="itemForm.stamp" :min="0" :max="9999" :id="$style.stamp"></el-input-number> 매
                  </div>
                  <div :id="$style.buttons">
                  <el-button type="primary" @click="dialogItemVisible = false" native-type="submit">
                  확인
                </el-button>
                  <el-button @click="dialogItemVisible = false">취소</el-button>
                  </div>
                  <div>
                    변경내역
                    <div :class="$style.scroll">
                    <el-table :data="info.item.itemHistories.stamp">
                      <el-table-column>
                        <template scope="scope">
                        - {{scope.row.date | moment('YYYY년 MM월 DD일 a h:mm:ss') }}
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template scope="scope">
                          {{scope.row.type=='add' ?
                          scope.row.value + '매 지급' : scope.row.value + '매 삭감'}}
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                  </div>
                </el-form>
              </el-dialog>
            </div>
          </td>

          <th><div class="cell">무제한 이용권</div></th>
          <td>
            <div class="cell">
              <font v-if="subscriptionMonths">{{subscriptionMonths}}개월권 |
              {{info.item.subscriptionStartedAt | moment('YY-MM-DD')}}
               ~ {{info.item.subscriptionEndedAt | moment('YY-MM-DD')}}</font>
              <font v-else>없음</font>
               <el-button @click="dialogDateVisible = true">변경</el-button>
               <el-dialog :visible.sync="dialogDateVisible" size="small">
                <el-form :model="subscriptionForm" ref="subscriptionForm"
                @submit.native.prevent="subscription()">
                  <div class="cell" align="center">
                    <el-date-picker v-model="subscriptionForm.period"
                    type="daterange"></el-date-picker>
                    <div :id="$style.buttons">
                  <el-button type="primary" @click="dialogDateVisible = false"
                  native-type="submit">확인</el-button>
                  <el-button @click="dialogDateVisible = false">취소</el-button>
                    </div>
                  </div>
                  <div>
                    변경내역
                    <div :class="$style.scroll">
                    <el-table :data="info.item.itemHistories.subscription">
                      <el-table-column>
                        <template scope="scope">
                        - {{scope.row.date | moment('YYYY년 MM월 DD일 a h:mm:ss') }}
                        </template>
                      </el-table-column>
                      <el-table-column>
                        <template scope="scope">
                          '{{scope.row.fromStartedAt | moment('YY-MM-DD') }}
                        ~ {{scope.row.fromEndedAt | moment('YY-MM-DD') }}' 을
                        '{{scope.row.toStartedAt | moment('YY-MM-DD') }}
                        ~ {{scope.row.toEndedAt | moment('YY-MM-DD') }}' 로 기간변경
                        </template>
                      </el-table-column>
                    </el-table>
                  </div>
                  </div>
                </el-form>
              </el-dialog>
            </div>
          </td>
        </tr>

        <tr>
          <th><div class="cell">우표사용내역</div></th>
          <td><div class="cell">
              <div :class="$style.tbl">
                <el-table :data="filteredUsinghistories">
                  <el-table-column label="날짜">
                    <template scope="scope">{{scope.row.createdAt | moment('YY-MM-DD') }}</template>
                  </el-table-column>
                  <el-table-column property="invitee" label="누구친"></el-table-column>
                  <el-table-column property="usedStamp" label="사용매수"></el-table-column>
                </el-table>
              <el-button @click="dialogStampVisible = true">전체보기</el-button>
              </div>
              <el-dialog :visible.sync="dialogStampVisible" size="tiny">
                <div :class="$style.scroll">
                  <el-table :data="usinghistories" :class="$style.tbl">
                    <el-table-column label="날짜">
                      <template scope="scope">{{scope.row.createdAt | moment('YY-MM-DD') }}</template>
                    </el-table-column>
                    <el-table-column property="invitee" label="누구친"></el-table-column>
                    <el-table-column property="usedStamp" label="사용매수"></el-table-column>
                  </el-table>
                </div>
              </el-dialog>
            </div>
          </td>

          <th><div class="cell">결제내역</div></th>
          <td><div class="cell">
            <div :class="$style.tbl">
              <el-table :data="info.filteredbillingHistories">
                <el-table-column property="productId" label="구매아이템"></el-table-column>
                <el-table-column label="결제금액">
                  <template scope="scope">
                    {{Number(scope.row.price).toLocaleString()}}
                  </template>
                </el-table-column>
                <el-table-column label="결제일">
                  <template scope="scope">{{scope.row.createdAt | moment('ll') }}</template>
                </el-table-column>
              </el-table>
              <el-button @click="dialogBillingVisible = true">전체보기</el-button>
            </div>
            <el-dialog :visible.sync="dialogBillingVisible" size="tiny">
              <div :class="$style.scroll">
                <el-table :data="info.billingHistories" :class="$style.tbl">
                  <el-table-column property="productId" label="구매아이템"></el-table-column>
                  <el-table-column label="결제금액">
                    <template scope="scope">
                    {{Number(scope.row.price).toLocaleString()}}
                  </template>
                  </el-table-column>
                  <el-table-column property="purchaseTime" label="결제일"></el-table-column>
                </el-table>
              </div>
            </el-dialog>
          </div></td>
        </tr>
      </table>
    </div>

    <h3 :class="$style.title">누구친 정보</h3>
    <div class="el-table el-table--fit el-table--border" :class="$style.tbl">
      <el-table :data="info.userInvitees">
        <el-table-column property="id" label="번호" width=70></el-table-column>
        <el-table-column label="등록일">
          <template scope="scope">{{scope.row.invitee.createdAt | moment('lll') }}</template>
        </el-table-column>
        <el-table-column property="name" label="이름" width=200></el-table-column>
        <el-table-column label="휴대폰">
          <template scope="scope">
            {{scope.row.invitee.phone.substr(0,3)}}-{{scope.row.invitee.phone.substr(4,4)}}-{{scope.row.invitee.phone.substr(7,4)}}
          </template>
        </el-table-column>
        <el-table-column label="누구친 로그인">
          <template scope="scope" v-if="scope.row.invitee.logined">
            {{scope.row.invitee.loginedAt | moment('lll')}}
          </template>
        </el-table-column>
      </el-table>
    </div>

    <h3 :class="$style.title">관리</h3>
    <div class="el-table el-table--fit el-table--border">
      <table cellspacing="0" cellpadding="0" border="0" width="1000" :class="$style.box">
       <tr>
         <th><div class="cell">회원등급</div></th>
         <td><div class="cell" :id="$style.status">
           <el-form :model="statusForm" ref="statusForm" @submit.native.prevent="status()">
             <el-radio-group v-model="statusForm.status">
               <el-radio label="general">일반</el-radio>
               <el-radio label="good">우수</el-radio>
               <el-radio label="warnning">주의</el-radio>
             </el-radio-group>
             <el-button type="primary" native-type="submit">확인</el-button>
           </el-form>
         </div></td>
       </tr>
       <tr>
         <th><div class="cell">메모</div></th>
         <td><div class="cell" :id="$style.memo">
           <el-form :model="memoForm" ref="memoForm" @submit.native.prevent="memo()">
               <el-input type="textarea" v-model="memoForm.memo"></el-input>
               <el-button type="primary" native-type="submit">입력</el-button>
          </el-form>
         </div></td>
       </tr>
      </table>
    </div>

    <div :id="$style.buttons">
      <router-link to="/users/active" tag="el-button">목록으로</router-link>
      <router-link to="/operation/notes" tag="el-button">메시지작성</router-link>
    </div>
  </div>
</template>

<script>
import _ from "lodash"

export default {
layout: "authorized",
validate: ({
params,
}) => /^\d+$/.test(params.id),

async asyncData({
app, params,
}) {
const info = await app.$axios.$get(`/users/${params.id}`)
const usinghistories = await app.$axios.$get("/user/usinghistories/")

const filteredUsinghistories = _.slice(_.cloneDeep(usinghistories), 0, 10)
info.filteredbillingHistories = _.slice(_.cloneDeep(info.billingHistories), 0, 10)

const memoForm = {
memo: _.get(info.userInformation, "memo", ""),
}
const statusForm = {
status: _.get(info.userInformation, "status", ""),
}

/* eslint object-curly-newline: ["error", "always"] */
/* eslint-env es6 */

return {
info, usinghistories, memoForm, statusForm, filteredUsinghistories,
}
},
data() {
return {
itemForm: {
stamp: 0,
type: "add",
},
subscriptionForm: {
period: [],
},
dialogItemVisible: false,
dialogDateVisible: false,
dialogStampVisible: false,
dialogBillingVisible: false,
}
},
computed: {
subscriptionMonths() {
return Math.round(this.$moment(this.info.item.subscriptionEndedAt).diff(this.$moment(this.info.item.subscriptionStartedAt), "months", true))
},
},
methods: {
item() {
this.$refs.itemForm.validate(async (isValid) => {
if (!isValid) {
return
}
try {
await this.$axios.$put(`/users/${this.$route.params.id}/item`, this.itemForm)

this.$router.replace("/reload")
} catch (error) {
this.$notify({
type: "error",
message: error,
})
}
})
},
subscription() {
this.$refs.subscriptionForm.validate(async (isValid) => {
if (!isValid) {
return
}
try {
const cloned = _.cloneDeep(this.subscriptionForm)

/* eslint-disable prefer-destructuring */
cloned.subscriptionStartedAt = cloned.period[0]
cloned.subscriptionEndedAt = cloned.period[1]
/* eslint-enable prefer-destructuring */
delete cloned.period

await this.$axios.$put(`/users/${this.$route.params.id}/item`, cloned)

this.$router.replace("/reload")
} catch (error) {
this.$notify({
type: "error",
message: error,
})
}
})
},
status() {
this.$refs.statusForm.validate(async (isValid) => {
if (!isValid) {
return
}
try {
await this.$axios.$put(`/users/${this.$route.params.id}/status`, this.statusForm)

this.$router.push(`/user/${this.$route.params.id}`)

this.$notify.success({
message: "등급이 수정되었습니다",
})
} catch (error) {
this.$notify({
type: "error",
message: error,
})
}
})
},
memo() {
this.$refs.memoForm.validate(async (isValid) => {
if (!isValid) {
return
}
try {
await this.$axios.$put(`/users/${this.$route.params.id}/memo`, this.memoForm)

this.$router.push(`/user/${this.$route.params.id}`)

this.$notify.success({
message: "메모가 수정되었습니다",
})
} catch (error) {
this.$notify({
type: "error",
message: error,
})
}
})
},
},
}
</script>

<style lang="scss" module>
.container {
  table {
    width: 100%;
  }
}

:global(.content) {
  padding: 10px 20px;
}

.title {
  margin-top: 20px;
}

.item {
  th {
    width: 150px;
  }
  button {
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

.tbl {
  table th, td {
    text-align: center
  }
  margin-top: 10px;
  text-align: center;
}

.scroll {
  height: 250px;
  overflow: auto;
}

.radio {
  vertical-align: middle;
}

#memo {
  textarea {
    margin-top: 5px;
    margin-bottom: 5px;
  }
    :global(.el-textarea__inner) {
    width: 88%;
    display: inline;
    margin-right: 40px;
    vertical-align: middle;
  }

  :global(.el-textarea) {
    width: 88%;
    display: inline;
  }

  :global(.cell) {
    margin-top: 9px;
    margin-bottom: 9px;
  }
}

#stamp {
  margin-left: 50px;
  margin-right: 10px;
}

#status button {
  margin-left: 30px;
}

#buttons {
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
</style>
