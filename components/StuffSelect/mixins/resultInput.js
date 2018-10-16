export default {
    data() {
        return {
            resultName: []
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
}