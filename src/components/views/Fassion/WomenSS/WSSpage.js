import React, { Component } from "react";
import cookie from "react-cookies";
import { Container, Row, Col } from 'reactstrap';

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
            <Container>
                <p><h2>큐피트와 함께 옷장을 열어볼까요? <br/></h2></p>
                <Row>
                    { Clothes.map((cloth) => {
                        return (
                            <Col xs="3">
                                <p><a href={cloth.url}><img src={cloth.img_src} width="200px" height="200px" alt="" /></a></p>
                                <div class="name">{cloth.name}</div>
                                <div id="price">{cloth.price}원</div>
                                <br/><br/>
                            </Col>
                        )
                    })}
                </Row>

            </Container>

        );
    }
}

export default WSSpage