import React, {Component} from "react";


class Slidelist extends Component {

    render() {
        console.log(this.props.img)
        return (
            <div>
                <li>
                    <img src={this.props.img} alt=""/>
                </li>
            </div>
        );
    }
}

export default Slidelist;