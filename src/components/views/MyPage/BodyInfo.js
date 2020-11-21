import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import {Button, Table} from 'reactstrap';
import axios from 'axios';
import cookie from "react-cookies";

class BodyInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: cookie.load("userid"),
            token: cookie.load("token"),
            height: this.props.height,
            weight: this.props.weight,
            basic_metabolic: this.props.basic_metabolic,
            bmi: this.props.bmi,
            info: false
        }
        const config = {
            headers: {Authorization: this.state.token}
        }

        axios.get('http://h2j22020.vps.phps.kr:5000/api/profile/info?userid=' + this.state.userid, config)
            .then(response => {
                console.log(response)
                this.setState({
                    userid: response.data.userid,
                    height: response.data.height,
                    weight: response.data.weight,
                    basic_metabolic: response.data.basic_metabolic,
                    bmi: response.data.bmi,
                    edit: false
                })
            })
            .catch((e) => {
                console.error(e);
            })
    }

    render() {
        console.log(this.state.user)
        return (
            <>
                <Table bordered hover >
                    <thead>
                    <tr>
                        <th>신체정보</th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>키</td>
                        <td>{this.state.height}</td>
                    </tr>
                    <tr>
                        <td>몸무게</td>
                        <td>{this.state.weight}</td>
                    </tr>
                    <tr>
                        <td>기초대사량</td>
                        <td>{this.state.basic_metabolic}</td>
                    </tr>
                    <tr>
                        <td>BMI 지수</td>
                        <td>{this.state.bmi}</td>
                    </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}

export default BodyInfo;
