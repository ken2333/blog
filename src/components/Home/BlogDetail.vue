<template>
    <el-container>
        <el-header>Header</el-header>
        <el-main v-html="html1">Main</el-main>
    </el-container>
</template>

<script>
    export default {
        name: "BlogDetail",
        data:function () {
            return {
                html1:"",
            }
        },
        methods:{
            getdata:function () {
                this.html1=`<p >s12345</p>`;
                this.openFullScreen();
                this.$loading().close();
            },
            openFullScreen:function() {
                const loading = this.$loading({
                    lock: false,
                    text: 'Loading',
                    spinner: 'el-icon-loading',
                    background: 'rgba(0, 0, 0, 0.7)'
                });
            }
        },
        created:function () {
            this.getdata();
        },
        watch:{
            '$route': 'getdata'
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }
    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }
</style>