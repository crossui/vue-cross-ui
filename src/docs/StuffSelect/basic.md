> 基本

:::demo 基础用法用法。
```html
<template>
    <div>
        <v-row>
            <v-col :span="20">
                <v-input v-model="reName" disabled placeholder="请选择" />
            </v-col>
            <v-col :span="4">
                <v-button type="primary" @click="showModal" icon="user" />
            </v-col>
        </v-row>
        <div class="margin-top-20">
            <span>数据展示:</span>
            <div>
                {{resultData}}
            </div>
        </div>
        <v-stuff 
            v-model="stuffModel" 
            v-if="buildSelectModel" 
            modalTitle="我是标题" 
            :stuffTreeData="treeData"
            :initTargetArray="targetInti" 
            :searchLoadData="searchData" 
            :staffselectSearchColumns="columns" 
            @modalOkCallback="getOk" 
            @modalCancelCallback="getCancel" 
            @handleSearch="handleSearch" 
        />
    </div>
</template>
<script>
export default {
    data() {
        return {
            //v-model
            stuffModel: false,
            //v-if(为了每次关闭弹窗时销毁组件)
            buildSelectModel: true,
            //初始化值
            targetInti: [],
            resultName: [],
            resultData: "",
            //模拟树数据
            treeData: [
                {
                    title: 'parent 1',
                    key: '0',
                    children: [{
                        title: 'parent 1-0',
                        key: '1',
                        children: [
                            { title: '叶子1', key: '2', aa: "sss", isLeaf: true },
                            { title: '叶子2', key: '3', bb: '222', isLeaf: true },
                            { title: '叶子3', key: '4', aa: "sss", isLeaf: true }
                        ],
                    }],
                }, {
                    title: 'parent 2',
                    key: 'p1',
                    children: [{
                        title: 'parent 2-0',
                        key: 'pq',
                        children: [
                            { title: '姚明', key: 'p2', aa: "sss", isLeaf: true },
                            { title: '范冰冰', key: 'p3', bb: '222', isLeaf: true },
                            { title: '张艺谋', key: 'p4', aa: "sss", isLeaf: true },
                            { title: '张无忌', key: 'p6', aa: "sss", isLeaf: true },
                        ],
                    }],
                }
            ],
            //搜索结果
            searchData: [],
            //搜索表格列
            columns: [{
                title: 'Name',
                dataIndex: 'title',
                align: 'center',
                width: 100,
                fixed: 'left'
            }, {
                title: 'Age',
                align: 'center',
                width: 233,
                dataIndex: 'age',
            }, {
                title: 'Address1',
                align: 'center',
                width: 233,
                dataIndex: 'address',
            }, {
                title: 'Address',
                align: 'center',
                width: 233,
                dataIndex: 'key',
            }]
        }
    },
    computed: {
        reName() {
            if (this.resultName.length > 0) {
                return this.resultName.join(",")
            }
            else {
                return ""
            }
        }
    },
    methods: {
        showModal() {
            this.buildSelectModel = true;
            setTimeout(() => {
                this.stuffModel = true;
            }, 200)
        },
        handleSearch(searchWord) {
            console.log(searchWord)
            /*模拟数据请求START*/
            this.searchData.length > 0 ? this.searchData.splice(0, this.searchData.length) : false;
            for (let i = 0; i < 13; i++) {
                this.searchData.push({
                    key: `${i}s`,
                    title: `模拟数据 ${i}`,
                    age: 32,
                    ss: `ss ${i}`,
                    address: `软件园C区${i}号楼 203`,
                });
            }
            /*模拟数据请求END*/
        },
        getOk(result) {
            /*这里写入回调内容START*/
            this.resultData = JSON.stringify(result);
            this.targetInti.length > 0 ? this.targetInti.splice(0, this.targetInti.length) : false;
            this.targetInti = result;
            this.resultName.length > 0 ? this.resultName.splice(0, this.resultName.length) : false;
            result.forEach(item => {
                this.resultName.push(item.title)
            })
            /*这里写入回调内容end*/
            this.buildSelectModel = false;

        },
        getCancel() {
            this.buildSelectModel = false;
        }
    },
}
</script>
```
:::