import { useState } from 'react'
import { Form } from './Form';
import getMovie from "./helpers/getMovies"
import { ItemMovie } from "./ItemMovie"
function App() {
  //Objeto que contendra los valores a buscar en la API
  const [busqueda, setBusqueda] = useState({
    title: "",
    type: "",
    year: ""
  });

  //Atributo que contendra todas las peliculas encontradas
  const [movies, setMovies] = useState([]);
  //Atributo que indicara si esta cargando o no los resultados
  const [loading, setLoading] = useState(false);

  //Funcion que añade el valor del input a busqueda
  const addBusqueda = ({ target }) => {
    setBusqueda(busqueda => ({
      ...busqueda,
      [target.name]: target.value
    }))
  }

  //Funcion asincrona que obtiene las peliculas llamando al JavaScript getMovies.js y que guarda las peliculas en el array movies
  const onEnviarBusqueda = async (busquedaData) => {
    //Ponemos el booleano de cargando a true para indicar que las peliculas se estan cargando
    setLoading(true);
    //Limpiamos el valor anterior de peliculas
    setMovies([]);
    //getMovie(busquedaData.title, busquedaData.year, busquedaData.type).then(movie => setMovies(movie));
    //Llamamos al fetch y obtenemos las peliculas
    const movies = await getMovie(busquedaData.title, busquedaData.year, busquedaData.type);
    //Guardamos las peliculas en la variable movies
    setMovies(movies);
    //Ponemos el booleano de carga a false
    setLoading(false);
  };

  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <h1 className='text-white'>Busqueda de peliculas</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <Form busqueda={busqueda} onAddBusqueda={addBusqueda} onEnviarBusqueda={onEnviarBusqueda}></Form>
        </div>
      </div>
      {
        //Si esta cargando mostramos una animacion de carga, en el caso contrario mostramos todas las peliculas en el caso de
        //que haya resultados o "No se encontraron peliculas" en el caso de que no los haya
      }
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden text-white">Cargando...</span>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <ItemMovie key={movie.poster} title={movie.title} type={movie.type} year={movie.year} poster={movie.poster} />
            ))
          ) : (
            <h5 className='text-white'>No se encontraron películas.</h5>
          )}
        </div>
      )}
    </>

  )
}

export default App
