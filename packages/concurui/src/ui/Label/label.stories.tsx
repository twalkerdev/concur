import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input } from '../Input/input'
import { Label } from './label'

const meta = {
  component: Label,
  render: ({ htmlFor, ...args }: { htmlFor?: string }) => (
    <div>
      <Label htmlFor={htmlFor} {...args}>
        First Name
      </Label>
      <Input id={htmlFor} type="email" />
    </div>
  ),
} satisfies Meta<typeof Label>
export default meta

type Story = StoryObj<typeof meta>

export const LabelBasic = {
  args: {
    htmlFor: 'email',
  },
} satisfies Story
