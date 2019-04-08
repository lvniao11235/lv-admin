<template>
<div class="lv-left-menu">
    <LeftMenuItem v-for="item in items" :key="item.title"
        :item="item">
    </LeftMenuItem>
</div>
</template>

<script>
import LeftMenuItem from './LeftMenuItem'

export default {
    data:function(){
        return {
            items:[
                {icon:'fa fa-address-book', title:'book',
                    items:[
                        {icon:'fa fa-circle-o', title:'book1'},
                        {icon:'fa fa-circle-o', title:'book2'},
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
            ]
        }
    },
    components:{
        LeftMenuItem
    }
}
</script>

<style>
.lv-left-menu{
    width:100%;
    height:400px;
    position:relative;
}
</style>