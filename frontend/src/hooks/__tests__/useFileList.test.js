import { renderHook, waitFor } from '@testing-library/react';
import useFileList from '../useFileList';

describe('useFileList', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('should initially set loading to true and files to empty', () => {
    const { result } = renderHook(() => useFileList());

    expect(result.current.loading).toBe(true);
    expect(result.current.files).toEqual([]);
    expect(result.current.errors).toEqual([]);
  });

  test('should fetch file list successfully', async () => {
    const mockResponse = {
      data: {
        files: ['file1.csv', 'file2.csv'],
      },
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    const { result } = renderHook(() => useFileList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.files).toEqual(mockResponse.data.files);
    expect(result.current.errors).toEqual([]);
  });

  test('should handle fetch error', async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error('API is down')));

    const { result } = renderHook(() => useFileList());

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.files).toEqual([]);
    expect(result.current.errors).toEqual(['Error fetching file list']);
  });
});
