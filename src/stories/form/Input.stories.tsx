import { Meta, StoryObj } from '@storybook/react';
import Input from '../../library/form/Input';
import { ComponentProps } from 'react';
import { fn } from '@storybook/test';

// Define the props for the Storybook stories
type StoryProps = ComponentProps<typeof Input>;

// Storybook metadata configuration
const meta: Meta<StoryProps> = {
  title: 'Form/Input',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'password', 'email'],
      control: { type: 'select' },
      description: 'Input type',
      table: {
        defaultValue: { summary: 'text' },
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      description: 'Input size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width input',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled input',
    },
    required: {
      control: 'boolean',
      description: 'Required input',
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
    onChange: fn(),
  },
};

export default meta;

// Default story
export const Default: StoryObj<StoryProps> = {
  args: {
    placeholder: 'Enter text...',
  },
  render: (args) => <Input {...args} />,
};

// Text input story
export const TextInput: StoryObj<StoryProps> = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
  render: (args) => <Input {...args} />,
};

// Email input story
export const EmailInput: StoryObj<StoryProps> = {
  args: {
    type: 'email',
    placeholder: 'Enter email address...',
  },
  render: (args) => <Input {...args} />,
};

// Password input story
export const PasswordInput: StoryObj<StoryProps> = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
  render: (args) => <Input {...args} />,
};

// Small size story
export const Small: StoryObj<StoryProps> = {
  args: {
    size: 'sm',
    placeholder: 'Small input',
  },
  render: (args) => <Input {...args} />,
};

// Medium size story
export const Medium: StoryObj<StoryProps> = {
  args: {
    size: 'md',
    placeholder: 'Medium input',
  },
  render: (args) => <Input {...args} />,
};

// Large size story
export const Large: StoryObj<StoryProps> = {
  args: {
    size: 'lg',
    placeholder: 'Large input',
  },
  render: (args) => <Input {...args} />,
};

// Disabled story
export const Disabled: StoryObj<StoryProps> = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
  render: (args) => <Input {...args} />,
};

// Required story
export const Required: StoryObj<StoryProps> = {
  args: {
    placeholder: 'Required field',
    required: true,
  },
  render: (args) => <Input {...args} />,
};

// Full width story
export const FullWidth: StoryObj<StoryProps> = {
  args: {
    placeholder: 'Full width input',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
  render: (args) => <Input {...args} />,
};

// Custom styling example
export const WithCustomClass: StoryObj<StoryProps> = {
  args: {
    placeholder: 'Custom styled input',
    className: 'italic placeholder:text-blue-400 focus:ring-4',
  },
  render: (args) => <Input {...args} />,
};
