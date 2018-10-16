import PropTypes from '../_util/vue-types'
import VcSelect from '../select'
import MiniSelect from './MiniSelect'
import enUs from '../vc-pagination/locale/en_US'
import LocaleReceiver from '../locale-provider/LocaleReceiver'
import { getOptionProps } from '../_util/props-util'
import VcPagination from '../vc-pagination'

export const PaginationProps = () => ({
    total: PropTypes.number,
    defaultCurrent: PropTypes.number,
    current: PropTypes.number,
    defaultPageSize: PropTypes.number,
    pageSize: PropTypes.number,
    hideOnSinglePage: PropTypes.bool,
    showSizeChanger: PropTypes.bool,
    pageSizeOptions: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ])),
    buildOptionText: PropTypes.func,
    showSizeChange: PropTypes.func,
    showQuickJumper: PropTypes.bool,
    showTotal: PropTypes.any,
    size: PropTypes.string,
    simple: PropTypes.bool,
    locale: PropTypes.object,
    prefixCls: PropTypes.string,
    selectPrefixCls: PropTypes.string,
    itemRender: PropTypes.any,
    role: PropTypes.string,
})

export const PaginationConfig = () => ({
  ...PaginationProps(),
  position: PropTypes.oneOf(['top', 'bottom', 'both']),
})
export default {
    name: 'VPagination',
    props: {
        ...PaginationProps(),
        prefixCls: PropTypes.string.def('vcu-pagination'),
        selectPrefixCls: PropTypes.string.def('vcu-select'),
    },
    model: {
        prop: 'current',
        event: 'change',
    },
    methods: {
        renderPagination(contextLocale) {
            const { buildOptionText, size, locale: customLocale, ...restProps } = getOptionProps(this)
            const isSmall = size === 'small'
            const paginationProps = {
                props: {
                    ...restProps,
                    selectComponentClass: (isSmall ? MiniSelect : VcSelect),
                    locale: { ...contextLocale, ...customLocale },
                    buildOptionText: buildOptionText || this.$scopedSlots.buildOptionText,
                },
                class: {
                    'mini': isSmall,
                },
                on: this.$listeners,
            }

            return ( <
                VcPagination {...paginationProps }
                />
            )
        },
    },
    render() {
        return ( <
            LocaleReceiver componentName = 'Pagination'
            defaultLocale = { enUs }
            scopedSlots = {{ default: this.renderPagination }}
            />
        )
    },
}