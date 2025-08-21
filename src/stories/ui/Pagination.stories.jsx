import React, { useState } from 'react';
import Pagination from '../../components/ui/Pagination';

export default {
  title: 'UI/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: 'A pagination component for navigating through multiple pages of content. Supports customizable page numbers, navigation arrows, and ellipsis for large page counts.',
      },
    },
  },
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'The currently active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'The total number of pages',
    },
    onPageChange: {
      action: 'page changed',
      description: 'Callback function called when page changes',
    },
    showPageNumbers: {
      control: 'boolean',
      description: 'Whether to show page number buttons',
    },
    showNavigation: {
      control: 'boolean',
      description: 'Whether to show previous/next navigation buttons',
    },
    maxVisiblePages: {
      control: { type: 'number', min: 3, max: 10 },
      description: 'Maximum number of page buttons to show before using ellipsis',
    },
  },
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  
  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={setCurrentPage}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const ManyPages = Template.bind({});
ManyPages.args = {
  currentPage: 5,
  totalPages: 50,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const NavigationOnly = Template.bind({});
NavigationOnly.args = {
  currentPage: 3,
  totalPages: 10,
  showPageNumbers: false,
  showNavigation: true,
};

export const PageNumbersOnly = Template.bind({});
PageNumbersOnly.args = {
  currentPage: 1,
  totalPages: 5,
  showPageNumbers: true,
  showNavigation: false,
};

export const LargePageCount = Template.bind({});
LargePageCount.args = {
  currentPage: 729,
  totalPages: 729,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const FirstPage = Template.bind({});
FirstPage.args = {
  currentPage: 1,
  totalPages: 10,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const LastPage = Template.bind({});
LastPage.args = {
  currentPage: 10,
  totalPages: 10,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const MiddlePage = Template.bind({});
MiddlePage.args = {
  currentPage: 5,
  totalPages: 10,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const FewPages = Template.bind({});
FewPages.args = {
  currentPage: 1,
  totalPages: 3,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const SinglePage = Template.bind({});
SinglePage.args = {
  currentPage: 1,
  totalPages: 1,
  showPageNumbers: true,
  showNavigation: true,
  maxVisiblePages: 5,
};

export const AllVariants = () => {
  const [currentPage1, setCurrentPage1] = useState(1);
  const [currentPage2, setCurrentPage2] = useState(5);
  const [currentPage3, setCurrentPage3] = useState(1);
  const [currentPage4, setCurrentPage4] = useState(729);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Pagination</h3>
        <Pagination
          currentPage={currentPage1}
          totalPages={10}
          onPageChange={setCurrentPage1}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Many Pages with Ellipsis</h3>
        <Pagination
          currentPage={currentPage2}
          totalPages={50}
          onPageChange={setCurrentPage2}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Navigation Only</h3>
        <Pagination
          currentPage={currentPage3}
          totalPages={10}
          onPageChange={setCurrentPage3}
          showPageNumbers={false}
        />
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Page Count</h3>
        <Pagination
          currentPage={currentPage4}
          totalPages={729}
          onPageChange={setCurrentPage4}
        />
      </div>
    </div>
  );
};

AllVariants.parameters = {
  docs: {
    description: {
      story: 'Various pagination examples showing different configurations and use cases.',
    },
  },
};
