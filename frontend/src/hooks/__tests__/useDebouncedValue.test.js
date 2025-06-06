// src/hooks/__tests__/useDebouncedValue.test.js
const { renderHook, act } = require('@testing-library/react-hooks');
const useDebouncedValue = require('../useDebouncedValue').default;

jest.useFakeTimers();

describe('useDebouncedValue', () => {
  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebouncedValue('hello', 500));
    expect(result.current).toBe('hello');
  });

  it('should debounce updates to the value', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebouncedValue(value, delay),
      {
        initialProps: { value: 'a', delay: 500 },
      }
    );

    expect(result.current).toBe('a');

    rerender({ value: 'b', delay: 500 });

    expect(result.current).toBe('a');

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('b');
  });
});
