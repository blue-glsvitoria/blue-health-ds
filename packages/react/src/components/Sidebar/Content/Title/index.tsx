import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

import { useSidebar } from "../../Context";

export const ContentTitle = ({ children }: { children: ReactNode }) => {
  const { sidebarIsOpen } = useSidebar();
  return (
    <Box
      sx={{
        paddingY: 1,
        borderBottom: 1,
        borderColor: "divider",
        display: "flex",
      }}
    >
      <Typography
        fontSize={12}
        sx={{
          marginLeft: sidebarIsOpen ? 0 : 1 / 2,
          transition: "margin 0.2s ease-in",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};
