import { renderHook, act } from '@testing-library/react';
import useDebouncedValue from '../useDebouncedValue';

jest.useFakeTimers();

describe('useDebouncedValue', () => {
  test('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebouncedValue('initial value', 500));
    expect(result.current).toBe('initial value');
  });

  test('should update the value after the delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'A', delay: 500 },
      }
    );

    rerender({ value: 'B', delay: 500 });

    // Before the timeout
    expect(result.current).toBe('A');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('B');
  });

  test('should reset the timer if the value changes quickly', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'A', delay: 500 },
      }
    );

    rerender({ value: 'B', delay: 500 });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Change again before the 500ms have passed
    rerender({ value: 'C', delay: 500 });
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Value should still be 'A'
    expect(result.current).toBe('A');

    // Advance remaining time of the second delay
    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(result.current).toBe('C');
  });
});
