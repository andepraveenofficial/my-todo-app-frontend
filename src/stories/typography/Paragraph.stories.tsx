import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '../../library/typography/Paragraph';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Paragraph> & {
  paragraphText: string;
};

const meta: Meta<StoryProps> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    paragraphText: {
      control: 'text',
      description: 'Paragraph text',
      table: {
        defaultValue: { summary: 'Paragraph' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Text size',
      table: {
        defaultValue: { summary: 'base' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'inherit'],
      description: 'Text color',
      table: {
        defaultValue: { summary: 'inherit' },
      },
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold'],
      description: 'Font weight',
      table: {
        defaultValue: { summary: 'normal' },
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
};

export default meta;

// Basic examples
export const Basic: StoryObj<StoryProps> = {
  args: {
    paragraphText: 'This is a basic paragraph with default styling.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

// Sizes
export const Small: StoryObj<StoryProps> = {
  args: {
    size: 'sm',
    paragraphText: 'This is a small paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const Base: StoryObj<StoryProps> = {
  args: {
    size: 'base',
    paragraphText: 'This is a base-sized paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const Large: StoryObj<StoryProps> = {
  args: {
    size: 'lg',
    paragraphText: 'This is a large paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

// Colors
export const PrimaryColor: StoryObj<StoryProps> = {
  args: {
    color: 'primary',
    paragraphText: 'This is a primary-colored paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const SecondaryColor: StoryObj<StoryProps> = {
  args: {
    color: 'secondary',
    paragraphText: 'This is a secondary-colored paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const DangerColor: StoryObj<StoryProps> = {
  args: {
    color: 'danger',
    paragraphText: 'This is a danger-colored paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

// Weights
export const NormalWeight: StoryObj<StoryProps> = {
  args: {
    weight: 'normal',
    paragraphText: 'This is a normal weight paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const MediumWeight: StoryObj<StoryProps> = {
  args: {
    weight: 'medium',
    paragraphText: 'This is a medium weight paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const SemiboldWeight: StoryObj<StoryProps> = {
  args: {
    weight: 'semibold',
    paragraphText: 'This is a semibold weight paragraph.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

// Alignment variations
export const LeftAligned: StoryObj<StoryProps> = {
  args: {
    align: 'left',
    paragraphText:
      'This is a left-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const CenterAligned: StoryObj<StoryProps> = {
  args: {
    align: 'center',
    paragraphText:
      'This is a center-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const RightAligned: StoryObj<StoryProps> = {
  args: {
    align: 'right',
    paragraphText:
      'This is a right-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};

export const JustifyAligned: StoryObj<StoryProps> = {
  args: {
    align: 'justify',
    paragraphText:
      'This is a justify-aligned paragraph with extended content to better demonstrate the alignment. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  render: ({ paragraphText, ...args }) => (
    <Paragraph {...args}>{paragraphText}</Paragraph>
  ),
};
