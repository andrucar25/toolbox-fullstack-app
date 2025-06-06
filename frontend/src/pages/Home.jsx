import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import useParsedFiles from '../hooks/useParsedFiles';
import { ParsedFilesTable } from '../components/ParsedFilesTable';
import SearchBar from '../components/SearchBar';
import useDebouncedValue from '../hooks/useDebouncedValue';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebouncedValue(searchTerm, 600);
  const { data, errors } = useParsedFiles(debouncedSearch);
  const loading = useSelector((state) => state.files.loading);

  return (
    <div className="mx-auto mt-4 p-2" style={{ width: '90%' }}>
      <SearchBar onSearch={setSearchTerm} />
      <hr />
      {errors.length > 0 ? (
        <Alert variant="danger" className="text-center">{errors.join(', ')}</Alert>
      ) : (
        <ParsedFilesTable data={data} loading={loading} />
      )}
    </div>
  );
}
