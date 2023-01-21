<script lang="ts">
    import { defineComponent } from 'vue';

export default defineComponent({

    props: {

        /**
         * The generic component prefix.
         */
        componentPrefix: String,

        /**
         * The size name.
         */
        size: String,

        /**
         * The sizable prefix. Should use to component prefix, unless the
         * sizeable prefix is different than the component prefix.
         */
        sizePrefix: String

    },

    computed: {

        /**
         * The computed sizeable class prefix.
         */
        sizeableClassPrefix(): string|undefined {
            return this.sizePrefix || this.componentPrefix;
        },
        
        /**
         * Determines if the size already has the prefix.
         */
        hasSizeablePrefix(): boolean {
            if(this.size === undefined) {
                return false;
            }

            return !!this.size.match(
                new RegExp(`^${this.sizeableClassPrefix}`)
            );
        },

        /**
         * The size classes that get injected into the DOM.
         */
        sizeableClass(): string {
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

});
</script>