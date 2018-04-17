<template>
  <div>
    <el-form
      @submit.native.prevent="inquiry(8)">
      <div class="el-table el-table fit el-table border compact">
        <table :id="$style.filterTable" cellspacing="0" cellpadding="0" border="0">
          <tr>
            <th scope="row">
              <div class="cell"> {{ tab.category }}</div>
            </th>

            <td>
              <div class="cell">
                <el-col :span="10">
                  <el-form-item>
                    <el-button type="primary" @click="inquiry(3)">{{ tab.firstFilter }}
                    </el-button>
                    <el-button type="primary" @click="inquiry(6)"> {{ tab.secondFilter }}
                    </el-button>
                    <el-button type="primary" @click="inquiry(7)">{{ tab.thirdFilter }}
                    </el-button>
                  </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item>
                    <el-col :span="12">
                      <el-date-picker v-model="frm.year" type="year" placeholder="년도 선택" size="small">
                      </el-date-picker>
                    </el-col>

                    <el-col :span="12">
                      <el-date-picker v-model="frm.month" format="MM" type="month" placeholder="월 선택" size="small">
                      </el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-col>

                <el-col :span="7" v-show="period === 'monthly'">
                  <el-form-item>
                    <el-col :span="2" my-text-center>~</el-col>

                    <el-col :span="9">
                      <el-date-picker v-model="till.year" type="year" placeholder="년도 선택" size="small">
                      </el-date-picker>
                    </el-col>

                    <el-col :span="9">
                      <el-date-picker v-model="till.month" format="MM" type="month" placeholder="월 선택" size="small">
                      </el-date-picker>
                    </el-col>
                  </el-form-item>
                </el-col>

                <el-col :span="2">
                  <el-form-item :id="$style.center">
                    <el-button type="primary" native-type="submit">조회</el-button>
                  </el-form-item>
                </el-col>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </el-form>

    <div :id="$style.list">
      <el-table :data="periodData" border show-summary :summary-method="getSummaries">
        <el-table-column label="날짜">
          <template scope="scope">
            {{ differDate(scope.row.date) }}
          </template>

        </el-table-column>
        <el-table-column label="결제건수">
          <el-table-column prop="stampCount" label="우표" width="110"/>
          <el-table-column prop="subscriptionCount" label="이용권" width="110"/>
          <el-table-column prop="allBillingCount" label="계" width="120"/>
        </el-table-column>

        <el-table-column label="결제금액">
          <el-table-column prop="stampSales" label="우표" width="110"/>
          <el-table-column prop="subscriptionSales" label="이용권" width="110"/>
          <el-table-column prop="allSales" label="계" width="120"/>
        </el-table-column>

        <el-table-column label="누구야">
          <el-table-column prop="usersCount" label="가입" width="100"/>
          <el-table-column prop="secedersCount" label="탈퇴" width="100"/>
        </el-table-column>

        <el-table-column label="누구친">
          <el-table-column prop="inviteesCount" label="등록" width="100"/>
          <el-table-column prop="lgoinInviteesCount" label="가입" width="100"/>
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
import _ from 'lodash'
import moment from 'moment'
import csvStringify from 'csv-stringify'
import FileSaver from 'file-saver'
import ElFormItem from '../../node_modules/element-ui/packages/form/src/form-item.vue'

