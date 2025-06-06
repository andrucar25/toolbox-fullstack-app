import Form from 'react-bootstrap/Form';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <Form className="mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
      <Form.Control
        type="text"
        placeholder="Search by file name (e.g. test2.csv)"
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar;
