import React, { forwardRef, memo } from 'react';
import cx from 'clsx';
import { Text } from '../Text/Text';

export interface CheckboxProps
  extends Omit<React.ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  elementRef?: React.ForwardedRef<HTMLInputElement>;
  inputClass?: string;
  label?: React.ReactNode;
  labelClass?: string;
}

const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { className, inputClass, labelClass, label = '', children, ...others },
    ref
  ) => {
    return (
      <div className={cx('flex flex-row space-x-3', className)}>
        <input
          ref={ref}
          type="checkbox"
          className={cx(
            'text-tomato-50 form-checkbox h-4 w-4 cursor-pointer rounded-sm',
            'border border-tomato-50 focus:outline-0 focus:ring-0 focus:outline-none mt-1',
            inputClass
          )}
          {...others}
        />
        {children ?? <Text className={cx('text-lg', labelClass)}>{label}</Text>}
      </div>
    );
  }
);

CheckboxComponent.displayName = 'CheckboxComponent';

export const Checkbox = memo(CheckboxComponent) as typeof CheckboxComponent;
