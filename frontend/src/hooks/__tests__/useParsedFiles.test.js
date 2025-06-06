import { renderHook, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filesReducer from '../../redux/files/filesSlice';
import useParsedFiles from '../useParsedFiles';

describe('useParsedFiles hook', () => {
  let store;

  beforeEach(() => {
    global.fetch = jest.fn();

    store = configureStore({
      reducer: {
        files: filesReducer,
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when fileName is provided', () => {
    test('fetches data successfully', async () => {
      const mockResponse = {
        data: [{ file: 'test.csv', text: 'example', number: 1, hex: 'abc123' }],
        errors: [],
      };

      fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      const { result } = renderHook(
        () => useParsedFiles('test.csv'),
        {
          wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        }
      );

      await waitFor(() => {
        expect(result.current.data).toEqual(mockResponse.data);
      });

      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining('/files/data?fileName=test.csv')
      );
      expect(result.current.errors).toEqual([]);
    });

    test('handles fetch error', async () => {
      fetch.mockRejectedValueOnce(new Error('API error'));

      const { result } = renderHook(
        () => useParsedFiles('error.csv'),
        {
          wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        }
      );

      await waitFor(() => {
        expect(result.current.errors).toContain('Error fetching file data');
      });

      expect(result.current.data).toEqual([]);
    });
  });

  describe('when fileName is not provided', () => {
    test('calls API without fileName and fetches data', async () => {
      const mockResponse = {
        data: [{ file: 'default.csv', text: 'auto', number: 2, hex: 'def456' }],
        errors: [],
      };

      fetch.mockResolvedValueOnce({
        json: async () => mockResponse,
      });

      const { result } = renderHook(
        () => useParsedFiles(),
        {
          wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        }
      );

      await waitFor(() => {
        expect(result.current.data).toEqual(mockResponse.data);
      });

      expect(fetch).toHaveBeenCalledWith(expect.stringContaining('/files/data'));
      expect(result.current.errors).toEqual([]);
    });

    test('handles response with no data or errors', async () => {
      fetch.mockResolvedValueOnce({
        json: async () => ({}),
      });

      const { result } = renderHook(
        () => useParsedFiles(),
        {
          wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        }
      );

      await waitFor(() => {
        expect(result.current.data).toEqual([]);
        expect(result.current.errors).toEqual([]);
      });
    });

    test('handles JSON parsing failure', async () => {
      fetch.mockResolvedValueOnce({
        json: jest.fn().mockRejectedValueOnce(new Error('Invalid JSON')),
      });

      const { result } = renderHook(
        () => useParsedFiles(),
        {
          wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
        }
      );

      await waitFor(() => {
        expect(result.current.errors).toContain('Error fetching file data');
        expect(result.current.data).toEqual([]);
      });
    });
  });
});
