import React,{Component}from"react";
import CustomerDe from "./CustomerDe";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {withStyles} from "@material-ui/core/styles";
import cookie from "react-cookies";

const styles= theme =>({
    root:{
        margin: "1%auto" ,
        width:"90%",
        marginTop:theme.spacing.unit*3,
        overflowX:"auto"
    },
    table:{
        minWidth:1080
    },
});

class CustomerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            customers:[],
            token:cookie.load('token'),
            userid:cookie.load('user_id'),
            level:cookie.load('level')
        }
    }

    render() {
        const { Customers } = this.props;
        return (
            <div>
                {this.state.level !== '2' ?
                    <h3>&nbsp; 관리자 페이지 접근 권한이 없습니다.</h3> :
                    <>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>아이디</TableCell>
                                <TableCell align='center'>이름</TableCell>
                                <TableCell align='center'>번호</TableCell>
                                <TableCell align='center'>이메일</TableCell>
                                <TableCell align='center'>주소</TableCell>
                                <TableCell align='center'>나이</TableCell>
                                <TableCell align='center'>성별</TableCell>
                                <TableCell align='center'>키</TableCell>
                                <TableCell align='center'>몸무게</TableCell>
                                <TableCell align='center'>기초대사량</TableCell>
                                <TableCell align='center'>BMI</TableCell>
                                <TableCell align='center'>비밀번호</TableCell>
                                <TableCell align='center'>회원삭제</TableCell>
                                <TableCell align='center'>수정</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Customers &&
                            Customers.map(c => {
                                return (
                                    <CustomerDe
                                        stateRefresh={this.props.stateRefresh}
                                        user_id={c.user_id}
                                        name={c.name}
                                        phone={c.phone}
                                        email={c.email}
                                        age={c.age}
                                        sex={c.sex}
                                        height={c.height}
                                        weight={c.weight}
                                        basic_metabolic={c.basic_metabolic}
                                        level={c.level}
                                    > </CustomerDe>
                                );
                            })}
                        </TableBody>
                    </>
                }
            </div>


        );
    }
}
export default withStyles(styles) (CustomerPage);
