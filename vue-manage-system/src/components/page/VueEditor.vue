<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 表单</el-breadcrumb-item>
                <el-breadcrumb-item>编辑器</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="plugins-tips">
                Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
                访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
            </div>
            <div class="plugins-tips">
             <el-tooltip  v-for="item in list"  v-bind:key="item.key" class="item" effect="dark" :content="item.tip" placement="top">
               <el-button  @click="addLabel(item.key,item.name)">{{item.name}}</el-button>
             </el-tooltip>
            </div>
            <quill-editor ref="myTextEditor" class="myTextEditor" v-model="content" :options="editorOption" @change="onEditorChange($event)"></quill-editor>
            <div class="limit">当前已输入 <span>{{nowLength}}</span> 个字符，您还可以输入 <span>{{SurplusLength}}</span> 个字符。</div>
            <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>

        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
    export default {
        name: 'editor',
        data: function(){
            return {
                content: '',
                editorOption: {
                    placeholder: '请输入文本'
                },
                nowLength:0,
                SurplusLength:1000,
                list:[{key:'entry_name',name:'#候选人姓名#',tip:'会自动填入接收面试通知候选人的真实姓名'}, {key:'company_name',name: '#公司名称#',tip:'会自动填入公司名称'},
                      {key:'postion',name: '#入职岗位#',tip:'会自动填入候选人的入职岗位'},{key:'dept',name: '#入职部门#',tip:'会自动填入候选人的入职部门'},
                      {key:'entry_time',name: '#预计入职时间#',tip:'会自动填入候选人的预计入职时间'},{key:'link_name',name: '#联系人姓名#',tip:'会自动填入您的姓名'},
                      {key:'link_phone',name: '#联系人电话#',tip:'会自动填入您的电话'},{key:'link_email',name: '#联系人邮箱#',tip:'会自动填入您的邮箱地址'},
                     ]
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
                let textLength = text.length
                if (textLength > 1000) {
                  editor.enable(false)
                 }else{
                    this.nowLength=textLength-1
                    this.SurplusLength=1001-textLength
                 }
            },
            submit(){
                alert(this.content);
                this.$message.success('提交成功！');
            },
            addLabel(key,name){
             //插入标签内容
             this.getTextSelection(name,'rgb(73, 80, 96)')
             //下面方法是为了恢复字体为黑色
             this.getTextSelection(' ','')
            },
            //获取光标位置并添加数据
            getTextSelection(value,TextColor){
                let range = this.$refs.myTextEditor.quill.getSelection()
                var length = range.index
                //在光标位置插入数据
                 this.$refs.myTextEditor.quill.insertText(length, value, {'color': TextColor});
            }
    }
}
</script>
<style scoped>
    .editor-btn{
        margin-top: 20px;
    }
   .limit {
 height: 30px;
 border: 1px solid #ccc;
 line-height: 30px;
 text-align: right;
 }

</style>