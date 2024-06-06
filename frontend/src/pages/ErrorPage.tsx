import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";


export function ErrorPage(){
     const navigate = useNavigate();
    return <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-3xl mb-7">
           404 Page Not Found
        </div>
       <Button label="Go Back" onClick={()=>navigate(-1)} />
    </div>
</div>
}