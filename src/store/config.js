export default{
    namespaced:true,
    state:{
        title:'LV-Admin',
        titleAlias:'LV',
        fold:false,
        skins:[
            {name:'Blue', color:'#3c8dbc', classname:'lv-skin-blue'},
            {name:'Green', color:'#00a65a', classname:'lv-skin-green'}
        ],
        currentSkin:{name:'Blue', color:'#3c8dbc', classname:'lv-skin-blue'},
        menus:[
            {icon:'fa fa-table', title:'表格', 
              items:[
                {icon:'fa fa-circle', title:'基本表格', addr:'/basetable'},
              ]
            },
            {icon:'fa fa-edit', title:'编辑器',
              items:[
                {icon:'fa fa-circle', title:'富文本', addr:'/texteditor'},
                {icon:'fa fa-circle', title:'Markdown', addr:'/mdeditor'},
              ]
            },
            {icon:'fa fa-th-list', title:'布局', addr:'/baselayout'},
            {icon:'fa fa-cogs', title:'表单', addr:'/form'}
          ],
        links:[
            {addr:"/home", title:"首页"}
        ]
    },
    mutations:{
        setFold(currentState, fold){
            currentState.fold = fold;
        },
        setCurrentSkin(currentState, skin){
            currentState.currentSkin = skin;
        }
    }
}