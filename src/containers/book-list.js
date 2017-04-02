import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

 class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)} 
                className='list-group-item'>{book.title}</li>
            );
        });
    }

    render() {
        console.log(this.props.books)
        return (
            <ul className='list-group col-sm-4'> 
                {this.renderList()}
            </ul>
        )
    }
}
// whole state object as arg
function mapStateToProps(state) {
    return {
        books: state.books
    };
}
// return ends up as props on BookList container
function mapDispatchToProps(dispatch){
    // when selectBook action is called, result is passed to all reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}
// promote BookList from component to container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);