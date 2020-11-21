import React, { Component } from 'react';
import axios from 'axios';
import ArmPage from "./ArmPage";
import './arm.css';
import { withStyles } from '@material-ui/core/styles';
import PaginationButton from "../../../PaginationButton"
import ArmSearch from "./ArmSearch";
import CheckCam from "../CheckCam";

const styles = theme => ({
    root: {
        width: "100%",
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

class ArmList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            exercises: [],
            page:0,
            currentPage: 1
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = (page) => {
        this.setState({
            exercises: [],
            page: 0,
            completed: 0
        })
        this.loadVideo(page);
    }

    loadVideo = async (page) => {
        await axios.get('http://h2j22020.vps.phps.kr:5000/api/exercise/arm?page='+page)
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    exercises: data[0].exercises,
                    page: data[1].page
                });
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };

    componentDidMount() {
        this.loadVideo(1);
    }

    pageHandler = page => {
        this.setState({ currentPage: page });
        this.stateRefresh(page)
    }

    render() {
        return (
            <>
                <div>
                    <ArmPage Exercises={this.state.exercises} stateRefresh={this.stateRefresh} />
                </div>
                <ArmSearch/><CheckCam/>
                <PaginationButton
                    page={this.state.page}
                    onClick={this.pageHandler}
                    currentPage={this.state.currentPage}
                    stateRefresh={this.stateRefresh}
                />
            </>
        );
    }
}

export default withStyles(styles)(ArmList)
