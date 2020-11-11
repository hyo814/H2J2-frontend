import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/views/Home/Header";
import Register from "./components/views/Login/Register";
import Login from "./components/views/Login/Login";
import ScrollToTop from "./components/ScrollToTop";
import './App.css';
import MainSlide from "./components/views/Home/MainSlide";
import MyPage from "./components/views/MyPage/MyPage";
import CustomerDetail from "./components/views/Customer/CustomerDetail";

const App = () => {
    return (
        <>
            <Header/>
            <Router>
                <div>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={MainSlide}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/mypage" component={MyPage}/>
                            <Route path="/customer" component={CustomerDetail}/>
                        </Switch>
                    </ScrollToTop>
                </div>
            </Router>
        </>
    )
}

export default App;
