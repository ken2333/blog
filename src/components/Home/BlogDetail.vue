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
                this.openFullScreen();
                this.html1=`<p>因为我不知道什么都就都执行了<br>
如果是 常规 的，执行 npm install stylus-loader css-loader style-loader --save-dev 安装依赖就行。<br>
如果是 less 的，执行 npm install less less-loader --save-dev 安装依赖就行。<br>
如果是 sass 的，执行 npm install sass sass-loader --save-dev 安装依赖就行。<br>
或者<br>
（$npm intall sass-loader --save ; $npm install node-sass --save）</p>`;
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
        text-align: center;
    }
</style>