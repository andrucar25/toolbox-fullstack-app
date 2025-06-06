import { useState, useEffect } from 'react';

/**
 * Custom hook that returns a debounced version of a value.
 * To limit the frequency of updates.
 * 
 * @param {any} value - The input value to debounce.
 * @param {number} [delay=500] - Delay in milliseconds before updating.
 * @returns {any} The debounced value.
 */

const useDebouncedValue = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

export default useDebouncedValue;
