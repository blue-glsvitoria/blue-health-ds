import { Button, ButtonProps } from "@blue-health/react"
import type { StoryObj, Meta } from "@storybook/react"

const meta = {
  title: "Design System/Button",
  component: Button.Default,
  argTypes: {
    children: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    onClick: { action: 'clicked' },
  },
  args: {
    children: "Click me",
  },
} satisfies Meta<ButtonProps>

export default meta

export const Default: StoryObj = {
  args: {}
}

export const Primary = () => (
  <Button.Primary>
    Primary
  </Button.Primary>
);

export const PrimaryDisabled = () => (
  <Button.Primary disabled>
    Primary Disabled
  </Button.Primary>
);

export const OutlineGrey = () => (
  <Button.OutlineGrey>
    Outline Grey
  </Button.OutlineGrey>
);

export const OutlineGreyDisabled = () => (
  <Button.OutlineGrey disabled>
    Outline Grey Disabled
  </Button.OutlineGrey>
);