import React, {Component} from 'react';
import styled from 'styled-components';
import {Link, withRouter} from "react-router-dom";
import {Button, Form, FormGroup, Label, Input, Card} from 'reactstrap';
import axios from "axios";
import cookie from 'react-cookies'
import "./login.css"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            passwd: '',
            token: '',
            level: '',
            login: false
        };
    }

    handleClick = (e) => {
        e.preventDefault()
        if (!/^([a-z0-9]+)$/.test(this.state.userid)) {
            alert('아이디를 확인해주세요.')
        } else if (!/([a-zA-Z0-9_-])/.test(this.state.passwd)) {
            alert('비밀번호를 확인해주세요.')
        }
        let url = 'http://h2j22020.vps.phps.kr:5000/api/login';
        const post = {
            userid: this.state.userid,
            passwd: this.state.passwd
        }
        axios.post(url, post)
            .then(response => {
                if (response.data.login === "True") {
                    this.setState({
                        token: response.data.token,
                        userid: response.data.userid,
                        level: response.data.level,
                        login: response.data.login
                    })
                    let expires = new Date();
                    let tmp = expires.getDate();
                    expires.setDate(tmp + 1);
                    const cookieOptions = {
                        path: '/',
                        expires,
                        httponly: false,
                    }
                    cookie.save("userid", this.state.userid, cookieOptions);
                    cookie.save("token", this.state.token, cookieOptions);
                    cookie.save("level", this.state.level, cookieOptions);
                    cookie.save("login", this.state.login, cookieOptions);
                    window.location.href = '/mypage'
                } else if (!response.data.login) {
                    alert("다시 로그인 하세요")
                }
            })
            .catch(e => {
                console.log(e);
            })


        this.setState({
            login: false
        })
    }

    handleInput = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render() {
        return (
            <Div>
                <Card id="expend_0">
                    <h3>당신의 건강 지킴이! CUPID</h3>
                    <div id="start">
                        <div class="space">
                        <Form inline onSubmit={this.handleClick}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    id="expend_1"
                                    type='text'
                                    name='userid'
                                    placeholder='  아이디를 입력하세요'
                                    defaultValue={this.state.userid}
                                    onInput={this.handleInput}
                                />
                            </FormGroup>
                        </Form></div>
                        <div className="space">
                        <Form inline onSubmit={this.handleClick}>
                            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                <Input
                                    id="expend_2"
                                    type='password'
                                    name='passwd'
                                    placeholder='비밀번호를 입력하세요'
                                    defaultValue={this.state.passwd}
                                    onInput={this.handleInput}
                                />
                            </FormGroup>
                        </Form>
                        </div>
                        <div className="space_2">
                        <Form inline onSubmit={this.handleClick}>
                            &nbsp;&nbsp;&nbsp;<Button color="primary" id="expend_3" type='submit'>로그인</Button>
                            &nbsp;<Link to="./register">
                                <Button color="primary" id="expend_4">회원가입</Button>
                            </Link>
                        </Form>
                        </div>
                        </div>

                        <h11>아이디·비밀번호 분실 시 개별 문의 바랍니다.</h11>
                </Card>
            </Div>
        );
    }
}

const Div = styled.div`
    width: 50%;
    margin: 5% auto;
    `;
export default withRouter(Login);
