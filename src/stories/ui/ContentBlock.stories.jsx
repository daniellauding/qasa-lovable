import React from 'react';
import ContentBlock from '../../components/ui/ContentBlock';

export default {
  title: 'UI/ContentBlock',
  component: ContentBlock,
  parameters: {
    docs: {
      description: {
        component: 'Versatile content block component with background colors, rounded containers, image layouts, and call-to-action options. Perfect for landing pages, information sections, and teasers.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main title text'
    },
    description: {
      control: 'text',
      description: 'Description text below title'
    },
    image: {
      control: 'text',
      description: 'Image URL for the content block'
    },
    imagePosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'center'],
      description: 'Position of image relative to content'
    },
    background: {
      control: { type: 'select' },
      options: ['white', 'softPink', 'inset'],
      description: 'Background color variant'
    },
    rounded: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg', 'full'],
      description: 'Border radius variant'
    },
    ctaText: {
      control: 'text',
      description: 'Call-to-action button text'
    },
    ctaVariant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'outline'],
      description: 'Button variant for CTA'
    },
    stepper: {
      control: 'object',
      description: 'Array of step labels for stepper component'
    }
  }
};

export const Default = {
  args: {
    title: 'Welcome to Qasa',
    description: 'Find your perfect home or tenant with our trusted rental platform.',
    ctaText: 'Get Started',
    ctaOnClick: () => console.log('CTA clicked')
  }
};

export const WithImageLeft = {
  args: {
    title: 'Find Your Dream Home',
    description: 'Browse thousands of verified rental properties across Sweden. From cozy apartments to spacious houses, we have something for everyone.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    imagePosition: 'left',
    ctaText: 'Browse Homes',
    ctaOnClick: () => console.log('Browse clicked')
  }
};

export const WithImageRight = {
  args: {
    title: 'List Your Property',
    description: 'Reach thousands of verified tenants looking for their next home. Our platform makes it easy to find quality renters quickly.',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    imagePosition: 'right',
    ctaText: 'List Property',
    ctaOnClick: () => console.log('List clicked')
  }
};

export const CenteredImage = {
  args: {
    title: 'Trusted by Thousands',
    description: 'Join over 100,000 satisfied users who have found their perfect rental match through Qasa.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    imagePosition: 'center',
    ctaText: 'Learn More',
    ctaOnClick: () => console.log('Learn clicked')
  }
};

export const SoftPinkBackground = {
  args: {
    title: 'Premium Features',
    description: 'Unlock advanced features and get priority access to the best properties and tenants.',
    background: 'softPink',
    ctaText: 'Upgrade Now',
    ctaVariant: 'secondary',
    ctaOnClick: () => console.log('Upgrade clicked')
  }
};

export const InsetBackground = {
  args: {
    title: 'Safety First',
    description: 'All our properties and tenants are verified for your peace of mind.',
    background: 'inset',
    ctaText: 'Learn About Safety',
    ctaVariant: 'outline',
    ctaOnClick: () => console.log('Safety clicked')
  }
};

export const WithStepper = {
  args: {
    title: 'How It Works',
    description: 'Get started in just three simple steps.',
    stepper: ['Search', 'Apply', 'Move In'],
    ctaText: 'Start Searching',
    ctaOnClick: () => console.log('Start clicked')
  }
};

export const RoundedVariants = {
  render: () => (
    <div className="space-y-6">
      <ContentBlock
        title="Small Rounded"
        description="Content block with small border radius."
        rounded="sm"
        ctaText="Action"
        ctaOnClick={() => console.log('Action clicked')}
      />
      <ContentBlock
        title="Medium Rounded"
        description="Content block with medium border radius."
        rounded="md"
        ctaText="Action"
        ctaOnClick={() => console.log('Action clicked')}
      />
      <ContentBlock
        title="Large Rounded"
        description="Content block with large border radius."
        rounded="lg"
        ctaText="Action"
        ctaOnClick={() => console.log('Action clicked')}
      />
      <ContentBlock
        title="Full Rounded"
        description="Content block with full border radius."
        rounded="full"
        ctaText="Action"
        ctaOnClick={() => console.log('Action clicked')}
      />
    </div>
  )
};

