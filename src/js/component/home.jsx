import React, { useState, useEffect } from "react";

const Home = () => {
	let [tarea, setTarea] = useState("");
	let [lista, setLista] = useState([])

	const agregarTarea = () => {
		if (tarea.trim() !== "") {
			const nuevaTarea = {
				// id: lista.length + 1,
				label: tarea,
				is_done: false
			};
			setLista([...lista, nuevaTarea]);
			setTarea("");
		}
	};

	const eliminarTarea = (id) => {
		setLista(lista.filter((tarea) => tarea.id !== id));
	};

	function crearUsuario() {
		fetch('https://playground.4geeks.com/todo/users/PaulinaPereyra', {
			method:'POST',
			headers: {
				"Content-Type" :"application/json"
			}
		})

	}
	function obtenerTareas () {
		fetch('https://playground.4geeks.com/todo/users/PaulinaPereyra', {
			method:'GET',
			headers: {
				"Content-Type" :"application/json"
			}
	})

	.then((response) => response.json())
	.then((data) => setLista(data.todos))
	.catch((error) => console.log(error));
	
	}
	useEffect(() =>{
			crearUsuario()
			obtenerTareas() 
		}, [])

		

	return (
		<div className="container text-center">
			<label htmlFor="inputValue" className="form-label fs-1 text-secondary">To do List</label>
			<div className="d-flex justify-content-center align-items-center">
				<input type="text" id="inputValue" className="form-control fs-3" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
				<button type="button" className="btn btn-primary ms-3" onClick={agregarTarea}>Agregar a la lista</button>
			</div>
		
			<div className="form-text mf-3">
				<ul className="list-unstyled">
					{lista.map((tarea) => (
						<li key={tarea.id}>
							{tarea.label}	
							<button type="button" className="btn btn-light ms-2" onClick={() => eliminarTarea(tarea.id)}>x</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
