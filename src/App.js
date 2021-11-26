import './App.css';
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Category from "./components/Category";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Recipe from "./components/Recipe";
function App() {
  return (
    <div>
   <Header/>
        <main className='container content'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/category/:name' component={Category} />
                <Route path='/meals/:id' component={Recipe}/>
                <Route component={NotFound}/>
            </Switch>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