export default {
	components: { ElFormItem },
	layout: 'authorized',
	validate: ({ params }) => /^(:?daily|monthly)$/.test(params.period),
	async asyncData({ app, route }) {
		const point = route.params.period
		const count = (point === 'daily') ? 7 : 3

		const periodData = await app.$axios.$get(`/stats/${point}`, {
			params: {
				count,
			},
		})

		return { periodData }
	},
	methods: {
		getToday() {
			return this.$moment().startOf('day')
		},
		getSummaries(param) {
			const { columns, data } = param
			const sums = []
			columns.forEach((column, index) => {
				if (index === 0) {
					sums[index] = '합계'
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
					sums[index] = ''
				}
			})

			return sums
		},

		async download(isAll = true) {
			const startDate = moment('2017-09')
			const nowDate = moment()

			const allList = await this.$axios.$get('/stats/users', {
				params: {
					year: startDate.year(),
					month: startDate.month() + 1,
					count: nowDate.diff(startDate, 'months') + 1,
				},
			})

			const list = isAll ? allList : this.periodData

			const formatted = [['날짜', '우표 결제건수', '이용권 결제건수', '계', '우표 결제금액', '이용권 결제금액', '계', '누구야 가입수', '누구야 탈퇴수', '누구친 등록수', '누구친 가입수']]

			formatted.push(...list.map(data => [
				moment(data.date).format('YY-MM-DD (ddd)'),
				data.stampCount,
				data.subscriptionCount,
				data.allBillingCount,
				data.stampSales,
				data.subscriptionSales,
				data.allSales,
				data.usersCount,
				data.secedersCount,
				data.inviteesCount,
				data.lgoinInviteesCount,
			]))

			const download = (error, output) => {
				const blob = new Blob(
					[output],
					{ type: 'text/plain; charset=utf-8' },
				)

				FileSaver.saveAs(
					blob,
					`userstatics ${isAll ? 'all' : 'filtered'} ${this.$moment().format('lll')}.csv`,
				)
			}

			csvStringify(formatted, download)
		},

		inquiry(params) {
			return (this.period === 'monthly') ? this.monthlyInquiry(params) : this.dailyInquiry(params)
		},

		dailyInquiry(params) {
			const flag = params === 3

			if (params < 8) {
				this.frm.year = moment().format('YYYY')
				this.frm.month = params === 6 ? moment().format('MM') : String(Number(moment().format('MM')) - 1)
			} else {
				this.frm.year = moment(this.frm.year).format('YYYY')
				this.frm.month = moment(this.frm.month).format('MM')
			}

			this.getAxiosData(flag)
		},

		monthlyInquiry(params) {
			this.frm.count = params

			if (params === 7) {
				this.frm.count = moment().format('MM')
			} else if (params === 8) {
				// 뒤에 년 월과 count 보내면 됨
				this.till.month = moment(this.till.month).format('MM')
				this.till.year = moment(this.till.year).format('YYYY')

				this.frm.month = moment(this.frm.month).format('MM')
				this.frm.year = moment(this.frm.year).format('YYYY')

				const till = moment([this.till.year, this.till.month])
				const frm = moment([this.frm.year, this.frm.month])

				this.frm.count = till.diff(frm, 'months') + 1
			}

			this.getAxiosData(true, params)
		},

		getAxiosData(flag = false, key1) {
			const params = {}

			if (flag) {
				params.count = this.frm.count
				params.year = (this.till.year) ? this.till.year : undefined
				params.month = (this.till.month) ? this.till.month : undefined
			} else {
				params.month = this.frm.month
				params.year = this.frm.year
				params.count = key1 === 4 ? this.frm.count : undefined
			}

			this.$axios.$get(`/stats/${this.period}`, {
				params,
			}).catch(error => Promise.reject(error))
				.then((res) => {
					this.periodData = res
				})
		},

		getQueryPeriod(res) {
			const till = moment([this.till.year, this.till.month])
			const value = _.filter(res, (time) => {
				moment(time.date).isBefore(moment(till))
			})
			console.log(value)
		},

		differDate(value) {
			const date = moment(value)
			return (this.period === 'daily') ? date.format('ll') : date.format('LL')
		},
	},
	mounted() {
		this.tab = (this.period === 'monthly') ? {
			category: '월간 통계',
			firstFilter: '최근 3개월',
			secondFilter: '최근 6개월',
			thirdFilter: '올해',
		} : {
			category: '일간 통계',
			firstFilter: '최근 1주',
			secondFilter: '이번달',
			thirdFilter: '지난달',
		}

		this.frm.year = moment().format('YYYY')
		this.frm.month = moment().format('MM')
	},
	data() {
		return {
			period: this.$route.params.period,

			filterOptions: {
				shortcuts: [
					{
						text: '최근1주',
						onClick: (picker) => {
							const start = this.getToday().subtract(6, 'day')
							const end = this.getToday()

							picker.$emit('pick', [start, end])
						},
					},
					{
						text: '이번달',
						onClick: (picker) => {
							const start = this.getToday().startOf('month')
							const end = this.getToday()

							picker.$emit('pick', [start, end])
						},
					},
					{
						text: '지난달',
						onClick: (picker) => {
							const start = this.getToday().subtract(1, 'month').startOf('month')
							const end = this.getToday().subtract(1, 'month').endOf('month').startOf('day')

							picker.$emit('pick', [start, end])
						},
					},
				],
			},

			frmSearch: {
				searchDateRange: [null, null],
			},
			// 상단 텍스트
			tab: {
				category: '',
				firstFilter: '',
				secondFilter: '',
				thirdFilter: '',
			},

			frm: {
				month: '',
				year: '',
				count: 7,
			},

			till: {
				month: '',
				year: '',
				count: '',
				count_gap: '',
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

    #center {
      text-align: center;
    }
  }

  #list {
    margin-top: $gutter-y;
  }

  #downloadButtons {
    margin-top: $gutter-y;
}
</style>
