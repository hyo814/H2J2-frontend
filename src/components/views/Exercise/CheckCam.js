import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Button} from 'reactstrap';
import axios from "axios";
import cookie from 'react-cookies';
import styled from 'styled-components';

class CheckCam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: cookie.load("userid"),
            token: cookie.load("token"),
            mileage: '',
            camera: false
        };
    }

    handleClick = (e) => {
        let url = 'http://h2j22020.vps.phps.kr:5000/api/exercise/camera';
        const post = {
            userid: this.state.userid,
            token: this.state.token,
            mileage: this.state.mileage
        }
        axios.post(url, post)
            .then(response => {
                if (response.data.camera === "True") {
                    this.setState({
                        token: response.data.token,
                        userid: response.data.userid,
                        mileage: response.data.mileage
                    })
                } else if (!response.data.camera) {
                    alert("다시 로그인 하세요")
                    window.location.href = '/login'
                }
            })
            .catch(e => {
                console.log(e);
            })


        this.setState({
            camara: false
        })
    }

    render() {
        return (
            <Div>
                <Button outline color="primary" onClick={this.handleClick}>자세확인</Button>
            </Div>
        );
    }
}
const Div = styled.div`
    position:absolute;
    top:450px;
    margin-left: 65%;
    text-align: center;
    color: #5c7cfa ;
`;

export default withRouter(CheckCam);
