import Input from '../../components/ui/Input';

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    placeholder: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    suffix: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
    },
  },
};

export const Default = {
  args: {
    label: 'Full name',
    placeholder: '',
  },
};

export const WithPlaceholder = {
  args: {
    label: 'Username',
    placeholder: 'user123',
    helperText: 'Must be between 4-20 characters, can include letters and numbers.',
  },
};

export const WithError = {
  args: {
    label: 'Field label',
    placeholder: '',
    error: 'Error message',
  },
};

export const WithSuffix = {
  args: {
    label: 'Weight',
    placeholder: '',
    suffix: 'kg',
  },
};

export const AllStates = {
  render: () => (
    <div className="flex flex-col gap-6 w-[400px]">
      <Input
        label="Full name"
        placeholder=""
      />
      
      <Input
        label="Username"
        placeholder="user123"
        helperText="Must be between 4-20 characters, can include letters and numbers."
      />
      
      <Input
        label="Field label"
        placeholder=""
        error="Error message"
      />
      
      <Input
        label="Weight"
        placeholder=""
        suffix="kg"
      />
      
      <Input
        label="Email address"
        type="email"
        placeholder="john@example.com"
        helperText="We'll never share your email with anyone else."
      />
      
      <Input
        label="Disabled field"
        placeholder="Cannot edit this"
        disabled
      />
    </div>
  ),
};

export const FormExample = {
  render: () => (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg border border-gray-20">
      <h3 className="text-lg font-semibold mb-6">Create Profile</h3>
      <div className="space-y-6">
        <Input
          label="Full name"
          placeholder="Enter your full name"
          helperText="This will be displayed on your profile"
        />
        
        <Input
          label="Username"
          placeholder="user123"
          helperText="Must be between 4-20 characters, can include letters and numbers."
        />
        
        <Input
          label="Email address"
          type="email"
          placeholder="john@example.com"
        />
        
        <Input
          label="Phone number"
          type="tel"
          placeholder="+46 70 123 45 67"
        />
        
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Weight"
            type="number"
            placeholder="70"
            suffix="kg"
          />
          
          <Input
            label="Height"
            type="number"
            placeholder="175"
            suffix="cm"
          />
        </div>
      </div>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-6 w-[400px]">
      <Input 
        label="Small Input" 
        size="sm" 
        placeholder="Small size" 
        helperText="This is a small input field"
      />
      <Input 
        label="Medium Input" 
        size="md" 
        placeholder="Medium size" 
        helperText="This is a medium input field (default)"
      />
      <Input 
        label="Large Input" 
        size="lg" 
        placeholder="Large size" 
        helperText="This is a large input field"
      />
    </div>
  ),
}; 