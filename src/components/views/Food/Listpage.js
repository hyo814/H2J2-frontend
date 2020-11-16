import React, { Component } from "react";
import { Table } from "reactstrap";
import cookie from "react-cookies";
import FoodCard from "./FoodCard";

const tablestyle = {
    width: "56%",
    margin: "2% auto"
}

class Listpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load('user_id'),
        }
        console.log("user_id: "+this.state.user_id)
    }
    render() {
        const { Foods, Imgs } = this.props;
        return (
            <>
                <h1>큐피트의 건강한 한끼 시작해볼까요?</h1>
                <Table style={tablestyle} hover>
                    <thead>
                        <tr>
                            <th>음식</th>
                            <th>탄수화물</th>
                            <th>단백질</th>
                            <th>지방</th>
                            <th>칼로리</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                    {Imgs &&
                    Imgs.map((img) => {
                            return (
                                <FoodCard
                                    img_src={img.img_src}
                                />
                            );
                        })}
                    {Foods &&
                    Foods.map((food) => {
                        return (
                            <FoodCard
                                name={food.name}
                                carbohydrate={food.carbohydrate}
                                protein={food.protein}
                                fat={food.fat}
                                calorie={food.calorie}
                                url={food.url}
                                stateRefresh = {this.props.stateRefresh}
                            />
                        );
                    })}
                    </tbody>
                </Table>
            </>
        );
    }
}
export default Listpage;
