import React from "react"
import { useEffect, useState } from "react"
import axios from 'axios'


function Home(){

    const [movies, setMovies] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchMovies = async () => {


            const options = {
                method: 'GET',
                url: 'https://flixster.p.rapidapi.com/movies/get-opening',
  params: {countryId: 'usa'},
                headers: {
                  'X-RapidAPI-Key': 'd0e581c1a6mshbd1ce190555009bp1e0e37jsn2a7d878ca678',
                  'X-RapidAPI-Host': 'flixster.p.rapidapi.com',
                },
              };
            
            const search = {
                method: 'GET',
                url: 'https://online-movie-database.p.rapidapi.com/auto-complete',
                params: {q:`${searchQuery}`},
                headers: {
                  'X-RapidAPI-Key': 'd0e581c1a6mshbd1ce190555009bp1e0e37jsn2a7d878ca678',
                  'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
                },
              };
    
          try {

            let response;


            if(!searchQuery.trim()){
                response = await axios.request(options);
          }else{
            response = await axios.request(search);
          }

            // const response = await axios.request(options);
            console.log(response.data.data.opening);
            setMovies(response.data.data.opening);
            setLoading(false);
          } catch (error) {
            console.error(error);
            setLoading(false);
          }
        };
    
        fetchMovies();
      }, [searchQuery]);





      
      return (
        <>

        
        <div id="home" className="row m-4">
          {/* <h4 className="text-center">Popular Movies</h4> */}
        {loading ? (
          <p>Loading...</p> // Display loading message or spinner
        ) : 
        
        (
          movies.slice(0, 4).map((movie, index) => (

       

            <div key={index}  className="col-sm-6 col-md-6 col-lg-3">
             
              <img src={movie.posterImage.url} alt={movie.name} />
              {/* <p className="text-center"><b>{movie.name}</b></p> */}
              {/* <p className="text-center">{movie.releaseDate}</p> */}
              
            </div>
          ))
        )}
      </div>


            <div id="">

            </div>

      </>
      )
}

export default Home