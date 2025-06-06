import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../redux/files/filesSlice';
import { API_BASE_URL } from '../constants/api.constants';

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
