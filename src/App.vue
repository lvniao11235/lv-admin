<template>
  <div id="app" ref="container" class="lv-container" 
    :class="{'lv-fold':bfold}">
    <TopSection>
      <div slot="header">
        <button @click="fold">Fold</button>
      </div>
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

export default {
  name: 'app',
  data:function(){
    return {
      bfold:false,
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
  components: {
    TopSection, LeftSection, CenterSection, LMenu
  },
  methods:{
    fold(){
      this.bfold = !this.bfold
    }
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html, body{
  width:100%;
  height:100%;
  position:relative;
}
#app {
  width:100%;
  height:100%;
}
</style>
