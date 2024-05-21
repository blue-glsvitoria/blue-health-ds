import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';
import * as _mui_material from '@mui/material';
import { ButtonProps as ButtonProps$1, IconButtonProps as IconButtonProps$1, AvatarProps, StackProps, TextFieldProps as TextFieldProps$1 } from '@mui/material';
import * as react from 'react';
import react__default, { ReactNode } from 'react';

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

type IButtonSmallErrorOutlineProps = {
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
    PrimaryOutline: ({ children, ...props }: {
        children: react.ReactNode;
    } & {
        children?: react.ReactNode;
    } & _mui_material.ButtonOwnProps & Omit<_mui_material.ButtonBaseOwnProps, "classes"> & _mui_material_OverridableComponent.CommonProps & Omit<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | react.RefObject<HTMLButtonElement> | null | undefined;
    }, "className" | "style" | "classes" | "action" | "centerRipple" | "children" | "disabled" | "disableRipple" | "disableTouchRipple" | "focusRipple" | "focusVisibleClassName" | "LinkComponent" | "onFocusVisible" | "sx" | "tabIndex" | "TouchRippleProps" | "touchRippleRef" | "color" | "disableElevation" | "disableFocusRipple" | "endIcon" | "fullWidth" | "href" | "size" | "startIcon" | "variant"> & {
        component?: react.ElementType<any, keyof react.JSX.IntrinsicElements> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    Error: ({ children, ...props }: IButtonSmallErrorProps) => react_jsx_runtime.JSX.Element;
    ErrorOutline: ({ children, ...props }: IButtonSmallErrorOutlineProps) => react_jsx_runtime.JSX.Element;
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

type IconButtonProps = {
    icon: React.ReactNode;
    active?: boolean;
} & IconButtonProps$1;
declare const IconButton: ({ icon, active, ...props }: IconButtonProps) => react_jsx_runtime.JSX.Element;

type LogoProps = {
    variant?: "icon" | "standard";
};
declare const Logo: ({ variant }: LogoProps) => react_jsx_runtime.JSX.Element;

type CollapseNavLinkItem<T = any> = {
    icon?: ReactNode;
    label: string;
    to: string;
    module: T;
};
type NavLinkProps<T = any> = {
    icon?: ReactNode;
    label: string;
    module?: T;
    onClick?: () => void;
    to?: string;
    subItens?: CollapseNavLinkItem<T>[];
    variant?: "icon" | "standard";
};
declare const NavLink: ({ icon, label, to, subItens: items, variant, onClick, }: NavLinkProps) => react_jsx_runtime.JSX.Element;

type ProfilePhotoProps = {
    src: string;
} & AvatarProps;
declare const ProfilePhoto: ({ src, ...props }: ProfilePhotoProps) => react_jsx_runtime.JSX.Element;

type ProgressBarItem = {
    variant: "waiting" | "active" | "completed";
    label: string;
    step: number;
} & StackProps;
declare const ProgressBarItem: ({ variant, label, step, ...props }: ProgressBarItem) => react_jsx_runtime.JSX.Element;

type ProgressBarRoot = {
    steps: string[];
    currentStep?: number;
};
declare const ProgressBarRoot: ({ steps, currentStep, }: ProgressBarRoot) => react_jsx_runtime.JSX.Element;

declare const ProgressBar: {
    Item: ({ variant, label, step, ...props }: ProgressBarItem) => react_jsx_runtime.JSX.Element;
    Root: ({ steps, currentStep }: ProgressBarRoot) => react_jsx_runtime.JSX.Element;
};
type ProgressBarProps = ProgressBarRoot;

type FooterProps = {
    text: string;
    shrunkenText: string;
};

type Link<T = any> = Partial<NavLinkProps<T>>;
type ContainerProps<T = any> = {
    navigation: Link<T>[];
};

declare const Sidebar: {
    Root: ({ children }: {
        children: react.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    Page: ({ children }: {
        children: react.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    Header: ({ logo, shrunkenLogo }: {
        logo: react.ReactNode;
        shrunkenLogo: react.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
    Footer: ({ shrunkenText, text }: FooterProps) => react_jsx_runtime.JSX.Element;
    Content: {
        Wrapper: ({ children }: {
            children: react.ReactNode;
        }) => react_jsx_runtime.JSX.Element;
        Title: ({ children }: {
            children: react.ReactNode;
        }) => react_jsx_runtime.JSX.Element;
        Items: ({ children }: {
            children: react.ReactNode;
        }) => react_jsx_runtime.JSX.Element;
    };
    Container: <T>({ navigation }: ContainerProps<any>) => react_jsx_runtime.JSX.Element;
    Provider: ({ children }: {
        children: react.ReactNode;
    }) => react_jsx_runtime.JSX.Element;
};
type SidebarProps = ContainerProps;

type TagStatusProps = {
    variant: "approve" | "reject" | "pending" | "black" | "blue" | "others";
    children: string;
} & StackProps;
declare const TagStatus: ({ variant, children, ...props }: TagStatusProps) => react_jsx_runtime.JSX.Element;

type MasksType = "cpf" | "cnpj" | "phone" | "date" | "cep" | "currency" | "code";

type TextFieldDefaultProps = {
    mask?: MasksType;
} & TextFieldProps$1;

declare const TextField: {
    Default: react.ForwardRefExoticComponent<(Omit<{
        mask?: MasksType | undefined;
    } & _mui_material.FilledTextFieldProps, "ref"> | Omit<{
        mask?: MasksType | undefined;
    } & _mui_material.OutlinedTextFieldProps, "ref"> | Omit<{
        mask?: MasksType | undefined;
    } & _mui_material.StandardTextFieldProps, "ref">) & react.RefAttributes<HTMLDivElement>>;
    Icon: react.ForwardRefExoticComponent<Omit<{
        icon: react.ReactNode;
    } & Omit<TextFieldDefaultProps, "label">, "ref"> & react.RefAttributes<HTMLDivElement>>;
    ExternalLabel: react.ForwardRefExoticComponent<(Omit<{
        label: string;
        visibilityChange?: boolean | undefined;
        containerProps?: _mui_material.StackProps | undefined;
        labelProps?: _mui_material.InputLabelProps | undefined;
        errorMessage?: string | undefined;
    } & {
        mask?: MasksType | undefined;
    } & _mui_material.FilledTextFieldProps, "ref"> | Omit<{
        label: string;
        visibilityChange?: boolean | undefined;
        containerProps?: _mui_material.StackProps | undefined;
        labelProps?: _mui_material.InputLabelProps | undefined;
        errorMessage?: string | undefined;
    } & {
        mask?: MasksType | undefined;
    } & _mui_material.OutlinedTextFieldProps, "ref"> | Omit<{
        label: string;
        visibilityChange?: boolean | undefined;
        containerProps?: _mui_material.StackProps | undefined;
        labelProps?: _mui_material.InputLabelProps | undefined;
        errorMessage?: string | undefined;
    } & {
        mask?: MasksType | undefined;
    } & _mui_material.StandardTextFieldProps, "ref">) & react.RefAttributes<HTMLDivElement>>;
    InternalLabel: react.ForwardRefExoticComponent<(Omit<{
        errorMessage?: string | undefined;
    } & {
        mask?: MasksType | undefined;
    } & _mui_material.FilledTextFieldProps, "ref"> | Omit<{
        errorMessage?: string | undefined;
    } & {
        mask?: MasksType | undefined;
    } & _mui_material.OutlinedTextFieldProps, "ref"> | Omit<{
        errorMessage?: string | undefined;
    } & {
        mask?: MasksType | undefined;
    } & _mui_material.StandardTextFieldProps, "ref">) & react.RefAttributes<HTMLDivElement>>;
};
type TextFieldProps = TextFieldDefaultProps;

declare const theme: _mui_material.Theme;

export { Button, type ButtonProps, ButtonSmall, type ButtonSmallProps, IconButton, type IconButtonProps, Logo, type LogoProps, NavLink, type NavLinkProps, ProfilePhoto, type ProfilePhotoProps, ProgressBar, type ProgressBarProps, Sidebar, type SidebarProps, TagStatus, type TagStatusProps, TextField, type TextFieldProps, theme };
