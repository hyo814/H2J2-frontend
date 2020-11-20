import React, {Component} from 'react';
import "./style.css"
import BackCard from "./BackCard";
import {Table} from "reactstrap";


class BackScroll extends Component {
    scrollToChange = (param) => {
        const {scrollHeight, clientHeight} = this.box;
        if (param === 'd') {
            this.box.scrollTop = scrollHeight - clientHeight;
        } else {
            this.box.scrollTop = 0;
        }
    }

    render() {
        const {Videos} = this.props;
        const style = {
            border: '1px solid black'
            , height: '200px'
            , width: '300px'
            , overflow: 'auto'
            , position: 'relative'
        };
        const innerStyle = {
            width: '100%'
            , height: '50px'
        }

        return (
            <>
            <div
                id="scroll"
                style={style}
                ref={(ref) => {
                    this.box = ref
                }}>
                <Table hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>운동 동영상</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Videos &&
                    Videos.map((video) => {
                        return (
                            <BackCard
                                ex_video={video.ex_video}
                                id={video.id}
                                name={video.name}
                                stateRefresh={this.props.stateRefresh}
                            />
                        );
                    })}
                    </tbody>
                </Table>
                <div style={innerStyle}/>
            </div>
            </>
        );
    }
}

export default BackScroll;