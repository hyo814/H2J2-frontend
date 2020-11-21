import React, { Component } from "react";
import { Table } from "reactstrap";
import cookie from "react-cookies";
import styled from 'styled-components';
import Arm from "./Arm";

const tablestyle = {
    width: "56%",
    margin: "2% auto"
}

class ArmResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid:cookie.load('userid'),
        }
        console.log("user_id: "+this.state.userid)
    }
    render() {
        const { Videos } = this.props;
        return (
            <Div>
                <p>검색 결과 입니다.</p>
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>운동</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Videos &&
                    Videos.map((video) => {
                        return (
                            <Arm
                                ex_video={video.ex_video}
                                id={video.id}
                                name={video.name}
                                stateRefresh = {this.props.stateRefresh}
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </Div>
        );
    }
}

const Div =styled.div`
width:600px;
height:50%;
margin:1% auto;
`;

export default ArmResult;
