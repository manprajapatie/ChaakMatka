import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>

        <div className="text-white">
        I am Home Page
        </div>  


        <Link to = "/" > 

          <div className="text-white">
            I am Home Page
            </div>  

            </Link>
            
        </>
    )
}