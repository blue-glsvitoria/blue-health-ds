import { Box } from "@mui/material";
import { ReactNode } from "react";

export const ContentItems = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component={"nav"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {children}
    </Box>
  );
};
