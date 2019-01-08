<template>
    <div  >
        <div ref="msgDiv">{{msg}}</div>
        <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
        <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
        <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
        <button @click="changeMsg">
            Change the Message
        </button>
        <input type="button" value="123" />
    </div>

</template>

<script>
    export default {
        name: "Recommend",
        data:()=>{
            return {
                msg: 'Hello Vue.',
                msg1: '',
                msg2: '',
                msg3: '',

            }
        },
        methods:{
            changeMsg() {
                this.msg = "Hello world."  //虽然改变了msg的数值，但是dom的数据没有更新
                this.msg1 = this.$refs.msgDiv.innerHTML //此时获取的还是未更新的数据
                this.$nextTick(() => {
                    this.msg2 = this.$refs.msgDiv.innerHTML  //这个是获取更新dom后的数据，就是hello world
                })
                this.msg3 = this.$refs.msgDiv.innerHTML //此时的dom还没有更新
            }
        },
    }

</script>

<style scoped>

</style>