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
            user_id: this.props.user_id,
            name: this.props.name,
            student_id: this.props.student_id,
            grade: this.props.grade,
            semester: this.props.semester,
            level: this.props.level,
            open: false,
            token:cookie.load('token'),
        }
    }


    handleFormSubmit = (e) => {
        e.preventDefault()
        let url = 'http://h2j22020.vps.phps.kr/api/user/edit';
        const put = {
            user_id: this.state.user_id,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
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
            user_id: this.state.user_id,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
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
            user_id: this.state.user_id,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
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
                        <TextField label="user_id" type="text" name="user_id"  value={this.state.user_id} onChange={this.handleValueChange} /><br/>
                        <TextField label="name" type="text" name="name"  value={this.state.name}  onChange={this.handleValueChange} /><br/>
                        <TextField label="student_id" type="text" name="student_id"  value={this.state.student_id}  onChange={this.handleValueChange} /><br/>
                        <TextField label="grade" type="text" name="grade"  value={this.state.grade} onChange={this.handleValueChange} /><br/>
                        <TextField label="semester" type="text" name="semester"  value={this.state.semester} onChange={this.handleValueChange} /><br/>
                        <Select
                            label="level" type="text" name="level"
                            native
                            value={this.state.level}
                            onChange={this.handleValueChange}>
                            <option value={1}>준회원</option>
                            <option value={2}>정회원</option>
                            <option value={3}>관리자</option>
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

