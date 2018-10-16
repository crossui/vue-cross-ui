
export default {
    props: {
        //搜索结果
        searchLoadData: {
            type: Array,
            required: true
        },
        //表格列
        staffselectSearchColumns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            searchData: this.searchLoadData,
            columns: this.staffselectSearchColumns,
            selectedRowKeys: [],
            selectedRow: [],
            isSearch: false,
            searchWord: ""
        }
    },
    methods: {
        onSelectChange(selectedRowKeys, selectResult) {
            this.selectedRowKeys = selectedRowKeys;
            this.selectedRow = selectResult;
        },
        showSearchBox() {
            if (this.searchWord.trim() !== "") {
                this.isSearch = true;
                //重置树已选项
                this.clearArray(this.treeCheckedArray);
                this.clearArray(this.checkedKeys);
                this.$emit("handleSearch", this.searchWord);
            }
            else {
                this.$message.warning("请输入搜索关键字");
            }
        },
        emitEmpty() {
            this.$refs.userNameInput.focus()
            this.searchWord = '';
            this.clearArray(this.selectedRowKeys);
            this.clearArray(this.selectedRow);
            this.isSearch = false;
        }
    }
}