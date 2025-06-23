import Typography from '../../components/ui/Typography';

export default {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'display-lg', 'display-md', 'display-sm',
        'title-lg', 'title-md', 'title-sm', 'title-xs', 'title-2xs',
        'label-md', 'label-sm',
        'body-xl', 'body-lg', 'body-md', 'body-sm',
        'mono-md', 'mono-sm', 'mono-bold',
        'h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'caption'
      ],
    },
    color: {
      control: 'select',
      options: ['default', 'secondary', 'primary', 'white'],
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
  },
};

export const Default = {
  args: {
    children: 'Typography Example',
    variant: 'body-md',
    color: 'default',
  },
};

export const DisplayText = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="display-lg">Display Large (60px)</Typography>
      <Typography variant="display-md">Display Medium (48px)</Typography>
      <Typography variant="display-sm">Display Small (36px)</Typography>
    </div>
  ),
};

export const Titles = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="title-lg">Title Large (36px)</Typography>
      <Typography variant="title-md">Title Medium (30px)</Typography>
      <Typography variant="title-sm">Title Small (24px)</Typography>
      <Typography variant="title-xs">Title Extra Small (20px)</Typography>
      <Typography variant="title-2xs">Title 2X Small (16px)</Typography>
    </div>
  ),
};

export const Labels = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="label-md">Label Medium (16px)</Typography>
      <Typography variant="label-sm">Label Small (14px)</Typography>
    </div>
  ),
};

export const BodyText = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="body-xl">Body Extra Large (20px)</Typography>
      <Typography variant="body-lg">Body Large (18px)</Typography>
      <Typography variant="body-md">Body Medium (16px)</Typography>
      <Typography variant="body-sm">Body Small (14px)</Typography>
    </div>
  ),
};

export const MonoText = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="mono-bold">Mono Bold (16px) - Code headers</Typography>
      <Typography variant="mono-md">Mono Medium (16px) - const userName = "John";</Typography>
      <Typography variant="mono-sm">Mono Small (14px) - // This is a comment</Typography>
    </div>
  ),
};

export const DiatypeRoundedShowcase = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Typography variant="title-md" className="mb-2">Diatype Rounded Bold - Titles</Typography>
        <Typography variant="title-sm">Perfect for headings and important text</Typography>
      </div>
      <div>
        <Typography variant="title-md" className="mb-2">Diatype Rounded Medium - Labels</Typography>
        <Typography variant="label-md">Form labels and UI elements</Typography>
        <Typography variant="label-sm">Smaller labels and buttons</Typography>
      </div>
      <div>
        <Typography variant="title-md" className="mb-2">Diatype Rounded Regular - Body</Typography>
        <Typography variant="body-lg">This is perfect for longer paragraphs and body text. The regular weight provides excellent readability while maintaining the modern, rounded character of the Diatype family.</Typography>
        <Typography variant="body-sm">Smaller body text for captions and secondary information.</Typography>
      </div>
      <div>
        <Typography variant="title-md" className="mb-2">Diatype Rounded Semi-Mono - Code</Typography>
        <Typography variant="mono-md">const greeting = "Hello, Diatype!";</Typography>
        <Typography variant="mono-sm">// Perfect for code snippets</Typography>
      </div>
    </div>
  ),
};

export const LegacyVariants = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="h1">Legacy H1</Typography>
      <Typography variant="h2">Legacy H2</Typography>
      <Typography variant="h3">Legacy H3</Typography>
      <Typography variant="h4">Legacy H4</Typography>
      <Typography variant="body1">Legacy Body 1</Typography>
      <Typography variant="body2">Legacy Body 2</Typography>
      <Typography variant="caption">Legacy Caption</Typography>
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div className="space-y-4">
      <Typography color="default">Default Color</Typography>
      <Typography color="secondary">Secondary Color</Typography>
      <Typography color="primary">Primary Color</Typography>
      <div className="bg-gray-900 p-4">
        <Typography color="white">White Color</Typography>
      </div>
    </div>
  ),
};

export const Weights = {
  render: () => (
    <div className="space-y-4">
      <Typography weight="normal">Normal Weight</Typography>
      <Typography weight="medium">Medium Weight</Typography>
      <Typography weight="semibold">Semibold Weight</Typography>
      <Typography weight="bold">Bold Weight</Typography>
    </div>
  ),
}; 