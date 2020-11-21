import React, {Component} from "react";
import "./Header.css";
import cookie from 'react-cookies'
import Logout from "../Login/Logout";
import { FiChevronDown } from "react-icons/fi";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: cookie.load('level'),
            login: cookie.load('login')
        }
    }

    render() {
        return (
            <div>
                <button type="button" className="mobile-nav-toggle d-lg-none">
                </button>
                <div id="head-util">
                        <ul id="cupid">
                            {this.state.level !=="2" ? <a href="/mypage">마이페이지</a>:
                                <a href="/customer">고객관리</a>}&nbsp;&nbsp;|&nbsp;&nbsp;
                            {this.state.login ? <Logout/> :
                                <a href="/login">로그인</a>
                            }
                        </ul>
                </div>
                <div id="header">
                    <nav role="navigation">
                        <ul id="main-menu">
                            <h1 className="name"><a href="/">큐피트</a></h1>
                            <li><a href="/">홈</a></li>
                            <li><a href="#">운동&nbsp;<FiChevronDown/></a>
                                <ul id="sub-menu">
                                    <li><a href="#" aria-label="subemenu">팔</a></li>
                                    <li><a href="#" aria-label="subemenu">어깨</a></li>
                                    <li><a href="#" aria-label="subemenu">하체</a></li>
                                    <li><a href="#" aria-label="subemenu">가슴</a></li>
                                    <li><a href="#" aria-label="subemenu">등</a></li>
                                    <li><a href="#" aria-label="subemenu">전신</a></li>
                                    <li><a href="#" aria-label="subemenu">유산소</a></li>
                                </ul>
                            </li>
                            <li><a href="/food">건강식단</a></li>
                            <li><a href="#">패션&nbsp;<FiChevronDown/></a>
                                <ul id="sub-menu">
                                    <li><a href="men_ss" aria-label="subemenu">남자 | ss</a></li>
                                    <li><a href="men_fw" aria-label="subemenu">남자 | fw</a></li>
                                    <li><a href="women_ss" aria-label="subemenu">여자 | ss</a></li>
                                    <li><a href="women_fw" aria-label="subemenu">여자 | fw</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default (Header);