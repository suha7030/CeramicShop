import React from "react";
import { useForm } from "react-hook-form";

function ContactUs(){

       const{register,handleSubmit,formState:{errors}}=useForm();
       
       
     const onHandleForm = (event)=>{
        event.preventDefault();

          
     }

    return(
        
        <div style={{width:300}}>
        <h1>My Form</h1>
        <form action="#" onSubmit={handleSubmit(onHandleForm)}>
        
        <div className="mb-3 mt-3">
        <label htmlFor="uname" className="form-label">UserName</label>
       <input type="text" className="form-control" 
       id="uname" 
       placeholder="Enter userName" 
      {...register ('name',{required:"can not be blank",
        minLength:{
            value:3,
            message:"length should be three"
           }
    
      })}

       />
        </div>
        {errors.name?.message}

        <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">UserEmail</label>
       <input type="email" className="form-control" 
       id="email" 
       placeholder="Enter userName"
    
      {...register('email',{required:"can not be blank"  })} 

     
       
       />
        </div>
        {errors.email?.message}

  
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

      </div>
    );
}

export default ContactUs;