<template>
<div class="lv-function-item">
    <div class="lv-function-item-icon">
        <slot name="icon"></slot>
    </div>
    <div class="lv-function-item-panel">
        <slot name="panel"></slot>
    </div>
</div>
</template>

<script>
export default{

}
</script>

<style>
    .lv-function-item-panel{
        display:none;
        width:200px;
        background-color:#fff;
    }

    .lv-function-item:hover > .lv-function-item-panel{
        display:block;
        position:relative;
        margin-top:65px;
        margin-left:-160px;
    }
</style>