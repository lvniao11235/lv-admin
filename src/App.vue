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
        <LMenu></LMenu>
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
      bfold:false
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
