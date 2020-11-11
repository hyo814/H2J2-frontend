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
            userid: cookie.load("userid"),
            token:cookie.load("token"),
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
                    phone: response.data.phone,
                    email: response.data.email,
                    address: response.data.address,
                    age: response.data.age,
                    sex: response.data.sex,
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

    componentDidMount() {
        console.log('componentDidMount');
        console.log(this.props)
    }

    // 판별식은 우선 여기까지만 적겠습니다.
    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!/([a-zA-Z0-9_-])/.test(this.state.user_pwd)) {
            alert('비밀번호를 다시 확인해주세요.')
        } else if (!/^([가-힣]*)$/.test(this.state.name)) {
            alert('이름을 다시 확인해주세요.')
        } else if (!/(\d{2,3}-\d{3,4}-\d{4})/.test(this.state.phone) && this.state.phone.length !== 13) {
            alert('전화번호를 다시 확인해주세요')
        } else if (!/([a-zA-Z0-9_-]+@[a-z]+.[a-z]+)/.test(this.state.email)) {
            alert('이메일을 확인해주세요')
        }

        let url = 'http://h2j22020.vps.phps.kr/api/profile/edit'
        const put = {
            userid: this.state.userid,
            passwd:this.state.passwd,
            name: this.state.name,
            phone:this.state.phone,
            email:this.state.email,
            address:this.state.address,
            age:this.state.age,
            sex:this.state.sex,
            height:this.state.height,
            weight:this.state.weight,
            basic_metabolic:this.state.basic_metabolic,
            bmi:this.state.bmi,
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

//★ 고정하는 값에 대해서 고민 해보기
        this.setState({
            name: this.state.name,
            userid: this.state.userid,
            passwd:this.state.passwd,
            phone:this.state.phone,
            email:this.state.email,
            address:this.state.address,
            age:this.state.age,
            sex:this.state.sex,
            height:this.state.height,
            weight:this.state.weight,
            basic_metabolic:this.state.basic_metabolic,
            bmi:this.state.bmi,
            user_check:this.state.user_check,
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
                        <TextField label="전화번호" type="text" name="phone"  value={this.state.phone} onChange={this.handleValueChange} /><br/>
                        <TextField label="이메일" type="text" name="email"  value={this.state.email} onChange={this.handleValueChange} /><br/>
                        <TextField label="주소" type="text" name="address"  value={this.state.address} onChange={this.handleValueChange} /><br/>
                        <TextField label="나이" type="text" name="age"  value={this.state.age} onChange={this.handleValueChange} /><br/>
                        <TextField label="성별" type="text" name="sex"  value={this.state.sex} onChange={this.handleValueChange} /><br/>
                        <TextField label="키" type="text" name="height"  value={this.state.height} onChange={this.handleValueChange} /><br/>
                        <TextField label="몸무게" type="text" name="weight"  value={this.state.weight} onChange={this.handleValueChange} /><br/>
                        <TextField label="기초대사량" type="text" name="basic_metabolic"  value={this.state.basic_metabolic} onChange={this.handleValueChange} /><br/>
                        <TextField label="bmi" type="text" name="bmi"  value={this.state.bmi} onChange={this.handleValueChange} /><br/>
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
