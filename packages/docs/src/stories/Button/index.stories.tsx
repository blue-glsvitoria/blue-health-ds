import { Button, IButtonProps } from "@blue-health/react"
import { AddBox } from "@mui/icons-material"

import type { StoryObj, Meta } from "@storybook/react"

const meta = {
  title: "Design System/Button",
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    buttonVariant: {
      type: 'string',
      options: ['primary', 'primary-outline', 'error', 'error-outline']
    },
    icon: {
      type: 'string'
    },
    iconPosition: {
      type: 'string',
      options: ['left', 'right']
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: "Click me",
    buttonVariant: "primary",
  },
} satisfies Meta<IButtonProps>

export default meta

export const Primary: StoryObj = {
  args: {},
}

export const PrimaryOutline: StoryObj = {
  args: {
    buttonVariant: "primary-outline",
  },
}

export const Error: StoryObj = {
  args: {
    buttonVariant: "error",
  },
}

export const ErrorOutline: StoryObj = {
  args: {
    buttonVariant: "error-outline",
  },
}

export const WithLeftIcon: StoryObj = {
  args: {
    icon: AddBox,
    iconPosition: "left",
  },
}

export const WithRightIcon: StoryObj = {
  args: {
    icon: AddBox,
    iconPosition: "right",
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: true,
  },
}

export const Small: StoryObj = {
  args: {
    size: "small",
  }
}
