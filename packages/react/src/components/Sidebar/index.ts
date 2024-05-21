import { Container, ContainerProps } from "./Container";
import { Content } from "./Content";
import { SidebarProvider } from "./Context";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Page } from "./Page";
import { Root } from "./Root";

export const Sidebar = {
  Root: Root,
  Page: Page,
  Header: Header,
  Footer: Footer,
  Content: Content,
  Container: Container,
  Provider: SidebarProvider,
};

export type SidebarProps = ContainerProps;
