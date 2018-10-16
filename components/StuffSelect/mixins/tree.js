export default {
    props: {
        stuffTreeData: {
            type: Array,
            required: true
        },
        treeLoadData: {
            type: Function
        }
    },
    data() {
        return {
            treeData: this.treeNodes,
            checkedKeys: []
        }
    },
    methods: {
        //点击树节点回调
        onSelect(selectedKeys, info) {
            this.$emit("selectNodeCallBack", info.node.dataRef);
        },
        //勾选节点回调
        onCheck(checkedKeys, info) {
            this.treeCheckedArray.length > 0 ? this.treeCheckedArray.splice(0, this.treeCheckedArray.length) : false
            info.checkedNodes.map((item) => {
                if (item.data.props.dataRef.isLeaf) {
                    this.treeCheckedArray.push(item.data.props.dataRef)
                }
            });
        },
    }
}