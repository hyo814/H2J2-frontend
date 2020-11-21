import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {Card} from 'reactstrap';
import cookie from 'react-cookies'
import axios from "axios";
import MyEdit from "./MyEdit";
import MyDelete from "./MyDelete";
import BodyInfo from "./BodyInfo";
import Mileage from "../Login/Mileage";
import "./Mypage.css"

class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: cookie.load("userid"),
            token: cookie.load("token"),
            level: cookie.load('level'),
            login: cookie.load('login'),
            user: []
        };
    }

    MyPage = async () => {
        const config = {
            headers: {Authorization: this.state.token}
        }
        await axios.get('http://h2j22020.vps.phps.kr:5000/api/profile/info?userid=' + this.state.userid, config)
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
            .catch((e) => {
                console.error(e);
            })
    }

    componentDidMount() {
        this.MyPage()
    }

    render() {
        console.log(this.state.user)
        return (
            <Div>
                {this.state.login !== "True" ?
                    <h3>페이지 접근 권한이 없습니다. <a href="./login">로그인</a> 해주세요!<br/>

                    </h3>
                    :
                    <>
                        <div id="outline">
                        <Card   body outline>
                            <h2>마이페이지</h2>
                            <span id="my_text">환영합니다. 오늘도 큐피트 하세요!</span>
                            <U>
                                {this.state.userid}님의 {' '}<Mileage/> 를 확인해 보세요.
                            </U>
                            <BodyInfo user={this.state.user}/><br/>
                            <p><MyEdit user={this.state.user}/>{' '}<MyDelete user={this.state.user}/></p>
                        </Card>
                        </div>
                    </>
                }
            </Div>

        );
    }
}

const Div = styled.div`
    width:50%;
    margin: 5% auto;
    `;

const U = styled.ul`
margin:2% auto;
font-size: 20px;
font-family: 'Do Hyeon', sans-serif;
`;

export default withRouter(MyPage);
