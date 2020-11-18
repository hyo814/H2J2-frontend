import React, { Component } from "react";
import cookie from "react-cookies";
import {GridList,GridListTile} from "@material-ui/core";
import styled from 'styled-components';

class WSSpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id:cookie.load('user_id')
        }
        console.log("user_id: "+this.state.user_id)
    }

    render() {
        const { Clothes } = this.props;
        return (
            <Div>
                <p><h1>큐피트와 함께 옷장을 열어볼까요? <br/></h1></p>
                    <GridList cols={5} spacing={20}>
                        {Clothes.map((cloth) => (
                            <GridListTile key={cloth.img} cols={cloth.cols || 1}>
                                <a href={cloth.url}><img src={cloth.img_src} width="200px" height="200px" alt="" /></a>
                            </GridListTile>
                        ))}
                    </GridList>
            </Div>
        );
    }
}
const Div = styled.div`
margin: 2% auto;
width:55%;
`;
export default WSSpage
