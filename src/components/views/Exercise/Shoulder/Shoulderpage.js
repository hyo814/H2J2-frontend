import React, {Component} from "react";
import {Table} from "reactstrap";
import cookie from "react-cookies";
import ShoulderCard from "./ShoulderCard";

const tablestyle = {
    width: "56%",
    margin: "2% auto"
}

class ShoulderPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: cookie.load('user_id'),
        }
        console.log("user_id: " + this.state.user_id)
    }

    render() {
        const {Exercises} = this.props;
        return (
            <>
                <p><h1>큐피트의 건강한 운동 같이 시작해볼까요?<br/></h1></p>
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>동영상</th>
                        <th>이름</th>
                        <th>자세</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Exercises &&
                    Exercises.map((exercise) => {
                        return (
                            <ShoulderCard
                                ex_video={exercise.ex_video}
                                id={exercise.id}
                                name={exercise.name}
                                stateRefresh={this.props.stateRefresh}
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default ShoulderPage;
