<template>
<div class="lv-function-panel-item-content lv-user-panel">
    <div class="lv-user-panel-profile">
        <div class="lv-user-profile-img">
            <img src="../assets/logo.png"/>
        </div>
        <div class="lv-user-profile-name">
            lvniao
        </div>
    </div>
    <div class="lv-user-panel-btns">
        <div @click="userProfile">profile</div>
        <div @click="userLogout">logout</div>
    </div>
</div>
</template>

<script>
export default{
    methods:{
        userProfile(){
            this.tabEventBus.$emit('openNewTab', {addr:"/user/profile", title:"用户信息"});
        },
        userLogout(){
            this.tabEventBus.$emit('openNewTab', {addr:"/user/logout", title:"退出"});
        }
    },
    inject:["tabEventBus"],
}
</script>

<style>
    .lv-user-profile-img{
        text-align:center;
        height:50px;
    }
    .lv-user-profile-img img{
        width:40px;
        height:40px;
        margin:5px;
        border-radius:20px;
    }
    .lv-user-profile-name{
        line-height:30px;
        height:30px;
        font-size:20px;
        vertical-align:middle;
        text-align:center;
        margin-bottom:5px;
    }

    .lv-user-panel-btns div{
        width:75px;
        height:25px;
        border:1px solid #444;
        font-size:14px;
        line-height:25px;
        vertical-align:middle;
        text-align:center;
        color:#444
    }

    .lv-user-panel-btns{
        height:35px;
        background-color:#f4f4f5;
    }

    .lv-user-panel-btns div:first-child{
        float:left;
        margin-left:10px;
    }

    .lv-user-panel-btns div:last-child{
        float:right;
        margin-right:10px;
    }
</style>