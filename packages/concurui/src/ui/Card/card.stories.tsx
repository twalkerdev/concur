import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './card'

const meta = {
  component: Card,
  render: ({
    className,
    headerText,
    hoverable = false,
    ...args
  }: {
    className?: string
    headerText?: string
    hoverable?: boolean
  }) => (
    <Card hoverable={hoverable} className={className} {...args}>
      <CardHeader>
        <CardTitle>{headerText}</CardTitle>
        <CardDescription>This is a description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card.</p>
      </CardContent>
      <CardFooter>
        <p>This is the footer of the card.</p>
      </CardFooter>
    </Card>
  ),
} satisfies Meta<typeof Card>
export default meta

type Story = StoryObj<typeof meta>

export const CardPlain = {
  args: {
    className: 'w-96',
    hoverable: false,
    headerText: 'This is a header',
  },
} satisfies Story

export const CardHoverable = {
  args: {
    className: 'w-96',
    hoverable: true,
    headerText: 'This is a header',
  },
} satisfies Story
