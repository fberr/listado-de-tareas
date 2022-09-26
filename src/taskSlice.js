import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        titulo: 'primera tarea',
        descripcion: 'primera descripción',
    },
    {
        id: '2',
        titulo: 'segunda tarea',
        descripcion: 'descripcion dos',
    }
]
 
export const taskSlice =  createSlice({

    name: 'tasks',
    initialState,
    reducers: {

        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
           
            const tareaEliminada =  state.find(task => task.id === action.payload)
            if (tareaEliminada) {
                state.splice(state.indexOf(tareaEliminada), 1)
            }

        },
        editTask: (state, action) => {

            const { id, titulo, descripcion } = action.payload;
            const tareaEditada = state.find((task) => task.id === id);
                if (tareaEditada) {
                    tareaEditada.titulo = titulo;
                    tareaEditada.descripcion = descripcion;
                }
        }
    }
})
export const {addTask, deleteTask, editTask} = taskSlice.actions
export default taskSlice.reducer