import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import FormEdit from './forms/FormEdit';
import { deleteTask } from './taskSlice';

function ListTareas() {

    const taskstate = useSelector (state => state.tasks);
    const dispatch = useDispatch();

    const [editval, setEditval] = useState({
        id:'',
        name: '',
        des: ''

    })

    const [mostrarFormEdit, setMostrarFormEdit] = useState(false)

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }

    const handleEdit = (id, name, des) => {
        setEditval({
            id,
            name,
            des
        })
        setMostrarFormEdit(true)
    }

    
return (
    <>
        {taskstate.map( tarea => (
            <div className='bloque-tarea' key={tarea.id}>
                <div className='bloque-textos'>
                <h2>{tarea.titulo}</h2>
                <p>{tarea.descripcion}</p>
                </div>
                <button onClick={() => handleEdit(tarea.id, tarea.titulo,tarea.descripcion)} className="btn btn-primary">Editar</button>
                <button onClick={() => handleDelete(tarea.id)} className="btn btn-danger">Eliminar</button>
            </div>
            
            ) 
        )}
        { taskstate.length == 0 && <h2 className='mt-4'>😊 No hay Tareas !!! </h2>}
        
        {mostrarFormEdit && <FormEdit editval={editval} setMostrarFormEdit={setMostrarFormEdit}></FormEdit>}
    </>
    
  )
}

export default ListTareas