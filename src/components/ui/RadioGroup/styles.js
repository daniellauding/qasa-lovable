// Centralized styling for RadioGroup components

export const getRadioStyles = (variant) => {
  const baseStyles = `
    relative
    rounded-full
    h-4
    w-4
    border-2
    border-[#d6d6ce]
    bg-white
    hover:bg-gray-10
    focus:outline-none
    focus:ring-2
    focus:ring-black/10
    disabled:cursor-not-allowed
    disabled:opacity-50
    transition-colors
    data-[state=checked]:border-[#322721]
    data-[state=checked]:border-4
  `;

  const variantStyles = {
    default: 'shrink-0',
    card: 'absolute right-4 top-4',
  };

  return `${baseStyles} ${variantStyles[variant]}`;
};

export const getItemStyles = (variant) => {
  const baseStyles = 'flex cursor-pointer';
  
  const variantStyles = {
    default: 'items-start gap-3',
    card: `
      relative
      w-full
      p-4
      border-2
      rounded-lg
      data-[state=checked]:border-[#322721]
      data-[state=unchecked]:border-[#d6d6ce]
      hover:bg-gray-10
      transition-colors
    `,
  };

  return `${baseStyles} ${variantStyles[variant]}`;
}; 