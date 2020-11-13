import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Select from '@material-ui/core/Select';
import axios from 'axios';
import cookie from "react-cookies";
const styles = theme => ({
    hidden: {
        display: 'none'
    },
    menu: {
        display: 'flex',
        justifyContent: 'center'
    }
});
class CustomerEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: this.props.userid,
            passwd:this.props.passwd,
            user_check:'',
            name: this.props.name,
            phone:this.props.phone,
            email:this.props.email,
            age:this.props.age,
            sex:this.props.sex,
            height:this.props.height,
            weight:this.props.weight,
            basic_metabolic:this.props.basic_metabolic,
            bmi:this.props.bmi,
            level: this.props.level,
            open: false,
            token:cookie.load('token'),
        }
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'http://h2j22020.vps.phps.kr:5000/api/user/edit';
        const put = {
            userid: this.state.userid,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            age: this.state.age,
            sex: this.state.sex,
            height: this.state.height,
            weight: this.state.weight,
            basic_metabolic: this.state.basic_metabolic,
            bmi: this.state.bmi,
            level: this.state.level,
        }
        console.log(put)
        axios.put(url, put,{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(response => {
                console.log('response : ', JSON.stringify(response));
                this.props.stateRefresh();
            })
            .catch(e => {
                console.log(e);
            })
        this.setState({
            userid: this.state.userid,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            age: this.state.age,
            sex: this.state.sex,
            height: this.state.height,
            weight: this.state.weight,
            basic_metabolic: this.state.basic_metabolic,
            bmi: this.state.bmi,
            level: this.state.level,
            open: false
        })
        this.props.stateRefresh();
    }
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }
    handleClose = () => {
        this.setState({
            userid: this.state.userid,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email,
            address: this.state.address,
            age: this.state.age,
            sex: this.state.sex,
            height: this.state.height,
            weight: this.state.weight,
            basic_metabolic: this.state.basic_metabolic,
            bmi: this.state.bmi,
            level: this.state.level,
            open: false
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <span className="menu">
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>수정</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>회원 정보 수정</DialogTitle>
                    <DialogContent>
                        <TextField label="아이디" type="text" name="user_id"  value={this.state.user_id}/><br/>
                        <TextField label="이름" type="text" name="name"  value={this.state.name}  onChange={this.handleValueChange} /><br/>
                        <TextField label="전화번호" type="text" name="phone"  value={this.state.phone} onChange={this.handleValueChange} /><br/>
                        <TextField label="이메일" type="text" name="email"  value={this.state.email} onChange={this.handleValueChange} /><br/>
                        <TextField label="주소" type="text" name="address"  value={this.state.address} onChange={this.handleValueChange} /><br/>
                        <TextField label="나이" type="text" name="age"  value={this.state.age} onChange={this.handleValueChange} /><br/>
                        <TextField label="성별" type="text" name="sex"  value={this.state.sex} onChange={this.handleValueChange} /><br/>
                        <TextField label="키" type="text" name="height"  value={this.state.height} onChange={this.handleValueChange} /><br/>
                        <TextField label="몸무게" type="text" name="weight"  value={this.state.weight} onChange={this.handleValueChange} /><br/>
                        <TextField label="기초대사량" type="text" name="basic_metabolic"  value={this.state.basic_metabolic} onChange={this.handleValueChange} /><br/>
                        <TextField label="bmi" type="text" name="bmi"  value={this.state.bmi} onChange={this.handleValueChange} /><br/>
                        <Select
                            label="level" type="text" name="level"
                            native
                            value={this.state.level}
                            onChange={this.handleValueChange}>
                            <option value={1}>준회원</option>
                            <option value={2}>관리자</option>
                        </Select>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>저장</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}

export default withStyles(styles)(CustomerEdit);

