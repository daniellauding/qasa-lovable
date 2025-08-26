// Font loading utility to handle font failures gracefully
export const checkFontLoading = () => {
  // Check if fonts are loaded, if not, add fallback class to body
  if (typeof document !== 'undefined') {
    const checkFont = () => {
      try {
        // Check if DiatypeRounded font is available
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // Test with fallback font
        context.font = '16px Arial';
        const fallbackWidth = context.measureText('Test').width;
        
        // Test with custom font
        context.font = '16px DiatypeRounded, Arial';
        const customWidth = context.measureText('Test').width;
        
        // If widths are the same, custom font likely didn't load
        if (fallbackWidth === customWidth) {
          console.warn('🔤 DiatypeRounded font may not have loaded, using fallbacks');
          document.body.classList.add('font-fallback');
        } else {
          console.log('✅ DiatypeRounded font loaded successfully');
          document.body.classList.remove('font-fallback');
        }
      } catch (error) {
        console.warn('Font loading check failed:', error);
        document.body.classList.add('font-fallback');
      }
    };

    // Check immediately and after a delay
    checkFont();
    setTimeout(checkFont, 1000);
    
    // Also check when fonts are loaded (if supported)
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        checkFont();
      });
    }
  }
};

// Initialize font loading check
export const initializeFontLoading = () => {
  if (typeof window !== 'undefined') {
    // Run on DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', checkFontLoading);
    } else {
      checkFontLoading();
    }
  }
};
