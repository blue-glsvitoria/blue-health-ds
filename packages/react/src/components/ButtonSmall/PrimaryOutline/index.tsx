import { useTheme } from "@mui/material";

import { ButtonSmall, ButtonSmallProps } from "..";

type IButtonSmallPrimaryOutlineProps = {
  children: React.ReactNode;
} & ButtonSmallProps;

export const ButtonSmallPrimaryOutline = ({
  children,
  ...props
}: IButtonSmallPrimaryOutlineProps) => {
  const theme = useTheme();

  return (
    <ButtonSmall.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        ":hover": {
          backgroundColor: theme.palette.primary.main,
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
