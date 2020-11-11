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
            user_id:cookie.load('user_id'),
            level:cookie.load('level')
        }
    }

    render() {
        const { Customers } = this.props;
        return (
            <div>
                {this.state.level !== '3' ?
                    <h3>&nbsp; 관리자 페이지 접근 권한이 없습니다.</h3> :
                    <>
                        <TableHead>
                            <TableRow>
                                <TableCell align='center'>학번</TableCell>
                                <TableCell align='center'>이름</TableCell>
                                <TableCell align='center'>아이디</TableCell>
                                <TableCell align='center'>학년</TableCell>
                                <TableCell align='center'>학기</TableCell>
                                <TableCell align='center'>전화번호</TableCell>
                                <TableCell align='center'>이메일</TableCell>
                                <TableCell align='center'>도서대출</TableCell>
                                <TableCell align='center'>회원등급</TableCell>
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
                                        student_id={c.student_id}
                                        name={c.name}
                                        user_id={c.user_id}
                                        grade={c.grade}
                                        semester={c.semester}
                                        phone={c.phone}
                                        email={c.email}
                                        rent={c.rent}
                                        payment={c.payment}
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
