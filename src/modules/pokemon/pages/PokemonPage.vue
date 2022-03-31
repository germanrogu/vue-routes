<template>
    <h1>Pokemon page</h1>
    <span>{{id}}</span>
</template>

<script>
export default {
    props:{
        id:{
            type:Number,
            required:true,
        }
    },
    data(){
        return{
        }
    },
    created() {
    //    const {id} = this.$route.params
    }
}
</script>