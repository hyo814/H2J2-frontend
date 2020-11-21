import React, { Component } from 'react';
import axios from 'axios';
import MFWpage from "./MFWpage";
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import PaginationButton from '../../../PaginationButton';
import cookie from "react-cookies";

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

class MFWList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            clothes: [],
            page:0,
            currentPage: 1
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = (page) => {
        this.setState({
            clothes: [],
            page: 0,
            completed: 0
        })
        this.loadClothes(page);
    }

    loadClothes = async (page) => {
        await axios.get('http://h2j22020.vps.phps.kr:5000/api/fassion/men/fw?page='+page)
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    clothes: data[0].clothes,
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
        this.loadClothes(1);
    }

    pageHandler = page => {
        this.setState({ currentPage: page });
        this.stateRefresh(page)
    }

    render() {
        return (
            <>
                <div>
                    <MFWpage Clothes={this.state.clothes} stateRefresh={this.stateRefresh} />
                </div>
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

export default withStyles(styles)(MFWList)
