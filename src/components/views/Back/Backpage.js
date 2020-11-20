import React, { Component } from "react";
import { Table } from "reactstrap";
import cookie from "react-cookies";
import BackPlay from "./BackPlay";

const tablestyle = {
    width: "56%",
    margin: "2% auto"
}

class Backpage extends Component {
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
            <>
                <p><h1>큐피트의 건강한 운동을 시작해볼까요?<br/></h1></p>
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>운동 동영상</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Videos &&
                    Videos.map((video) => {
                        return (
                            <BackPlay
                                ex_video={video.ex_video}
                                id={video.id}
                                name={video.name}
                                stateRefresh = {this.props.stateRefresh}
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default Backpage;
