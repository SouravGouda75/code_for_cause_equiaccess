import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import profile1 from '../images/Profile0.png';
import logo from '../images/logo.png';
import Login from './Login';
import Register from './Register';
import Navbar from "./Navbar";

const Main = () => {

    return ( 
        <Router>
            <div className="Main">
                <Navbar/>
                <div className="box">
                    <div className="name">
                        <div className="logo">
                            <img src = {logo} alt = "logo" />
                            <h3>SkyLash</h3>
                        </div>
                        <div className="image1">
                            <img src = {profile1} alt = "profil_image1" />
                        </div>
                        <div className="slogan">
                            <h1>Don't be Disabled</h1>
                        </div>
                    </div>
                </div>
                <div className="bar">
                </div>
                <Switch>
                    <Route exact path = "/">
                        < Register />
                    </Route>
                    <Route exact path = "/Login">
                        <Login />
                    </Route>
                    
                </Switch>
            </div>
        </Router>
    );
}
 
export default Main;