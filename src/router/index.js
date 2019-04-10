import Vue from "vue"
import VueRouter from "vue-router"

import BaseTable from "../page/BaseTable";
import DataTable from "../page/DataTable";
import MarkdownEditor from "../page/MarkdownEditor";
import TextEditor from "../page/TextEditor";
Vue.use(VueRouter);

export default new VueRouter({
    mode:"history",
    routes:[
        {path:"/basetable", component:BaseTable},
        {path:"/datatable", component:DataTable},
        {path:"/texteditor", component:TextEditor},
        {path:"/mdeditor", component:MarkdownEditor}
    ]
})