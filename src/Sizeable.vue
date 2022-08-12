<script lang="ts">
export default {

    props: {

        /**
         * The generic component prefix.
         *
         * @param {string}
         */
        componentPrefix: String,

        /**
         * The size name.
         *
         * @param {string}
         */
        size: String,

        /**
         * The sizable prefix. Should use to component prefix, unless the
         * sizeable prefix is different than the component prefix.
         *
         * @param {string}
         */
        sizePrefix: String

    },

    computed: {

        /**
         * The computed sizeable class prefix.
         *
         * @param {string}
         */
        sizeableClassPrefix() {
            return this.sizePrefix || this.componentPrefix;
        },
        
        /**
         * Determines if the size already has the prefix.
         * 
         * @returns {boolean}
         */
        hasSizeablePrefix(): boolean {
            return this.size && !!this.size.match(
                new RegExp(`^${this.sizeableClassPrefix}`)
            );
        },

        /**
         * The size classes that get injected into the DOM.
         *
         * @param {string}
         */
        sizeableClass() {
            // If there is no size just return an empty string.
            if(!this.size) {
                return '';
            }

            // If there is no size prefix or the size already had the
            // prefix, then return the size as-is.
            if(!this.sizeableClassPrefix || this.hasSizeablePrefix) {
                return this.size;
            }

            // Otherwise prefix the size.
            return `${this.sizeableClassPrefix}-${this.size}`;
        }

    }

};
</script>