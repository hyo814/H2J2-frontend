import React, { Component } from "react";
import { Table } from "reactstrap";
import cookie from "react-cookies";
import FassionCard from "./FassionCard";

class Fassionpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load('user_id'),
        }
        console.log("user_id: "+this.state.user_id)
    }
    render() {
        const { Clothes } = this.props;
        return (
            <>
                <Table hover>
                    <tbody>
                    {Clothes &&
                    Clothes.map((cloth) => {
                        return (
                            <FassionCard
                                brand={cloth.brand}
                                category={cloth.category}
                                img_src={cloth.img_src}
                                name={cloth.name}
                                price={cloth.price}
                                season={cloth.season}
                                sex={cloth.sex}
                                url={cloth.url}
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
export default Fassionpage;