export const ButtonVariants = {
  render: () => (
    <div className="space-y-6">
      <ContentBlock
        title="Primary Button"
        description="Standard primary call-to-action button."
        ctaText="Primary Action"
        ctaVariant="primary"
        ctaOnClick={() => console.log('Primary clicked')}
      />
      <ContentBlock
        title="Secondary Button"
        description="Secondary button for less prominent actions."
        ctaText="Secondary Action"
        ctaVariant="secondary"
        ctaOnClick={() => console.log('Secondary clicked')}
      />
      <ContentBlock
        title="Tertiary Button"
        description="Tertiary button for subtle actions."
        ctaText="Tertiary Action"
        ctaVariant="tertiary"
        ctaOnClick={() => console.log('Tertiary clicked')}
      />
      <ContentBlock
        title="Outline Button"
        description="Outline button for alternative styling."
        ctaText="Outline Action"
        ctaVariant="outline"
        ctaOnClick={() => console.log('Outline clicked')}
      />
    </div>
  )
};

export const LandingPageExample = {
  render: () => (
    <div className="space-y-8">
      <ContentBlock
        title="A better way to rent"
        description="Finding a home should feel just as good as living in one. Qasa makes renting simple, safe, and enjoyable for everyone."
        image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
        imagePosition="left"
        background="softPink"
        ctaText="Start Your Search"
        ctaOnClick={() => console.log('Search clicked')}
      />
      
      <ContentBlock
        title="For Landlords"
        description="List your property and connect with verified tenants. Our platform handles everything from applications to rent collection."
        image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
        imagePosition="right"
        background="inset"
        ctaText="List Your Property"
        ctaVariant="secondary"
        ctaOnClick={() => console.log('List clicked')}
      />
      
      <ContentBlock
        title="How It Works"
        description="Get started in just three simple steps."
        stepper={['Search Properties', 'Apply Online', 'Move In']}
        background="white"
        ctaText="Learn More"
        ctaVariant="outline"
        ctaOnClick={() => console.log('Learn clicked')}
      />
    </div>
  )
};

export const InformationSection = {
  render: () => (
    <div className="space-y-6">
      <ContentBlock
        title="No Deposit Required"
        description="Keep your money in your pocket, we'll handle the deposit. Move in and pay later with our deposit-free rental solution."
        background="softPink"
        rounded="lg"
        ctaText="Learn About Deposits"
        ctaVariant="tertiary"
        ctaOnClick={() => console.log('Deposits clicked')}
      />
      
      <ContentBlock
        title="Verified Properties"
        description="All properties are verified by our team to ensure quality and safety. Never worry about scams or misrepresented listings."
        background="inset"
        rounded="lg"
        ctaText="View Safety Features"
        ctaVariant="outline"
        ctaOnClick={() => console.log('Safety clicked')}
      />
    </div>
  )
};

export const AllVariants = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Image Left</h3>
        <ContentBlock
          title="Find Your Dream Home"
          description="Browse thousands of verified rental properties across Sweden."
          image="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
          imagePosition="left"
          ctaText="Browse Homes"
          ctaOnClick={() => console.log('Browse clicked')}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Image Right</h3>
        <ContentBlock
          title="List Your Property"
          description="Reach thousands of verified tenants looking for their next home."
          image="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop"
          imagePosition="right"
          ctaText="List Property"
          ctaOnClick={() => console.log('List clicked')}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Centered Image</h3>
        <ContentBlock
          title="Trusted by Thousands"
          description="Join over 100,000 satisfied users who have found their perfect rental match."
          image="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
          imagePosition="center"
          ctaText="Learn More"
          ctaOnClick={() => console.log('Learn clicked')}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">With Stepper</h3>
        <ContentBlock
          title="How It Works"
          description="Get started in just three simple steps."
          stepper={['Search', 'Apply', 'Move In']}
          ctaText="Start Searching"
          ctaOnClick={() => console.log('Start clicked')}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Soft Pink Background</h3>
        <ContentBlock
          title="Premium Features"
          description="Unlock advanced features and get priority access."
          background="softPink"
          ctaText="Upgrade Now"
          ctaVariant="secondary"
          ctaOnClick={() => console.log('Upgrade clicked')}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: { disable: true },
  },
};
