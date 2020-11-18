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
                <p><h1>큐피트의 건강한 한끼 시작해볼까요?<br/></h1></p>
                "하루 권장 섭취 칼로리 <b>2000kcal</b> 기준 3대 영양소 권장 섭취량은<br/>
                <b> 탄수화물 325g, 단백질 75g, 지방44g</b>입니다."
                <Table style={tablestyle} hover>
                    <thead>
                    <tr>
                        <th>음식</th>
                        <th>탄수화물</th>
                        <th>단백질</th>
                        <th>지방</th>
                        <th>칼로리</th>
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
