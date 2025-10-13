import React from "react";

function App() {
    const title="Mad Max";
    const posterURL = "https://movies.com"
    const genreArr = ["Action", "Adventure", "Science Fiction", "Thriller"]

    return (
        <div className="App">
            <MovieCard title={title} posterURL={posterURL} genres={genreArr} />
        </div>
    )
}

function MovieCard({ title, posterSrc, genres}) {
    return (
        <div>
            <img src={posterSrc} alt={title} />
            <h2>{title}</h2>
            <small>{genres.join}</small>
        </div>
    )
}