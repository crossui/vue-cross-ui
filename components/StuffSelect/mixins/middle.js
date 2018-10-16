export default {
    props: {
        //初始化数据数组
        initTargetArray: {
            type: Array,
            default: []
        },
        //tag标签颜色
        tagColor: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            //勾选的数组[{key:"",title:""}]
            treeCheckedArray: [],
            //结果数组
            targetArray: []
        }
    },
    computed: {
        emptyFlag() {
            if (this.targetArray.length > 0) {
                return false
            }
            else {
                return true
            }
        },
        rightFlag() {
            if (this.isSearch) {
                if (this.selectedRow.length > 0) {
                    return false
                }
                else {
                    return true
                }
            }
            else {
                if (this.treeCheckedArray.length > 0) {
                    return false
                }
                else {
                    return true
                }
            }
        }
    },
    methods: {
        //右移
        selectRight() {
            if (this.isSearch) {
                if (this.targetArray.length > 0) {
                    this.selectedRow = this.selectedRow.filter(item => {
                        let flag = true;
                        this.targetArray.forEach(list => {
                            if (item.key == list.key) {
                                flag = false
                            }
                        })
                        return flag
                    })
                }
                this.targetArray.push(...this.selectedRow);
                //重置已选数组
                this.clearArray(this.selectedRow);
                this.clearArray(this.selectedRowKeys);
            }
            else {

                if (this.targetArray.length > 0) {
                    this.treeCheckedArray = this.treeCheckedArray.filter(item => {
                        let flag = true;
                        this.targetArray.forEach(list => {
                            if (item.key == list.key) {
                                flag = false
                            }
                        })
                        return flag
                    })
                }
                this.targetArray.push(...this.treeCheckedArray);
                //重置树勾选状态
                this.clearArray(this.checkedKeys);
                //重置已选数组
                this.clearArray(this.treeCheckedArray);
            }
        },
        //清空
        emptySelect() {
            //重置树已选项
            this.clearArray(this.targetArray);
            this.clearArray(this.treeCheckedArray);
            this.clearArray(this.checkedKeys);
            //重置表格已选项
            this.clearArray(this.selectedRowKeys);
            this.clearArray(this.selectedRow);
            this.clearArray(this.selectedRowKeys);
        },
        //移除单个已选项
        removeTag(obj) {
            this.treeCheckedArray.filter((item, index) => {
                return item.key == obj.key ? this.treeCheckedArray.splice(index, 1) : item
            })
            this.targetArray.filter((item, index) => {
                return item.key == obj.key ? this.targetArray.splice(index, 1) : item
            })
            this.$emit("removeTagCallBack", obj);
        },
        clickTag(obj) {
            this.$emit("clickTagCallBack", obj);
        }
    }
}