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
        'title-xl', 'title-2xl', 'title-3xl', 'title-4xl', 'title-5xl', 'title-6xl', 'title-7xl', 'title-8xl', 'title-9xl',
        'label-md', 'label-sm',
        'body-4xl', 'body-3xl', 'body-2xl', 'body-xl', 'body-lg', 'body-md', 'body-sm', 'body-xs',
        'text-9xl', 'text-8xl', 'text-7xl', 'text-6xl', 'text-5xl', 'text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs',
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
      options: ['light', 'normal', 'medium', 'semibold', 'bold'],
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
      <Typography variant="title-xl">Title XL (text-xl)</Typography>
      <Typography variant="title-2xl">Title 2XL (text-2xl)</Typography>
      <Typography variant="title-3xl">Title 3XL (text-3xl)</Typography>
      <Typography variant="title-4xl">Title 4XL (text-4xl)</Typography>
      <Typography variant="title-5xl">Title 5XL (text-5xl)</Typography>
      <Typography variant="title-6xl">Title 6XL (text-6xl)</Typography>
      <Typography variant="title-7xl">Title 7XL (text-7xl)</Typography>
      <Typography variant="title-8xl">Title 8XL (text-8xl)</Typography>
      <Typography variant="title-9xl">Title 9XL (text-9xl)</Typography>
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
      <Typography variant="body-4xl">Body 4XL (36px)</Typography>
      <Typography variant="body-3xl">Body 3XL (30px)</Typography>
      <Typography variant="body-2xl">Body 2XL (24px)</Typography>
      <Typography variant="body-xl">Body Extra Large (20px)</Typography>
      <Typography variant="body-lg">Body Large (18px)</Typography>
      <Typography variant="body-md">Body Medium (16px)</Typography>
      <Typography variant="body-sm">Body Small (14px)</Typography>
      <Typography variant="body-xs">Body Extra Small (10px)</Typography>
    </div>
  ),
};

export const TextVariants = {
  render: () => (
    <div className="space-y-4">
      <Typography variant="text-6xl">Text 6XL (60px)</Typography>
      <Typography variant="text-5xl">Text 5XL (48px)</Typography>
      <Typography variant="text-4xl">Text 4XL (36px)</Typography>
      <Typography variant="text-3xl">Text 3XL (30px)</Typography>
      <Typography variant="text-2xl">Text 2XL (24px)</Typography>
      <Typography variant="text-xl">Text XL (20px)</Typography>
      <Typography variant="text-lg">Text Large (18px)</Typography>
      <Typography variant="text-base">Text Base (16px)</Typography>
      <Typography variant="text-sm">Text Small (14px)</Typography>
      <Typography variant="text-xs">Text Extra Small (12px)</Typography>
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
      <Typography weight="light">Light Weight (300) - Elegant and modern</Typography>
      <Typography weight="normal">Normal Weight (400) - Standard reading</Typography>
      <Typography weight="medium">Medium Weight (500) - UI labels and elements</Typography>
      <Typography weight="semibold">Semibold Weight (600) - Emphasis</Typography>
      <Typography weight="bold">Bold Weight (700) - Strong emphasis</Typography>
    </div>
  ),
};

export const WeightExamples = {
  render: () => (
    <div className="space-y-8">
      <div>
        <Typography variant="title-sm" className="mb-3">Body Text with Different Weights</Typography>
        <div className="space-y-3">
          <Typography variant="body-lg" weight="light">
            This is body-lg with light weight. Perfect for elegant, modern reading experiences where you want the text to feel airy and sophisticated.
          </Typography>
          <Typography variant="body-lg" weight="normal">
            This is body-lg with normal weight. The standard weight for most body text, providing good readability and balance.
          </Typography>
          <Typography variant="body-lg" weight="medium">
            This is body-lg with medium weight. Slightly heavier than normal, perfect for labels and important text that needs to stand out.
          </Typography>
        </div>
      </div>
      
      <div>
        <Typography variant="title-sm" className="mb-3">Titles with Different Weights</Typography>
        <div className="space-y-3">
          <Typography variant="text-2xl" weight="light">Light Title - Modern and Elegant</Typography>
          <Typography variant="text-2xl" weight="normal">Normal Title - Balanced and Clear</Typography>
          <Typography variant="text-2xl" weight="medium">Medium Title - Confident and Strong</Typography>
          <Typography variant="text-2xl" weight="bold">Bold Title - Powerful and Impactful</Typography>
        </div>
      </div>
      
      <div>
        <Typography variant="title-sm" className="mb-3">UI Text with Appropriate Weights</Typography>
        <div className="space-y-3">
          <Typography variant="body-sm" weight="light">Light small text for secondary information</Typography>
          <Typography variant="body-sm" weight="normal">Normal small text for descriptions</Typography>
          <Typography variant="body-sm" weight="medium">Medium small text for form labels</Typography>
          <Typography variant="body-sm" weight="semibold">Semibold small text for important notices</Typography>
        </div>
      </div>
    </div>
  ),
}; 