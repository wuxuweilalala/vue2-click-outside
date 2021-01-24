<template>
  <div id="app">
    <vueLazyLoad />
  </div>
</template>

<script>
  import clickOutSide from './components/click-outside'
  import vueLazyLoad from './components/vue-lazyload'
  export default  {
    components:{
      clickOutSide,
      vueLazyLoad
    }
  }
</script>