import { TextField, ITextFieldProps } from "@blue-health/react"
import { AccountCircle, RemoveRedEye, Search } from "@mui/icons-material"

import type { StoryObj, Meta } from "@storybook/react"
import { FunctionComponent } from "react"

const meta = {
  title: "Design System/TextField",
  component: TextField as FunctionComponent<ITextFieldProps> | undefined,
  argTypes: {
    children: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    icon: {
      type: 'string'
    },
    iconPosition: {
      type: 'string',
      options: ['left', 'right']
    },
    iconProps: {
      type: 'function'
    },
    placeholder: {
      type: 'string'
    },
    focused: {
      type: 'boolean'
    },
  },
  args: {
    label: "Label",
    placeholder: "Write something here...",
  },
} satisfies Meta<ITextFieldProps>

export default meta

export const Default: StoryObj = {
  args: {},
}

export const Focus: StoryObj = {
  args: {
    focused: true,
  },
}

export const Disabled: StoryObj = {
  args: {
    disabled: true
  }
}

export const WithIconRight: StoryObj = {
  args: {
    icon: Search,
    iconPosition: "right",
  }
}

export const WithIconLeft: StoryObj = {
  args: {
    icon: Search,
    iconPosition: "left",
  }
}

export const Login: StoryObj = {
  args: {
    icon: AccountCircle,
    iconPosition: "right",
    placeholder: "Digite seu login"
  }
}

export const Password: StoryObj = {
  args: {
    type: "password",
    icon: RemoveRedEye,
    iconPosition: "right",
    iconProps: {
      sx: {
        cursor: "pointer",
        transition: "all 0.2s",
        "&:hover": {
          color: "primary.main"
        }
      },
    },
    placeholder: "Digite sua senha"
  }
}

