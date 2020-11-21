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
        const config = {
            headers: {Authorization: this.state.token}
        }
        let url = 'http://h2j22020.vps.phps.kr:5000/api/exercise/camera?userid='+this.state.userid;
        const post = {
            userid:this.state.userid
        }
        axios.post(url, post,config)
            .then(response => {
                if (response.data.camera) {
                    console.log('response : ', JSON.stringify(response))
                    window.open("https://editor.p5js.org/dmdm2002/full/quS3Px3pW")
                } else {
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
    top:300px;
    margin-left: 75%;
    text-align: center;
    color: #5c7cfa ;
`;

export default withRouter(CheckCam);
