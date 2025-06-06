import { Table } from 'react-bootstrap';
import { SkeletonRow } from './SkeletonRow';

export const ParsedFilesTable = ({ data, loading }) => {
  const skeletonCount = 8;

  return (
    <Table striped bordered hover className="text-start">
      <thead>
        <tr>
          <th style={{ width: '10%' }}>File Name</th>
          <th style={{ width: '20%' }}>Text</th>
          <th style={{ width: '20%' }}>Number</th>
          <th style={{ width: '50%' }}>Hex</th>
        </tr>
      </thead>
      <tbody>
        {loading
          ? Array.from({ length: skeletonCount }, (_, i) => <SkeletonRow key={i} />)
          : data.map((item, index) => (
              <tr key={`${item.file}-${index}`}>
                <td style={{ width: '10%' }}>{item.file}</td>
                <td style={{ width: '20%' }}>{item.text}</td>
                <td style={{ width: '20%' }}>{item.number}</td>
                <td style={{ width: '50%' }}>{item.hex}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
};
