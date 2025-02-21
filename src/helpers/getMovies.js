const getMovie = async (nombre, year, tipo) => {
    const apiKey = "9078aee2";
    const url = `https://www.omdbapi.com/?s=${nombre}&y=${year}&type=${tipo}&apikey=${apiKey}`;
    let movies = [];
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error en la solicitud: " + response.statusText);
        }
        const data = await response.json();
        data.Search.forEach(element => {
            movies.push({
                title: element.Title,
                year: element.Year,
                type: element.Type,
                poster: element.Poster
            })
        })
    } catch (error) {
    }
    return movies;
}

export default getMovie;