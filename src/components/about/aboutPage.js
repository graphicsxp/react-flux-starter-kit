"use strict";

var React = require('react');

var About = React.createClass({
    // statics: {
    //     willTransitionTo: function (transition, params, query, callback) {
    //         if (!confirm('Are you sure you want to read a page that is this boring ?')) {
    //             transition.about();
    //         } else {
    //             callback();
    //         }
    //     },
    //     willTransitionFrom: function (transition, component) {
    //         if (!confirm('Are you sure you want to leave a page that is this boring ?')) {
    //             transition.about();
    //         }
    //     }

    // },
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React router</li>
                        <li>Flux</li>
                        <li>Node</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;