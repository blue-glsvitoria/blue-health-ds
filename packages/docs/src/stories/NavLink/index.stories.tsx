import { NavLink, NavLinkProps } from "@blue-health/react"
import { Home } from "@mui/icons-material"
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
    }
  },
  args: {
    icon: <Home />,
    label: "Click here",
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
    label: "Selected",
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