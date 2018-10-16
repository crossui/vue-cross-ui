<template>
    <div class="stuff-select">
        <v-modal :title="modalTitle" v-model="visible" :width="850" @ok="handleOk" @cancel="handleCancel">
            <div>
                <v-row :gutter="10">
                    <v-col class="gutter-row" :span="10">

                        <div class="stuff-left-box">
                            <v-row :gutter="10">
                                <v-col :span="19">
                                    <v-input placeholder="请输入" v-model="searchWord" ref="userNameInput">
                                        <v-icon v-if="searchWord" slot="suffix" type="close-circle" @click="emitEmpty"></v-icon>
                                    </v-input>
                                </v-col>
                                <v-col :span="5">
                                    <v-button type="primary" @click="showSearchBox">搜索</v-button>
                                </v-col>
                            </v-row>
                            <div class="container-box margin-top-10" v-show="!isSearch">
                                <v-tree v-model="checkedKeys" checkable :treeNodes="stuffTreeData" :loadData="treeLoadData" @select="this.onSelect" @check="this.onCheck">
                                </v-tree>
                            </div>
                            <div class="container-box search margin-top-10" v-if="isSearch">
                                <v-table :scroll="{x:800, y:240 }" :pagination="{ pageSize: 1000,hideOnSinglePage:true}" :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}" :columns="columns" :dataSource="searchData"></v-table>
                            </div>
                        </div>
                    </v-col>
                    <v-col class="gutter-row" :span="4">
                        <div class="padding-top-100" style="text-align:center">
                            <v-button type="primary" :disabled="emptyFlag" @click="emptySelect">
                                <v-icon type="left" />清空
                            </v-button>
                            <v-button class="margin-top-20" :disabled="rightFlag" type="primary" @click="selectRight">
                                右移
                                <v-icon type="right" />
                            </v-button>
                        </div>
                    </v-col>
                    <v-col class="gutter-row" :span="10">
                        <div class="stuff-right-box">
                            <div class="title-box lh30">
                                已选{{selectItemNum}}项
                            </div>
                            <div class="container-box">
                                <template v-for="item in targetArray">
                                    <v-tag class="margin-right-5 margin-bottom-5" closable :key="item.key" @afterClose="removeTag(item)" @click="clickTag(item)" :color="tagColor">{{item.title}}</v-tag>
                                </template>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-modal>
    </div>
</template>
<script>
import searchLine from './search.js'
import leftTree from './tree.js'
import middle from './middle.js'
export default {
    name: "VStuff",
    props: {
        modalTitle: {
            type: String,
            default: "人员选择"
        },
        messageTips: {
            type: String,
            default: "请选择"
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        selectItemNum() {
            return this.targetArray.length
        }
    },
    watch: {
        value(val) {
            this.visible = val;
        },

    },
    mixins: [searchLine, leftTree, middle],
    data() {
        return {
            visible: false
        }
    },
    methods: {
        handleOk(e) {
            this.visible = false;
            this.$emit("input", this.visible);
            this.$emit("modalOkCallback", this.targetArray);
        },
        handleCancel() {
            this.visible = false;
            console.log(this.visible)
            this.$emit("input", this.visible);
            this.$emit("modalCancelCallback");
        },
        clearArray(array) {
            array.length > 0 ? array.splice(0, array.length) : false;
        }
    },
    mounted() {
        this.targetArray.push(...this.initTargetArray)
    }
}
</script>
