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
        borderColor: "#E8EDFF",
        borderStyle: "solid",
        borderWidth: 2,
        color: theme.palette.info.main,
        transition: "all 0.3s",
        "&:hover": {
          backgroundColor: "#E8EDFF",
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme.palette.common.white,
          borderWidth: 0,
        },
        ...props.sx,
      }}
    >
      {children}
    </Button.Default>
  );
};
