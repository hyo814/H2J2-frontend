import React from "react";
import cookie from "react-cookies";


const tablestyle = {
    lineHeight: "20px"
}

class BellyCard extends React.Component {
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
                    {this.props.id}
                </td >
                <td style={tablestyle}>
                   <a href={this.props.ex_video}  target="_blank">{this.props.name}</a>
                </td>
            </tr>
        );
    }
}
export default BellyCard;
