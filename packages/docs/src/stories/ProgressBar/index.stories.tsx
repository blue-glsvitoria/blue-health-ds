import { ProgressBar, ProgressBarProps } from "@blue-health/react/src"
import type { StoryObj, Meta } from "@storybook/react"

const meta = {
  title: "Design System/Progress Bar",
  component: ProgressBar.Root,
  argTypes: {
    steps: {
      type: "string"
    },
    currentStep: {
      type: "number"
    }
  },
  args: {
    steps: ['Step 1', 'Step 2', 'Step 3']
  }
} satisfies Meta<ProgressBarProps>

export default meta


export const StepOne: StoryObj = {
  args: {
    currentStep: 1
  }
}

export const StepTwo: StoryObj = {
  args: {
    currentStep: 2
  }
}

export const StepThree: StoryObj = {
  args: {
    currentStep: 3
  }
}

export const Finished: StoryObj = {
  args: {
    currentStep: 4
  }
}