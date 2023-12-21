import { cx } from '../../clsx';
import { Text } from '../Text/Text';
import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  textClass?: string;
  className?: string;
  loadingText?: string;
  loading?: boolean;
}

export const Button = ({
  className,
  children,
  loading = false,
  loadingText = '',
  textClass,
  ...others
}: ButtonProps) => {
  return (
    <button
      {...others}
      // style={{ transform: 'matrix(1, 0.02, -0.02, 1, 0, 0)' }}
      className={cx(
        'flex justify-center items-center',
        'w-full px-8 py-2 max-w-[14rem] text-center bg-tomato-50',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
    >
      <div className="flex items-center space-x-3 justify-center">
        {/* {loading && <Spinner size={5} color="chalk-50" />} */}
        <Text
          className={cx(
            'text-sm text-chalk-50 tracking-wide',
            'md:text-xl uppercase font-[Druk-medium]',
            textClass
          )}
        >
          {loadingText && loading ? loadingText : children}
        </Text>
      </div>
    </button>
  );
};
