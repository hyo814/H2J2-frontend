import React from "react";
import cookie from "react-cookies";

const tablestyle = {
    lineHeight: "20px"
}

class FoodCard extends React.Component {
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
                    <a href={this.props.url}><img width='200' height='100' src={this.props.img_src} alt=""/></a><br/>
                    {this.props.name}
                </td>
                <td style={tablestyle}>
                    {this.props.carbohydrate}
                </td >
                <td style={tablestyle}>
                    {this.props.protein}
                </td>
                <td style={tablestyle}>
                    {this.props.fat}
                </td>
                <td style={tablestyle}>
                    {this.props.calorie}
                </td>
            </tr>
        );
    }
}
export default FoodCard;