import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import FilesListPage from '../pages/FilesListPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/files-list" element={<FilesListPage />} />
    </Routes>
  );
}
