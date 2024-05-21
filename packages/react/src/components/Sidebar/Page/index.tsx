import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { useSidebar } from "../Context";

export const Page = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const { sidebarIsOpen } = useSidebar();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflowY: "scroll",
        marginLeft: sidebarIsOpen ? theme.spacing(30) : theme.spacing(11),
        transition: theme.transitions.create(["margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      {children}
    </Box>
  );
};
