<template>
  <div>
    <el-form @submit.native.prevent="filter()">
      <div class="el-table el-table--fit el-table--border compact">
        <table :id="$style.filterTable" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <th scope="row">
              <div class="cell">결제일</div>
            </th>
            <td>
              <div class="cell">
                <el-col :span="15">
                  <el-button type="primary" @click="periodButton()">전체</el-button>
                  <el-button type="primary" @click="periodButton(1)">오늘</el-button>
                  <el-button type="primary" @click="periodButton(2)">어제</el-button>
                  <el-button type="primary" @click="periodButton(3)">최근1주</el-button>
                  <el-button type="primary" @click="periodButton(4)">이번달</el-button>
                  <el-button type="primary" @click="periodButton(5)">지난달</el-button>
                </el-col>
                <el-col :span="6">
                    <el-date-picker type="daterange" placeholder="기간설정" size="small"
                    v-model="form.dateValue">
                    </el-date-picker>
                </el-col>
              </div>
            </td>

            <td rowspan="3">
              <div class="cell" :id="$style.inquiry">
                <el-button type="primary" native-type="submit">조회</el-button>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <div class="cell">구분</div>
            </th>
            <td>
              <div class="cell">
                <el-col>
                  <el-form-item label="구매아이템" label-width="80px">
                    <el-radio-group v-model="form.selectedItem">
                      <el-radio class="radio" label="1">전체</el-radio>

                      <el-radio class="radio" label="2">우표</el-radio>
                      <el-select v-model="form.stamp"
                      placeholder="우표" size="small" :disabled="form.selectedItem!=2">
                      <el-option :value="null" :label="'전체'"></el-option>
                      <el-option :value="'33매'" :label="'33매'"></el-option>
                      <el-option :value="'105매'" :label="'105매'"></el-option>
                      <el-option :value="'220매'" :label="'220매'"></el-option>
                      <el-option :value="'600매'" :label="'600매'"></el-option>
                      <el-option :value="'1300매'" :label="'1300매'"></el-option>
                      </el-select>

                      <el-radio class="radio" label="3">이용권</el-radio>
                      <el-select v-model="form.subscription"
                      placeholder="이용권" size="small" :disabled="form.selectedItem!=3">
                      <el-option :value="null" :label="'전체'"></el-option>
                      <el-option :value="'구독권 30일권'" :label="'구독권 30일권'"></el-option>
                      <el-option :value="'구독권 60일권'" :label="'구독권 60일권'"></el-option>
                      <el-option :value="'구독권 90일권'" :label="'구독권 90일권'"></el-option>
                      <el-option :value="'구독권 180일권'" :label="'구독권 180일권'"></el-option>
                      </el-select>
                    </el-radio-group>
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
                    <el-input size="small" v-model="form.query">
                      <el-select :id="$style.category" slot="prepend" v-model="form.category">
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
      <div :id="$style.total">총 {{transactionCount.length}}건</div>

      <div class="el-table el-table--fit el-table--border compact">
        <table cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed;word-break:break-all;"
         v-for="transaction in transactionlist" :key="transaction.id"
         :id="$style.listTable">
          <tr>
            <th width="50"><div class="cell">선택</div></th>
            <th width="80"><div class="cell">No</div></th>
            <th width="160"><div class="cell">구매번호</div></th>
            <th width="170"><div class="cell">이름(아이디)</div></th>
            <th width="150"><div class="cell">휴대폰</div></th>
            <th width="150"><div class="cell">결제일시</div></th>
            <th width="130"><div class="cell">구매아이템</div></th>
            <th width="130"><div class="cell">금액</div></th>
            <th width="100"><div class="cell">구매횟수</div></th>
            <th width><div class="cell">환불</div></th>
          </tr>
          <tr>
            <td rowspan="2">
             <el-checkbox-group v-model="selection" :max="1">
              <el-checkbox :label="transaction.id"></el-checkbox>
            </el-checkbox-group>
            </td>
            <td rowspan="2"><div class="cell">{{transaction.id}}</div></td>
            <td><div class="cell">{{transaction.orderId}}</div></td>
            <td><div class="cell">
                <nuxt-link :to="`/user/${transaction.user.id}`">
                  {{transaction.user.name}}
                  <br>
                  ({{transaction.user.email}})
                </nuxt-link>
              </div></td>
            <td><div class="cell">
            {{String(transaction.user.phone).substr(0,3)}}-{{String(transaction.user.phone).substr(4,4)}}-{{String(transaction.user.phone).substr(7,4)}}</div></td>
            <td><div class="cell">{{transaction.createdAt | moment('lll')}}</div></td>
            <td><div class="cell">{{transaction.productName}}</div></td>
            <td><div class="cell">{{Number(transaction.price).toLocaleString()}}</div></td>
            <td><div class="cell">{{transaction.billingCount}}</div></td>
            <td><div class="cell" v-if="transaction.refunded===false">
                <el-button type="primary" size="small" @click="confirm(transaction)">완료</el-button>
                <el-dialog :visible.sync="visible">
                  <el-form @submit.native.prevent="refund(selectedTransaction)">
                    <div>해당 구매건을 '환불완료' 목록으로 이동시키겠습니까?</div>
                  <div>
                    <span slot="footer">
                      <el-button type="primary" native-type="submit" @click="visible=false">확인</el-button>
                      <el-button type="primary" @click="visible=false">취소</el-button>
                    </span>
                  </div>
                  </el-form>
                </el-dialog>
              </div>
              <div class="cell" v-else>
                {{transaction.refundedAt | moment('lll')}}
              </div>
            </td>
          </tr>
          <tr>
            <td><div class="cell">메모</div></td>
            <td colspan="7">
              <div class="cell" v-if="transaction.refunded===false">
                <el-form :model="memoForm" ref="memoForm" @submit.native.prevent="memo(transaction)">
                   <el-input type="textarea" :rows="1" size="small" v-model="transaction.memo"></el-input>
                   <el-button type="primary" native-type="submit">입력</el-button>
                </el-form>
              </div>
              <div class="cell" v-else>
                <el-form :model="refundMemoForm" ref="refundMemoForm" @submit.native.prevent="memo(transaction)">
                   <el-input type="textarea" :rows="1" size="small" v-model="transaction.refundMemo"></el-input>
                   <el-button type="primary" native-type="submit">입력</el-button>
                </el-form>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange"
    :current-page.sync="currentPage" :total="transactionCount.length">
    </el-pagination>

    <div :id="$style.downloadButtons">
      일괄삭제 : 선택한 구매건을
      <el-button @click="deleteTransaction(selection)"
       :disabled="!selection.length">삭제하기</el-button>
      <div>
      <el-button @click="download(false)">선택한 구매건 엑셀 다운로드</el-button>
      <el-button @click="download()">현재 화면 구매건 엑셀 다운로드</el-button>
    </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import moment from 'moment'
