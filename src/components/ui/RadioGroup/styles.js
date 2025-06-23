// Centralized styling for RadioGroup components

export const getRadioStyles = (variant) => {
  const baseStyles = `
    relative
    rounded-md
    h-4
    w-4
    border-2
    border-gray-40
    bg-white
    hover:bg-gray-10
    focus:outline-none
    focus:ring-2
    focus:ring-brown/20
    disabled:cursor-not-allowed
    disabled:opacity-50
    data-[state=checked]:border-brown
    data-[state=checked]:border-8
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
      data-[state=checked]:border-brown
      data-[state=unchecked]:border-gray-30
      hover:bg-gray-10
    `,
  };

  return `${baseStyles} ${variantStyles[variant]}`;
}; 