import { cx } from '../../clsx';

interface TextProps {
  children: React.ReactNode;
  className: string;
  font?: string;
}

export const Text = ({
  className,
  children,
  font = 'gothic',
  ...others
}: TextProps) => {
  const fontClass = {
    druk: 'font-[Druk-medium]',
    gothic: 'font-[TradeGothicLTStd]',
  };
  return (
    <span
      {...others}
      className={cx(
        'text-base text-chalk-50 tracking-[0.16px]',
        // @ts-ignore
        fontClass[font],
        className
      )}
    >
      {children}
    </span>
  );
};
