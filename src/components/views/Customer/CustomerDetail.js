import React,{Component}from"react";
import {withStyles} from "@material-ui/core/styles";
import axios from "axios";
import { Link, withRouter } from "react-router-dom"
import CustomerPage from "./CustomerPage";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import "./CustomerDetail.css";
import cookie from 'react-cookies';

const styles= theme =>({
    root:{
        width:"70%",
        margin:"auto",
        marginTop:theme.spacing.unit*3,
        overflowX:"auto"
    },
    table:{
        minWidth:1080
    },
});


class CustomerDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            customers:[],
            details: [],
            token:cookie.load('token'),
            userid:cookie.load('userid'),
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh() {
        this.state = {
            loading: false,
            customers:[]
        }
        this.loadCus();
    }


    loadCus = async () => {
        await axios.get('http://h2j22020.vps.phps.kr/api/user/list',{ headers: { Authorization: ` ${cookie.load('token')}` } })
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    customers: data
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    componentDidMount() {
        this.loadCus();
    }



    render(){
        const{classes}=this.props;
            return (
                <div>
                    <h3 className="member">&nbsp; 회원 관리-관리자 페이지</h3>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <CustomerPage stateRefresh={this.stateRefresh} Customers={this.state.customers}/>
                        </Table>
                    </Paper>
                </div>
            );

    }
}
export default withStyles(styles) (CustomerDetail);
