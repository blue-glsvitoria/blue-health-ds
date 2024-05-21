import { IconButton, IconButtonProps } from "@blue-health/react/src"
import type { StoryObj, Meta } from "@storybook/react"
import { SettingsOutlined } from "@mui/icons-material"

const meta = {
  title: "Design System/Icon Button",
  component: IconButton,
  argTypes: {
    icon: {
      type: "string"
    },
    active: {
      type: "boolean"
    }
  },
  args: {
    icon: <SettingsOutlined />
  }
} satisfies Meta<IconButtonProps>

export default meta

export const Default: StoryObj = {
  args: {}
}

export const Active: StoryObj = {
  args: {
    active: true
  }
}
