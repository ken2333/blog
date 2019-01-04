<template>
<div>
  <input type="button" @click="test" value="test"/>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  },
    methods:{
      test:function () {
          alert("123")
          console.log(this.usersession)
      }
    }
}
</script>
