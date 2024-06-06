import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export function Logout(){
    const navigate = useNavigate();
    return <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col items-center justify-center">
        <div className="font-bold text-3xl mb-7">
            You'r Successfully Logged Out
        </div>
        <Button label="Login Again" onClick={() => navigate("/signin")} />
    </div>
</div>
}