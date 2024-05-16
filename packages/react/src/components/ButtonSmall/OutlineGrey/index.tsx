import { useTheme } from "@mui/material";

import { ButtonSmall, ButtonSmallProps } from "..";

type IButtonSmallOutlineGrey = {
  children: React.ReactNode;
} & ButtonSmallProps;

export const ButtonSmallOutlineGrey = ({
  children,
  ...props
}: IButtonSmallOutlineGrey) => {
  const theme = useTheme();

  return (
    <ButtonSmall.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.common.white,
        borderColor: theme.palette.info.main,
        color: theme.palette.info.main,
        ":hover": {
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
    </ButtonSmall.Default>
  );
};
