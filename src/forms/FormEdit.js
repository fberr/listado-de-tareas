import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {editTask} from '../taskSlice';

function FormEdit(props) {
  
  const { setMostrarFormEdit } = props;
  const taskstate = useSelector (state => state.tasks);
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    titulo: '',
    descripcion: '',
  });
  const [validar, setValidar] = useState(null)
  const [ocultarForm, setOcultarForm] = useState(false)

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  }
  
  const handleEditSave = (e) => {
    e.preventDefault();
    if (task.titulo || task.descripcion) {
      setValidar(true)
      dispatch(editTask({  
        ...task, 
        id: props.editval.id, 
        titulo: task.titulo,
        descripcion: task.descripcion,
      }));
      setOcultarForm(true)
      setMostrarFormEdit(false)
    } else {
      setValidar(false)    
    }
  }
  const cerrarForm = () => {
    setMostrarFormEdit(false)
  } 
  
  return (
    <>
        <form onSubmit={handleEditSave}>
            <div className='header-form'>
                <h4>Editar Tarea</h4>
                <button type="button" className="btn-close btn-close-white" onClick={cerrarForm} ></button>
            </div>
            <input 
            type="text" 
            name="titulo" 
            placeholder={props.editval.name} 
            onChange={handleChange} 
            className='form-control mb-3'
            />
            <input 
            type="text" 
            name="descripcion" 
            placeholder={props.editval.des} 
            onChange={handleChange}
            className='form-control mb-3'
            />
            {validar === false && <div className='alert alert-danger'>⚠️ Debes editar al menos un campo.</div>}
            <button type='submit' className='btn btn-success'>Guardar</button>
        </form>
    </>
  )
}

export default FormEdit