import React, {Component} from"react";
import Button from '@material-ui/core/Button';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import CustomerDelete from "./CustomerDelete";
import CustomerEdit from "./CustomerEdit";
import cookie from 'react-cookies';


class CustomerDe extends Component{
    state = {
        loading: false,
        details: [],
    token:cookie.load('token'),
    user_id:cookie.load('user_id')
    };

    pwReset = async () => {
        axios.post('http://h2j22020.vps.phps.kr/api/reset/pwd',{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    details: data,
                },
                this.getPosts());
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    componentDidMount() {
        this.pwReset();
    }
    render(){
        return(
                        <TableRow>
                            <TableCell align='center'> {this.props.student_id} </TableCell>
                            <TableCell align='center'>{this.props.name} </TableCell>
                            <TableCell align='center'>{this.props.user_id} </TableCell>
                            <TableCell align='center'>{this.props.grade} </TableCell>
                            <TableCell align='center'>{this.props.semester} </TableCell>
                            <TableCell align='center'>{this.props.phone} </TableCell>
                            <TableCell align='center'>{this.props.email} </TableCell>
                            <TableCell align='center'>{this.props.rent} </TableCell>{/*내 도서 대출 페이지로 링크 이동*/}
                            <TableCell align='center'>{this.props.level}</TableCell>
                            <TableCell align='center'><Button variant="contained"
                                                              color="primary">Reset</Button></TableCell>
                            <TableCell align='center'><CustomerDelete stateRefresh={this.props.stateRefresh}
                                                                      user_id={this.props.user_id}/></TableCell>
                            <TableCell align='center'><CustomerEdit stateRefresh={this.props.stateRefresh}
                                                                    user_id={this.props.user_id} name={this.props.name}
                                                                    student_id={this.props.student_id}
                                                                    grade={this.props.grade}
                                                                    semester={this.props.semester}
                                                                    level={this.props.level}/></TableCell>
                        </TableRow>
        );
    }
}

export default CustomerDe;
