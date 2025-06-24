import React, { useState } from 'react';
import RangeSlider from '../../components/ui/RangeSlider';

export default {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    min: {
      control: { type: 'number' },
    },
    max: {
      control: { type: 'number' },
    },
    suffix: {
      control: { type: 'text' },
    },
  },
};

export const Default = {
  render: () => {
    const [value, setValue] = useState(50);
    
    return (
      <div className="w-[400px]">
        <RangeSlider
          label="Single Value Slider"
          min={0}
          max={100}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const RangeMode = {
  render: () => {
    const [value, setValue] = useState([25, 75]);
    
    return (
      <div className="w-[400px]">
        <RangeSlider
          label="Range Slider"
          min={0}
          max={100}
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const WithSuffix = {
  render: () => {
    const [priceRange, setPriceRange] = useState([1000, 5000]);
    
    return (
      <div className="w-[400px]">
        <RangeSlider
          label="Monthly Cost"
          min={0}
          max={10000}
          value={priceRange}
          onChange={setPriceRange}
          suffix="SEK"
        />
      </div>
    );
  },
};

export const CustomRange = {
  render: () => {
    const [rooms, setRooms] = useState([2, 4]);
    
    return (
      <div className="w-[400px]">
        <RangeSlider
          label="Number of Rooms"
          min={1}
          max={10}
          value={rooms}
          onChange={setRooms}
          suffix="rooms"
        />
      </div>
    );
  },
};

export const LargeNumbers = {
  render: () => {
    const [size, setSize] = useState([50, 150]);
    
    return (
      <div className="w-[400px]">
        <RangeSlider
          label="Size"
          min={10}
          max={300}
          value={size}
          onChange={setSize}
          suffix="m²"
        />
      </div>
    );
  },
};

export const DesignSpecs = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Design Specifications</h3>
        <div className="bg-gray-10 p-4 rounded-lg">
          <ul className="text-sm space-y-1">
            <li>• Track: 8px height with #e5e5df background</li>
            <li>• Fill: Black (#000) color</li>
            <li>• Handle: 16px × 16px white with #e5e5df border</li>
            <li>• Rounded corners on track and handles</li>
            <li>• Smooth dragging interaction</li>
            <li>• Value display below slider</li>
          </ul>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="w-[400px]">
          <RangeSlider
            label="Single Value Example"
            min={0}
            max={100}
            value={65}
            onChange={() => {}}
          />
        </div>
        
        <div className="w-[400px]">
          <RangeSlider
            label="Range Example"
            min={0}
            max={100}
            value={[30, 70]}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}; 