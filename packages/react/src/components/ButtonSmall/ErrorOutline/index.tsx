import { useTheme } from "@mui/material";

import { ButtonSmall, ButtonSmallProps } from "..";

export type IButtonSmallErrorOutlineProps = {
  children?: React.ReactNode;
} & ButtonSmallProps;

export const ButtonSmallErrorOutline = ({
  children,
  ...props
}: IButtonSmallErrorOutlineProps) => {
  const theme = useTheme();

  return (
    <ButtonSmall.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
        "&:hover": {
          backgroundColor: theme.palette.error.main,
          color: theme.palette.common.white,
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
