<template>
    <div :class="$style.container">
    <h3 :class="$style.title">기본정보</h3>
    <nuxt-link :to="`https://play.google.com/store/apps/details?id=com.whoclient`"><el-button>안드로이드마켓</el-button></nuxt-link>
    <nuxt-link :to="`https://itunes.apple.com/us/app/%EB%88%84%EA%B5%B4%EA%B9%8C/id1288404693?l=ko&ls=1&mt=8`"><el-button>앱스토어</el-button></nuxt-link>
    </div>
</template>
