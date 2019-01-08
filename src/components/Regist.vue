<template>
    <el-row >
        <el-col :span="8" :offset="7">
            <el-form label-position="left" label-width="110px" :model="form" :rules="rules" status-icon
                     ref="form">
                <el-form-item label="用户名" prop="username">
                    <el-input  type="text"  v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input  type="password"  v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item label="再次输入密码"  prop="check">
                    <el-input type="password"  v-model="form.password2" ></el-input>
                </el-form-item>
                <el-form-item label="电子邮件"  prop="email">
                    <el-input type="text"  v-model="form.email" ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('form')">提交</el-button>
                    <el-button @click="resetForm('form')">重置</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Regist",
        data:function () {
            var checkpass=(rule, value, callback)=>
            {

                if (this.form.password2 === '') {
                    callback(new Error('请再次输入密码'));
                } else if (this.form.password2 !== this.form.password) {

                    callback(new Error('两次输入密码不一致!'));
                } else if(this.form.password2.length>15||this.form.password2.length<6) {
                    callback("密码长度在6-15之间");
                } else {
                    callback();
                }
            };
            return {
                form:{
                    username:"",
                    password:"",
                    password2:"",
                    eamil:"",
                },
                rules:{
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                        {required: true,pattern:/^\w+$/,message:"只支持英文字母和数字",trigger: 'blur'}
                    ],
                    check:[
                        {   validator:checkpass,trigger:"blur"},

                    ],
                    password:[
                        {required:true,message:'请输入密码',trigger:"blur"},
                        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
                    ],
                    email:[
                        {required:true,message:"请填写邮箱",trigger:"blur"},
                        { type:"email",trigger:"blur",message:"请输入正确的邮箱地址!"}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>