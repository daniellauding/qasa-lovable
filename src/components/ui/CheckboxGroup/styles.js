export const getCheckboxItemStyles = (variant) => {
  const baseStyles = 'flex items-center gap-3 cursor-pointer';
  
  if (variant === 'card') {
    return `${baseStyles} p-4 border border-gray-200 rounded-xl hover:bg-gray-20 data-[state=checked]:border-gray-800 data-[state=checked]:bg-gray-10 transition-colors border-2`;
  }
  
  return baseStyles;
};

export const getCheckboxStyles = (variant) => {
  const baseStyles = `
    h-5 w-5 shrink-0
    rounded-md
    border-2 border-gray-300
    bg-white
    hover:bg-gray-10
    focus:outline-none
    focus:ring-2
    focus:ring-black/10
    disabled:cursor-not-allowed
    disabled:opacity-50
    data-[state=checked]:bg-gray-800
    data-[state=checked]:color-white
    data-[state=checked]:border-gray-800
    transition-colors
  `;
  
  if (variant === 'card') {
    return `${baseStyles} ml-auto`;
  }
  
  return baseStyles;
}; 