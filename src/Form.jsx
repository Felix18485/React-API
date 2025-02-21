export const Form = ({ busqueda, onAddBusqueda, onEnviarBusqueda }) => {
    //Funcion que llama al evento onEnviarBusqueda una vez se pulse el boton
    const handleSubmit = (event) => {
        event.preventDefault();
        onEnviarBusqueda(busqueda);
    };
    return (
        <form onSubmit={handleSubmit} className="w-50">
            <div className="form-floating mb-3">
                <input type="text" name="title" className="form-control" id="floatingInput" placeholder="Batman" onChange={onAddBusqueda} />
                <label htmlFor="floatingInput">Titulo</label>
            </div>
            <div className="form-floating ">
                <select name="type" onChange={onAddBusqueda} className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option value="">Selecciona un tipo</option>
                    <option value="movie">Pelicula</option>
                    <option value="series">Serie</option>
                </select>
                <label htmlFor="floatingSelect">Opciones</label>
            </div>
            <div className="form-floating mb-3 mt-3">
                <input type="number" name="year" min="1980" max="2025" step="1" className="form-control" id="floatingInput" placeholder="2012" onChange={onAddBusqueda} />
                <label htmlFor="floatingInput">Año</label>
            </div>
            <button className="btn btn-primary w-100 mb-3">Enviar</button>
        </form>
    )
}
