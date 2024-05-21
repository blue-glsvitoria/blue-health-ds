import { Drawer } from "@mui/material";
import { ReactNode } from "react";

import { useSidebar } from "../Context";

export const Root = ({ children }: { children: ReactNode }) => {
  const { sidebarIsOpen } = useSidebar();
  return (
    <Drawer variant={"permanent"} open={sidebarIsOpen}>
      {children}
    </Drawer>
  );
};
