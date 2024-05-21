import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

import { useSidebar } from "../../Context";

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const { sidebarIsOpen } = useSidebar();
  const width = sidebarIsOpen ? 242 : 89;
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        paddingY: 2,
        paddingX: 3,
        width,
        transition: theme.transitions.create(["width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        userSelect: "none",
      }}
    >
      {children}
    </Box>
  );
};
