<template>
<div class="lv-left-sub-menu">
    <LeftSubMenuItem v-for="item in items" :key="item.title"
        :item="item">
    </LeftSubMenuItem>
</div>
</template>

<script>
import LeftSubMenuItem from './LeftSubMenuItem'

export default {
    props:["items"],
    components:{
        LeftSubMenuItem
    }
}
</script>

<style>
.lv-left-sub-menu{
}
</style>