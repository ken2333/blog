<template>
    <el-row :gutter="20">
        <el-col :span="5" :offset="7">
            <el-menu   class="el-menu-demo" mode="horizontal" :router=true>
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="hot">热点</el-menu-item>
                <el-menu-item index="3" >写博客</el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="1" :offset="6">
            <el-menu  class="el-menu2" mode="horizontal" :router=true>
                <el-submenu index="4"  >
                    <template slot="title">个人中心</template>
                    <el-menu-item index="4-1"  >登录</el-menu-item>
                    <el-menu-item index="/regist"  >注册</el-menu-item>
                    <el-menu-item index="4-3"  >注销</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>

    </el-row>
</template>

<script>
    export default {
        name: "Header"
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