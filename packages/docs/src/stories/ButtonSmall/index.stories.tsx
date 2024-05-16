import {   ButtonSmall, ButtonSmallProps } from "@blue-health/react"
import type { StoryObj, Meta } from "@storybook/react"

const meta = {
  title: "Design System/Button Small",
  component: ButtonSmall.Default,
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
} satisfies Meta<ButtonSmallProps>

export default meta

export const Default: StoryObj = {
  args: {}
}

export const Primary = () => (
  <ButtonSmall.Primary>
    Primary
  </ButtonSmall.Primary>
);

export const PrimaryDisabled = () => (
  <ButtonSmall.Primary disabled>
    Primary Disabled
  </ButtonSmall.Primary>
);

export const OutlineGrey = () => (
  <ButtonSmall.OutlineGrey>
    OutlineGrey
  </ButtonSmall.OutlineGrey>
);

export const OutlineGreyDisabled = () => (
  <ButtonSmall.OutlineGrey disabled>
    Outline Grey Disabled
  </ButtonSmall.OutlineGrey>
);

export const Error = () => (
  <ButtonSmall.Error>
    Error
  </ButtonSmall.Error>
);

export const ErrorDisabled = () => (
  <ButtonSmall.Error disabled>
    Error Disabled
  </ButtonSmall.Error>
);

export const Success = () => (
  <ButtonSmall.Success>
    Success
  </ButtonSmall.Success>
);

export const SuccessDisabled = () => (
  <ButtonSmall.Success disabled>
    Success Disabled
  </ButtonSmall.Success>
);

export const Warning = () => (
  <ButtonSmall.Warning>
    Warning
  </ButtonSmall.Warning>
);

export const WarningDisabled = () => (
  <ButtonSmall.Warning disabled>
    Warning Disabled
  </ButtonSmall.Warning>
);

