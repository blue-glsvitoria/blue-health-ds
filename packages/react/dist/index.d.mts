import * as react_jsx_runtime from 'react/jsx-runtime';
import * as _mui_material from '@mui/material';
import { ButtonProps, SvgIcon } from '@mui/material';

interface IButtonProps extends ButtonProps {
    buttonVariant?: "primary" | "primary-outline" | "error" | "error-outline" | "never";
    size?: "small" | "large";
    icon?: typeof SvgIcon;
    iconPosition?: "left" | "right";
    children: React.ReactNode;
}
declare const Button: ({ buttonVariant, size, icon, iconPosition, children, ...props }: IButtonProps) => react_jsx_runtime.JSX.Element;

declare const theme: _mui_material.Theme;

export { Button, type IButtonProps, theme };
