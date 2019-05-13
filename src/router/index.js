import Vue from "vue"
import VueRouter from "vue-router"

import BaseTable from "../page/BaseTable";
import BaseLayout from "../page/BaseLayout";
import MarkdownEditor from "../page/MarkdownEditor";
import TextEditor from "../page/TextEditor";
import FormDemo from "../page/FormDemo.vue";
import Home from "../page/Home";
Vue.use(VueRouter);
const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/basetable", component:BaseTable},
        {path:"/baselayout", component:BaseLayout},
        {path:"/texteditor", component:TextEditor},
        {path:"/mdeditor", component:MarkdownEditor},
        {path:"/form", component:FormDemo},
        {path:"/home", component:Home}
    ],
});

export default router;

