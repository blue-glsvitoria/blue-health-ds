import { useTheme } from "@mui/material";

import { ButtonSmall, ButtonSmallProps } from "..";

type IButtonSmallPrimaryProps = {
  children: React.ReactNode;
} & ButtonSmallProps;

export const ButtonSmallPrimary = ({
  children,
  ...props
}: IButtonSmallPrimaryProps) => {
  const theme = useTheme();

  return (
    <ButtonSmall.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.primary.main,
        borderColor: "inherit",
        color: theme.palette.common.white,
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
    </ButtonSmall.Default>
  );
};
