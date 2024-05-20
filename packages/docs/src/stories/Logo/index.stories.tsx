import { Logo, LogoProps } from "@blue-health/react"
import type { StoryObj, Meta } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

const meta = {
  title: "Design System/Logo",
  component: Logo,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['icon', 'standard']
      }
    },
  },
  decorators:[
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Story: any) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
} satisfies Meta<LogoProps>

export default meta

export const Default: StoryObj = {
  args: {}
}

export const Icon: StoryObj = {
  args: {
    variant: "icon"
  }
}
