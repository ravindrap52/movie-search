import { useEffect, useState } from "react";

/** 
 * updating the debounced value
 * 
 * @param {string} value - The value to be debounced.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {string} - The debounced version of the input value.
 */
export const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};
