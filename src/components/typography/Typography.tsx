import React from 'react';

interface Props {
  variant?: 'body' | 'body-secondary' | 'heading' | 'title' | 'subtitle';
  children: JSX.Element | string | (JSX.Element | string)[];
}

const Typography: React.FC<Props & React.HTMLAttributes<any>> = ({
  variant = 'body',
  children,
  ...props
}) => {
  switch (variant) {
    case 'body-secondary':
      return (
        <p {...props} className={`text-gray-600 ${props.className}`}>
          {children}
        </p>
      );
    case 'heading':
      return (
        <h1
          {...props}
          className={`text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 ${props.className}`}
        >
          {children}
        </h1>
      );
    case 'title':
      return (
        <h2
          {...props}
          className={`text-2xl md:text-4xl lg:text-6xl font-semibold text-gray-900 ${props.className}`}
        >
          {children}
        </h2>
      );
    case 'subtitle':
      return (
        <h3
          {...props}
          className={`text-xl md:text-2xl lg:text-3xl font-medium text-gray-900 ${props.className}`}
        >
          {children}
        </h3>
      );
    default:
      return (
        <p {...props} className={`text-gray-900 ${props.className}`}>
          {children}
        </p>
      );
  }
};

export default Typography;
