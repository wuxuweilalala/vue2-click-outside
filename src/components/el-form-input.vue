<template>
    <div>
        <input type="text" :value="value" @input="handlerInput">
    </div>
</template>

<script>
    export default {
        name: "el-form-input",
        props:{
            value:String
        },

        methods:{
            handlerInput(e){
                this.$emit('input',e.target.value)
                this.$dispatch('el-form-item','changeValue')
            }
        }
    }
</script>

<style scoped>

</style>