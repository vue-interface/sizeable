declare const _sfc_main: {
    props: {
        /**
         * The generic component prefix.
         */
        componentPrefix: StringConstructor;
        /**
         * The size name.
         */
        size: StringConstructor;
        /**
         * The sizable prefix. Should use to component prefix, unless the
         * sizeable prefix is different than the component prefix.
         */
        sizePrefix: StringConstructor;
    };
    computed: {
        /**
         * The computed sizeable class prefix.
         */
        sizeableClassPrefix(): string | undefined;
        /**
         * Determines if the size already has the prefix.
         */
        hasSizeablePrefix(): boolean;
        /**
         * The size classes that get injected into the DOM.
         */
        sizeableClass(): string;
    };
};
export default _sfc_main;
