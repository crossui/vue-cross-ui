import Main from '@/appMain.vue';


export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [{
            path: 'getting-started',
            title: '快速上手',
            name: 'getting-started',
            component: () =>
                import ('@/docs/getting-started/index.vue')
        },
        {
            path: 'themes',
            title: '定制主题',
            name: 'themes',
            component: () =>
                import ('@/docs/themes/index.vue')
        },
        {
            path: 'i18n',
            title: '国际化',
            name: 'i18n',
            component: () =>
                import ('@/docs/i18n/index.vue')
        },
        {
            path: 'test',
            title: '测试',
            name: 'test_index',
            component: () =>
                import ('@/docs/test.vue')
        },
    ]
};

export const menuRouter = [{
        path: '/Basics',
        name: 'Basics',
        title: '基础',
        component: Main,
        children: [{
                path: 'Styles',
                name: 'Styles',
                title: 'Styles 常用样式',
                component: () =>
                    import ('@/docs/Styles/index.vue')
            },
            {
                path: 'Icon',
                name: 'Icon',
                title: 'Icon 图标',
                component: () =>
                    import ('@/docs/Icon/index.vue')
            },
            {
                path: 'Button',
                name: 'Button',
                title: 'Button 按钮',
                component: () =>
                    import ('@/docs/Button/index.vue')
            },
        ]
    },
    {
        path: '/Layouts',
        name: 'Layouts',
        title: '布局',
        component: Main,
        children: [{
                path: 'Grid',
                name: 'Grid',
                title: 'Grid 栅格',
                component: () =>
                    import ('@/docs/Grid/index.vue')
            },
            {
                path: 'Layout',
                name: 'Layout',
                title: 'Layout 布局',
                component: () =>
                    import ('@/docs/Layout/index.vue')
            }
        ]
    },
    {
        path: '/Navigation',
        name: 'Navigation',
        title: '导航',
        component: Main,
        children: [{
                path: 'Affix',
                name: 'Affix',
                title: 'Affix 固钉',
                component: () =>
                    import ('@/docs/Affix/index.vue')
            },
            {
                path: 'Breadcrumb',
                name: 'Breadcrumb',
                title: 'Breadcrumb 面包屑',
                component: () =>
                    import ('@/docs/Breadcrumb/index.vue')
            },
            {
                path: 'Dropdown',
                name: 'Dropdown',
                title: 'Dropdown 下拉菜单',
                component: () =>
                    import ('@/docs/Dropdown/index.vue')
            },
            {
                path: 'Menu',
                name: 'Menu',
                title: 'Menu 导航菜单',
                component: () =>
                    import ('@/docs/Menu/index.vue')
            }, {
                path: 'Pagination',
                name: 'Pagination',
                title: 'Pagination 分页',
                component: () =>
                    import ('@/docs/Pagination/index.vue')
            },
            {
                path: 'Steps',
                name: 'Steps',
                title: 'Steps 步骤条',
                component: () =>
                    import ('@/docs/Steps/index.vue')
            }
        ]
    },
    {
        path: '/DataEntry',
        name: 'DataEntry',
        title: '表单',
        component: Main,
        children: [{
                path: 'AutoComplete',
                name: 'AutoComplete',
                title: 'AutoComplete 自动完成',
                component: () =>
                    import ('@/docs/AutoComplete/index.vue')
            },
            {
                path: 'Cascader',
                name: 'Cascader',
                title: 'Cascader 级联选择',
                component: () =>
                    import ('@/docs/Cascader/index.vue')
            },
            {
                path: 'Checkbox',
                name: 'Checkbox',
                title: 'Checkbox 多选框',
                component: () =>
                    import ('@/docs/Checkbox/index.vue')
            },
            {
                path: 'Radio',
                name: 'Radio',
                title: 'Radio 单选框',
                component: () =>
                    import ('@/docs/Radio/index.vue')
            },
            {
                path: 'DatePicker',
                name: 'DatePicker',
                title: 'DatePicker 日期选择框',
                component: () =>
                    import ('@/docs/DatePicker/index.vue')
            },
            {
                path: 'Form',
                name: 'Form',
                title: 'Form 表单',
                component: () =>
                    import ('@/docs/Form/index.vue')
            },
            {
                path: 'Input',
                name: 'Input',
                title: 'Input 输入框',
                component: () =>
                    import ('@/docs/Input/index.vue')
            },
            {
                path: 'InputNumber',
                name: 'InputNumber',
                title: 'InputNumber 数字输入框',
                component: () =>
                    import ('@/docs/InputNumber/index.vue')
            },
            {
                path: 'Rate',
                name: 'Rate',
                title: 'Rate 评分',
                component: () =>
                    import ('@/docs/Rate/index.vue')
            },
            {
                path: 'Select',
                name: 'Select',
                title: 'Select 选择器',
                component: () =>
                    import ('@/docs/Select/index.vue')
            },
            {
                path: 'Slider',
                name: 'Slider',
                title: 'Slider 滑动输入条',
                component: () =>
                    import ('@/docs/Slider/index.vue')
            },
            {
                path: 'Switch',
                name: 'Switch',
                title: 'Switch 开关',
                component: () =>
                    import ('@/docs/Switch/index.vue')
            },
            {
                path: 'TimePicker',
                name: 'TimePicker',
                title: 'TimePicker 时间选择框',
                component: () =>
                    import ('@/docs/TimePicker/index.vue')
            },
            {
                path: 'Transfer',
                name: 'Transfer',
                title: 'Transfer 穿梭框',
                component: () =>
                    import ('@/docs/Transfer/index.vue')
            },
            {
                path: 'TreeSelect',
                name: 'TreeSelect',
                title: 'TreeSelect 树选择',
                component: () =>
                    import ('@/docs/TreeSelect/index.vue')
            },
            {
                path: 'Upload',
                name: 'Upload',
                title: 'Upload 上传',
                component: () =>
                    import ('@/docs/Upload/index.vue')
            },
        ]
    },
    {
        path: '/Displays',
        name: 'Displays',
        title: '视图',
        component: Main,
        children: [{
                path: 'Table',
                name: 'Table',
                title: 'Table 表格',
                component: () =>
                    import ('@/docs/Table/index.vue')
            },
            {
                path: 'Tree',
                name: 'Tree',
                title: 'Tree 树形控件',
                component: () =>
                    import ('@/docs/Tree/index.vue')
            },
            {
                path: 'Avatar',
                name: 'Avatar',
                title: 'Avatar 头像',
                component: () =>
                    import ('@/docs/Avatar/index.vue')
            },
            {
                path: 'Badge',
                name: 'Badge',
                title: 'Badge 徽标数',
                component: () =>
                    import ('@/docs/Badge/index.vue')
            },
            {
                path: 'Calendar',
                name: 'Calendar',
                title: 'Calendar 日历',
                component: () =>
                    import ('@/docs/Calendar/index.vue')
            },
            {
                path: 'Card',
                name: 'Card',
                title: 'Card 卡片',
                component: () =>
                    import ('@/docs/Card/index.vue')
            },
            {
                path: 'Carousel',
                name: 'Carousel',
                title: 'Carousel 走马灯',
                component: () =>
                    import ('@/docs/Carousel/index.vue')
            },
            {
                path: 'List',
                name: 'List',
                title: 'List 列表',
                component: () =>
                    import ('@/docs/List/index.vue')
            },
            {
                path: 'Collapse',
                name: 'Collapse',
                title: 'Collapse 折叠面板',
                component: () =>
                    import ('@/docs/Collapse/index.vue')
            },
            {
                path: 'Popover',
                name: 'Popover',
                title: 'Popover 气泡卡片',
                component: () =>
                    import ('@/docs/Popover/index.vue')
            },
            {
                path: 'Tabs',
                name: 'Tabs',
                title: 'Tabs 标签页',
                component: () =>
                    import ('@/docs/Tabs/index.vue')
            },
            {
                path: 'Tag',
                name: 'Tag',
                title: 'Tag 标签',
                component: () =>
                    import ('@/docs/Tag/index.vue')
            },
            {
                path: 'Timeline',
                name: 'Timeline',
                title: 'Timeline 时间轴',
                component: () =>
                    import ('@/docs/Timeline/index.vue')
            },
            {
                path: 'Tooltip',
                name: 'Tooltip',
                title: 'Tooltip 文字提示',
                component: () =>
                    import ('@/docs/Tooltip/index.vue')
            },
            {
                path: 'FormView',
                name: 'FormView',
                title: 'FormView 表单字段预览',
                component: () =>
                    import ('@/docs/FormView/index.vue')
            },
        ]
    },
    {
        path: '/Feedback',
        name: 'Feedback',
        title: '反馈',
        component: Main,
        children: [{
                path: 'Alert',
                name: 'Alert',
                title: 'Alert 警告提示',
                component: () =>
                    import ('@/docs/Alert/index.vue')
            },
            {
                path: 'Message',
                name: 'Message',
                title: 'Message 全局提示',
                component: () =>
                    import ('@/docs/Message/index.vue')
            },
            {
                path: 'Modal',
                name: 'Modal',
                title: 'Modal 对话框',
                component: () =>
                    import ('@/docs/Modal/index.vue')
            },
            {
                path: 'Notification',
                name: 'Notification',
                title: 'Notification 通知提醒框',
                component: () =>
                    import ('@/docs/Notification/index.vue')
            },
            {
                path: 'Popconfirm',
                name: 'Popconfirm',
                title: 'Popconfirm 气泡确认框',
                component: () =>
                    import ('@/docs/Popconfirm/index.vue')
            },
            {
                path: 'Drawer',
                name: 'Drawer',
                title: 'Drawer 抽屉',
                component: () =>
                    import ('@/docs/Drawer/index.vue')
            },
            {
                path: 'Progress',
                name: 'Progress',
                title: 'Progress 进度条',
                component: () =>
                    import ('@/docs/Progress/index.vue')
            },
            {
                path: 'Spin',
                name: 'Spin',
                title: 'Spin 加载中',
                component: () =>
                    import ('@/docs/Spin/index.vue')
            },
        ]
    },
    {
        path: '/Other',
        name: 'Other',
        title: '其他',
        component: Main,
        children: [{
                path: 'Scrollbar',
                name: 'Scrollbar',
                title: 'Scrollbar 自定义滚动条',
                component: () =>
                    import ('@/docs/Scrollbar/index.vue')
            },
            {
                path: 'Anchor',
                name: 'Anchor',
                title: 'Anchor 锚点',
                component: () =>
                    import ('@/docs/Anchor/index.vue')
            },
            {
                path: 'BackTop',
                name: 'BackTop',
                title: 'BackTop 回到顶部',
                component: () =>
                    import ('@/docs/BackTop/index.vue')
            },
            {
                path: 'Divider',
                name: 'Divider',
                title: 'Divider 分割线',
                component: () =>
                    import ('@/docs/Divider/index.vue')
            },
            {
                path: 'LocaleProvider',
                name: 'LocaleProvider',
                title: 'LocaleProvider 国际化',
                component: () =>
                    import ('@/docs/LocaleProvider/index.vue')
            },
        ]
    },
    {
        path: '/Business',
        name: 'Business',
        title: '业务组件',
        component: Main,
        children: [{
            path: 'StuffSelect',
            name: 'StuffSelect',
            title: 'StuffSelect 人员选择',
            component: () =>
                import ('@/docs/StuffSelect/index.vue')
        }]
    },
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    otherRouter,
    ...menuRouter
];