<template>
    <el-row>
        <el-col :span="18" :offset="3">
            <el-form label-width="50px"  >
                <el-form-item label="标题">
                    <el-input type="text" v-model="titile" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="主题">
                    <el-input type="text" v-model="theme" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="edit_container">
                <quill-editor
                        v-model="content"
                        ref="myQuillEditor"
                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)">
                </quill-editor>
            </div>
        </el-col>
    </el-row>

</template>

<script>
    import {quillEditor} from "vue-quill-editor"; //调用编辑器
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';

    export default {
        name: "WriteBlog",
        components: {
            quillEditor
        },
        data() {
            return {
                content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
                str: '',
                editorOption: {},
                titile:"",
                theme:""
            }
        },
        methods: {
            upload()
            {
              console.log(this.content)
            },
            onEditorReady(editor) { // 准备编辑器

            },
            onEditorBlur() {

            }, // 失去焦点事件
            onEditorFocus() {
                console.log(this.content)
            }, // 获得焦点事件
            onEditorChange() {
            }, // 内容改变事件
            // 转码
            escapeStringHTML(str) {
                str = str.replace(/&lt;/g, '<');
                str = str.replace(/&gt;/g, '>');
                return str;
            }
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill;
            },
        },
        mounted() {
            let content = '';  // 请求后台返回的内容字符串
            this.str = this.escapeStringHTML(content);


        }
    }
</script>

<style scoped>

    edit_container {
        width: 50%;
        margin: 0px auto;
    }
</style>