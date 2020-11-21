import React, { Component } from "react";
import cookie from "react-cookies";
import { Container, Row, Col } from 'reactstrap';


class MSSpage extends Component {
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
                <div className="intro">
                <p><h1>패션도 놓칠 수 없죠<br/></h1></p>
                "내가 하는 운동에 적합한 옷을 입는 것도 중요해요.<br/>
                큐피트가 추천하는 패션 아이템을 살펴보세요!"
                </div>
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

export default MSSpage