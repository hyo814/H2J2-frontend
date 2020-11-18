import React from "react";
import cookie from "react-cookies";

class FassionCard extends React.Component {
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
                    <td><a href={this.props.url}>
                        <img width="150" height="150" src={this.props.img_src}
                                                      alt=""/></a><br/>
                        {this.props.brand}<br/>{this.props.category}<br/>{this.props.name}<br/>{this.props.price}<br/>
                        {this.props.season}<br/>{this.props.sex}<br/>
                    </td>
                </tr>
            </>
        );
    }
}

export default FassionCard;