import { fontSizes, fontWeights, radii, space } from "@blue-health/tokens";
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
        borderRadius: radii.md,
        px: space[4],
        py: space[2],
        borderStyle: "solid",
        borderWidth: 2,
        fontSize: fontSizes.md,
        fontWeight: fontWeights.bold,
        transition: "all 0.3s",
        textTransform: "none",
        width: "100%",
        ...props.sx,
      }}
    >
      {children}
    </ButtonMUI>
  );
}
