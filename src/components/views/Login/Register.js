import React, {Component} from 'react';
import axios from 'axios';
import {Link, withRouter} from "react-router-dom"
import {Card, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import styled from "styled-components";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: '',
            passwd: '',
            name: '',
            phone: '',
            email: '',
            address: '',
            age: '',
            sex: '',
            height: '',
            weight: '',
            user_check:'',
            id: false,
            register: false
        }
    }

    idCheck = () => {
        axios.get('http://h2j22020.vps.phps.kr/api/check/id?userid=' + this.state.userid)
            .then(response => {
                console.log(response)
                if (response.data.id) {
                    alert("사용 가능한 아이디 입니다.")
                    console.log(this.state.userid)
                    console.log(response.data.id)
                } else {
                    alert("중복 아이디 입니다.")
                    console.log(this.state.userid)
                    console.log(response.data.id)
                }
            })
            .catch(e => {
                console.log(e);
            })


        this.setState({
            id: false
        })
    }
    // 판별식을 칼럼명에 다 사용을 해야하는 지 궁금합니다.
    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!/^([a-z0-9]+)$/.test(this.state.userid)) {
            alert('소문자와 숫자가 아닌 아이디 인지 확인을 해주세요.')
        } else if (!/([a-zA-Z0-9_-])/.test(this.state.passwd)) {
            alert('비밀번호를 다시 확인해주세요.')
        } else if (!/^([가-힣]*)$/.test(this.state.name)) {
            alert('이름을 다시 확인해주세요.')
        } else if (!/(\d{2,3}-\d{3,4}-\d{4})/.test(this.state.phone) && this.state.phone.length !== 13) {
            alert('전화번호를 다시 확인해주세요')
        } else if (!/([a-zA-Z0-9_-]+@[a-z]+.[a-z]+)/.test(this.state.email)) {
            alert('이메일을 확인해주세요')
        }

        let url = 'http://h2j22020.vps.phps.kr/api/register';
        const register = {
            userid: this.state.userid,
            passwd: this.state.passwd,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            age: this.state.age,
            sex: this.state.sex,
            height: this.state.height,
            weight: this.state.weight,
            user_check:this.state.user_check
        }
        axios.post(url, register)
            .then(response => {
                console.log('response : ', JSON.stringify(response))
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            register: false
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
                <Card body outline color="primary">
                    <h1>REGISTER</h1>
                    <Form onSubmit={this.handleFormSubmit}>
                        <FormGroup>
                            <Label for="userid">아이디</Label>
                            <Input
                                text='text'
                                name="userid"
                                placeholder='아이디'
                                value={this.state.userid}
                                onChange={this.handleInput}
                            />
                            <Button outline color="primary" onClick={this.idCheck}>
                                중복확인
                            </Button>
                        </FormGroup>
                        <FormGroup>
                            <Label for="passwd">비밀번호</Label>
                            <Input
                                type='password'
                                name="passwd"
                                placeholder='비밀번호'
                                value={this.state.passwd}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="user_check">비밀번호 확인</Label>
                            <Input
                                type='password'
                                name="user_check"
                                placeholder='비밀번호 확인'
                                value={this.state.user_check}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="name">이름</Label>
                            <Input
                                text='text'
                                name="name"
                                placeholder='이름'
                                value={this.state.name}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">번호</Label>
                            <Input
                                text='text'
                                name="phone"
                                placeholder='휴대폰 번호'
                                value={this.state.phone}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="address">주소</Label>
                            <Input
                                text='text'
                                name="address"
                                placeholder='주소'
                                value={this.state.address}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">나이</Label>
                            <Input
                                text='text'
                                name="age"
                                placeholder='나이'
                                value={this.state.age}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="sex">성별</Label>
                            <Input
                                text='text'
                                name="sex"
                                placeholder='성별'
                                value={this.state.sex}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="height">height</Label>
                            <Input
                                text='text'
                                name="height"
                                placeholder='키'
                                value={this.state.height}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="weight">weight</Label>
                            <Input
                                text='text'
                                name="weight"
                                placeholder='몸무게'
                                value={this.state.weight}
                                onChange={this.handleInput}
                            />
                        </FormGroup>
                        <Link to="./">
                            <Button outline color="primary">취소</Button>{' '}
                        </Link>
                        <Button outline color="primary" type='Submit'>
                            회원가입
                        </Button>
                    </Form>
                </Card>
            </Div>
        );
    }
}

const Div = styled.div`
    text-align:left;
    width:40%;
    margin: auto;
    `;

export default withRouter(Register);
