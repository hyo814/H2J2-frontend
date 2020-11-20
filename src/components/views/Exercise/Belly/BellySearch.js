import React, { Component } from 'react';
import axios from 'axios';
import Bellypage from "./Bellypage";
import { withStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from "@material-ui/core/DialogContent";
import "./style.css"

const styles = theme => ({
});

class BellySearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            loading: false,
            title: '',
            videos: [],
            search_place:'',
            search_open:false,
            search_Bellys: []
        }
    }

    searchVideo = (title) => {
        axios.get('http://h2j22020.vps.phps.kr:5000/api/exercise/belly/search?title='+title)
            .then(({ data }) => {
                this.setState({
                    loading: true,
                    videos: data,
                });
                console.log(this.state.videos)
            })
            .catch(e => {
                console.error(e);
                this.setState({
                    loading: false
                });
            });
    };
    handleChange = (e) => {
        this.setState({
            search_place: e.target.value
        })
        console.log(this.state.search_place)
    }

    handleSubmit = (e) => {
        if(!this.state.search_place){
            alert('검색어를 입력해주세요')
            return
        }
        this.setState({
            search_open: true
        })
        console.log(this.state.search_open)

        e.preventDefault();
        this.searchVideo(this.state.search_place)
    }

    handleClose = () => {
        this.setState({
            search_open: false,
            search_place: ''
        })
        console.log(this.state.search_open)
    }

    render() {
        return (
            <>
                <div id="search">
                    <input
                        id="search"
                        placeholder="search"
                        value={this.state.search_place}
                        onChange={this.handleChange}
                    />
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon onClick={this.handleSubmit}/>
                    </IconButton>
                </div>
                <Dialog open={this.state.search_open} onClose={this.handleClose}>
                    <DialogContent>
                        <Bellypage Viedos={this.state.videos}/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </>
        );
    }
}

export default withStyles(styles)(BellySearch)
