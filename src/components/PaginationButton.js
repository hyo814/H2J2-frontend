import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Button} from 'reactstrap';
import styled from 'styled-components';

const styles = theme => ({
    button: {
        padding: "0"
    }
});

class PaginationButton extends Component {
    render() {
        return (
            <Div>
                <span className="page">
                    {this.props.currentPage!==1?<Button  outline color="primary" onClick={() => this.props.onClick(this.props.currentPage-1)}>
                        {"<"}
                    </Button>:""}
                    {[...Array(this.props.page)].map((n, index) => {
                        return <Button className={this.props.currentPage === n+1 ? "page-item active" : "page-item"}
                                       onClick={() => this.props.onClick(index+1)}
                                       outline color="primary">
                            {index+1}
                        </Button>
                    })}
                    {this.props.page!==this.props.currentPage?<Button  outline color="primary" onClick={() => this.props.onClick(this.props.currentPage+1)}>
                        {">"}
                    </Button>:""}
                </span>
            </Div>
        );
    }
}

const Div=styled.div`
margin:1% auto;
`;

export default withRouter(PaginationButton);