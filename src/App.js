import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './Blogdetail';
import NotFound from './NotFound';


function App() {
  const title = "Welcome to my blog"
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <header className='Content'>
        <Switch>
            <Route path exact ="/">
              <Home />
            </Route> 
            <Route path ="/Create">
              <Create />
            </Route>
            <Route path ="/Blogs/:id">
              <BlogDetails />
            </Route>
            <Route path ="*">
              <NotFound/>
            </Route>
        </Switch>    
      </header>
    </div>
    </Router>
  );
}

export default App;
