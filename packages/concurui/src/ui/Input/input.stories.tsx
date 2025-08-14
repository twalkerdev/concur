import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from './input'

const meta = {
  component: Input,
  render: ({ className, ...args }: { className?: string }) => (
    <Input className={className} {...args} />
  ),
} satisfies Meta<typeof Input>
export default meta

type Story = StoryObj<typeof meta>

export const InputEmail = {
  args: {
    type: 'text',
    placeholder: 'Email',
  },
} satisfies Story

export const InputPassword = {
  args: {
    type: 'password',
    placeholder: 'Password',
  },
} satisfies Story

export const InputFile = {
  args: {
    type: 'file',
  },
} satisfies Story

export const InputDisabled = {
  args: {
    type: 'email',
    placeholder: 'disabled',
    disabled: true,
  },
} satisfies Story
