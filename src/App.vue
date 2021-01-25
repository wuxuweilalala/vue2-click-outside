<template>
  <div id="app">
    <MyForm ></MyForm>
  </div>
</template>

<script>
  import clickOutSide from './components/click-outside'
  import vueLazyLoad from './components/vue-lazyload.vue'
  import MyForm from "./components/form";
  export default  {
    components:{
      clickOutSide,
      vueLazyLoad,
      MyForm
    }
  }
</script>