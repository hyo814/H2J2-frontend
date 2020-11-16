import React, { Component } from 'react';
import axios from 'axios';
import Listpage from "./Listpage";
import './style.css';
import { withStyles } from '@material-ui/core/styles';
import PaginationButton from '../../PaginationButton';

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

class FoodList extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            foods: [],
            foods_image:[],
            page:0,
            currentPage: 1
        }
        this.stateRefresh = this.stateRefresh.bind(this);
    }
    stateRefresh = (page) => {
        this.setState({
            foods: [],
            foods_image:[],
            page: 0,
            completed: 0
        })
        this.loadFood(page);
    }

    loadFood = async (page) => {
        await axios.get('http://h2j22020.vps.phps.kr:5000/api/food/list?page='+page)
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    foods: data[0].foods,
                    foods_image:data[1].foods_image,
                    page: data[2].page
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
        this.loadFood(1);
    }

    pageHandler = page => {
        this.setState({ currentPage: page });
        this.stateRefresh(page)
    }

    render() {
        return (
            <>
                <div>
                    <Listpage Foods={this.state.foods} Imgs={this.state.foods_image} stateRefresh={this.stateRefresh} />
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

export default withStyles(styles)(FoodList)
