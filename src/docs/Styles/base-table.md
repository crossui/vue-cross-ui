> 表格

:::demo 基础表格

```html
<template>
  <div>
      <h5>无边框表格:</h5>

      <table class="tb tb-n" style="width:100%">
        <tr>
            <th>渠道ID</th>
            <th>渠道名称</th>
            <th>密码</th>
            <th class="last">联系人</th>
        </tr>
        <tr>
            <td>10125</td>
            <td>HIS</td>
            <td>BDASU451545SD5F</td>
            <td>张三</td>
        </tr>
        <tr>
            <td>10125</td>
            <td>HIS</td>
            <td>BDASU451545SD5F</td>
            <td>张三</td>
        </tr>
        <tr class="last">
            <td>10125</td>
            <td>HIS</td>
            <td>BDASU451545SD5F</td>
            <td>张三</td>
        </tr>
    </table>


    <br />
    <br />

    
    <h5>综合型表格:</h5>
    <table class="tb tb-s" style="width:100%">
        <tbody>
        <tr>
            <th>标题</th>
            <td colspan="3">
                劳而无功顶戴
            </td>
        </tr>
        <tr>
            <th>缓急程度</th>
            <td>
                <div class="form-select">
                    苛梆硬森棒棒
                </div>
            </td>
            <th>是否有协议</th>
            <td>
                众酩酊大醉
            </td>
        </tr>
        <tr>
            <th>是否关联已报文件</th>
            <td>
                dfafssdsdsdsdsddfafssdsdsdsdsddfafssdsdsdsdsddfafssdsdsdsdsd
            </td>
            <th>拟稿时间</th>
            <td>2015-12-01</td>
        </tr>
        <tr>
            <th>拟稿部门</th>
            <td>办公室</td>
            <th>拟稿人</th>
            <td>祖毅</td>
        </tr>
        </tbody>
    </table>


  </div>
</template>
```
:::
