import React from "react";
import cookie from "react-cookies";
import ReactPlayer from "react-player";
import CheckCam from "../CheckCam";

const tablestyle = {
    lineHeight: "20px"
}

class BackCard extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id:cookie.load('user_id')
        }
    }
    render() {
        return (
            <tr>
                <td style={tablestyle}>
                    <ReactPlayer width="500px" height="300px"
                        url={this.props.ex_video}/>
                </td>
                <td style={tablestyle}>
                    {this.props.name}
                </td>
                <td style={tablestyle}>
                    <CheckCam/>
                </td>
            </tr>
        );
    }
}
export default BackCard;