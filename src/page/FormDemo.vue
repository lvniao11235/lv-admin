<template>
<div class="lv-tabcontol-content lv-formdemo-component">
    <el-row :gutter="10">
        <el-col :span="5" class="lv-formdemo-text">
            单选按钮
        </el-col>
        <el-col :span="3">
            <el-radio v-model="vacation" :label="1">事假</el-radio>
        </el-col>
        <el-col :span="3">
            <el-radio v-model="vacation" :label="2">调休</el-radio>
        </el-col>
        <el-col :span="3">
            <el-radio v-model="vacation" :label="3">年假</el-radio>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            单选按钮组
        </el-col>
        <el-col :span="12">
            <el-radio-group v-model="vacation">
                <el-radio :label="1">事假</el-radio>
                <el-radio :label="2" disabled>调休</el-radio>
                <el-radio :label="3">年假</el-radio>
            </el-radio-group>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            单选按钮组
        </el-col>
        <el-col :span="19">
            <el-radio-group v-model="vacation">
                <el-radio-button :label="1">事假</el-radio-button>
                <el-radio-button :label="2">调休</el-radio-button>
                <el-radio-button :label="3">年假</el-radio-button>
            </el-radio-group>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            单选按钮组
        </el-col>
        <el-col :span="19">
            <el-radio-group v-model="vacation">
                <el-radio :label="1" border>事假</el-radio>
                <el-radio :label="2" border>调休</el-radio>
                <el-radio :label="3" size="mini" border>年假</el-radio>
            </el-radio-group>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            复选按钮
        </el-col>
        <el-col :span="5">
            <el-checkbox v-model="faviorate" :label="1">football</el-checkbox>
        </el-col>
        <el-col :span="5">
            <el-checkbox v-model="faviorate" :label="2">basketball</el-checkbox>
        </el-col>
        <el-col :span="5">
            <el-checkbox v-model="faviorate" :label="3">pingpong</el-checkbox>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            复选按钮组
        </el-col>
        <el-col :span="19">
            <el-checkbox-group v-model="faviorate">
                <el-checkbox :label="1" border>football</el-checkbox>
                <el-checkbox :label="2" border>basketball</el-checkbox>
                <el-checkbox :label="3" size="mini" border>pingpong</el-checkbox>
            </el-checkbox-group>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            输入框
        </el-col>
        <el-col :span="10">
            <el-input v-model="input" show-password clearable></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            输入框
        </el-col>
        <el-col :span="10">
            <el-input v-model="input" prefix-icon="fa fa-cog" suffix-icon="fa fa-coffee"></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            文本域
        </el-col>
        <el-col :span="10">
            <el-input type="textarea" rows="2" v-model="input"></el-input>
        </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-top:10px">
        <el-col :span="5" class="lv-formdemo-text">
            复合文本框
        </el-col>
        <el-col :span="19">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default{
    data:function(){
        return {
            vacation:1,
            faviorate:[],
            input:'',
            select:''
        }
    },
}
</script>

<style>
.lv-formdemo-text{
    text-align:right;
    font-size:14px;
}

.el-select .el-input {
    width: 130px;
  }
</style>