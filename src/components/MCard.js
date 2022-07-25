import React from 'react'
import Card from 'react-bootstrap/Card';
import '../styles/MCard.css'


function MCard({ movies }) {
  return (
    <div className="cards">
      {movies[0] && movies.map((movie, index) => (
        <Card style={{ width: '18rem' }} key={index}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
          <Card.Body>
            <Card.Title>{movie.original_title}</Card.Title>
            <Card.Text>
              {movie.overview}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">Release Date {movie.release_date}</Card.Footer>
        </Card>
      ))}
    </div>
  )
}

export default MCard