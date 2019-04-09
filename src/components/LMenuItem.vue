<template>
<div class="lv-lmenu-item" ref="menuitem" :menu-type="menutype" :class="{'lv-selected':bselected, 'lv-hover':bhover}" 
    @click="selected()" @mouseenter="mouseEnter" @mouseleave="mouseLeave" >
    <div class="lv-lmenu-item-title">
        <div class="lv-lmenu-highlight"></div>
        <div class="lv-lmenu-item-icon" :class="item.icon"></div>
        <div class="lv-lmenu-item-text">
            {{item.title}}
            <div v-if="hasSubMenu" class="lv-lmenu-item-collapse fa"
                :class="{'fa-angle-down':collapse, 'fa-angle-up':!collapse}"></div>
        </div>
    </div>
    <LMenu :menutype="'lv-sub-lmenu'" :items="item.items" v-if="hasSubMenu"></LMenu>
</div>
</template>

<script>
export default{
    props:["item", "menutype"],
    data:function(){
        return {
            bselected:false,
            bhover:false
        }
    },
    computed:{
        collapse(){
            if(this.menutype == 'lv-top-lmenu'){
                return this.bselected || this.bhover;
            } else {
                return  this.bselected;
            }
        },
        hasSubMenu(){
            return this.item.items && this.item.items.length > 0;
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
            if(this.menutype == 'lv-top-lmenu'){
                this.menuEventBus.$emit("topmenuSelectedChanged", this.item.title);
            } else {
                this.menuEventBus.$emit("submenuSelectedChanged", this.item.title);
            }
        },
        topmenuSelectedChnaged(title){
            this.bselected = !(title != this.item.title)
        },
        submenuSelectedChnaged(title){
            this.bselected = !(title != this.item.title)
        }
    },
    inject:["menuEventBus"],
    created(){
        if(this.menutype == 'lv-top-lmenu'){
            this.menuEventBus.$on("topmenuSelectedChanged", this.topmenuSelectedChnaged);
        } else {
            this.menuEventBus.$on("submenuSelectedChanged", this.submenuSelectedChnaged);
        }
    },
    beforeCreate(){
        this.$options.components.LMenu = ()=>import('./LMenu.vue')
    },
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

.lv-lmenu-item-collapse{
    float:right;
    width:40px;
    height:40px;
    line-height:40px !important;
    vertical-align:middle;
    text-align:center;
    font-size:30px !important;
}

div[menu-type='lv-sub-lmenu'] .lv-lmenu-item-collapse,
div[menu-type="lv-sub-lmenu"] .lv-lmenu-item-icon,
div[menu-type="lv-sub-lmenu"] .lv-lmenu-item-text{
    height:30px;
    line-height:30px !important;
    font-size:20px !important;
}

div[menu-type="lv-sub-lmenu"]{
    display:none;
}

div[menu-type="lv-top-lmenu"].lv-hover > .lv-lmenu > div[menu-type="lv-sub-lmenu"],
div[menu-type="lv-top-lmenu"].lv-selected > .lv-lmenu > div[menu-type="lv-sub-lmenu"],
div[menu-type="lv-sub-lmenu"].lv-selected > .lv-lmenu > div[menu-type="lv-sub-lmenu"]{
    display:block;
}

</style>