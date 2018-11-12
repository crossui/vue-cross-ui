## API

### Form props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | Object | - |
| rules | 表单验证规则，具体配置查看  [async-validator](https://github.com/yiminghe/async-validator) | Object | - |
| inline | 是否开启行内表单模式 | Boolean | false |
| label-position | 表单域标签的位置，可选值为 `left`、`right`、`top` | String | right |
| label-width | 表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值 | Number | - |
| show-message | 是否显示校验错误信息 | Boolean | true |
| autocomplete | 原生的 autocomplete 属性，可选值为 off 或 on | String | off |

### Form methods
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| validate | 对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise | callback |
| validateField | 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息 | callback |
| resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 | - |
| clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性组成的数组，如不传则移除整个表单的校验结果 | Function(props: array) |

### FormItem props
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop | 对应表单域 model 里的字段 | String | - |
| label | 标签文本 | String | - |
| label-width | 表单域标签的的宽度 | Number | - |
| label-for | 指定原生的 label 标签的 for 属性，配合控件的 element-id 属性，可以点击 label 时聚焦控件。 | String | - |
| required | 是否必填，如不设置，则会根据校验规则自动生成 | Boolean | - |
| rules | 表单验证规则 | Object | Array | - |
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | String | - |
| show-message | 是否显示校验错误信息 | Boolean | true |


### FormItem slot
| 名称 | 说明 |
| --- | --- |
| --- | 内容 |
| label | label 内容 |