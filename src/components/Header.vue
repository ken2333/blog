<template>
    <el-row >
        <el-col :span="5" :offset="9">
            <el-menu   class="el-menu-demo" mode="horizontal" :router=true>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/hot">热点</el-menu-item>
                <el-menu-item index="/3" >写博客</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="3" :offset="5"  >
            <el-button-group  v-if="show" >
            <el-button type="primary" plain size="small"
                       @click="dialogTableVisible=!dialogTableVisible" >登录</el-button>
            <el-button type="success" plain   size="small"
                       @click="redirectTO('/regist')">注册</el-button>
            </el-button-group>
            <el-menu  class="el-menu2" mode="horizontal" :router=true v-if="!show">
                <el-submenu index="4"  >
                    <template slot="title">欢迎{{username}}  </template>
                    <el-menu-item index="/regist" >个人中心</el-menu-item>
                    <el-menu-item index="/" @click="loginout" >注销</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
        <el-dialog title="登录界面"  :visible.sync="dialogTableVisible"  width="40%">
            <el-row>
                <el-col   :span="20">
            <el-form label-pomodalsition="left" label-width="90px">
                <el-form-item label="用户名"  >
                    <el-input  type="text"  v-model="form.username"  autofocus="true" ></el-input>
                </el-form-item>
                <el-form-item label="密码" >
                    <el-input  type="password"  v-model="form.password"  @keyup.native.enter="loginto"  ></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="loginto" >登录</el-button>
                    <el-button @click="regist()">注册</el-button>
                </el-form-item>
            </el-form>
                </el-col>
            </el-row>
        </el-dialog>
    </el-row>
</template>

<script>
    export default {
        name: "Header",
        data:function () {
            return {
                username:"   ",
                dialogTableVisible:false,
                form:{
                    username:"",
                    password:""
                },
                show:true
            }
        },
        methods: {
            loginto:function () {
                if((this.form.username=="sun")&&(this.form.password=="123") )
                {
                    this.username=this.form.username;
                    console.log(this.form.username)
                    this.setCookie("username",this.form.username,7);
                    this.show=false;
                    this.dialogTableVisible=false;
                }
                else
                {
                    alert("登录失败!")
                }
                
            },
            regist:function () {
                this.dialogTableVisible=!this.dialogTableVisible;
                this.redirectTO("/regist");
            },
            loginout:function () {

                document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
                this.show=true;
            }
        },
        created:function () {
            var name = "username=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++)
            {
                var c = ca[i].trim();
                if (c.indexOf(name)==0)
                {
                    this.username=c.substring(name.length,c.length);
                    this.show=false;
                }
            }

        }
    }
</script>

<style scoped>
     .el-menu-demo >.el-menu-item{
        font-family:"微软雅黑";
        font-size: 18px;
    }
     .el-menu2 >.el-menu-item{
        font-family:"微软雅黑";
        font-size: 10px;
    }

</style>