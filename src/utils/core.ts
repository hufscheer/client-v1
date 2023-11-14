import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const $ = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
