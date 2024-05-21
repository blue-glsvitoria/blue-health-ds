import { TagStatus, TagStatusProps } from "@blue-health/react/src"
import type { StoryObj, Meta } from "@storybook/react"

const meta = {
  title: "Design System/Tag Status",
  component: TagStatus,
  argTypes: {
    children: {
      type: 'string'
    },
    variant: {
      control: {
        type: 'select',
        options: ['approve', 'reject', 'pending', 'black', 'blue', 'others']
      }
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: 'Tag Status',
  }
} satisfies Meta<TagStatusProps>

export default meta

export const Success: StoryObj = {
  args: {
    variant: 'approve',
  }
}

export const Reject: StoryObj = {
  args: {
    variant: 'reject',
  }
}

export const Pending: StoryObj = {
  args: {
    variant: 'pending',
  }
}

export const Black: StoryObj = {
  args: {
    variant: 'black',
  }
}

export const Blue: StoryObj = {
  args: {
    variant: 'blue',
  }
}

export const Others: StoryObj = {
  args: {
    variant: 'others',
  }
}