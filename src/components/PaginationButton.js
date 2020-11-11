import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    button: {
        padding: "0"
    }
});

class PaginationButton extends Component {
    render() {
        return (
            <>
                <span className="page">
                    {this.props.currentPage!==1?<button variant="outlined" color="primary" onClick={() => this.props.onClick(this.props.currentPage-1)}>
                        {"<"}
                    </button>:""}
                    {[...Array(this.props.page)].map((n, index) => {
                        return <button className={this.props.currentPage === n+1 ? "page-item active" : "page-item"}
                                       onClick={() => this.props.onClick(index+1)}
                                       variant="outlined"
                                       color="primary">
                            {index+1}
                        </button>
                    })}
                    {this.props.page!==this.props.currentPage?<button variant="outlined" color="primary" onClick={() => this.props.onClick(this.props.currentPage+1)}>
                        {">"}
                    </button>:""}
                </span>
            </>
        );
    }
}

export default withRouter(PaginationButton);