import React, {Component} from 'react';
import axios from 'axios';
import Shoulderpage from "./Shoulderpage";
import './shoulder.css';
import {withStyles} from '@material-ui/core/styles';
import ShoulderScroll from "./ShoulderScroll";
import styled from 'styled-components';
import ShoulderSearch from "./ShoulderSearch"
import CheckCam from "../CheckCam";

const styles = theme => ({
    root: {
        width: "50%",
        minWidth: 1080
    },
    paper: {
        marginTop: 20,
        marginLeft: 18,
        marginRight: 18
    },
    progress: {
        margin: theme.spacing.unit * 2
    },
    page: {
        display: 'flex',
        justifyContent: 'center'
    }
});

class ShoulderList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            videos: []
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }

    stateRefresh = () => {
        this.setState({
            videos: []
        })
        this.loadShoulder();
    }

    loadShoulder = async () => {
        await axios.get('http://h2j22020.vps.phps.kr:5000/api/exercise/shoulder')
            .then(({data}) => {
                this.setState({
                    loading: true,
                    videos: data
                });
                console.log(this.state)
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };

    componentDidMount() {
        this.loadShoulder();
    }

    render() {
        return (
                <>
                    <ShoulderSearch id="search" Videos={this.state.videos}/>
                    <Div><Shoulderpage Videos={this.state.videos} stateRefresh={this.stateRefresh}/></Div>
                    <ShoulderScroll id="scroll" Videos={this.state.videos}/><CheckCam/>
                </>
        );
    }
}

const Div = styled.div`
    width: 50%;
    margin-left: 15%;
`;

export default withStyles(styles)(ShoulderList)
