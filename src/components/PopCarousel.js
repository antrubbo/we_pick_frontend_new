import Carousel from 'react-bootstrap/Carousel'
import { useNavigate } from 'react-router-dom';

function PopCarousel ({popMovies}) {
  const navigate = useNavigate()

  function onImgClick(evt) {
    navigate(`/movies/${evt.target.id}`)
  }

  const mappedMovies = popMovies.map(m => {
    return <Carousel.Item key={m.id} onClick={onImgClick}>
            <img
              id={m.id}
              // style={{ margin: "auto" }}
              className="d-block"
              src={`https://themoviedb.org/t/p/w300_and_h450_bestv2${m.poster_path}`}
              alt={m.title}
            />
            {/* <Carousel.Caption>
              <h3>{m.title}</h3>
            </Carousel.Caption> */}
          </Carousel.Item>
  })

  return (
    <Carousel 
    interval={5000} 
    slide={false} 
    indicators={ false } 
    controls={ false }
    >
      {mappedMovies}
    </Carousel>
  )
}
  
export default PopCarousel