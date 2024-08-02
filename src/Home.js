import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const {data:Blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (  
        <div className="home">
            {error && <p> {error} </p>}
            {isPending && <div> Loading... </div>}
           {Blogs && <BlogList Blogs = {Blogs} title = "My blogs!"/>}
        </div>
    );
}
 
export default Home;
 