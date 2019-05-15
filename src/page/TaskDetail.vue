<template>
<div class="lv-tabcontol-content lv-taskdetail-component">
    <h1>taskdetail:{{id}}</h1>
</div>
</template>

<script>
export default{
    computed:{
        id(){
            return this.$route.params.id;
        }
    }
}
</script>

<style>
</style>