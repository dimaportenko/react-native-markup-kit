import React from 'react';
import { Animated, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { ContainerModifiers, ShadowsModifiers } from '../../commons/new';
export declare type ViewPropTypes = ViewProps & ContainerModifiers & ShadowsModifiers & {
    /**
     * If true, will render as SafeAreaView
     */
    useSafeArea?: boolean;
    /**
     * Use Animate.View as a container
     */
    animated?: boolean;
    /**
     * Turn off accessibility for this view and its nested children
     */
    inaccessible?: boolean;
    /**
     * TODO: probobly isn't needed
     */
    width?: string | number;
    /**
     * TODO: probobly isn't needed
     */
    height?: string | number;
    /**
     * Experimental: Pass time in ms to delay render
     */
    renderDelay?: number;
    /**
     * Set background color
     */
    backgroundColor?: string;
    style?: StyleProp<ViewStyle | Animated.AnimatedProps<ViewStyle>>;
};
declare const _default: React.ComponentClass<(ViewProps & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & import("../../commons/modifiers").CustomModifier & {
    /**
     * If true, will render as SafeAreaView
     */
    useSafeArea?: boolean | undefined;
    /**
     * Use Animate.View as a container
     */
    animated?: boolean | undefined;
    /**
     * Turn off accessibility for this view and its nested children
     */
    inaccessible?: boolean | undefined;
    /**
     * TODO: probobly isn't needed
     */
    width?: string | number | undefined;
    /**
     * TODO: probobly isn't needed
     */
    height?: string | number | undefined;
    /**
     * Experimental: Pass time in ms to delay render
     */
    renderDelay?: number | undefined;
    /**
     * Set background color
     */
    backgroundColor?: string | undefined;
    style?: StyleProp<ViewStyle | {
        backfaceVisibility?: Animated.WithAnimatedValue<"visible" | "hidden" | undefined> | undefined;
        backgroundColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderBottomColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderBottomEndRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomLeftRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomRightRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomStartRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderEndColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderLeftColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderLeftWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderRightColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderRightWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderStartColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderStyle?: Animated.WithAnimatedValue<"solid" | "dotted" | "dashed" | undefined> | undefined;
        borderTopColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderTopEndRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopLeftRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopRightRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopStartRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        opacity?: Animated.WithAnimatedValue<number | undefined> | undefined;
        testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
        elevation?: Animated.WithAnimatedValue<number | undefined> | undefined;
        alignContent?: Animated.WithAnimatedValue<"center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined> | undefined;
        alignItems?: Animated.WithAnimatedValue<"center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined> | undefined;
        alignSelf?: Animated.WithAnimatedValue<"auto" | "center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined> | undefined;
        aspectRatio?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderEndWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        borderStartWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        bottom?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        display?: Animated.WithAnimatedValue<"none" | "flex" | undefined> | undefined;
        end?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        flex?: Animated.WithAnimatedValue<number | undefined> | undefined;
        flexBasis?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        flexDirection?: Animated.WithAnimatedValue<"row" | "column" | "row-reverse" | "column-reverse" | undefined> | undefined;
        flexGrow?: Animated.WithAnimatedValue<number | undefined> | undefined;
        flexShrink?: Animated.WithAnimatedValue<number | undefined> | undefined;
        flexWrap?: Animated.WithAnimatedValue<"wrap" | "nowrap" | "wrap-reverse" | undefined> | undefined;
        height?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        justifyContent?: Animated.WithAnimatedValue<"center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined> | undefined;
        left?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        margin?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginBottom?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginEnd?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginHorizontal?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginLeft?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginRight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginStart?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginTop?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginVertical?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        maxHeight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        maxWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        minHeight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        minWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        overflow?: Animated.WithAnimatedValue<"visible" | "hidden" | "scroll" | undefined> | undefined;
        padding?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingBottom?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingEnd?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingHorizontal?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingLeft?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingRight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingStart?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingTop?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingVertical?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        position?: Animated.WithAnimatedValue<"absolute" | "relative" | undefined> | undefined;
        right?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        start?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        top?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        width?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        zIndex?: Animated.WithAnimatedValue<number | undefined> | undefined;
        direction?: Animated.WithAnimatedValue<"ltr" | "rtl" | "inherit" | undefined> | undefined;
        shadowColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        shadowOffset?: Animated.WithAnimatedValue<{
            width: number;
            height: number;
        } | undefined> | undefined;
        shadowOpacity?: Animated.WithAnimatedValue<number | undefined> | undefined;
        shadowRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        transform?: Animated.WithAnimatedValue<(import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform)[] | undefined> | undefined;
        transformMatrix?: Animated.WithAnimatedValue<number[] | undefined> | undefined;
        rotation?: Animated.WithAnimatedValue<number | undefined> | undefined;
        scaleX?: Animated.WithAnimatedValue<number | undefined> | undefined;
        scaleY?: Animated.WithAnimatedValue<number | undefined> | undefined;
        translateX?: Animated.WithAnimatedValue<number | undefined> | undefined;
        translateY?: Animated.WithAnimatedValue<number | undefined> | undefined;
    }>;
} & {
    useCustomTheme?: boolean | undefined;
}) | (ViewProps & Partial<Record<import("../../commons/modifiers").AlignmentLiterals, boolean>> & Partial<Record<import("../../commons/modifiers").PositionLiterals, boolean>> & Partial<Record<"padding" | "paddingL" | "paddingT" | "paddingR" | "paddingB" | "paddingH" | "paddingV", boolean>> & Partial<Record<"margin" | "marginL" | "marginT" | "marginR" | "marginB" | "marginH" | "marginV", boolean>> & Partial<Record<"flex" | "flexG" | "flexS", boolean>> & Partial<Record<"br0" | "br10" | "br20" | "br30" | "br40" | "br50" | "br60" | "br100", boolean>> & Partial<Record<"bg", boolean>> & Partial<Record<"shadow10" | "shadow20" | "shadow30" | "shadow40" | "shadow50" | "shadow60" | "shadow70" | "shadow80" | "shadow90", boolean>> & {
    /**
     * If true, will render as SafeAreaView
     */
    useSafeArea?: boolean | undefined;
    /**
     * Use Animate.View as a container
     */
    animated?: boolean | undefined;
    /**
     * Turn off accessibility for this view and its nested children
     */
    inaccessible?: boolean | undefined;
    /**
     * TODO: probobly isn't needed
     */
    width?: string | number | undefined;
    /**
     * TODO: probobly isn't needed
     */
    height?: string | number | undefined;
    /**
     * Experimental: Pass time in ms to delay render
     */
    renderDelay?: number | undefined;
    /**
     * Set background color
     */
    backgroundColor?: string | undefined;
    style?: StyleProp<ViewStyle | {
        backfaceVisibility?: Animated.WithAnimatedValue<"visible" | "hidden" | undefined> | undefined;
        backgroundColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderBottomColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderBottomEndRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomLeftRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomRightRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomStartRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderBottomWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderEndColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderLeftColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderLeftWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderRightColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderRightWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderStartColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderStyle?: Animated.WithAnimatedValue<"solid" | "dotted" | "dashed" | undefined> | undefined;
        borderTopColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        borderTopEndRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopLeftRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopRightRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopStartRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderTopWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderWidth?: Animated.WithAnimatedValue<number | undefined> | undefined;
        opacity?: Animated.WithAnimatedValue<number | undefined> | undefined;
        testID?: Animated.WithAnimatedValue<string | undefined> | undefined;
        elevation?: Animated.WithAnimatedValue<number | undefined> | undefined;
        alignContent?: Animated.WithAnimatedValue<"center" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined> | undefined;
        alignItems?: Animated.WithAnimatedValue<"center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined> | undefined;
        alignSelf?: Animated.WithAnimatedValue<"auto" | "center" | "flex-start" | "flex-end" | "stretch" | "baseline" | undefined> | undefined;
        aspectRatio?: Animated.WithAnimatedValue<number | undefined> | undefined;
        borderEndWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        borderStartWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        bottom?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        display?: Animated.WithAnimatedValue<"none" | "flex" | undefined> | undefined;
        end?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        flex?: Animated.WithAnimatedValue<number | undefined> | undefined;
        flexBasis?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        flexDirection?: Animated.WithAnimatedValue<"row" | "column" | "row-reverse" | "column-reverse" | undefined> | undefined;
        flexGrow?: Animated.WithAnimatedValue<number | undefined> | undefined;
        flexShrink?: Animated.WithAnimatedValue<number | undefined> | undefined;
        flexWrap?: Animated.WithAnimatedValue<"wrap" | "nowrap" | "wrap-reverse" | undefined> | undefined;
        height?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        justifyContent?: Animated.WithAnimatedValue<"center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined> | undefined;
        left?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        margin?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginBottom?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginEnd?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginHorizontal?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginLeft?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginRight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginStart?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginTop?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        marginVertical?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        maxHeight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        maxWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        minHeight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        minWidth?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        overflow?: Animated.WithAnimatedValue<"visible" | "hidden" | "scroll" | undefined> | undefined;
        padding?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingBottom?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingEnd?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingHorizontal?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingLeft?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingRight?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingStart?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingTop?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        paddingVertical?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        position?: Animated.WithAnimatedValue<"absolute" | "relative" | undefined> | undefined;
        right?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        start?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        top?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        width?: Animated.WithAnimatedValue<string | number | undefined> | undefined;
        zIndex?: Animated.WithAnimatedValue<number | undefined> | undefined;
        direction?: Animated.WithAnimatedValue<"ltr" | "rtl" | "inherit" | undefined> | undefined;
        shadowColor?: Animated.WithAnimatedValue<string | undefined> | undefined;
        shadowOffset?: Animated.WithAnimatedValue<{
            width: number;
            height: number;
        } | undefined> | undefined;
        shadowOpacity?: Animated.WithAnimatedValue<number | undefined> | undefined;
        shadowRadius?: Animated.WithAnimatedValue<number | undefined> | undefined;
        transform?: Animated.WithAnimatedValue<(import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform)[] | undefined> | undefined;
        transformMatrix?: Animated.WithAnimatedValue<number[] | undefined> | undefined;
        rotation?: Animated.WithAnimatedValue<number | undefined> | undefined;
        scaleX?: Animated.WithAnimatedValue<number | undefined> | undefined;
        scaleY?: Animated.WithAnimatedValue<number | undefined> | undefined;
        translateX?: Animated.WithAnimatedValue<number | undefined> | undefined;
        translateY?: Animated.WithAnimatedValue<number | undefined> | undefined;
    }>;
} & {
    useCustomTheme?: boolean | undefined;
}), any>;
export default _default;
