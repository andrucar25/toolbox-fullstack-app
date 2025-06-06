import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constants/api.constants';

/**
 * Custom hook to get a list of name files.
 * Dispatches loading state via Redux and returns formatted data and errors.
 * @returns {{
 *   files: Array<string>,
 * }}
 */
export default function useFileList() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/files/list`);
        const { data } = await res.json();
        setFiles(data.files || []);
      } catch (err) {
        setErrors(['Error fetching file list']); 
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, []);

  return { files, loading, errors };
}
