import React, {useState} from "react";

function Lista() {

    let [tarea, setTarea]=useState("")
    let [listaTareas, setListaTareas]=useState([])
    
    console.log(tarea);

    function agregarTarea(e){
        if (e.key=== "Enter") {
            console.log("funciona");
            //agregamos la tarea a la lista de tareas con el metodo .push
            let newArr = listaTareas.push(tarea)
            setListaTareas(newArr)
            console.log(tarea);
            console.log(listaTareas);
        }
    }

    return (
        <div>
            <input type="text" onChange={(e) => setTarea(e.target.value)} value={tarea} onKeyDown={agregarTarea} placeholder="Escribe una tarea y presiona Enter"/>
            <ul>
                {listaTareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea.texto}
                        <button type="button" className="btn btn-danger btn-sm ms-3" onClick={() =>eliminarTarea(tarea.id)}></button>
                        </li>
                    ))}
            </ul>
        </div>
    );

}

export default Lista; 