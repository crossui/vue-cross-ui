## API

### Breadcrumb props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| separator | 自定义分隔符 | String \| Element String |  | / |

### BreadcrumbItem  props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| to | 链接，不传则没有链接，支持 vue-router 对象 | String \| Object | --- | --- |
| replace | 路由跳转时，开启 replace 将不会向 history 添加新记录 | Boolean | --- | false |