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
                url: 'https://advanced-movie-search.p.rapidapi.com/genre/movie/list',
                headers: {
                  'X-RapidAPI-Key': 'c9615ac890msh6644e1a32d93ee6p1716c8jsn3d0fac1d54f2',
                  'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
                }
              };
            
            const search = {
                method: 'GET',
                url: 'https://ott-details.p.rapidapi.com/search',
                params: {
                  title: 'Endgame',
                  page: '1'
                },
                headers: {
                  'X-RapidAPI-Key': 'c9615ac890msh6644e1a32d93ee6p1716c8jsn3d0fac1d54f2',
                  'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
                }
              };
    
          try {

            let response;


          //   if(!searchQuery.trim()){
                response = await axios.request(options);
          // }else{
            // response = await axios.request(search);
          // }

            // const response = await axios.request(options);
            console.log(response.data.genres);
            setMovies(response.data.genres);
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

        
        <div   className=" row">
         
          {/* <h4 className="text-center">Popular Movies</h4> */}
        {loading ? (
          <p>Loading...</p> // Display loading message or spinner
        ) : 
        
        (
          movies.slice(0, 12).map((movie, index) => (

       
            

            <div id="home"  key={index}  className="">
              <ul>
                <li>
                  <a href="">blessing</a>
                </li>
              </ul>
             {/* <button type="button" class="btn btn-primary">{movie.name}</button> */}
              {/* <img src={movie.posterImage.url} alt={movie.name} /> */}
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