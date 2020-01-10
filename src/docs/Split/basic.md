> 基本

:::demo 左右分割用法。

```html
<template>
    <div class="demo-split">
        <v-split v-model="split1">
            <div slot="left" class="demo-split-pane">
                Left Pane
            </div>
            <div slot="right" class="demo-split-pane">
                Right Pane
            </div>
        </v-split>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                split1: 0.5
            }
        },
    }
</script>
<style>
    .demo-split{
        height: 200px;
        border: 1px solid #dcdee2;
    }
    .demo-split-pane{
        padding: 10px;
    }
</style>
```
:::