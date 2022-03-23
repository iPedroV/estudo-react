import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button } from 'react-bootstrap';


function App() {
  return (
    <div >

      <Menu/> 
      <h1>Hello World</h1>

      <Button variant='outline-primary'>Salvar</Button>

      <Alert variant='danger'>
        PERIGO
      </Alert>

    </div>
  );
}

export default App;
