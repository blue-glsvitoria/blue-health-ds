import { useTheme } from "@mui/material";

import { ButtonSmall, ButtonSmallProps } from "..";

export type IButtonSmallWarningProps = {
  children?: React.ReactNode;
} & ButtonSmallProps;

export const ButtonSmallWarning = ({
  children,
  ...props
}: IButtonSmallWarningProps) => {
  const theme = useTheme();

  return (
    <ButtonSmall.Default
      {...props}
      sx={{
        backgroundColor: theme.palette.warning.main,
        borderColor: "inherit",
        color: theme.palette.common.white,
        "&:hover": {
          backgroundColor: theme.palette.warning.dark,
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
