<template>
<div class="lv-lmenu-item" :class="{'lv-selected':bselected, 'lv-hover':bhover}" 
    @click="selected" @mouseenter="mouseEnter" @mouseleave="mouseLeave" >
    <div class="lv-lmenu-item-title">
        <div class="lv-lmenu-highlight"></div>
        <div class="lv-lmenu-item-icon" :class="item.icon"></div>
        <div class="lv-lmenu-item-text">
            {{item.title}}
        </div>
    </div>
</div>
</template>

<script>
export default{
    props:["item"],
    data:function(){
        return {
            bselected:false,
            bhover:false
        }
    },
    methods:{
        mouseEnter(){
            this.bhover = true;
        },
        mouseLeave(){
            this.bhover = false;
        },
        selected(){
            this.bselected = true;
            this.menuEventBus.$emit("selectedChanged", this.item.title);
        },
        selectedChnaged(title){
            this.bselected = !(title != this.item.title)
        }
    },
    inject:["menuEventBus"],
    created(){
        this.menuEventBus.$on("selectedChanged", this.selectedChnaged);
    }
}
</script>

<style>
.lv-lmenu-item-title{
    width:100%;
    height:40px;
    line-height:40px !important;
    vertical-align:middle;
    text-align:center;
    font-size:30px !important;
    position:relative;
}

.lv-lmenu-highlight,
.lv-lmenu-item-icon,
.lv-lmenu-item-text{
    display:inline-block !important;
    float:left;
}

.lv-lmenu-highlight{
    width:3px;
    height:100%;
}

.lv-selected .lv-lmenu-highlight,
.lv-hover .lv-lmenu-highlight{
    background-color:red;
}
.lv-lmenu-item-icon{
    width:54px;
    height:40px;
    margin-right:3px;
    line-height:40px !important;
    vertical-align:middle;
    text-align:center;
    font-size:30px !important;
}

.lv-lmenu-item-text{
    width:calc(100% - 60px);
    text-align:left;
}

.lv-fold .lv-lmenu-item-title{
    overflow:hidden;
}

</style>