import { NavLink, NavLinkProps } from "@blue-health/react"
import { BarChart, Home, List, People } from "@mui/icons-material"
import type { StoryObj, Meta } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

const meta = {
  title: "Design System/NavLink",
  component: NavLink,
  argTypes: {
    icon: {
      type: 'string'
    },
    label: {
      type: 'string'
    },
    to: {
      type: 'string'
    },
    variant: {
      control: {
        type: 'select',
        options: ['icon', 'standard']
      }
    },
    module: {
      type: 'string'
    },
    onClick: {
      type: 'function'
    },
    subItens: {
      type: 'string'
    }
  },
  args: {
    icon: <Home />,
    label: "Dashboard",
    to: "",
  },
  decorators:[
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} satisfies Meta<NavLinkProps>

export default meta

export const Default: StoryObj = {
  args: {}
}

export const Selected: StoryObj = {
  args: {
    to: "?path=/docs/design-system-navlink--docs"
  }
}

export const Icon: StoryObj = {
  args: {
    to: "/",
    variant: "icon"
  }
}

export const IconSelected: StoryObj = {
  args: {
    variant: "icon",
    to: "?path=/docs/design-system-navlink--docs"
  }
}

export const Collapse: StoryObj = {
  args: {
    subItens: [
      {
        label: "List",
        icon: <List />,
        to: "/list",
      }
    ]
  }
}

export const CollapseOpen: StoryObj = {
  args: {
    subItens: [
      {
        label: "List",
        icon: <List />,
        to: "/",
      }
    ]
  }
}

export const CollapseOpenWithMoreOptions: StoryObj = {
  args: {
    subItens: [
      {
        label: "List",
        icon: <List />,
        to: "/",
      },
      {
        label: "Beneficiaries",
        icon: <People />,
        to: "/",
      },
      {
        label: "Proposals",
        icon: <BarChart />,
        to: "/",
      }
    ]
  }
}
