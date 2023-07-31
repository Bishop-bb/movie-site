import React from "react"
import { useEffect, useState } from "react"
import axios from 'axios'


function Explore(){
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchMovies = async () => {
          const options = {
              method: 'GET',
              url: 'https://flixster.p.rapidapi.com/movies/get-upcoming',
              params: { countryId: 'usa', limit: '6' },
              headers: {
                'X-RapidAPI-Key': 'd0e581c1a6mshbd1ce190555009bp1e0e37jsn2a7d878ca678',
                'X-RapidAPI-Host': 'flixster.p.rapidapi.com',
              },
            };
  
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setMovies(response.data.data.upcoming);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
        }
      };
  
      fetchMovies();
    }, []);
      

  return (
    <div id="upcoming" className="row m-4">
      <h4 className="text-center">Upcoming Movies</h4>
    {loading ? (
      <p>Loading...</p> // Display loading message or spinner
    ) : 
    
    (
      movies.slice(0, 6).map((movie, index) => (
        <div key={index}  className=" col-sm-6 col-md-4 col-lg-2">
          <img src={movie.posterImage.url} alt={movie.name} />
          <p className="text-center"><b>{movie.name}</b></p>
        </div>
      ))
    )}
  </div>
  )
    
}

export default Explore