import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Button, Table} from 'reactstrap';
import axios from 'axios';
import cookie from "react-cookies";
import Typography from "@material-ui/core/Typography";

class Mileage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: cookie.load("userid"),
            token: cookie.load("token"),
            level: cookie.load("level"),
            login: cookie.load("login"),
            mileage:'',
    }
        const config = {
            headers: {Authorization: this.state.token}
        }
        axios.get('http://h2j22020.vps.phps.kr:5000/api/mileage?userid='+this.state.userid,config)
            .then(response => {
                console.log(response)
                if (response.data.mileage) {
                    console.log('response : ', JSON.stringify(response))
                    this.setState({
                        mileage: response.data.mileage,
                    })
                }
                else {
                    alert("로그인 해주세요")
                    window.location.href="/login"
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render() {
        return (
            <span>
                 <Button outline color="info" onClick={this.handleClickOpen}>마일리지</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle id="alert-dialog-title" onClose={this.handleClose}>마일리지 안내</DialogTitle>
                    <DialogContent>
                        <Typography>
                            {this.state.userid}님의 마일리지는 {this.state.mileage} 점입니다.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button outline color="secondary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}

export default Mileage;
