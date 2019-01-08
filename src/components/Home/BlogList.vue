<template>
     <!--通过使用指令的方式来使用loading组件-->
    <div v-loading="loading"   >
        <ul v-for="user in data">
            <router-link  :to="{path: 'blogDetail_' + user.id}">{{user.name}}</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "BlogList",
        data:function()
        {
            return {
                path:"null",
                data:[],
                loading:false,
            }
        },
        methods:{
            getdata:function () {
              let path=  this.$router.history.current.params.pathMatch;
              this.path=path;
              this.$http.get("http://jsonplaceholder.typicode.com/users").then(value=>{
                 this.data=value.body;
                 //关闭加载的动画
                  this.$loading().close();
              })
            }
        },
        created:function () {
           // console.log(this.$router.history.current.params)
            this.getdata();
        } ,
        /*监控*/
        watch:{
            '$route': 'getdata'
        }
    }
</script>

<style scoped>

</style>