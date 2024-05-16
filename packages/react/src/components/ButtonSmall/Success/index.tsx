import { useTheme } from "@mui/material";

import { ButtonSmall, ButtonSmallProps } from "..";

export type IButtonSmallSuccessProps = {
  children?: React.ReactNode;
} & ButtonSmallProps;

export const ButtonSmallSuccess = ({
  children,
  ...props
}: IButtonSmallSuccessProps) => {
  const theme = useTheme();

  return (
    <ButtonSmall.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.success.main,
        borderColor: "inherit",
        color: theme.palette.common.white,
        "&:hover": {
          backgroundColor: theme.palette.success.dark,
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
