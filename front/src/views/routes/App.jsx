import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "../pages/utils/NotFoundPage";
import Home from "../pages/utils/Home";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import LogIn from "../pages/utils/Login";
import {PrivateRoute, PublicRoute} from "./Routes";
import {connect} from "react-redux";
import {getUser} from "../../application/selectors/user";
import Profile from "../pages/users/Profile";
import Publications from "../pages/post/Publications";

const App = ({user}) => {

    return (
        <Router>
            <Header/>
            <br/><br/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <PublicRoute exact path={"/login"} component={LogIn} authenticated={(user.authenticated)}/>
                <PrivateRoute exact path={"/profile"} component={Profile} authenticated={(user.authenticated)}/>
                <PrivateRoute exact path={"/publications"} component={Publications} authenticated={(user.authenticated)}/>
                <Route path={"*"} component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </Router>
    )
}

const mapStateToProps = (state) => {
    return {
        user: getUser(state),
    }
}

export default connect(mapStateToProps, null)(App);
