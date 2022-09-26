import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormAdd from './forms/FormAdd';
import ListTareas from './ListTareas';
import {useSelector} from 'react-redux';

function App() {
  const taskstate = useSelector (state => state.tasks);
  
  return (
    <div className="App">
      <h1 className='mt-4 position-relative'>Listado de Tareas <span className='badge rounded-pill bg-danger'>{taskstate.length}</span></h1>
      <FormAdd />
      <ListTareas />
    </div>
  );
}

export default App;
