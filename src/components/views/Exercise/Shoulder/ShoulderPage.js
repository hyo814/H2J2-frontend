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
                <p><h1>운동하는 당신, 응원합니다!<br/></h1></p>
                자세확인기능으로 정확하게 운동하고, 마일리지도 챙기세요!
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
