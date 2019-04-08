<template>
<div class="lv-left-menu-item" 
    @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <div class="lv-left-menu-item-title"  @click="collapse">
        <div class="lv-left-menu-item-icon" :class="item.icon"></div>
        <div class="lv-left-menu-item-text">
            {{item.title}}
            <div class="lv-menu-collapse fa"
                :class="{'fa-angle-down':bcollapse, 'fa-angle-up':!bcollapse}"
                v-show="showItems()">
            </div>
        </div>
    </div>
    <LeftSubMenu :items="item.items" 
        v-if="showItems()" v-show="showSubMenu()">
    </LeftSubMenu>
</div>
</template>

<script>
import LeftSubMenu from './LeftSubMenu'
import { mapState, mapMutations } from "vuex"

export default {
    props:["item"],
    components:{
        LeftSubMenu
    },
    data:function(){
        return {
            bcollapse:true
        }
    },
    computed:{
        ...mapState({
            currentMenu: state=>state.appState.currentMenu,
            hoverMenu: state=>state.appState.hoverMenu
        })
    },
    methods:{
        ...mapMutations({
            setCurrentMenu: "appState/setCurrentMenu",
            setHoverMenu: "appState/setHoverMenu"
        }),
        showItems(){
            return this.item.items && this.item.items.length>0;
        },
        collapse(){
            if(this.hoverMenu != this.item.title){
                this.bcollapse = !this.bcollapse;
            }
            this.menuEventBus.$emit("collapse", this.item.title);
            this.setCurrentMenu(this.item.title);
        },
        collapseChange(title){
            if(title != this.item.title){
                this.bcollapse = true;
            }
        },
        showSubMenu(){
            return !this.bcollapse;
        },
        mouseEnter(){
            this.setHoverMenu(this.item.title);
            this.menuEventBus.$emit("mouseenter", this.item.title);
        },
        mouseLeave(){
            this.setHoverMenu("");
            this.menuEventBus.$emit("mouseleave", this.item.title);
        },
        menuItemMouseLeave(){
            if(this.currentMenu != this.item.title){
                this.bcollapse = true;
            }
        },
        menuItemMouseEnter(){
            if(this.hoverMenu == this.item.title){
                this.bcollapse = false;
            }
        }
    },
    inject:["menuEventBus"],
    created(){
        this.menuEventBus.$on("collapse", this.collapseChange);
        this.menuEventBus.$on("mouseleave", this.menuItemMouseLeave);
        this.menuEventBus.$on("mouseenter", this.menuItemMouseEnter);
    }
}
</script>

<style>
.lv-left-menu-item{
    width:100%;
    position:relative;
}

.lv-left-menu-item-icon{
    display:inline-block !important;
    width:60px;
    height:40px;
    line-height:40px !important;
    vertical-align:middle;
    text-align:center;
    font-size:30px !important;
}

.lv-left-menu-item-text{
    display:inline-block ;
    width:calc(200px - 60px);
    height:40px;
    line-height:40px;
    vertical-align:middle;
    text-align:left;
    font-size:30px;
    font-weight:bolder;
}

.lv-menu-collapse{
    float:right;
    width:40px;
    text-align:center;
    height:40px;
    line-height:40px !important;
    vertical-align:middle;
}
</style>