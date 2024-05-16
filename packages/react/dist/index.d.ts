import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_material from '@mui/material';
import { ButtonProps as ButtonProps$1 } from '@mui/material';
import * as react from 'react';
import react__default from 'react';

type IButtonOutlineGreyProps = {
    children?: React.ReactNode;
} & ButtonProps;

type IButtonDefaultProps = {
    children?: react__default.ReactNode;
} & ButtonProps$1;
declare function ButtonDefault({ children, ...props }: IButtonDefaultProps): react_jsx_runtime.JSX.Element;

declare const Button: {
    Default: typeof ButtonDefault;
    Primary: ({ children, ...props }: {
        children: react.ReactNode;
    } & {
        children?: react.ReactNode;
    } & _mui_material.ButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, "classes"> & _mui_material_OverridableComponent.CommonProps & Omit<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
    }, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "color" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant"> & {
        component?: react.ElementType<any, keyof react.JSX.IntrinsicElements> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    OutlineGrey: ({ children, ...props }: IButtonOutlineGreyProps) => react_jsx_runtime.JSX.Element;
};
type ButtonProps = IButtonDefaultProps;

type IButtonSmallSuccessProps = {
    children?: React.ReactNode;
} & ButtonSmallProps;

type IButtonSmallWarningProps = {
    children?: React.ReactNode;
} & ButtonSmallProps;

type IButtonSmallErrorProps = {
    children?: React.ReactNode;
} & ButtonSmallProps;

type IButtonSmallDefaultProps = {
    children?: react__default.ReactNode;
} & ButtonProps$1;

declare const ButtonSmall: {
    Default: ({ children, ...props }: IButtonSmallDefaultProps) => react_jsx_runtime.JSX.Element;
    Primary: ({ children, ...props }: {
        children: react.ReactNode;
    } & {
        children?: react.ReactNode;
    } & _mui_material.ButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, "classes"> & _mui_material_OverridableComponent.CommonProps & Omit<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
    }, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "color" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant"> & {
        component?: react.ElementType<any, keyof react.JSX.IntrinsicElements> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    Error: ({ children, ...props }: IButtonSmallErrorProps) => react_jsx_runtime.JSX.Element;
    Warning: ({ children, ...props }: IButtonSmallWarningProps) => react_jsx_runtime.JSX.Element;
    Success: ({ children, ...props }: IButtonSmallSuccessProps) => react_jsx_runtime.JSX.Element;
    OutlineGrey: ({ children, ...props }: {
        children: react.ReactNode;
    } & {
        children?: react.ReactNode;
    } & _mui_material.ButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, "classes"> & _mui_material_OverridableComponent.CommonProps & Omit<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
    }, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "color" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant"> & {
        component?: react.ElementType<any, keyof react.JSX.IntrinsicElements> | undefined;
    }) => react_jsx_runtime.JSX.Element;
};
type ButtonSmallProps = IButtonSmallDefaultProps;

declare const theme: _mui_material.Theme;

export { Button, type ButtonProps, ButtonSmall, type ButtonSmallProps, theme };
