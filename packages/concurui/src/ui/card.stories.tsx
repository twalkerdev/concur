import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card'

// type PagePropsAndCustomArgs = React.ComponentProps<typeof Card> & { footer?: string };

const meta = {
  component: Card,
  render: ({
    className,
    headerText,
    ...args
  }: {
    className?: string
    headerText?: string
  }) => (
    <Card className={className} {...args}>
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

export const CardWithHeader = {
  args: {
    className: 'w-96',
    headerText: 'This is a header',
  },
} satisfies Story
