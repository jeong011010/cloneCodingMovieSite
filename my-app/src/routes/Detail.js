import {useParams} from "react-router-dom"
import {useEffect, useState} from "react"

function Detail(){
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  console.log(movie);
  
  useEffect(()=>{
    getMovie();
  },[]);
  return (
    <div>
      {loading ? <h1>Loading...</h1>:
        <div>
          <h1>{movie.title_long}</h1>
          <img src={movie.large_cover_image} alt={movie.title}/>
          <details>
            <summary>genres</summary>
            <ul>
              {movie.genres.map((g)=>(
              <li key={g}>{g}</li>
              ))}
            </ul>
          </details>
          <details>
            <summary>summary</summary>
            <p>{movie.description_full}</p>
          </details>
          <p>rating : {movie.rating}</p>
          <a href={movie.url} target='_blank'>Movie Link</a>
        </div>
      }
    </div>  
  )
}
export default Detail;