import Vue from 'vue';
import moment from 'moment';

const momentFilter = Vue.options.filters.moment;

{
    const map = {
        good: { value: 'good', name: '우수' },
        general: { value: 'general', name: '일반' },
        warnning: { value: 'warning', name: '주의' },
    };

    // BUG: Giving default values doesn't work.
    Vue.filter('getUserStatus', ({ userInformation }, key) => {
        const status = map[(userInformation && userInformation.status)] || map.general;

        return key ? status[key] : status;
    });
}

Vue.filter('getUserStampsCount', (user) => {
    if (!user.item) {
        return 0;
    }

    return user.item.stamp;
});

Vue.filter('getUserPassInfo', (user) => {
    if (!(user.item && user.item.subscribed)) {
        return '00-00-00(0)';
    }

    const endDate = momentFilter(user.item.subscriptionEndedAt, 'l');
    const months = Math.round(moment(user.item.subscriptionEndedAt).diff(moment(user.item.subscriptionStartedAt), 'months', true));

    return `${endDate}(${months})`;
});
