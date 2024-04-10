import { radii } from "@blue-health/tokens";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  SvgIcon,
  SvgIconProps,
  TextField as TextFieldMUI,
  TextFieldProps as MUITextFieldProps,
  useTheme,
} from "@mui/material";
import { forwardRef } from "react";

export type ITextFieldProps = {
  icon?: typeof SvgIcon;
  iconPosition?: "left" | "right";
  iconProps?: SvgIconProps;
} & MUITextFieldProps;

export const TextField = forwardRef<HTMLDivElement, ITextFieldProps>(
  ({ icon, iconPosition, iconProps, ...props }, ref) => {
    const theme = useTheme();

    const removeProperty = (obj: any, propToRemove: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [propToRemove]: propValue, ...newObj } = obj;
      return newObj;
    };

    return (
      <FormControl>
        <InputLabel
          shrink
          htmlFor={props.name}
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          {props.label}
        </InputLabel>
        <TextFieldMUI
          ref={ref}
          id={props.name}
          sx={{
            marginTop: 1.5,
            fontSize: 12,
          }}
          InputProps={{
            sx: {
              height: 40,
              borderRadius: radii.lg,
              px: 2,
              border: "1px solid #E0E0E0",
              backgroundColor: props.disabled ? "#E0E0E0" : "transparent",
            },
            endAdornment:
              icon && iconPosition === "right" ? (
                <InputAdornment position="end">
                  <SvgIcon component={icon} {...iconProps} />
                </InputAdornment>
              ) : (
                <></>
              ),
            startAdornment:
              icon && iconPosition === "left" ? (
                <InputAdornment position="start">
                  <SvgIcon component={icon} {...iconProps} />
                </InputAdornment>
              ) : (
                <></>
              ),
          }}
          {...removeProperty(props, "label")}
        />
      </FormControl>
    );
  },
);

TextField.displayName = "TextField";
