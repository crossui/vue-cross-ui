import PropTypes from '../_util/vue-types'
import { initDefaultProps, getComponentFromProp } from '../_util/props-util'
import classNames from 'classnames'

export const AnchorLinkProps = {
    prefixCls: PropTypes.string,
    href: PropTypes.string,
    title: PropTypes.any,
}

export default {
    name: 'VAnchorLink',
    props: initDefaultProps(AnchorLinkProps, {
        prefixCls: 'vcu-anchor',
        href: '#',
    }),
    inject: {
        vcuAnchor: { default: {} },
    },

    mounted() {
        this.vcuAnchor.registerLink(this.href)
    },

    beforeDestroy() {
        this.vcuAnchor.unregisterLink(this.href)
    },
    watch: {
        href(val, oldVal) {
            this.vcuAnchor.unregisterLink(oldVal)
            this.vcuAnchor.registerLink(val)
        },
    },
    methods: {
        handleClick() {
            this.vcuAnchor.scrollTo(this.href)
        },
    },
    render() {
        const {
            prefixCls,
            href,
            $slots,
        } = this
        const title = getComponentFromProp(this, 'title')
        const active = this.vcuAnchor.$data.activeLink === href
        const wrapperClassName = classNames(`${prefixCls}-link`, {
            [`${prefixCls}-link-active`]: active,
        })
        const titleClassName = classNames(`${prefixCls}-link-title`, {
            [`${prefixCls}-link-title-active`]: active,
        })
        return (
            <div class={wrapperClassName}>
                <a
                    class={titleClassName}
                    href={href}
                    title={typeof title === 'string' ? title : ''}
                    onClick={this.handleClick}
                >
                    {title}
                </a>
                {$slots.default}
            </div>
        )
    },
}