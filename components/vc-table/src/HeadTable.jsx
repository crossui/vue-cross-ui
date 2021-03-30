import PropTypes from '../../_util/vue-types';
import { measureScrollbar } from './utils';
import BaseTable from './BaseTable';
import classNames from 'classnames';

export default {
  name: 'HeadTable',
  props: {
    fixed: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    columns: PropTypes.array.isRequired,
    tableClassName: PropTypes.string.isRequired,
    handleBodyScrollLeft: PropTypes.func.isRequired,
    expander: PropTypes.object.isRequired,
  },
  inject: {
    table: { default: () => ({}) },
  },
  render() {
    const { columns, fixed, tableClassName, handleBodyScrollLeft, expander, table } = this;
    const { prefixCls, scroll, showHeader, saveRef } = table;
    let { useFixedHeader } = table;
    const headStyle = {};

    const scrollbarWidth = measureScrollbar({ direction: 'vertical' });

    if (scroll.y) {
      useFixedHeader = true;
      const scrollbarWidthOfHeader = measureScrollbar({ direction: 'horizontal', prefixCls });
      // Add negative margin bottom for scroll bar overflow bug
      if (scrollbarWidthOfHeader > 0 && !fixed) {
        headStyle.marginBottom = `-${scrollbarWidthOfHeader}px`;
        headStyle.paddingBottom = '0px';
        headStyle.minWidth = `${scrollbarWidth}px`;
        headStyle.overflowX = 'scroll';
        headStyle.overflowY = scrollbarWidth === 0 ? 'hidden' : 'scroll';
      }
    }

    if (!useFixedHeader || !showHeader) {
      return null;
    }
    return (
      <div
        key="headTable"
        {...{
          directives: [
            {
              name: 'vcu-ref',
              value: fixed ? () => {} : saveRef('headTable'),
            },
          ],
        }}
        class={classNames(`${prefixCls}-header`, {
          [`${prefixCls}-hide-scrollbar`]: scrollbarWidth > 0,
        })}
        style={headStyle}
        onScroll={handleBodyScrollLeft}
      >
        <BaseTable
          tableClassName={tableClassName}
          hasHead
          hasBody={false}
          fixed={fixed}
          columns={columns}
          expander={expander}
        />
      </div>
    );
  },
};
