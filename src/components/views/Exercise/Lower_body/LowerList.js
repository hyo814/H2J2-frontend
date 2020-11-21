import React, {Component} from 'react';
import axios from 'axios';
import Lowerpage from "./Lowerpage";
import './lower.css';
import {withStyles} from '@material-ui/core/styles';
import LowerScroll from "./LowerScroll";
import styled from 'styled-components';
import LowerSearch from "./LowerSearch";

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

class LowerList extends Component {
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
        this.loadWhole();
    }

    loadWhole = async () => {
        await axios.get('http://h2j22020.vps.phps.kr:5000/api/exercise/lower_body')
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
        this.loadWhole();
    }

    render() {
        return (
                <>
                    <LowerSearch id="search" Videos={this.state.videos}/>
                    <Div><Lowerpage Videos={this.state.videos} stateRefresh={this.stateRefresh}/></Div>
                    <LowerScroll id="scroll" Videos={this.state.videos}/>
                </>
        );
    }
}

const Div = styled.div`
    width: 50%;
    margin-left: 15%;
`;

export default withStyles(styles)(LowerList)
