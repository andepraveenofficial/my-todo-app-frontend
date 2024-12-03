import { Meta, StoryObj } from '@storybook/react';
import Stack from '../../library/stack/Stack';
import { ComponentProps } from 'react';

// Helper function to create children elements
const createChildren = (numberOfChildren: number) => {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          key={index}
          style={{ width: 100, height: 100, backgroundColor: 'red' }}
        />
      );
    });
};

// Define the props for the Storybook stories
type StoryProps = ComponentProps<typeof Stack> & {
  numberOfChildren: number;
};

// Storybook metadata configuration
const meta: Meta<StoryProps> = {
  title: 'Stack/Stack',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: Stack,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'select' },
      description: 'Stack orientation',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    numberOfChildren: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Number of children elements',
      defaultValue: 3,
    },
    className: {
      control: 'text',
      description: 'Custom class name',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
};

export default meta;

// Define the 'Horizontal' story
export const Horizontal: StoryObj<StoryProps> = {
  args: {
    orientation: 'horizontal',
    numberOfChildren: 3,
  },
  render: ({ numberOfChildren, ...args }) => (
    <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
  ),
};

// Define the 'Vertical' story
export const Vertical: StoryObj<StoryProps> = {
  args: {
    orientation: 'vertical',
    numberOfChildren: 3,
  },
  render: ({ numberOfChildren, ...args }) => (
    <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
  ),
};

// Define the 'With Custom Class' story
export const WithCustomClass: StoryObj<StoryProps> = {
  args: {
    orientation: 'horizontal',
    className: 'bg-gray-100 p-4 rounded-lg',
    numberOfChildren: 3,
  },
  render: ({ numberOfChildren, ...args }) => (
    <Stack {...args}>{createChildren(numberOfChildren)}</Stack>
  ),
};
