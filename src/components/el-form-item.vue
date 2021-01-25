<template>
    <div>
        <label>{{label}}</label>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "el-form-item",
        props: {
            label: String,
            props: String
        },
        inject: ['elForm'],
        methods: {
            changeValue() {
                this.validate()
            },
            validate() {
                const newValue = this.elForm.model[this.props];
                const rule = this.elForm.rules[this.props];
                return true
                // async-validator
            }
        },
        mounted() {
            this.$on('changeValue', this.changeValue)
        }
    }
</script>

<style scoped>

</style>