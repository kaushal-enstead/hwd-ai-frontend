import classNames from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cx = (...args) => twMerge(classNames(...args));
