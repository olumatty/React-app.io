    import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({Blogs, title}) => {
    
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {Blogs.map(blog =>(
            <div className="blog-preview" key={blog.id}>
                <Link to = {`/Blogs/${blog.id}`}>
                <h2> {blog.title}</h2>
                <p> The author name is {blog.author}</p>
                </Link>
            </div>
           )) }
        </div>
      );
}
 
export default BlogList;