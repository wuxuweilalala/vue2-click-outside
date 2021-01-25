<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item label="用户名" props="username">
                <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" props="password">
                <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <button @click="submitForm">提交表单</button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import elForm from './el-form'
    import elFormItem from './el-form-item'
    import elInput from './el-form-input'
    export default {
        name: "myform",
        components:{
            elForm,elFormItem,elInput
        },
        data(){
            return {
                ruleForm:{
                    username:'xxx',
                    password:"qqq"
                },
                rules:{
                    username:[
                        {
                            required:true,message:'请输入用户名'
                        },
                        {
                            min:3,max:5,message:'长度在 3 到 5 个字符'
                        }
                    ],
                    password: [{required: true,message:'请输入密码'}]
                }
            }
        },
        methods:{
            submitForm(formName){
                this.$refs['ruleForm'].validate(valid=>{
                    if(valid) {
                        alert('submit!')
                    }else {
                        console.log('error');
                        return false
                    }
                })
            }
        },
        mounted() {
            window.my = this.$data
        }
    }
</script>

<style scoped>

</style>