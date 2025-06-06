import { Alert, Container } from 'react-bootstrap';
import useFileList from '../hooks/useFileList';
import { FilesListTable } from '../components/FilesListTable'

export default function FilesListPage() {
 const { files, loading, errors } = useFileList();

  return (
    <Container className="mt-4 d-flex flex-column align-items-center">
      {errors.length > 0 ? (
        <Alert variant="danger" style={{ width: '100%', maxWidth: '400px' }}>
          {errors}
        </Alert>
      ) : (<FilesListTable files={files} loading={loading} />)
      
      }
    </Container>
  );
}
