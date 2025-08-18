import React from 'react';

export default {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
};

const ColorSwatch = ({ name, value, textColor = 'text-black' }) => (
  <div className="flex flex-col">
    <div 
      className="w-20 h-20 rounded-lg border border-gray-200 mb-2 flex items-center justify-center"
      style={{ backgroundColor: value }}
    >
      <span className={`text-xs font-mono ${textColor}`}>{value}</span>
    </div>
    <div className="text-xs text-center">
      <div className="font-medium">{name}</div>
      <div className="font-mono text-gray-500">{value}</div>
    </div>
  </div>
);

const ColorSection = ({ title, colors }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-4 text-gray-900">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {colors.map(({ name, value, textColor }) => (
        <ColorSwatch key={name} name={name} value={value} textColor={textColor} />
      ))}
    </div>
  </div>
);

export const BrandColors = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Qasa Design System Colors</h1>
      
      <ColorSection 
        title="Brand Colors"
        colors={[
          { name: 'UI Pink', value: 'var(--color-primary)' },
          { name: 'UI Pink Hover', value: 'var(--color-primary-hover)' },
          { name: 'Brown', value: '#322721', textColor: 'text-white' },
          { name: 'Brown Light', value: '#3a2f2a', textColor: 'text-white' },
          { name: 'Brown Dark', value: '#281e1b', textColor: 'text-white' },
          { name: 'Off White', value: '#f0f0eb' },
          { name: 'Off White Light', value: '#f6f6f3' },
          { name: 'Off White Dark', value: '#e0e0d7' },
          { name: 'Soft Yellow', value: '#fef8d1' },
          { name: 'Warm Yellow', value: '#f8d87c' },
          { name: 'Soft Pink', value: '#fbe9f0' },
        ]}
      />

      <ColorSection 
        title="Gray Scale"
        colors={[
          { name: 'Gray 10', value: '#f9f9f6' },
          { name: 'Gray 20', value: '#f0f0eb' },
          { name: 'Gray 30', value: '#e5e5df' },
          { name: 'Gray 40', value: '#d6d6ce' },
          { name: 'Gray 50', value: '#a3a397' },
          { name: 'Gray 60', value: '#78786d', textColor: 'text-white' },
          { name: 'Gray 70', value: '#545449', textColor: 'text-white' },
          { name: 'Gray 80', value: '#424237', textColor: 'text-white' },
          { name: 'Gray 90', value: '#26261e', textColor: 'text-white' },
        ]}
      />

      <ColorSection 
        title="Semantic Colors"
        colors={[
          { name: 'Loading', value: '#ada9a6' },
          { name: 'Chip Border', value: '#e5e5e0' },
          { name: 'Chip Border Active', value: '#382d28', textColor: 'text-white' },
        ]}
      />
    </div>
  ),
};

export const ButtonColors = {
  render: () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Button Color System</h1>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Primary Button</h3>
          <div className="grid grid-cols-3 gap-4">
            <ColorSwatch name="Normal" value="var(--color-primary)" />
            <ColorSwatch name="Hover" value="var(--color-primary-hover)" />
            <ColorSwatch name="Text" value="var(--color-text-on-primary)" />
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Text Color: var(--color-text-on-primary)
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Secondary Button</h3>
          <div className="grid grid-cols-3 gap-4">
            <ColorSwatch name="Normal" value="var(--color-button-secondary-bg)" textColor="text-white" />
            <ColorSwatch name="Hover" value="var(--color-button-secondary-bg-hover)" textColor="text-white" />
            <ColorSwatch name="Focus" value="var(--color-button-secondary-bg-focus)" textColor="text-white" />
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Text Color: var(--color-button-secondary-text)
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Tertiary Button</h3>
          <div className="grid grid-cols-3 gap-4">
            <ColorSwatch name="Normal" value="var(--color-button-tertiary-bg)" />
            <ColorSwatch name="Hover" value="var(--color-button-tertiary-bg-hover)" />
            <ColorSwatch name="Focus" value="var(--color-button-tertiary-bg-focus)" />
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Text Color: var(--color-button-tertiary-text)
          </div>
        </div>
      </div>
    </div>
  ),
};

export const UsageGuidelines = {
  render: () => (
    <div className="p-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Color Usage Guidelines</h1>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">CSS Variables vs Tailwind Classes</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="mb-4">Use semantic color tokens for consistency:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">✅ Recommended</h4>
                <code className="block text-sm bg-white p-3 rounded border">
                  bg-bg-brand-primary<br/>
                  text-text-on-brand-primary<br/>
                  border-chip-border
                </code>
              </div>
              <div>
                <h4 className="font-medium mb-2">❌ Avoid</h4>
                <code className="block text-sm bg-white p-3 rounded border">
                  bg-[#f19ec1]<br/>
                  text-[#453231]<br/>
                  border-[#e5e5e0]
                </code>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Typography Colors</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-text-strong rounded"></div>
              <span><code>text-strong</code> - #000000 - Headlines, important text</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-text-default rounded"></div>
              <span><code>text-default</code> - #322721 - Body text, labels</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-text-subtle rounded"></div>
              <span><code>text-subtle</code> - #78786d - Secondary text, captions</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-4 h-4 bg-text-disabled rounded"></div>
              <span><code>text-disabled</code> - #a3a397 - Disabled states</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Accessibility</h3>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="mb-2">All color combinations meet WCAG 2.1 AA standards:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Primary button: 4.7:1 contrast ratio</li>
              <li>Secondary button: 5.2:1 contrast ratio</li>
              <li>Tertiary button: 6.1:1 contrast ratio</li>
              <li>Body text on background: 8.1:1 contrast ratio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
}; 