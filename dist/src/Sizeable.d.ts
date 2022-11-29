declare const _default: import("vue").DefineComponent<{
    /**
     * The generic component prefix.
     */
    componentPrefix: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The size name.
     */
    size: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The sizable prefix. Should use to component prefix, unless the
     * sizeable prefix is different than the component prefix.
     */
    sizePrefix: {
        type: StringConstructor;
        default: undefined;
    };
}, unknown, unknown, {
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
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The generic component prefix.
     */
    componentPrefix: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The size name.
     */
    size: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * The sizable prefix. Should use to component prefix, unless the
     * sizeable prefix is different than the component prefix.
     */
    sizePrefix: {
        type: StringConstructor;
        default: undefined;
    };
}>>, {
    componentPrefix: string;
    size: string;
    sizePrefix: string;
}>;
export default _default;
