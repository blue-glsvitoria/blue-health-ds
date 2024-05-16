import { useTheme } from "@mui/material";

import { ButtonSmall, ButtonSmallProps } from "..";

export type IButtonSmallErrorProps = {
  children?: React.ReactNode;
} & ButtonSmallProps;

export const ButtonSmallError = ({
  children,
  ...props
}: IButtonSmallErrorProps) => {
  const theme = useTheme();

  return (
    <ButtonSmall.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.error.main,
        borderColor: "inherit",
        color: theme.palette.common.white,
        "&:hover": {
          backgroundColor: theme.palette.error.dark,
        },
        ":disabled": {
          backgroundColor: "#D7D7D7",
          color: theme.palette.common.white,
        },
        ...props.sx,
      }}
    >
      {children}
    </ButtonSmall.Default>
  );
};
