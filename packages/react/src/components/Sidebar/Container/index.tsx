import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { Logo } from "../../Logo";
import { NavLink, NavLinkProps } from "../../NavLink";
import { Sidebar } from "..";
import { useSidebar } from "../Context";

type Link<T = any> = Partial<NavLinkProps<T>>;

export type ContainerProps<T = any> = {
  navigation: Link<T>[];
};

export const Container = <T,>({ navigation }: ContainerProps) => {
  const hasPermission = useCallback((module?: T) => !!module, []);
  const { toggleSidebar, sidebarIsOpen } = useSidebar();
  const [isFiltering, setIsFiltering] = useState(true);

  const [links, setLinks] = useState<Link<T>[]>(navigation);

  const checkPermissions = useCallback(
    (item: Link<T>) => {
      if (item?.subItens) {
        const filteredSubItens = item.subItens.filter((subItem) =>
          hasPermission(subItem?.module),
        );
        return filteredSubItens?.length;
      }
      return hasPermission(item.module);
    },
    [hasPermission],
  );

  useEffect(() => {
    setLinks((prev) => prev?.filter(checkPermissions));
    setIsFiltering(false);
  }, [checkPermissions, hasPermission]);

  return (
    <>
      <Sidebar.Root>
        <Sidebar.Header
          logo={<Logo />}
          shrunkenLogo={<Logo variant="icon" />}
        />
        <Sidebar.Content.Wrapper>
          <Sidebar.Content.Title>Menu</Sidebar.Content.Title>
          <Sidebar.Content.Items>
            {!isFiltering &&
              links?.map((item, index) => {
                if (item?.subItens && item?.subItens?.length > 0) {
                  return (
                    <NavLink
                      onClick={toggleSidebar}
                      icon={item.icon}
                      label={item?.label ?? ""}
                      variant={sidebarIsOpen ? "standard" : "icon"}
                      subItens={item.subItens ?? []}
                      key={index}
                    />
                  );
                } else if (item) {
                  return (
                    <NavLink
                      to={item?.to ?? ""}
                      icon={item?.icon}
                      label={item?.label ?? ""}
                      variant={sidebarIsOpen ? "standard" : "icon"}
                      key={index}
                    />
                  );
                }
              })}
          </Sidebar.Content.Items>
        </Sidebar.Content.Wrapper>
        <Sidebar.Footer text="Powered by Nuv Tech" shrunkenText="Nuv Tech" />
      </Sidebar.Root>

      <Sidebar.Page>
        <Outlet />
      </Sidebar.Page>
    </>
  );
};
