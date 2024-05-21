import { ChevronRight } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { useSidebar } from "../Context";

type HeaderProps = {
  logo: ReactNode;
  shrunkenLogo: ReactNode;
};

export const Header = ({ logo, shrunkenLogo }: HeaderProps) => {
  const theme = useTheme();
  const { sidebarIsOpen, toggleSidebar } = useSidebar();
  const width = sidebarIsOpen ? 242 : 89;

  return (
    <Box
      sx={{
        display: "flex",
        height: 80,
        borderBottom: 1,
        borderColor: "divider",
        justifyContent: sidebarIsOpen ? "initial" : "center",
        paddingX: 3,
        alignItems: "center",
        width,
        transition: theme.transitions.create(["all"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        background: theme.palette.common.white,
        overflow: "hidden",
        zIndex: 1,
        userSelect: "none",
      }}
    >
      {sidebarIsOpen ? logo : shrunkenLogo}
      <Box
        component={"button"}
        sx={{
          display: "flex",
          position: "absolute",
          right: 0,
          backgroundColor: theme.palette.primary.main,
          height: 48,
          alignItems: "center",
          justifyContent: "center",
          color: theme.palette.common.white,
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
          padding: 0,
          border: 0,
          cursor: "pointer",
        }}
        onClick={toggleSidebar}
      >
        <Box
          sx={{
            transform: sidebarIsOpen ? "rotate(180deg)" : "rotate(0deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease-in-out",
          }}
        >
          <ChevronRight fontSize="small" />
        </Box>
      </Box>
    </Box>
  );
};
