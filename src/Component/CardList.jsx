import {useState} from "react";
import Card from "./Card";
import useApi from "../hooks/useApi";

function CardList(){
   const[url,setUrl]=useState('http://localhost:3000/product');
    const{profiles:prof,loading} = useApi(url);
   

    return(
       <>
       <header>
                <div>
                    <button className="btn btn-success" id='button' onClick={()=>{setUrl('http://localhost:3000/product')}}>All</button>
                    <button className="btn btn-success" id='button' onClick={()=>{setUrl('http://localhost:3000/product?category=Pottery')}}>Pottery</button>
                    <button className="btn btn-success" id='button' onClick={()=>{setUrl('http://localhost:3000/product?category=Ceramic')}}>Ceramic</button>
                </div>
            </header>
      
      <div>{loading && 'Loading....'}</div>

    <main>
   {
        prof && prof.map((p,ind )=>{
       return  <Card{...p}  key={ind}/>;
  })}
  </main>
       </>
    );
}

export default CardList;