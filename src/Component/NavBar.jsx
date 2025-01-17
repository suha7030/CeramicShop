import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import dark from "../darkmode.svg";
import Light from "../Lightmode.svg"

function NavBar(){

    const {theme,ChangeTheme} = useContext(ThemeContext);
    console.log(theme);

    let ThemeStyle={};

    if(theme ==='light'){
        ThemeStyle={
            background:'white',
            color:"#333"
        }
    }
    else{
       ThemeStyle={
         background:"#333",
         color:"white"
       } 
    }

    return(
        <> 
   
        <nav style={ThemeStyle} onClick={()=>ChangeTheme('dark')}>
        <h2>Ceramic Shop</h2>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contactus">ContactUs</NavLink>
     

     {
        theme ==='light'
        ?
        (
            <img src={dark} alt="dark" />
        )
        :
        (
            <img src={Light} alt="Light" />
        )
     }
     </nav>

     </>
    );

}

export default NavBar;