<template>
<div class="lv-left-sub-menu-item">
    <div class="lv-left-sub-menu-item-icon" :class="item.icon"></div>
    <div class="lv-left-sub-menu-item-title">{{item.title}}</div>
</div>
</template>

<script>
export default {
    props:["item"]
}
</script>

<style>
.lv-left-sub-menu-item{
    width:100%;
    position:relative;
}

.lv-left-sub-menu-item-icon{
    display:inline-block !important;
    width:60px;
    height:30px;
    line-height:30px !important;
    vertical-align:middle;
    text-align:center;
    font-size:20px !important;
}

.lv-left-sub-menu-item-title{
    display:inline-block ;
    width:calc(200px - 60px);
    height:30px;
    line-height:30px;
    vertical-align:middle;
    text-align:left;
    font-size:20px;
    font-weight:bolder;
}
</style>