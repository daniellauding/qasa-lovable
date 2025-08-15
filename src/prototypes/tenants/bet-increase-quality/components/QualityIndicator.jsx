import React from 'react';
import { CheckCircle } from 'lucide-react';

function QualityIndicator({ score }) {
  const getQualityLevel = () => {
    if (score >= 90) return { text: 'Excellent', color: 'text-green-500' };
    if (score >= 70) return { text: 'Good', color: 'text-blue-500' };
    if (score >= 50) return { text: 'Fair', color: 'text-yellow-500' };
    return { text: 'Needs Improvement', color: 'text-red-500' };
  };

  const quality = getQualityLevel();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Application Quality
      </h2>
      
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl font-bold">{score}%</div>
        <div className={`text-lg font-medium ${quality.color}`}>
          {quality.text}
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <CheckCircle className={`h-6 w-6 ${score >= 20 ? 'text-green-500' : 'text-gray-300'}`} />
          <div>
            <p className="font-medium">Employment Details</p>
            <p className="text-sm text-gray-500">Detailed work history improves your chances</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <CheckCircle className={`h-6 w-6 ${score >= 50 ? 'text-green-500' : 'text-gray-300'}`} />
          <div>
            <p className="font-medium">References</p>
            <p className="text-sm text-gray-500">Previous landlord or employer references</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <CheckCircle className={`h-6 w-6 ${score >= 75 ? 'text-green-500' : 'text-gray-300'}`} />
          <div>
            <p className="font-medium">About You</p>
            <p className="text-sm text-gray-500">Personal introduction and lifestyle</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <CheckCircle className={`h-6 w-6 ${score >= 100 ? 'text-green-500' : 'text-gray-300'}`} />
          <div>
            <p className="font-medium">Documents</p>
            <p className="text-sm text-gray-500">ID, payslips, or bank statements</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityIndicator; 