<template>
    <div>
        <ul>
            <li v-for="(item,index) in imgs" :key="index">
                <img v-lazy="item" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios';
    import VueLazyload from './vue-lazyload.js';
    import logo from '../assets/logo.png'
    Vue.use(VueLazyload,{
        loading:logo,
        preload:1.2
    })
    export default {
        name: "vue-lazyload",
        data() {
            return {
                imgs: []
            }
        },
        mounted() {
            axios.get('http://localhost:8003/lessons/list').then(res => {
                this.imgs = res.data.data.list.map(item => item.poster)
            })
        }
    }
</script>

<style scoped>

</style>