import { useSearchParams } from "react-router-dom";


function Contact(){
    const[searchParam,setsearchParam]=useSearchParams();
    console.log(searchParam.get('name'));

    return(
        <>
         <h2>THIS IS CONTACT PAGE</h2>
         <button onClick={()=>{
            setsearchParam({name:'ceramic plot'})
         }}>Change</button>

         </>
    );
}
export default Contact;