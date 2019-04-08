<template>
<div class="lv-lmenu">
    <LMenuItem v-for="item in items" :key="item.title" :item="item">
    </LMenuItem>
</div>
</template>

<script>
import LMenuItem from './LMenuItem'

export default{
    data: function(){
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
    components:{LMenuItem}
}
</script>