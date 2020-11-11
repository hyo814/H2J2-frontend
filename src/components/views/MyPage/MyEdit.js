import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import {Button} from 'reactstrap';
import axios from 'axios';
import cookie from "react-cookies";

class MyEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: cookie.load("user_id"),
            token:cookie.load("token"),
            user_pwd:this.props.user_pwd,
            user_check:'',
            name: this.props.name,
            student_id: this.props.student_id,
            grade:this.props.grade,
            semester: this.props.semester,
            phone:this.props.phone,
            email:this.props.email,
            edit: false
        }
        const config = {
            headers: {Authorization: this.state.token}
        }
         axios.get('http://h2j22020.vps.phps.kr/api/profile/info?user_id='+this.state.user_id, config)
            .then(response => {
                console.log(response)
                this.setState({
                    user_id: response.data.user_id,
                    user_pwd:response.data.user_pwd,
                    name: response.data.name,
                    student_id:  response.data.student_id,
                    grade: response.data.grade,
                    semester:  response.data.semester,
                    phone: response.data.phone,
                    email: response.data.email,
                    edit: false
                })
            })
            .catch((e) => {
                console.error(e);
            })
    }

    componentDidMount() {
        console.log('componentDidMount');
        console.log(this.props)
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!/([a-zA-Z0-9_-])/.test(this.state.user_pwd)) {
            alert('비밀번호를 다시 확인해주세요.')
        } else if (!/^([가-힣]*)$/.test(this.state.name)) {
            alert('이름을 다시 확인해주세요.')
        } else if (!/^([0-9])+$/.test(this.state.student_id) && this.state.student_id.length !== 9) {
            alert('학번은 총 9자리며 숫자만 입력해주세요')
        } else if (!/^([0-9])+$/.test(this.state.grade) && this.state.grade < 5) {
            alert('학년은 1~4학년까지 있습니다.')
        } else if (!/(\d)/.test(this.state.semester) && this.state.semester < 3) {
            alert('학기는 1~2학기만 가능합니다.')
        } else if (!/(\d{2,3}-\d{3,4}-\d{4})/.test(this.state.phone) && this.state.phone.length !== 13) {
            alert('전화번호를 다시 확인해주세요')
        } else if (!/([a-zA-Z0-9_-]+@[a-z]+.[a-z]+)/.test(this.state.email)) {
            alert('이메일을 확인해주세요')
        }

        let url = 'http://h2j22020.vps.phps.kr/api/profile/edit'
        const put = {
            user_id: this.state.user_id,
            user_pwd:this.state.user_pwd,
            name: this.state.name,
            student_id: this.state.student_id,
            grade: this.state.grade,
            semester: this.state.semester,
            phone:this.state.phone,
            email:this.state.email,
            user_check:this.state.user_check
        }
        const config ={
            headers:{authorization:this.state.token}
        }
        axios.put(url, put, config)
            .then(response => {
                if (this.state.user_pwd!==this.state.user_check) {
                    alert("비밀번호가 일치하지 않습니다.")
                }
                else if (response.data.edit){
                    window.location.href='/mypage'
                }
                else {
                    console.log('response : ', JSON.stringify(response));
                    alert("다시 수정 하세요")
                }
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
            edit: false
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    MyFan = async () => {
        const config = {
            headers: {Authorization: this.state.token}
        }
        await axios.get('http://h2j22020.vps.phps.kr/api/profile/info?user_id='+this.state.user_id, config)
            .then(response => {
                console.log(response)
                this.setState({
                    user: response.data
                })
            })
            .catch((e) => {
                console.error(e);
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
        console.log(this.state.user)
        return (
            <span>
                <Button outline color="primary" onClick={this.handleClickOpen}>수정</Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle id="alert-dialog-title" onClose={this.handleClose} > 마이페이지 </DialogTitle>
                    <DialogContent>
                        <TextField label="아이디" type="text" name="user_id"  value={this.state.user_id}/><br/>
                        <TextField label="비밀번호" type="password" name="user_pwd"  value={this.state.user_pwd}  onChange={this.handleValueChange} /><br/>
                        <TextField label="비밀번호 확인" type="text" name="user_check"  value={this.state.user_check}  onChange={this.handleValueChange} /><br/>
                        <TextField label="이름" type="text" name="name"  value={this.state.name}  onChange={this.handleValueChange} /><br/>
                        <TextField label="학번" type="text" name="student_id"  value={this.state.student_id}  onChange={this.handleValueChange} /><br/>
                        <TextField label="학년" type="text" name="grade"  value={this.state.grade}  onChange={this.handleValueChange} /><br/>
                        <TextField label="학기" type="text" name="semester"  value={this.state.semester}  onChange={this.handleValueChange} /><br/>
                        <TextField label="전화번호" type="text" name="phone"  value={this.state.phone} onChange={this.handleValueChange} /><br/>
                        <TextField label="이메일" type="text" name="email"  value={this.state.email} onChange={this.handleValueChange} /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button outline color="primary" onClick={this.handleFormSubmit}>저장</Button>
                        <Button outline color="secondary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </span>
        );
    }
}

export default MyEdit;
