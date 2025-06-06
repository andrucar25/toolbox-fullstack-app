import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/files/filesSlice';
import { API_BASE_URL } from '../constants/api.constants';

/**
 * Custom hook to get parsed files data.
 * Dispatches loading state via Redux and returns formatted data and errors.
 * 
 * @param {string} fileName - Optional file name to filter the request.
 * @returns {{ data: Array, errors: Array<string> }} Parsed data and error messages.
 */
export default function useParsedFiles(fileName = '') {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const url = fileName
          ? `${API_BASE_URL}/files/data?fileName=${fileName}`
          : `${API_BASE_URL}/files/data`;

        const res = await fetch(url);
        const json = await res.json();
        setData(json.data || []);
        setErrors(json.errors || []);
      } catch (error) {
        setErrors(['Error fetching file data']);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [fileName, dispatch]);

  return { data, errors };
}
