import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

function Home(){
    const context=useContext(ThemeContext);
    console.log("This is",context);

    return(
         <h2>THIS IS HOME PAGE</h2>
    );
}
export default Home;