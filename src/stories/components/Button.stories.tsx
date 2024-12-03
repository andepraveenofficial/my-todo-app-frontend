import { Meta, StoryObj } from '@storybook/react';
import Button from '../../library/components/Button';
import { ComponentProps } from 'react';
import { fn } from '@storybook/test';

// Define the props for the Storybook stories, including custom ones
type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

// Storybook metadata configuration
const meta: Meta<StoryProps> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'select' },
      description: 'Button variant',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      description: 'Button size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    buttonText: {
      control: 'text',
      description: 'Button text',
      table: {
        defaultValue: { summary: 'Button' },
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled button',
    },
    type: {
      options: ['button', 'submit'],
      control: { type: 'select' },
      description: 'Button type',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    className: {
      control: 'text',
      description: 'Custom class name',
      table: {
        defaultValue: { summary: '' },
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

// Define the 'Primary' story
export const Primary: StoryObj<StoryProps> = {
  args: {
    variant: 'primary',
    buttonText: 'Button',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Define the 'Secondary' story
export const Secondary: StoryObj<StoryProps> = {
  args: {
    variant: 'secondary',
    buttonText: 'Button',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Define the 'Danger' story
export const Danger: StoryObj<StoryProps> = {
  args: {
    variant: 'danger',
    buttonText: 'Button',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Define the 'Disabled' story
export const Disabled: StoryObj<StoryProps> = {
  args: {
    buttonText: 'Button',
    disabled: true,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// small size story
export const Small: StoryObj<StoryProps> = {
  args: {
    buttonText: 'Button',
    size: 'sm',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// medium size story
export const Medium: StoryObj<StoryProps> = {
  args: {
    buttonText: 'Button',
    size: 'md',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// large size story
export const Large: StoryObj<StoryProps> = {
  args: {
    buttonText: 'Button',
    size: 'lg',
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};

// Full width story
export const FullWidth: StoryObj<StoryProps> = {
  args: {
    buttonText: 'Button',
    fullWidth: true,
  },
  render: ({ buttonText, ...args }) => (
    <div className="w-full">
      <Button {...args}>{buttonText}</Button>
    </div>
  ),
};

// Custom styling examples
export const WithCustomClass: StoryObj<StoryProps> = {
  args: {
    buttonText: 'Button',
    className:
      'italic underline decoration-2 underline-offset-4 hover:text-blue-800',
  },
  render: ({ buttonText, ...args }) => (
    <div className="w-full">
      <Button {...args}>{buttonText}</Button>
    </div>
  ),
};
