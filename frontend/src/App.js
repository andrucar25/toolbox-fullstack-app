import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';

function App() {
  return (
     <>
      <Header/>
      <AppRoutes/>
    </>
  )
}

export default App;
