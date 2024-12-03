import type { Meta, StoryObj } from '@storybook/react';
import Heading from '../../library/typography/Heading';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Heading> & {
  headingText: string;
};

const meta: Meta<StoryProps> = {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    headingText: {
      control: 'text',
      description: 'Heading text',
      table: {
        defaultValue: { summary: 'Heading' },
      },
      variant: {
        control: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        description: 'Heading variant',
        table: {
          defaultValue: { summary: 'h1' },
        },
      },
      color: {
        control: 'select',
        options: ['primary', 'secondary', 'danger', 'inherit'],
        description: 'Heading color',
        table: {
          defaultValue: { summary: 'inherit' },
        },
      },
      align: {
        control: 'select',
        options: ['left', 'center', 'right', 'justify'],
        description: 'Heading alignment',
        table: {
          defaultValue: { summary: 'left' },
        },
      },
      className: {
        control: 'text',
        description: 'Custom class name',
        table: {
          defaultValue: { summary: '' },
        },
      },
      children: {
        control: 'text',
      },
    },
  },
};

export default meta;

// Basic examples
export const Basic: StoryObj<StoryProps> = {
  args: {
    headingText: 'Basic Header',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

// Variants
export const Heading1: StoryObj<StoryProps> = {
  args: {
    variant: 'h1',
    headingText: 'Heading 1',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const Heading2: StoryObj<StoryProps> = {
  args: {
    variant: 'h2',
    headingText: 'Heading 2',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const Heading3: StoryObj<StoryProps> = {
  args: {
    variant: 'h3',
    headingText: 'Heading 3',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const Heading4: StoryObj<StoryProps> = {
  args: {
    variant: 'h4',
    headingText: 'Heading 4',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const Heading5: StoryObj<StoryProps> = {
  args: {
    variant: 'h5',
    headingText: 'Heading 5',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const Heading6: StoryObj<StoryProps> = {
  args: {
    variant: 'h6',
    headingText: 'Heading 6',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

// Colors
export const PrimaryColor: StoryObj<StoryProps> = {
  args: {
    color: 'primary',
    headingText: 'Primary colored heading',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const SecondaryColor: StoryObj<StoryProps> = {
  args: {
    color: 'secondary',
    headingText: 'Secondary colored heading',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const DangerColor: StoryObj<StoryProps> = {
  args: {
    color: 'danger',
    headingText: 'Danger colored heading',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

// Alignment variations
export const LeftAligned: StoryObj<StoryProps> = {
  args: {
    headingText:
      'This is a longer text that demonstrates justified alignment. It should span multiple lines to show the effect.',
    align: 'left',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const CenterAligned: StoryObj<StoryProps> = {
  args: {
    headingText:
      'This is a longer text that demonstrates justified alignment. It should span multiple lines to show the effect.',
    align: 'center',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

export const RightAligned: StoryObj<StoryProps> = {
  args: {
    headingText:
      'This is a longer text that demonstrates justified alignment. It should span multiple lines to show the effect.',
    align: 'right',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};

// Custom styling examples
export const WithCustomClass: StoryObj<StoryProps> = {
  args: {
    headingText: 'Custom styled heading',
    className:
      'italic underline decoration-2 underline-offset-4 hover:text-blue-800',
  },
  render: ({ headingText, ...args }) => (
    <Heading {...args}>{headingText}</Heading>
  ),
};