import csvStringify from 'csv-stringify'
import FileSaver from 'file-saver'

export default {
	layout: 'authorized',
	validate: ({ params }) => /^(:?payments|refunds)$/.test(params.status),

	async asyncData({
		app, route,
	}) {
		const params = {}
		if (route.params.status === 'refunds') {
			params.refunded = true
		}
		const transactionlist = await app.$axios.$get('/billingHistories', {
			params: _.assign(params, {
				limit: 10,
				page: 1,
			}),
		})

		const transactionCount = await app.$axios.$get('/billingHistories', {
			params: _.assign(params, {
				length: true,
			}),
		})

		const memoForm = {
			memo: _.get(transactionlist, 'memo', ''),
		}

		const refundMemoForm = {
			refundMemo: _.get(transactionlist, 'refundMemo', ''),
		}

		return {
			transactionCount, transactionlist, memoForm, refundMemoForm,
		}
	},

	data() {
		return {
			disabled: true,
			form: {
				selectedItem: '',
				stamp: '전체',
				subscription: '전체',
				query: '',
				category: 'name',
				fromDate: '',
				toDate: '',
				dateValue: [],
			},
			selection: [],
			refunded: true,
			memoForm: '',
			refundMemoForm: '',
			status: this.$route.params.status,
			visible: false,
			selectedTransaction: '',
			currentPage: 1,
		}
	},

	methods: {
		async filter() {
			const params = {}
			const {
				stamp, subscription, query, category, toDate, fromDate, dateValue,
			} = this.form
			if (this.status === 'refunds') {
				params.refunded = true
			}
			if (!_.isEmpty(_.compact(dateValue))) {
				/* eslint-enable prefer-destructuring */
				params.from = moment(dateValue[0]).format('YYYY-MM-DD')
				params.to = moment(dateValue[1]).format('YYYY-MM-DD')
				/* eslint-enable prefer-destructuring */
			}
			if (!_.isEmpty(query) && category === 'name') {
				params.name = query
			}
			if (!_.isEmpty(query) && category === 'email') {
				params.email = query
			}
			if (!_.isEmpty(query) && category === 'phone') {
				params.phone = query
			}
			if (stamp !== '전체') {
				params.product = stamp
			}
			if (subscription !== '전체') {
				params.product = subscription
			}
			if (!_.isEmpty(toDate) && !_.isEmpty(fromDate) && _.isEmpty(_.compact(dateValue))) {
				params.from = fromDate
				params.to = toDate
			}

			this.currentPage = 1

			params.limit = 10
			params.page = this.currentPage

			const filteredList = await this.$axios.$get('/billingHistories', {
				params,
			})

			const filteredCount = await this.$axios.$get('/billingHistories', {
				params: _.omit(params, ['limit', 'page']),
			})

			this.transactionlist = filteredList
			this.transactionCount.length = filteredCount.length
		},
		async download(isAll = true) {
			const selected = this.selection[0]
			const select = _.filter(this.transactionlist, o => o.id === selected)

			const list = isAll ? this.transactionlist : select
			const formatted = [['No', '구매번호', '이름', '아이디', '휴대폰', '결제일시', '구매아이템', '금액', '구매횟수', '환불내역']]

			formatted.push(...list.map(data => [
				data.id,
				data.orderId,
				data.user.name,
				data.user.email,
				data.user.phone,
				data.createdAt,
				data.productName,
				data.price,
				data.billingCount,
				data.refundedAt,
			]))

			const download = (error, output) => {
				const blob = new Blob(
					[output],
					{ type: 'text/plain;charset=utf-8' },
				)

				FileSaver.saveAs(
					blob,
					`billingHistories ${isAll ? 'selected' : 'filtered'} ${this.$moment().format('lll')}.csv`,
				)
			}

			csvStringify(formatted, download)
		},
		periodButton(params) {
			const today = moment().format('YYYY-MM-DD')

			switch (params) {
			case 1:
				this.form.fromDate = moment().add(-1, 'days').format('YYYY-MM-DD')
				this.form.toDate = today
				break
			case 2:
				this.form.fromDate = moment().add(-2, 'days').format('YYYY-MM-DD')
				this.form.toDate = today
				break
			case 3:
				this.form.fromDate = moment().add(-8, 'days').format('YYYY-MM-DD')
				this.form.toDate = today
				break
			case 4:
				this.form.fromDate = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')
				this.form.toDate = moment().startOf('month').format('YYYY-MM-DD')
				break
			case 5:
				this.form.fromDate = moment().subtract(2, 'months').startOf('month').format('YYYY-MM-DD')
				this.form.toDate = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD')
				break
			default:
				this.form.fromDate = undefined
				this.form.toDate = undefined
				break
			}
		},
		async handleCurrentChange() {
			const params = {}
			if (this.status === 'refunds') {
				params.refunded = true
			}
			const changeTransactionlist = await this.$axios.$get('/billingHistories', {
				params: _.assign(params, {
					limit: 10,
					page: this.currentPage,
				}),
			})
			this.transactionlist = changeTransactionlist
			return this.currentPage
		},

		confirm(selectedTransaction) {
			this.visible = true
			this.selectedTransaction = selectedTransaction
		},

		async refund(transaction) {
			try {
				this.refunded = { refunded: true }
				await this.$axios.$put(`/billingHistories/${transaction.id}`, this.refunded)
				this.$router.replace('/reload')
			} catch (error) {
				this.$notify({
					type: 'error',
					message: error,
				})
			}
		},

		async memo(transaction) {
			try {
				this.memoForm = { memo: transaction.memo }
				this.refundMemoForm = { refundMemo: transaction.refundMemo }
				if (transaction.refunded === false) { await this.$axios.$put(`/billingHistories/${transaction.id}`, this.memoForm) } else { await this.$axios.$put(`/billingHistories/${transaction.id}`, this.refundMemoForm) }
				this.$notify.success({
					message: '메모가 수정되었습니다.',
				})
				// this.$router.replace('/reload')
			} catch (error) {
				this.$notify({
					type: 'error',
					message: error,
				})
			}
		},

		async deleteTransaction(id) {
			try {
				await this.$axios.$delete(`/billingHistories/${id}`)
				this.$notify.success({
					message: '선택한 구매건이 삭제되었습니다.',
				})
				this.$router.replace('/reload')
			} catch (error) {
				this.$notify({
					type: 'error',
					message: error,
				})
			}
		},
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

#inquiry {
    text-align: center;
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

   :global(.el-option) {
    margin-right: 10px;
  }

  #category {
    width: 100px;
  }
}

#listTable {
  width: 100%;

  :global(.el-textarea__inner) {
    width: 85%;
    display: inline;
    margin-right: 40px;
    vertical-align: middle;
  }

  :global(.el-textarea) {
    width: 85%;
    display: inline;
  }

  :global(.cell) {
    margin-top: 9px;
    margin-bottom: 9px;
  }
}


#list {
  margin-top: $gutter-y;

  table th, td{
    text-align: center;
  }

  #total {
    margin-bottom: 20px;
  }
}

#downloadButtons {
  margin-top: $gutter-y;
}

:global(.el-checkbox__label) {
  display: none;
}
</style>

