import React, {Component} from 'react';
import axios from 'axios';
import Wholepage from "./Wholepage";
import './whole.css';
import {withStyles} from '@material-ui/core/styles';
import WholeScroll from "./WholeScroll";
import styled from 'styled-components';
import WholeSearch from "./WholeSearch";

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

class WholeList extends Component {
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
        await axios.get('http://h2j22020.vps.phps.kr:5000/api/exercise/whole_body')
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
                    <WholeSearch id="search" Videos={this.state.videos}/>
                    <Div><Wholepage Videos={this.state.videos} stateRefresh={this.stateRefresh}/></Div>
                    <WholeScroll id="scroll" Videos={this.state.videos}/>
                </>
        );
    }
}

const Div = styled.div`
    width: 50%;
    margin-left: 15%;
`;

export default withStyles(styles)(WholeList)
