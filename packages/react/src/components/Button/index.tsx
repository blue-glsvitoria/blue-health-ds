import { fontSizes, fontWeights, radii, space } from "@blue-health/tokens";
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  SvgIcon,
  SxProps,
  useTheme,
} from "@mui/material";

export interface IButtonProps extends MUIButtonProps {
  buttonVariant?: // eslint-disable-next-line prettier/prettier
  | "primary"
  | "primary-outline"
  | "error"
  | "error-outline"
  | "never";
  size?: "small" | "large";
  icon?: typeof SvgIcon;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const Button = ({
  buttonVariant = "primary",
  size = "large",
  icon,
  iconPosition,
  children,
  ...props
}: IButtonProps) => {
  const theme = useTheme();

  let buttonStyles: SxProps = {
    alignItems: "center",
    border: "1px solid transparent",
    borderRadius: radii.lg,
    display: "flex",
    fontWeight: fontWeights.bold,
    fontSize: size === "small" ? fontSizes.xs : fontSizes.lg,
    gap: 1,
    justifyContent: "center",
    px: space[4],
    textTransform: "none",
    transition: "all 0.2s",
    ":disabled": {
      backgroundColor: theme.palette.text.secondary,
      borderColor: theme.palette.text.secondary,
      color: "#2b2b2b61",
    },
  };

  switch (buttonVariant) {
    case "primary":
      buttonStyles = {
        ...buttonStyles,
        backgroundColor: theme.palette.primary.main,
        color: "white",
        ":hover": {
          backgroundColor: theme.palette.primary.dark,
        },
      };
      break;
    case "primary-outline":
      buttonStyles = {
        ...buttonStyles,
        backgroundColor: "white",
        borderColor: theme.palette.primary.main,
        color: theme.palette.primary.main,
        ":hover": {
          backgroundColor: "rgba(37, 0, 207, 0.15)",
        },
      };
      break;
    case "error":
      buttonStyles = {
        ...buttonStyles,
        backgroundColor: theme.palette.error.main,
        color: "white",
        ":hover": {
          background: theme.palette.error.dark,
        },
      };
      break;
    case "error-outline":
      buttonStyles = {
        ...buttonStyles,
        backgroundColor: "white",
        borderColor: theme.palette.error.main,
        color: theme.palette.error.main,
        ":hover": {
          background: "rgba(198, 40, 40, 0.38)",
        },
      };
      break;
    case "never":
      break;
  }

  const removeProperty = (obj: any, propToRemove: string) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [propToRemove]: propValue, ...newObj } = obj;
    return newObj;
  };

  return (
    <MUIButton
      sx={{
        ...buttonStyles,
        ...props.sx,
      }}
      {...props}
      // remover o sx do props
      {...removeProperty(props, "sx")}
    >
      {icon && iconPosition === "left" && <SvgIcon component={icon} />}
      {children}
      {icon && iconPosition === "right" && <SvgIcon component={icon} />}
    </MUIButton>
  );
};
