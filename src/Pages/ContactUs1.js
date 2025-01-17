import React, { useState } from "react";

function ContactUs1(){
     const[formData,setFormData]=useState(
        {
             uname:'',
             email:'',
             des:'',
             con:'',
             sub:'false'
        }
    );
       
        const[error,setError]= useState();
    
     const onHandleForm = (event)=>{
        event.preventDefault();
        console.log(formData.uname);
        setError({});
        if(formData.uname =='' || formData.uname==null){
            setError({
                name:"can not be blank or null"
            })
        }
     }

     const handleForm = (event)=>{
        setFormData(
            {
                ...formData, //spread operator
                [event.target.name] : event.target.type === "checkbox" ?event.target.checked : event.target.value
            }
        )
            
     }


    return(
        
        <div style={{width:300}}>
        <h1>My Form</h1>
        <form action="#" onSubmit={onHandleForm}>
        
        <div className="mb-3 mt-3">
        <label htmlFor="uname" className="form-label">UserName</label>
       <input type="text" className="form-control" id="uname" 
       placeholder="Enter userName" 
       name="uname" 
       value={formData.uname}
       onChange={handleForm}

       />
       <div style={{color:"red"}}>{error && error.name}</div> 
        </div>

        <div className="mb-3 mt-3">
        <label htmlFor="email" className="form-label">UserEmail</label>
       <input type="email" className="form-control" id="email" 
       placeholder="Enter userName" 
       name="email" 
       value={formData.email}
       onChange={handleForm}  
       />
        </div>


        <div className="mb-3 mt-3">
        <label htmlFor="des" className="form-label">Description</label>
       <textarea type="text" className="form-control" id="des" 
       placeholder="address" 
       name="des" 
       col={10}
       rows={5}
       value={formData.des}
       onChange={handleForm}
            
       />
        </div>


        <div className="mb-3 mt-3">
        <label htmlFor="con" className="form-label">Country</label>
       <select className="form-control" id="con" 
          name="con" 
          value={formData.con}
           onChange={handleForm}
            
       >
            <option value={"India"}>India</option>
            <option value={"Japan"}>Japan</option>
            <option value={"USA"}>USA</option>


        </select>

        </div>

        <div className="mb-3 mt-3">
        <label htmlFor="sub" className="form-label">Subscribe</label>
       <input type="checkbox"  
       id="sub" 
       name="sub" 
       checked={formData.sub}
       onChange={handleForm}  
       />
        </div>
  
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
           UserName : {JSON.stringify(formData)}

      </div>
    );
}

export default ContactUs1;