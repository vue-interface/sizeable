import { paramCase } from "param-case";

export default {

    props: {

        /**
         * The size name.
         *
         * @param {String}
         */
        size: String,

        /**
         * The size prefix.
         *
         * @param {String}
         */
        sizePrefix: {
            type: String,
            default() {
                return this.$options.name;
            }
        }

    },

    computed: {

        sizeableClassPrefix() {
            return this.sizePrefix && paramCase(this.sizePrefix.toLowerCase());
        },

        sizeableClass() {
            if(!this.size || !this.sizeableClassPrefix) {
                return '';
            }

            return `${this.sizeableClassPrefix}-${this.size}`;
        }

    }

};
