import { useTheme } from "@mui/material";

import { Button, ButtonProps } from "..";

type IButtonPrimaryProps = {
  children: React.ReactNode;
} & ButtonProps;

export const ButtonPrimary = ({ children, ...props }: IButtonPrimaryProps) => {
  const theme = useTheme();

  return (
    <Button.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
        transition: "all 0.3s",
        ":hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme.palette.common.white,
        },
        ...props.sx,
      }}
    >
      {children}
    </Button.Default>
  );
};
