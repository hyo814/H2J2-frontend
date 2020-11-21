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
import ArmList from "./components/views/Exercise/Arm/ArmList";
import BackList from "./components/views/Exercise/Back/BackList";
import BellyList from "./components/views/Exercise/Belly/BellyList";
import ChestList from "./components/views/Exercise/Chest/ChestList";
import WholeList from "./components/views/Exercise/Whole_body/WholeList";
import ShoulderList from "./components/views/Exercise/Shoulder/ShoulderList";
import LowerList from "./components/views/Exercise/Lower_body/LowerList";

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
                            <Route path="/arm" component={ArmList}/>
                            <Route path="/back" component={BackList}/>
                            <Route path="/belly" component={BellyList}/>
                            <Route path="/chest" component={ChestList}/>
                            <Route path="/lower_body" component={LowerList}/>
                            <Route path="/shoulder" component={ShoulderList}/>
                            <Route path="/whole_body" component={WholeList}/>
                        </Switch>
                    </ScrollToTop>
                </div>
            </Router>
        </>
    )
}

export default App;
