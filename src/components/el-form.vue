<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "el-form",
        provide(){
          return {elForm: this}
        },
        props:{
            model:{
                type:Object
            },
            rules:{
                type:Object
            }
        },
        methods:{
            validate(cb){
                 const r =this.$broadcast('el-form-item').every(item=>item.validate());
                 cb(r)
            }
        },
        mounted() {
           // this.$broadcast('el-form-item','changeValue')
        }
    }
</script>

<style scoped>

</style>