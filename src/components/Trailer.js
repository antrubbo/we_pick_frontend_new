import Modal from 'react-bootstrap/Modal'
import Iframe from 'react-iframe'

function Trailer(props) {
    const vidTrailer = props.videos.results.find(video => video.name = "Trailer")
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body> 
                {!props.videos.results.length ? <h3>Sorry, no trailer to display!</h3> :
                <Iframe 
                    width="750px" 
                    height="500px"
                    url={`https://www.youtube.com/embed/${vidTrailer.key}`} frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    position="relative"
                /> }
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
      </Modal>
    )
}

export default Trailer