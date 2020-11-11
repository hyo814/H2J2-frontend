import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import CustomerDelete from "./CustomerDelete";
import CustomerEdit from "./CustomerEdit";
import cookie from 'react-cookies';


class CustomerDe extends Component {
    state = {
        loading: false,
        details: [],
        token: cookie.load('token'),
        userid: cookie.load('userid')
    };

    pwReset = async () => {
        axios.post('http://h2j22020.vps.phps.kr/api/reset/pwd', {headers: {Authorization: ` ${cookie.load('token')}`}})
            .then(({data}) => {
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

    render() {
        return (
            <TableRow>
                <TableCell align='center'>{this.props.userid} </TableCell>
                <TableCell align='center'>{this.props.name} </TableCell>
                <TableCell align='center'>{this.props.phone} </TableCell>
                <TableCell align='center'>{this.props.email} </TableCell>
                <TableCell align='center'>{this.props.address} </TableCell>
                <TableCell align='center'>{this.props.age} </TableCell>
                <TableCell align='center'>{this.props.sex} </TableCell>
                <TableCell align='center'>{this.props.height} </TableCell>
                <TableCell align='center'>{this.props.weight} </TableCell>
                <TableCell align='center'>{this.props.basic_metabolic} </TableCell>
                <TableCell align='center'>{this.props.bmi} </TableCell>
                <TableCell align='center'>{this.props.level}</TableCell>
                <TableCell align='center'><Button variant="contained"
                                                  color="primary">Reset</Button></TableCell>
                <TableCell align='center'><CustomerDelete stateRefresh={this.props.stateRefresh}
                                                          userid={this.props.user_id}/></TableCell>
                <TableCell align='center'><CustomerEdit stateRefresh={this.props.stateRefresh}
                                                        userid={this.props.userid} name={this.props.name}
                                                        phone={this.props.phone}
                                                        email={this.props.email} address={this.props.address}
                                                        age={this.props.age} sex={this.props.sex}
                                                        height={this.props.height} weight={this.props.weight}
                                                        basic_metabolic={this.props.basic_metabolic}
                                                        bmi={this.props.bmi}
                                                        level={this.props.level}/></TableCell>
            </TableRow>
        );
    }
}

export default CustomerDe;
