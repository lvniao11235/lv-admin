import Vue from "vue"
import VueRouter from "vue-router"

import BaseTable from "../page/BaseTable";
import BaseLayout from "../page/BaseLayout";
import MarkdownEditor from "../page/MarkdownEditor";
import TextEditor from "../page/TextEditor";
import FormDemo from "../page/FormDemo.vue";
import Home from "../page/Home";
import TaskDetail from "../page/TaskDetail";
import UserProfile from "../page/UserProfile";
import UserLogout from "../page/UserLogout";
Vue.use(VueRouter);
const router = new VueRouter({
    mode:"history",
    routes:[
        {path:"/basetable", component:BaseTable},
        {path:"/baselayout", component:BaseLayout},
        {path:"/texteditor", component:TextEditor},
        {path:"/mdeditor", component:MarkdownEditor},
        {path:"/form", component:FormDemo},
        {path:"/home", component:Home},
        {path:"/", redirect:"/home"},
        {path:"/taskdetail/:id", component:TaskDetail},
        {path:"/user/profile", component:UserProfile},
        {path:"/user/profile", component:UserLogout}
    ],
});

export default router;

