import React from "react";
import cookie from "react-cookies";
import ReactPlayer from "react-player";


const tablestyle = {
    lineHeight: "20px"
}

class ChestPlay extends React.Component {
    constructor() {
        super();
        this.state = {
            user_id: cookie.load('user_id')
        }
    }

    render() {
        return (
            <>
                <tr>
                    <td style={tablestyle}>
                        <ReactPlayer
                            url={this.props.ex_video} playing controls/>
                    </td>
                </tr>
            </>
        );
    }
}

export default ChestPlay;
