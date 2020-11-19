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
import FoodList from "./components/views/Food/FoodList";
import WSSList from "./components/views/Fassion/WomenSS/WSSList";
import WFWList from "./components/views/Fassion/WomenFW/WFWList";
import MSSList from "./components/views/Fassion/MenSS/MSSList";
import MFWList from "./components/views/Fassion/MenFW/MFWList";
import ExerciseList from "./components/views/Exercise/ExerciseList";

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
                            <Route path="/food" component={FoodList}/>
                            <Route exact path="/women_ss" component={WSSList}/>
                            <Route exact path="/women_fw" component={WFWList}/>
                            <Route exact path="/men_ss" component={MSSList}/>
                            <Route exact path="/men_fw" component={MFWList}/>
                            <Route exact path="/exercise" component={ExerciseList}/>
                        </Switch>
                    </ScrollToTop>
                </div>
            </Router>
        </>
    )
}

export default App;
