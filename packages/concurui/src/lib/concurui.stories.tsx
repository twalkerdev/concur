import type { Meta, StoryObj } from '@storybook/react-vite'
import { Concurui } from './concurui'
import { expect } from 'storybook/test'
import '../styles/main.css'

const meta = {
  component: Concurui,
  title: 'Concurui',
} satisfies Meta<typeof Concurui>
export default meta

type Story = StoryObj<typeof Concurui>

export const Primary = {
  args: {},
} satisfies Story

export const Heading = {
  args: {},
  play: async ({ canvas }) => {
    await expect(canvas.getByText(/Concurui/gi)).toBeTruthy()
  },
} satisfies Story
