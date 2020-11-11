import React, {Component} from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {Card} from 'reactstrap';
import cookie from 'react-cookies'
import axios from "axios";
import MyEdit from "./MyEdit";
import MyDelete from "./MyDelete";

class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: cookie.load("user_id"),
            token: cookie.load("token"),
            level:cookie.load('level'),
            login:cookie.load('login'),
            user: []
        };
    }

    MyFan = async () => {
        const config = {
            headers: {Authorization: this.state.token}
        }
        await axios.get('http://h2j22020.vps.phps.kr/api/profile/info?user_id='+this.state.user_id, config)
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
        this.MyFan()
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
                            <ul>
                                오늘도 큐피트 하세요 ~!
                            </ul>
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
    margin: auto;
    `;

export default withRouter(MyPage);
