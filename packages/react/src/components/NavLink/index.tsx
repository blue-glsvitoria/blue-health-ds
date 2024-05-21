import { fontSizes, fontWeights, radii, space } from "@blue-health/tokens";
import { ChevronRight } from "@mui/icons-material";
import { Box, Collapse, Typography, useTheme } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import * as RouterDOM from "react-router-dom";

type CollapseNavLinkItem<T = any> = {
  icon?: ReactNode;
  label: string;
  to: string;
  module: T;
};

export type NavLinkProps<T = any> = {
  icon?: ReactNode;
  label: string;
  module?: T;
  onClick?: () => void;
  to?: string;
  subItens?: CollapseNavLinkItem<T>[];
  variant?: "icon" | "standard";
};

export const NavLink = ({
  icon = "",
  label = "",
  to = "",
  subItens: items = [],
  variant = "standard",
  onClick,
}: NavLinkProps) => {
  const theme = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = RouterDOM.useLocation();

  useEffect(() => {
    if (items?.some?.((item) => location?.pathname?.includes?.(item?.to))) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  }, [items, location?.pathname]);

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  const handleClickIcon = () => {
    onClick?.();
    if (!isCollapsed) {
      setIsCollapsed(true);
    }
  };

  if (items.length > 0) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          onClick={variant === "icon" ? handleClickIcon : handleCollapse}
          sx={{
            width: "100%",
            height: 24,
            px: space[4],
            display: "flex",
            alignItems: "center",
            gap: space[4],
            cursor: "pointer",
            color: isCollapsed
              ? theme.palette.primary.main
              : theme.palette.text.primary,
            fontSize: fontSizes.sm,
            fontWeight: isCollapsed
              ? fontWeights.semibold
              : fontWeights.regular,
            transition: "all 0.1s ease-in-out",
            whiteSpace: "nowrap",
            userSelect: "none",
            ":hover": {
              color: theme.palette.primary.main,
            },
            "> *": {
              marginRight: variant === "icon" ? "auto" : 0,
            },
          }}
        >
          {!!icon && <Box sx={{ width: 24, height: 24 }}>{icon}</Box>}
          {variant === "standard" && !!label && label}
          <Box
            sx={{
              display: variant === "icon" ? "none" : "flex",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <Box
              sx={{
                backgroundColor: isCollapsed
                  ? theme.palette.primary.main
                  : "transparent",
                color: isCollapsed ? "white" : theme.palette.text.primary,
                borderRadius: 1,
                padding: 1 / 7,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.1s ease-in-out",
              }}
            >
              <ChevronRight
                fontSize="small"
                style={{
                  transform: isCollapsed ? "rotate(90deg)" : "rotate(0deg)",
                  transition: "all 0.1s ease",
                }}
              />
            </Box>
          </Box>
        </Box>
        {variant === "standard" && (
          <Collapse
            in={isCollapsed}
            sx={{
              userSelect: "none",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: space[6],
                marginTop: space[4],
              }}
            >
              {items?.map((item, index) => (
                <RouterDOM.NavLink
                  key={index}
                  to={item?.to}
                  style={{ textDecoration: "none" }}
                  draggable={false}
                >
                  {({ isActive }) => {
                    return (
                      <Box
                        sx={{
                          height: 24,
                          width: "100%",
                          px: space[8],
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                          gap: 1,
                          color: isActive
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                          fontSize: 14,
                          fontWeight: isActive ? 600 : 400,
                          transition: "all 0.1s ease-in-out",
                          whiteSpace: "nowrap",
                          userSelect: "none",
                          ":hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {!!item?.icon && (
                          <Box sx={{ height: 24, width: 24 }}>{item?.icon}</Box>
                        )}
                        {variant === "standard" && !!item?.label && item?.label}
                      </Box>
                    );
                  }}
                </RouterDOM.NavLink>
              ))}
            </Box>
          </Collapse>
        )}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        borderRadius: radii.md,
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
