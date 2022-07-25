import React, { useEffect, useState } from 'react'
import MCard from '../components/MCard'
import NavBar from '../components/NavBar'
import '../styles/Homepage.css'

// https://api.themoviedb.org/3/movie/popular?api_key=46f2bb8cb504071f0bffb7e1b1ab8e42

function Homepage() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=46f2bb8cb504071f0bffb7e1b1ab8e42')
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    }, [])
    return (
        <div className="homepage">
            <NavBar />
            <MCard movies={movies} />
        </div>
    )
}

export default Homepage