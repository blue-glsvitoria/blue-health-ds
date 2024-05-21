import { Sidebar, SidebarProps } from "@blue-health/react/src"
import { Add, AutoMode, BarChart, CorporateFareOutlined, Dashboard, List, People } from "@mui/icons-material"
import type { StoryObj, Meta } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

const meta = {
  title: "Design System/Sidebar",
  component: Sidebar.Container,
  argTypes: {
    navigation: {
      control: {
        type: "object"
      }
    },
  },
  decorators:[
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <BrowserRouter>
      <Sidebar.Provider>
        <Story />
        </Sidebar.Provider>
      </BrowserRouter>
    )
  ]
} satisfies Meta<SidebarProps>

export default meta

export const Default: StoryObj = {
  args: {}
}

export const WithNavigation: StoryObj = {
  args: {
    navigation: [
      {
        label: "Dashboard",
        icon: <Dashboard fontSize="small" />,
        module: "module",
      },
      {
        label: "Propostas",
        icon: <BarChart fontSize="small" />,
        module: "module",
      },
      {
        label: "Beneficiários",
        icon: <People fontSize="small" />,
        module: "module",
      },
      {
        label: "Inconclusos",
        icon: <AutoMode fontSize="small" />,
        module: "module",
      },
    ]
  }
}

export const WithNavigationCollapse: StoryObj = {
  args: {
    navigation: [
      {
        label: "Empresas",
        icon: <CorporateFareOutlined fontSize="small" />,
        module: "empresas",
        subItens: [
          {
            label: "Listagem",
            icon: <List fontSize="small" />,
            to: "/empresas",
            module: "empresas",
          },
  
          {
            label: "Cadastrar empresa",
            to: "empresas/cadastro",
            icon: <Add fontSize="small" />,
            module: "nova-empresa",
          },
        ],
      },
    ]
  }
}
