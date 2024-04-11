import { NavLink, INavLinkProps } from "@blue-health/react"
import { DashboardOutlined } from "@mui/icons-material"

import type { StoryObj, Meta } from "@storybook/react"
import { MemoryRouter } from "react-router-dom"

const meta = {
  title: "Design System/NavLink",
  component: NavLink,
  argTypes: {
    icon: {
      type: 'string'
    },
    to: {
      type: 'string'
    },
    variant: {
      type: 'string',
      options: ["icon", "standard"],
    },
    label: {
      type: 'string'
    }
  },
  args: {
    label: "Label",
    icon: DashboardOutlined,
    to: "/teste",
  },
  decorators: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<INavLinkProps>

export default meta

export const Default: StoryObj = {
  args: {},
}

export const Icon: StoryObj = {
  args: {
    variant: "icon",
  },
}

export const Active: StoryObj = {
  args: {
    to: "/",
  },
}

export const IconActive: StoryObj = {
  args: {
    variant: "icon",
    to: "/",
  },
}


