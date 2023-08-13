import React from "react"
import { useEffect, useState } from "react"
import axios from 'axios'


function New(){
  const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchMovies = async () => {
            const options = {
                method: 'GET',
                url: 'https://flixster.p.rapidapi.com/movies/get-dvds',
                params: { typeMovie: 'NEW_RELEASE'},
                headers: {
                  'X-RapidAPI-Key': 'c9615ac890msh6644e1a32d93ee6p1716c8jsn3d0fac1d54f2',
                  'X-RapidAPI-Host': 'flixster.p.rapidapi.com',
                },
              };
    
          try {
            const response = await axios.request(options);
            console.log(response.data.data.dvdMovies);
            setMovies(response.data.data.dvdMovies);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };
    
        fetchMovies();
      }, []);
        
  
    return (
      <div id="new" className="row m-4">
        <h4 className="text-center">New Movies</h4>
      {loading ? (
        <p>Loading...</p> // Display loading message or spinner
      ) : 
      
      (
        movies.slice(0, 6).map((movie, index) => (
          <div key={index}  className="col-sm-6 col-md-4 col-lg-2">
           
            <img src={movie.posterImage.url} alt={movie.name} />
            <p className="text-center"><b>{movie.name}</b></p>
            {/* <p className="text-center">{movie.releaseDate}</p> */}
            <p style={{paddingRight: '3px', fontSize: '14px', color: 'orange'}} className="text-center"><i class="fa-solid fa-star"></i>{movie.userRating.dtlLikedScore}</p>
          </div>
        ))
      )}
    </div>
    )
      
    
}

export default New