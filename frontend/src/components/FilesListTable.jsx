import { Table } from 'react-bootstrap';
import { SkeletonRow } from '../components/SkeletonRow';

export const FilesListTable = ({ files, loading }) => {
  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>File Name</th>
          </tr>
        </thead>
        <tbody>
          {loading
            ? Array.from({ length: 6 }, (_, i) => <SkeletonRow key={i} columns={1} />)
            : files.map((file, idx) => (
                <tr key={idx}>
                  <td>{file}</td>
                </tr>
              ))}
        </tbody>
      </Table>
    </div>
  );
};
