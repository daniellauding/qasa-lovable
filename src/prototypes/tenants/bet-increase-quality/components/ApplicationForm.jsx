import React from 'react';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

function ApplicationForm({ onChange }) {
  const [formData, setFormData] = React.useState({
    employment: '',
    references: '',
    aboutMe: '',
    documents: [],
  });

  const handleChange = (field, value) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onChange?.(newData);
  };

  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="employment" className="block text-sm font-medium text-gray-700">
          Employment History
        </label>
        <div className="mt-1">
          <textarea
            id="employment"
            name="employment"
            rows={4}
            className="shadow-sm focus:ring-qasa-pink focus:border-qasa-pink block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Describe your current and previous employment..."
            value={formData.employment}
            onChange={(e) => handleChange('employment', e.target.value)}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {formData.employment.length > 100 ? 
            '✨ Great detail! This helps landlords understand your stability.' :
            'Tip: Add more details about your role, duration, and responsibilities.'}
        </p>
      </div>

      <div>
        <label htmlFor="references" className="block text-sm font-medium text-gray-700">
          References
        </label>
        <div className="mt-1">
          <textarea
            id="references"
            name="references"
            rows={3}
            className="shadow-sm focus:ring-qasa-pink focus:border-qasa-pink block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Add contact details for your references..."
            value={formData.references}
            onChange={(e) => handleChange('references', e.target.value)}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {formData.references ? 
            '✨ References increase your chances significantly!' :
            'Tip: Previous landlords make excellent references.'}
        </p>
      </div>

      <div>
        <label htmlFor="aboutMe" className="block text-sm font-medium text-gray-700">
          About Me
        </label>
        <div className="mt-1">
          <textarea
            id="aboutMe"
            name="aboutMe"
            rows={4}
            className="shadow-sm focus:ring-qasa-pink focus:border-qasa-pink block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="Tell us about yourself, your lifestyle, and why you'd be a great tenant..."
            value={formData.aboutMe}
            onChange={(e) => handleChange('aboutMe', e.target.value)}
          />
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {formData.aboutMe.length > 200 ? 
            '✨ Excellent personal introduction!' :
            'Tip: Share your interests, lifestyle, and what makes you a great tenant.'}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Supporting Documents
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <CloudArrowUpIcon className="mx-auto h-12 w-12 text-gray-400" />
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="documents"
                className="relative cursor-pointer bg-white rounded-md font-medium text-qasa-pink hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-qasa-pink"
              >
                <span>Upload files</span>
                <input
                  id="documents"
                  name="documents"
                  type="file"
                  className="sr-only"
                  multiple
                  onChange={(e) => handleChange('documents', Array.from(e.target.files))}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">
              ID, payslips, bank statements
            </p>
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {formData.documents.length > 0 ? 
            `✨ ${formData.documents.length} document(s) uploaded!` :
            'Tip: Supporting documents significantly improve your application.'}
        </p>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-qasa-pink hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-qasa-pink"
          >
            Submit Application
          </button>
        </div>
      </div>
    </form>
  );
}

export default ApplicationForm; 