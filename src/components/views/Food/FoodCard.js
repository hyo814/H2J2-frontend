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
                    <img width='150' height='100' src={this.props.img_src} alt=""/><br/>
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
                <td style={tablestyle}>
                    <a href={this.props.url}>▶</a>
                </td>
            </tr>
        );
    }
}
export default FoodCard;