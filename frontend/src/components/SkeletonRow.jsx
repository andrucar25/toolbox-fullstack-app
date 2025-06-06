import { Placeholder } from 'react-bootstrap';

export const SkeletonRow = ({ columns = 8 }) => {
  return (
    <tr>
      {[...Array(columns)].map((_, i) => (
        <td key={i}>
          <Placeholder as="span" animation="wave" className="bg-light w-100">
            <Placeholder xs={12} className="bg-light w-100" />
          </Placeholder>
        </td>
      ))}
    </tr>
  );
};