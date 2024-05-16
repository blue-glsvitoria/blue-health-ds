import { TextField, TextFieldProps } from "@blue-health/react"
import { Search } from "@mui/icons-material"
import type { StoryObj, Meta } from "@storybook/react"

const meta = {
  title: "Design System/TextField",
  component: TextField.Default as React.ComponentType<TextFieldProps> | undefined,
  argTypes: {
    disabled: {
      type: 'boolean'
    },
    onClick: { action: 'clicked' },
  },
  args: {
    placeholder: "Write anything here"
  }
} satisfies Meta<TextFieldProps>

export default meta

export const Default: StoryObj = {
  args: {}
}

export const DefaultDisabled: StoryObj = {
  args: {
    disabled: true
  }
}

export const InternalLabel = () => (
  <TextField.InternalLabel label="With Label" placeholder="Write anything here" />
);

export const InternalLabelDisabled = () => (
  <TextField.InternalLabel label="With Label" placeholder="Write anything here" disabled />
);

export const InternalLabelError = () => (
  <TextField.InternalLabel label="With Label" placeholder="Write anything here" error={true} errorMessage="This is an error message" value="Wrong text" />
);

export const ExternalLabel = () => (
  <TextField.ExternalLabel label="With Label" placeholder="Write anything here" />
);

export const ExternalLabelDisabled = () => (
  <TextField.ExternalLabel label="With Label" placeholder="Write anything here" disabled />
);

export const ExternalLabelError = () => (
  <TextField.ExternalLabel label="With Label" placeholder="Write anything here" error={true} errorMessage="This is an error message" value="Wrong text" />
);

export const Icon = () => (
  <TextField.Icon placeholder="Write anything here" icon={<Search />} />
);

export const IconDisabled = () => (
  <TextField.Icon placeholder="Write anything here" icon={<Search />} disabled />
);
