import React, { Suspense, lazy, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getVariant, parseVariantFromUrl } from '../utils/variants';
import LoadingDots from './ui/LoadingDots';
import VariantSelector from './ui/VariantSelector';

const VariantWrapper = ({ 
  prototypeId, 
  defaultComponent: DefaultComponent,
  showVariantSelector = true,
  children 
}) => {
  const location = useLocation();
  const variantId = parseVariantFromUrl();
  
  const variant = getVariant(prototypeId, variantId);
  
  const VariantComponent = useMemo(() => {
    if (!variant || variant.id === 'default') {
      return DefaultComponent;
    }
    
    // For non-default variants, use lazy loading
    return lazy(variant.component);
  }, [variant, DefaultComponent]);

  if (!variant) {
    // Fallback to default component if variant not found
    return <DefaultComponent />;
  }

  const basePath = location.pathname.split('?')[0];

  return (
    <div>
      {showVariantSelector && (
        <div className="fixed top-4 right-4 z-50 hidden">
          <VariantSelector 
            prototypeId={prototypeId}
            currentVariant={variantId}
            basePath={basePath}
          />
        </div>
      )}
      
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <LoadingDots />
            <p className="mt-4 text-gray-600">Loading {variant.name} variant...</p>
          </div>
        </div>
      }>
        {children ? children : <VariantComponent />}
      </Suspense>
    </div>
  );
};

export default VariantWrapper; 