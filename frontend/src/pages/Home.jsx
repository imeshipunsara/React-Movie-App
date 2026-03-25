import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"


//show multiple different movie cards
function Home(){
    const [searchQuery, setSearchQuery] = useState(""); //state code

    const movies = [
        {id: 1, title:"Avatar", release_date:"2026"},
        {id: 2, title:"jhone wick", release_date:"2020"},
        {id: 3, title:"terminator", release_date:"1990"},
        {id: 4, title:"the matricks", release_date:"1998"},
    ];

    const handleSearch = () => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("........")
    };

    return(
     <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
             />
            <button type="submit" className="search-btn">Search</button>
        </form>
        

        <div className="movies-grid">
            {movies.map(
                (movie) => 
                (
                <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
    </div>
    );
}
export default Home