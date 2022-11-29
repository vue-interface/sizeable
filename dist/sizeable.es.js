import { defineComponent as e } from "vue";
const s = e({
  props: {
    componentPrefix: {
      type: String,
      default: void 0
    },
    size: {
      type: String,
      default: void 0
    },
    sizePrefix: {
      type: String,
      default: void 0
    }
  },
  computed: {
    sizeableClassPrefix() {
      return this.sizePrefix || this.componentPrefix;
    },
    hasSizeablePrefix() {
      return this.size === void 0 ? !1 : !!this.size.match(
        new RegExp(`^${this.sizeableClassPrefix}`)
      );
    },
    sizeableClass() {
      return this.size ? !this.sizeableClassPrefix || this.hasSizeablePrefix ? this.size : `${this.sizeableClassPrefix}-${this.size}` : "";
    }
  }
});
export {
  s as Sizeable
};
