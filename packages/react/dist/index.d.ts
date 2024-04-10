import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _mui_material from '@mui/material';
import { ButtonProps, SvgIcon, SvgIconProps, TextFieldProps } from '@mui/material';
import * as react from 'react';
import * as _mui_material_OverridableComponent from '@mui/material/OverridableComponent';

interface IButtonProps extends ButtonProps {
    buttonVariant?: "primary" | "primary-outline" | "error" | "error-outline" | "never";
    size?: "small" | "large";
    icon?: typeof SvgIcon;
    iconPosition?: "left" | "right";
    children: React.ReactNode;
}
declare const Button: {
    ({ buttonVariant, size, icon, iconPosition, children, ...props }: IButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type ITextFieldProps = {
    icon?: typeof SvgIcon;
    iconPosition?: "left" | "right";
    iconProps?: SvgIconProps;
} & TextFieldProps;
declare const TextField: react.ForwardRefExoticComponent<(Omit<{
    icon?: (_mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }) | undefined;
    iconPosition?: "left" | "right" | undefined;
    iconProps?: SvgIconProps | undefined;
} & _mui_material.FilledTextFieldProps, "ref"> | Omit<{
    icon?: (_mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }) | undefined;
    iconPosition?: "left" | "right" | undefined;
    iconProps?: SvgIconProps | undefined;
} & _mui_material.OutlinedTextFieldProps, "ref"> | Omit<{
    icon?: (_mui_material_OverridableComponent.OverridableComponent<_mui_material.SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }) | undefined;
    iconPosition?: "left" | "right" | undefined;
    iconProps?: SvgIconProps | undefined;
} & _mui_material.StandardTextFieldProps, "ref">) & react.RefAttributes<HTMLDivElement>>;

declare const theme: _mui_material.Theme;

export { Button, type IButtonProps, type ITextFieldProps, TextField, theme };
