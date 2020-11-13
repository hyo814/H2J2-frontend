import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {Card} from 'reactstrap';
import cookie from 'react-cookies'
import axios from "axios";
import MyEdit from "./MyEdit";
import MyDelete from "./MyDelete";
import BodyInfo from "./BodyInfo";

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
                    <h3>페이지 접근 권한이 없습니다. 로그인 해주세요!<br/>
                        <a href="./login">로그인</a>
                    </h3>
                    :
                    <>
                        <Card body outline color="primary">
                            <h1>My Page - HOME</h1>
                            <h3>당신과 함께 하는 피트니스 홈페이지 큐피트 ! </h3>
                            <U>
                                <b>오늘도 큐피트 하세요 ~!</b>
                            </U>
                            <BodyInfo user={this.state.user}/><br/>
                            <p><MyEdit user={this.state.user}/>{' '}<MyDelete user={this.state.user}/></p>
                        </Card>
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
