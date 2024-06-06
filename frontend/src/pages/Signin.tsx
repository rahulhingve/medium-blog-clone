import { useEffect } from "react";
import { Auth } from "../components/Auth";

import { Quote } from "./Quote";
import { useNavigate } from "react-router-dom";


export function Signin(){
const navigate = useNavigate();
const userToken = localStorage.getItem("token");
if (userToken){
    
    useEffect(()=>{
            navigate("/blogs")
    })
}

    return <div className="px-10 grid grid-cols-1 lg:grid-cols-2" >
        <div>
            <div>
                <Auth type="signin"/>
                
            </div>
            
            
        </div>
       <div className="lg:visible">
        <Quote/>
       </div>
    </div>
}