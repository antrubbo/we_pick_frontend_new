import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router-dom';

function PopCarousel ({popMovies}) {
    const navigate = useNavigate()
  
    function onImgClick(evt) {
      navigate(`/movies/${evt.target.id}`)
    }
  
    const mappedMovies = popMovies.map(m => {
      return <Carousel.Item interval={4000} key={m.id} onClick={onImgClick}>
              <img
                id={m.id}
                style={{ margin: "auto" }}
                className="d-block"
                src={`https://themoviedb.org/t/p/w300_and_h450_bestv2${m.poster_path}`}
                alt={m.title}
              />
            </Carousel.Item>
    })
  
    return (
      <Carousel>
        {mappedMovies}
      </Carousel>
    )
  }
  
  export default PopCarousel