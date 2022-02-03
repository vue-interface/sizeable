var Sizeable = {
  props: {
    size: String,
    sizePrefix: {
      type: String,
      default() {
        return this.$options.name && this.$options.name.toLowerCase();
      }
    }
  },
  computed: {
    sizeableClassPrefix() {
      return this.sizePrefix;
    },
    sizeableClass() {
      if (!this.size || !this.sizeableClassPrefix) {
        return "";
      }
      return `${this.sizeableClassPrefix}-${this.size}`;
    }
  }
};
export { Sizeable };
