import React, { useState } from "react";

const Home = () => {
	const [tarea, setTarea] = useState("");
	const [lista, setLista] = useState([
		{ id: 1, texto: "Comer", completada: false },
		{ id: 2, texto: "Lavarse las manos", completada: false },
		{ id: 3, texto: "Hacer la cama", completada: false },
		{ id: 4, texto: "Pasear al perro", completada: false }
	]);

	const agregarTarea = () => {
		if (tarea.trim() !== "") {
			const nuevaTarea = {
				id: lista.length + 1,
				texto: tarea,
				completada: false
			};
			setLista([...lista, nuevaTarea]);
			setTarea("");
		}
	};

	const eliminarTarea = (id) => {
		setLista(lista.filter((tarea) => tarea.id !== id));
	};


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
							{tarea.texto}
							
							<button type="button" className="btn btn-light ms-2" onClick={() => eliminarTarea(tarea.id)}>x</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
