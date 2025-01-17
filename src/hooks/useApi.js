
import { useEffect, useState } from "react";


const useApi = (url)=>{
    const[profiles,setProfile]=useState(null);
    const[loading,setLoading]=useState(false);

      const controller = new AbortController();

     useEffect(()=>{
                   setLoading(true)
                    fetch(url,{signal:controller.signal})
                    .then(res=>res.json())
                    .then(data=>setProfile(data))
                    .finally(()=>{
                      setLoading(false)
                    }
                   
                  );

                  return ()=>{
                           controller.abort();
                  }
                  },[url])
                      


    return{profiles,loading};
}
export default useApi;