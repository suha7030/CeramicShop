
import React  from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function App(){

   // const[profiles,setProfile]=useState([]);
   // const[url,setUrl]=useState('http://localhost:3000/product');
         

        return(
            <>
           <header>
           <NavBar/>
           </header>
            <main>
              <Outlet/>
            </main>
           
            
             
           </>
        )


    

}

export default App;