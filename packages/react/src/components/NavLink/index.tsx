import { fontSizes, fontWeights, space } from "@blue-health/tokens";
import { Box, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import * as RouterDOM from "react-router-dom";

export type NavLinkProps<T = any> = {
  icon?: ReactNode;
  label: string;
  module?: T;
  to: string;
  variant?: "icon" | "standard";
};

export const NavLink = ({
  icon = "",
  label = "",
  to = "",
  variant = "standard",
}: NavLinkProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        userSelect: "none",
        width: "100%",
      }}
    >
      <RouterDOM.NavLink
        to={to}
        style={{ textDecoration: "none" }}
        draggable={false}
      >
        {({ isActive }) => {
          console.log(isActive);
          return (
            <Box
              sx={{
                height: 24,
                width: "100%",
                px: space[2],
                display: "flex",
                alignItems: "center",
                gap: space[2],
                color: isActive
                  ? theme.palette.primary.main
                  : theme.palette.text.primary,
                fontWeight: isActive
                  ? fontWeights.semibold
                  : fontWeights.regular,
                transition: "all 0.1s ease-in-out",
                whiteSpace: "nowrap",
                ":hover": {
                  color: theme.palette.primary.main,
                },
                "> *": {
                  mr: variant === "icon" ? "auto" : 0,
                },
              }}
            >
              {!!icon && <Box sx={{ width: 24, height: 24 }}>{icon}</Box>}
              {variant === "standard" && !!label && (
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: fontSizes.sm,
                    fontWeight: "inherit",
                  }}
                >
                  {label}
                </Typography>
              )}
            </Box>
          );
        }}
      </RouterDOM.NavLink>
    </Box>
  );
};
