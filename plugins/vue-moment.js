import moment from 'moment'
import Vue from 'vue'
import vueMoment from 'vue-moment'

import 'moment/locale/ko'

moment.updateLocale('ko', {
  longDateFormat: {
    LTS: 'HH:mm:ss',
    LL: 'YYYY년 MMMM',
    l: 'YY-MM-DD',
    ll: 'YY-MM-DD (ddd)',
    lll: 'l LTS',
  },
})

Vue.use(vueMoment, { moment })
