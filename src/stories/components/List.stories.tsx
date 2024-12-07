import { Meta, StoryObj } from '@storybook/react';
import { Item, List } from '../../library/components/List';
import { ComponentProps } from 'react';

// Define the props for the Storybook stories
type StoryProps = ComponentProps<typeof List> & {
  items: string[];
};

// Storybook metadata configuration
const meta: Meta<StoryProps> = {
  title: 'Components/List',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  component: List,
  argTypes: {
    variant: {
      options: ['ordered', 'unordered'],
      control: { type: 'select' },
      description: 'List variant',
      table: {
        defaultValue: { summary: 'unordered' },
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' },
      description: 'List size',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    items: {
      control: 'object',
      description: 'List items',
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

// Sample items for stories
const sampleItems = ['First item', 'Second item', 'Third item', 'Fourth item'];

// Define the 'Unordered' story
export const Unordered: StoryObj<StoryProps> = {
  args: {
    variant: 'unordered',
    items: sampleItems,
  },
  render: ({ items, ...args }) => (
    <List {...args}>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  ),
};

// Define the 'Ordered' story
export const Ordered: StoryObj<StoryProps> = {
  args: {
    variant: 'ordered',
    items: sampleItems,
  },
  render: ({ items, ...args }) => (
    <List {...args}>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  ),
};

// Define size variations
export const Small: StoryObj<StoryProps> = {
  args: {
    size: 'sm',
    items: sampleItems,
  },
  render: ({ items, ...args }) => (
    <List {...args}>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  ),
};

export const Medium: StoryObj<StoryProps> = {
  args: {
    size: 'md',
    items: sampleItems,
  },
  render: ({ items, ...args }) => (
    <List {...args}>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  ),
};

export const Large: StoryObj<StoryProps> = {
  args: {
    size: 'lg',
    items: sampleItems,
  },
  render: ({ items, ...args }) => (
    <List {...args}>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  ),
};

// Custom styling example
export const WithCustomClass: StoryObj<StoryProps> = {
  args: {
    items: sampleItems,
    className: 'text-blue-600 font-medium',
  },
  render: ({ items, ...args }) => (
    <List {...args}>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </List>
  ),
};
