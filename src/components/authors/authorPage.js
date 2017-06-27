"use strict";

var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var AUthorActions = require('../../actions/authorActions');
var AuthorList = require('./authorList');
var Link = require('react-router').Link;

var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    // componentDidMount: function () {
    //     if (this.isMounted()) {
    //         this.setState({ authors: AuthorStore.getAllAuthors() });
    //     }
    // },
    componentWillMount: function () {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({ authors: AuthorStore.getAllAuthors() });
    },
    render: function () {

        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;  