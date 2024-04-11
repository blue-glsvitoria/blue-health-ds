import { radii, space } from "@blue-health/tokens";
import { Box, ButtonBase, SvgIcon, Typography, useTheme } from "@mui/material";
import { NavLink as RouterNavLink } from "react-router-dom";

export interface INavLinkProps {
  to: string;
  label: string;
  icon: typeof SvgIcon;
  variant?: "icon" | "standard";
}
export const NavLink = ({
  variant = "standard",
  icon,
  to,
  label,
}: INavLinkProps) => {
  const theme = useTheme();

  return (
    <RouterNavLink to={to} style={{ textDecoration: "none" }}>
      {({ isActive }) => {
        return (
          <ButtonBase
            sx={{
              height: 36,
              width: "100%",
              borderRadius: radii.xs,
              paddingX: space[2],
              display: "flex",
              justifyContent: variant === "icon" ? "center" : "start",
              alignItems: "center",
              gap: space[2],
              backgroundColor: isActive
                ? theme.palette.primary.main
                : theme.palette.grey[100],
              color: isActive
                ? theme.palette.primary.contrastText
                : theme.palette.primary.main,
              border: isActive ? 0 : 1,
              borderColor: theme.palette.grey[200],
              transition: "all 0.2s",
              ":hover": {
                filter: "brightness(0.9)",
              },
            }}
          >
            {!!icon && <Box>{<SvgIcon component={icon} />}</Box>}
            {variant === "standard" && !!label && (
              <Typography variant="body2" fontWeight={400}>
                {label}
              </Typography>
            )}
          </ButtonBase>
        );
      }}
    </RouterNavLink>
  );
};
