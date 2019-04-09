<template>
  <div id="app" ref="container" class="lv-container" 
    :class="[{'lv-fold':fold}, skin]">
    <TopSection>
    </TopSection>
    <LeftSection>
      <div slot="menu">
        <LMenu :items="items" :menutype="'lv-top-lmenu'"></LMenu>
      </div>
    </LeftSection>
    <CenterSection></CenterSection>
  </div>
</template>

<script>
import TopSection from './components/TopSection'
import LeftSection from './components/LeftSection'
import CenterSection from './components/CenterSection'
import LMenu from './components/LMenu'
import { mapState} from "vuex"

export default {
  name: 'app',
  data:function(){
    return {
      items:[
                {icon:'fa fa-address-book', title:'book',
                    items:[
                        {icon:'fa fa-circle-o', title:'book1',
                            items:[
                                {icon:'fa fa-circle-o', title:'book11'},
                                {icon:'fa fa-circle-o', title:'book12'},
                                {icon:'fa fa-circle-o', title:'book13'},
                        ]},
                        {icon:'fa fa-circle-o', title:'book2',
                            items:[
                                {icon:'fa fa-circle-o', title:'book21'},
                                {icon:'fa fa-circle-o', title:'book22'},
                                {icon:'fa fa-circle-o', title:'book23'},
                        ]},
                        {icon:'fa fa-circle-o', title:'book3'},
                    ]
                },
                {icon:'fa fa-address-card', title:'card'},
                {icon:'fa fa-bandcamp', title:'band',
                    items:[
                        {icon:'fa fa-circle-o', title:'band1'},
                        {icon:'fa fa-circle-o', title:'band2'},
                        {icon:'fa fa-circle-o', title:'band3'},
                    ]
                },
                {icon:'fa fa-address-card', title:'card2'},
            ]
    }
  },
  computed:{
        ...mapState({
            fold: state=>state.config.fold,
            currentSkin: state=>state.config.currentSkin
        }),
        skin(){
          return this.currentSkin.classname;
        }
  },
  components: {
    TopSection, LeftSection, CenterSection, LMenu
  },
  methods:{
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  font-family:'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
html, body{
  width:100%;
  height:100%;
  position:relative;
  background-color:#ecf0f5;
}
#app {
  width:100%;
  height:100%;
}

.lv-skin-blue .lv-left-section,
.lv-skin-blue [menu-type='lv-top-lmenu'],
.lv-skin-blue [menu-type='lv-top-lmenu'] > .lv-lmenu-item-title > .lv-lmenu-item-text{
  background-color:#222d32;
  color:#b8c7ce;
}

.lv-skin-blue [menu-type='lv-top-lmenu'] .lv-lmenu{
  background-color:#2c3b41;
}

.lv-skin-blue [menu-type='lv-top-lmenu'].lv-selected,
.lv-skin-blue [menu-type='lv-top-lmenu'].lv-hover{
  color:#fff;
}

.lv-skin-blue [menu-type='lv-top-lmenu'].lv-selected > .lv-lmenu-item-title > .lv-lmenu-highlight,
.lv-skin-blue [menu-type='lv-top-lmenu'].lv-hover > .lv-lmenu-item-title > .lv-lmenu-highlight{
  background-color:#3c8dbc;
  color:#fff;
}

.lv-skin-blue .lv-logo{
  background-color:#367fa9;
  color:#fff;
}

.lv-skin-blue .lv-function{
  background-color:#3c8dbc;
  color:#fff;
}

.lv-skin-blue .lv-user-panel-profile{
  background-color:#3c8dbc;
  color:#fff;
}

.lv-skin-green .lv-left-section,
.lv-skin-green [menu-type='lv-top-lmenu'],
.lv-skin-green [menu-type='lv-top-lmenu'] > .lv-lmenu-item-title > .lv-lmenu-item-text{
  background-color:#f9fafc;
  color:#333;
}

.lv-skin-green [menu-type='lv-top-lmenu'] .lv-lmenu{
  background-color:#f4f4f5;
}

.lv-skin-green [menu-type='lv-top-lmenu'].lv-selected,
.lv-skin-green [menu-type='lv-top-lmenu'].lv-hover{
  color:#444;
}

.lv-skin-green [menu-type='lv-top-lmenu'].lv-selected > .lv-lmenu-item-title > .lv-lmenu-highlight,
.lv-skin-green [menu-type='lv-top-lmenu'].lv-hover > .lv-lmenu-item-title > .lv-lmenu-highlight{
  background-color:#f4f4f5;
  color:#777;
}

.lv-skin-green .lv-logo{
  background-color:#008d4c;
}

.lv-skin-green .lv-function{
  background-color:#00a65a;
}
</style>
