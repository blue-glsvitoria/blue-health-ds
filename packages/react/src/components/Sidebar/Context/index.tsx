import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

export type SidebarContextProps = {
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
  sidebarIsOpen: boolean;
};

export const SidebarContext = createContext({} as SidebarContextProps);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const initialStatus = !downMd;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(initialStatus);
  const openSidebar = () => setSidebarIsOpen(true);
  const closeSidebar = () => setSidebarIsOpen(false);
  const toggleSidebar = () => setSidebarIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ openSidebar, closeSidebar, sidebarIsOpen, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  return useContext(SidebarContext);
};
