import { useTheme } from "@mui/material";

import { Button, ButtonProps } from "..";

export type IButtonOutlineGreyProps = {
  children?: React.ReactNode;
} & ButtonProps;

export const ButtonOutlineGrey = ({
  children,
  ...props
}: IButtonOutlineGreyProps) => {
  const theme = useTheme();

  return (
    <Button.Default
      {...props}
      sx={{
        backgroundColor: "#FAFAFA",
        borderColor: theme.palette.info.main,
        color: theme.palette.info.main,
        "&:hover": {
          backgroundColor: "#E8EDFF",
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme.palette.common.white,
          borderColor: "#D7D7D7",
        },
        ...props.sx,
      }}
    >
      {children}
    </Button.Default>
  );
};
