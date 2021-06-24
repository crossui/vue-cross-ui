import JsBarcode from 'jsbarcode';

const removeUndefinedProps = (obj) => {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop];
    }
  }
}

export default {
  name: 'VBarcode',
  props: {
    value: [String, Number],
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type: [String, Boolean],
      default: true
    },
    text: [String, Number],
    fontOptions: [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator: function (value) {
        return ['canvas', 'svg', 'img'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return { valid: true };
  },
  watch: {
    $props: {
      deep: true,
      immediate: true,
      handler() {
        if (this.$el) {
          this.generate();
        }
      },
    },
  },
  mounted() {
    this.generate()
  },
  methods: {
    generate() {
      let that = this;
      let settings = {
        format: this.format,
        width: this.width,
        height: this.height,
        displayValue: this.displayValue,
        text: this.text,
        fontOptions: this.fontOptions,
        font: this.font,
        textAlign: this.textAlign,
        textPosition: this.textPosition,
        textMargin: this.textMargin,
        fontSize: this.fontSize,
        background: this.background,
        lineColor: this.lineColor,
        margin: this.margin,
        marginTop: this.marginTop,
        marginBottom: this.marginBottom,
        marginLeft: this.marginLeft,
        marginRight: this.marginRight,
        flat: this.flat,
        ean128: this.ean128,
        valid: function (valid) {
          that.valid = valid;
        },
        elementTag: this.elementTag
      };
      removeUndefinedProps(settings);
      JsBarcode(this.$el.querySelector('.vcu-barcode-element'), String(this.value), settings);
    }
  },
  render(h) {
    return h('div', [
      h(this.elementTag, {
        style: { display: this.valid ? undefined : 'none' },
        'class': ['vcu-barcode-element']
      }),
      h('div', {
        style: { display: this.valid ? 'none' : undefined },
        'class': ['vcu-barcode-slots']
      }, this.$slots.default),
    ]);
  },
};

