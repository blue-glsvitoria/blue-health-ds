import {
  Button as ButtonMUI,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
import React from "react";

export type IButtonDefaultProps = {
  children?: React.ReactNode;
} & MUIButtonProps;

export function ButtonDefault({ children, ...props }: IButtonDefaultProps) {
  return (
    <ButtonMUI
      {...props}
      sx={{
        borderRadius: 1,
        px: 2,
        py: 1,
        fontSize: 16,
        fontWeight: 700,
        textTransform: "none",
        width: "100%",
        ...props.sx,
      }}
    >
      {children}
    </ButtonMUI>
  );
}
