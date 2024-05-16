import {
  TextField as TextFieldMUI,
  TextFieldProps as MUITextFieldProps,
  useTheme,
} from "@mui/material";
import { forwardRef } from "react";

import { masks, MasksType } from "../../../utils/masks";

export type TextFieldDefaultProps = {
  mask?: MasksType;
} & MUITextFieldProps;

export const TextFieldDefault = forwardRef<
  HTMLDivElement,
  TextFieldDefaultProps
>(({ mask, ...props }, ref) => {
  const theme = useTheme();

  return (
    <TextFieldMUI
      {...props}
      ref={ref}
      sx={{
        "& fieldset": { border: "none" },
        width: "100%",
        backgroundColor: props.disabled ? "#D7D7D7" : "#FAFAFA",
        borderRadius: "14px",
        borderWidth: 1,
        borderStyle: "solid",
        border: props?.error
          ? `1px solid ${theme.palette.error.main}`
          : "1px solid #E0E0E0",
        transition: "all 0.3s",
        ":hover": {
          backgroundColor: props.disabled ? "#D7D7D7" : "#F5F5F5",
        },
        ...props.sx,
      }}
      onChange={(event) => {
        if (mask) {
          event.target.value = masks({
            data: event.target.value,
            type: mask,
          });
        }

        props.onChange?.(event);
      }}
    />
  );
});

TextFieldDefault.displayName = "Default";
