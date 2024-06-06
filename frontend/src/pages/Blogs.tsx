import { useNavigate } from "react-router-dom";
import { BlogsCrad } from "../components/BlogsCard";
import { BlogsCardSkeleton } from "../components/BlogsCardSkeletons";
import { Button } from "../components/Button";
import { TopBar } from "../components/TopBar";
import { TopBarSkeleton } from "../components/TopBarSkeletons";
import { useBlogs } from "../hooks/Hooks";


export function Blogs(){
    const {loading,blogs}=useBlogs()
    const navigate = useNavigate();
    const userToken = localStorage.getItem("token");
    if(!userToken){
        return <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-3xl mb-7">
                You need to Login First to Access this Page
            </div>
            <Button label="Login" onClick={() => navigate("/signin")} />
        </div>
    </div>
    }

    if(loading){
        return <div>
            <TopBarSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
            <BlogsCardSkeleton />
        </div>
    }
    return <div>
        <div>
            <TopBar/>
        </div>
        <div className="flex  justify-center ">
        
        
        <div>
            {blogs.map(blog=><BlogsCrad key={blog.id} id={blog.id} authorName={blog.author.name||"ANonnomus"} title={blog.title} content={blog.content}/>)}
        </div>
       

        
      
    </div>
    </div> 
}