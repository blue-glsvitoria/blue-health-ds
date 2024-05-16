import {
  Button as ButtonMUI,
  ButtonProps as MUIButtonProps,
} from "@mui/material";
import React from "react";

export type IButtonSmallDefaultProps = {
  children?: React.ReactNode;
} & MUIButtonProps;

export const ButtonSmallDefault = ({
  children,
  ...props
}: IButtonSmallDefaultProps) => {
  return (
    <ButtonMUI
      {...props}
      sx={{
        borderRadius: 2,
        px: 2,
        fontSize: 14,
        fontWeight: 700,
        textTransform: "none",
        transition: "all 0.3s",
        width: "100%",
        borderWidth: 2,
        borderStyle: "solid",
        ...props.sx,
      }}
    >
      {children}
    </ButtonMUI>
  );
};
