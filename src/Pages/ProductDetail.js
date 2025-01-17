
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useApi from "../hooks/useApi";

function ProductDetail (){
    const params = useParams();
    console.log(params);

   const{profiles:prof,loading} = useApi(`http://localhost:3000/product/${params.pid}`);
    const navigate = useNavigate();
     console.log(prof);
         return(
        <div>
        { prof && (
            <>
            <p>Product Details</p>
            <h4>{prof.pricture_url}</h4>
            <h2>{prof.id}</h2>
            <h2>{prof.name}</h2>
            <h4>{prof.category}</h4>
            <h4>{prof.price}</h4>
            
            <button className="btn btn-success" onClick={()=>setTimeout(
                () => {
                navigate(`/product`)
            }, 1000)

            }>Go Back</button>
            </>
       ) }

        </div>
    )
}
export default ProductDetail;