'use client';
import classNames from 'classnames';

export default function Button({
  type = 'button',
  customClassNames = '',
  disabled = false,
  children = 'COMENZAR',
  onClick,
}) {
  const className = classNames(
    customClassNames,
    'bg-black text-white px-4 py-2',
    {
      'opacity-50 cursor-not-allowed': disabled,
    }
  );

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      className={className}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
