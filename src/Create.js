import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const[title, setTitle] = useState('')
    const[author, setAuthor] = useState('')
    const[body, setBody] = useState("Mario")
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {author, body, title};
        
        
        fetch ('http://localhost:8000/blogs',{
            method :'POST',
            headers : {'Content-Type' : "application/Json"},
            body: JSON.stringify(blog)
        })
        .then(() =>{
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2> Welcome to my blog</h2>
            <form onSubmit={handleSubmit}>
                <label> Blog Title:</label>
                <input 
                type ="text"
                required
                value = {title}
                onChange={(e) => setTitle(e.target.value)}
                />
                
                <label> Blog Author:</label>
                <textarea 
                required
                value = {author}
                onChange={(e) => setAuthor(e.target.value)}
                ></textarea>

                <label
                value = {body}
                onChange={(e) => setBody(e.target.value)}
                > Blog Body: </label>
                <select>
                    <option value="mario"> Mario </option>
                    <option value = "yoshi"> Yoshi </option>
                </select>
                
                <button>Add blog </button>
                
            </form>
        </div>
     );
}
 
export default Create;