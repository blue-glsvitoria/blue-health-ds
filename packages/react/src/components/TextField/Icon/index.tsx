import { InputAdornment, useTheme } from "@mui/material";
import { forwardRef } from "react";

import { TextField, TextFieldProps } from "..";

type ITextFieldIconProps = {
  icon: React.ReactNode;
} & Omit<TextFieldProps, "label">;

export const TextFieldIcon = forwardRef<HTMLDivElement, ITextFieldIconProps>(
  ({ icon, ...props }, ref) => {
    const theme = useTheme();
    return (
      <TextField.Default
        {...props}
        ref={ref}
        sx={{
          "& ::placeholder": {
            color: theme.palette.info.main,
            fontWeight: 600,
            opacity: 1,
          },
          ...props.sx,
        }}
        InputProps={{
          sx: {
            height: 52,
            ...props.InputProps?.sx,
          },
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
          ...props.InputProps,
        }}
      />
    );
  },
);

TextFieldIcon.displayName = "Icon";
