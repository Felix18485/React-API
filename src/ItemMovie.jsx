
export const ItemMovie = ({ title, type, year, poster }) => {
    return (
        <div className="card ms-2 mt-3" style={{width: "18rem"}}>
            <img src={poster} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{type}</p>
                <p>{year}</p>
            </div>
        </div>
    )
}
