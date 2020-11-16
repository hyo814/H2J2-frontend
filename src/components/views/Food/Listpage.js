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
        const { Foods } = this.props;
        return (
            <>
                <h1>큐피트의 건강한 한끼 시작해볼까요?<br/></h1>
                <h5>"하루 권장 섭취 칼로리 <b>2000kcal!</b><br/>
                기준 <b>탄수화물 325g, 단백질 75g, 지방44g</b>가 적당한 수치라고 합니다."</h5>
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
                    {Foods &&
                    Foods.map((food) => {
                        return (
                            <FoodCard
                                img_src={food.img_src}
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
