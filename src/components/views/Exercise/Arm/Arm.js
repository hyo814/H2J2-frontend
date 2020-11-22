import React from "react";
import cookie from "react-cookies";

const tablestyle = {
    lineHeight: "20px"
}

class Arm extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id:cookie.load('user_id')
        }
    }

    render() {
        return (
            <tr>
                <td>운동</td>
                <td style={tablestyle}>
                    <a href={this.props.ex_video}>{this.props.name}</a>
                </td>
            </tr>
        );
    }
}
export default Arm;