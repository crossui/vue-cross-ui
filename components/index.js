import { default as Affix } from './affix'

import { default as Alert } from './alert'

import { default as Icon } from './icon'

import { default as Anchor } from './anchor'

import { default as Button } from './button'

import { default as Input } from './input'

import { default as Select } from './select'

import { default as AutoComplete } from './auto-complete'

import { default as Avatar } from './avatar'

import { default as BackTop } from './back-top'

import { default as Badge } from './badge'

import { default as Breadcrumb } from './breadcrumb'

import { default as Calendar } from './calendar'

import { default as Card } from './card'

import { default as Carousel } from './carousel'

import { default as Cascader } from './cascader'

import { default as Checkbox } from './checkbox'

import { default as Col } from './col'

import { default as Collapse } from './collapse'

import { default as DatePicker } from './date-picker'

import { default as Divider } from './divider'

import { default as Dropdown } from './dropdown'

import { default as Form } from './form'

import { default as InputNumber } from './input-number'

import { default as Layout } from './layout'

import { default as List } from './list'

import { default as LocaleProvider } from './locale-provider'

import { default as Menu } from './menu'

import { default as message } from './message'

import { default as Modal } from './modal'

import { default as notification } from './notification'

import { default as Pagination } from './pagination'

import { default as Popconfirm } from './popconfirm'

import { default as Popover } from './popover'

import { default as Progress } from './progress'

import { default as Radio } from './radio'

import { default as Rate } from './rate'

import { default as Row } from './row'

import { default as Slider } from './slider'

import { default as Spin } from './spin'

import { default as Steps } from './steps'

import { default as Switch } from './switch'

import { default as Table } from './table'

import { default as Tabs } from './tabs'

import { default as Tag } from './tag'

import { default as Timeline } from './timeline'

import { default as TimePicker } from './time-picker'

import { default as Tooltip } from './tooltip'

import { default as Transfer } from './transfer'

import { default as Tree } from './tree'

import { default as TreeSelect } from './tree-select'

import { default as Upload } from './upload'

import { default as version } from './version'

import { default as Drawer } from './drawer'

import { default as FormView } from './form-view'

import { default as Scrollbar } from './Scrollbar'

import { default as VStuff } from './stuffselect'

import { default as Split } from './split'

const components = [
    Affix,
    Alert,
    Icon,
    Anchor,
    Anchor.Link,
    Input,
    Input.Group,
    Input.Search,
    Input.TextArea,
    Button,
    Button.Group,
    Select,
    Select.Option,
    Select.OptGroup,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Breadcrumb.Item,
    Calendar,
    Card,
    Card.Meta,
    Card.Grid,
    Carousel,
    Cascader,
    Checkbox,
    Checkbox.Group,
    Col,
    Collapse,
    Collapse.Panel,
    DatePicker,
    DatePicker.MonthPicker,
    DatePicker.RangePicker,
    DatePicker.WeekPicker,
    Divider,
    Dropdown,
    Dropdown.Button,
    Form,
    Form.Item,
    InputNumber,
    Layout,
    Layout.Header,
    Layout.Footer,
    Layout.Sider,
    Layout.Content,
    List,
    List.Item,
    List.Item.Meta,
    LocaleProvider,
    Menu,
    Menu.Item,
    Menu.SubMenu,
    Menu.Divider,
    Menu.ItemGroup,
    Modal,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Radio.Group,
    Radio.Button,
    Rate,
    Row,
    Slider,
    Spin,
    Steps,
    Steps.Step,
    Switch,
    Table,
    Table.Column,
    Table.ColumnGroup,
    Tabs,
    Tabs.TabPane,
    Tag,
    Tag.CheckableTag,
    Timeline,
    Timeline.Item,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Tree.TreeNode,
    TreeSelect,
    TreeSelect.TreeNode,
    Upload,
    Upload.Dragger,
    Drawer,
    FormView,
    Scrollbar,
    VStuff,
    Split
]

const install = function(Vue) {
    components.map(component => {
        Vue.component(component.name, component)
    })
    Vue.prototype.$message = message
    Vue.prototype.$notification = notification
    Vue.prototype.$info = Modal.info
    Vue.prototype.$success = Modal.success
    Vue.prototype.$error = Modal.error
    Vue.prototype.$warning = Modal.warning
    Vue.prototype.$confirm = Modal.confirm
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    Affix,
    Alert,
    Icon,
    Anchor,
    Input,
    Button,
    Select,
    AutoComplete,
    Avatar,
    BackTop,
    Badge,
    Breadcrumb,
    Calendar,
    Card,
    Carousel,
    Cascader,
    Checkbox,
    Col,
    Collapse,
    DatePicker,
    Divider,
    Dropdown,
    Form,
    InputNumber,
    Layout,
    List,
    LocaleProvider,
    Menu,
    message,
    Modal,
    notification,
    Pagination,
    Popconfirm,
    Popover,
    Progress,
    Radio,
    Rate,
    Row,
    Slider,
    Spin,
    Steps,
    Switch,
    Table,
    Tabs,
    Tag,
    Timeline,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    TreeSelect,
    Upload,
    install,
    version,
    Drawer,
    FormView,
    Scrollbar,
    VStuff,
    Split
}

export default {
    version,
    install,
}