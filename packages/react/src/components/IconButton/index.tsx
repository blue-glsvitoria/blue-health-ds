import { radii, space } from "@blue-health/tokens";
import {
  IconButton as IconButtonMUI,
  IconButtonProps as IconButtonPropsMUI,
  useTheme,
} from "@mui/material";

export type IconButtonProps = {
  icon: React.ReactNode;
  active?: boolean;
} & IconButtonPropsMUI;

export const IconButton = ({
  icon,
  active = false,
  ...props
}: IconButtonProps) => {
  const theme = useTheme();

  return (
    <IconButtonMUI
      {...props}
      sx={{
        width: 32,
        height: 32,
        borderRadius: radii.sm,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E8EDFF",
        background: active
          ? theme.palette.primary.main
          : theme.palette.common.white,
        color: active ? theme.palette.common.white : "#94ADFF",
        p: space[1],
        transition: "all 0.3s",
        ":hover": {
          background: theme.palette.common.white,
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
        },
      }}
    >
      {icon}
    </IconButtonMUI>
  );
};
