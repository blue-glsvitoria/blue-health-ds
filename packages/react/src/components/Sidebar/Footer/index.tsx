import { Box, useTheme } from "@mui/material";

import { useSidebar } from "../Context";

export type FooterProps = {
  text: string;
  shrunkenText: string;
};

export const Footer = ({ shrunkenText = "", text = "" }: FooterProps) => {
  const { sidebarIsOpen } = useSidebar();
  const theme = useTheme();
  const width = sidebarIsOpen ? 242 : 89;

  return (
    <Box
      sx={{
        width,
        height: 48,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.main,
        fontSize: 12,
        fontWeight: 600,
        whiteSpace: "nowrap",
        backgroundColor: "background.paper",
        borderTop: 1,
        borderTopColor: "divider",
        userSelect: "none",
        transition: theme.transitions.create(["width"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      {sidebarIsOpen && text}
      {!sidebarIsOpen && shrunkenText}
    </Box>
  );
};
