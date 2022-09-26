import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTask} from '../taskSlice';
import { v4 as uuid } from 'uuid';

function FormAdd() {

    const taskstate = useSelector (state => state.tasks);
    const dispatch = useDispatch();
    const unique_id = uuid();
    const [mostrarFormAdd, setMostrarFormAdd] = useState(false)
    
    const [tarea, setTarea] = useState({
        titulo: '',
        descripcion: ''
    })

    const [validado, setValidado] = useState(null);

    const handleChange  = (e) => {
        setTarea({
            ...tarea,
            [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tarea.titulo && tarea.descripcion) {
            setValidado(true)
            dispatch(addTask({
                ...tarea,
                id: unique_id 
            }));
            setMostrarFormAdd(false)
            setTarea('')
        } else {
            setValidado(false)
            
        }
    }

    const clickBotonCrear = () => {
       setMostrarFormAdd(true)
    }
    const cerrarForm = () => {
        setMostrarFormAdd(false)
    }

    return (
    <>
        <button onClick={clickBotonCrear} className="btn btn-success btn-lg">Crear Tarea</button>
        {mostrarFormAdd && (
            <form onSubmit={handleSubmit}>
                <div className='header-form'>
                    <h4>Agregar nueva Tarea</h4>
                    <button type="button" className="btn-close btn-close-white" onClick={cerrarForm} ></button>
                </div>
                <input 
                type="text" 
                name="titulo" 
                onChange={handleChange} 
                placeholder="Titulo"
                className='form-control mb-3'
                />
                <input 
                type="text" 
                name="descripcion" 
                onChange={handleChange}
                placeholder="Descripción"
                className='form-control mb-3'
                />
                {validado === false && <div className='alert alert-danger'>⚠️  Los campos son obligatorios</div> }
                <button className='btn btn-outline-warning'>Agregar</button>
            </form>
            )
        }
    </>
    )
}

export default FormAdd;