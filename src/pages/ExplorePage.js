import React from "react";
import { useEffect, useState } from "react"
import axios from 'axios'
import Explore from "../components/Explore";
import New from "../components/New-movies";
import Popular from "../components/Popular";

function ExplorePage(){

   


    return(
        <>
            <Explore/>
            <New/>
                <Popular/>
        </>
    )
    
}

export default ExplorePage