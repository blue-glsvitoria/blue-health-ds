import { ProfilePhoto, ProfilePhotoProps } from "@blue-health/react/src"
import type { StoryObj, Meta } from "@storybook/react"

const meta = {
  title: "Design System/Profile Photo",
  component: ProfilePhoto,
  argTypes: {
    children: {
      type: "string"
    },
    src: {
      type: "string"
    },
  },
} satisfies Meta<ProfilePhotoProps>

export default meta

export const Default: StoryObj = {
  args: {
    src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
  }
}

export const ProfileBlue: StoryObj = {
  args: {}
}

