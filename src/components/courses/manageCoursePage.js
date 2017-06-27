"use strict";

var React = require('react');
var Router = require('react-router');
var CourseForm = require('./courseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Are you sure you want to leave without saving ?')) {
                transition.abort();
            }
        }

    },
    getInitialState: function () {
        return {
            course: { id: '', title: '', watchHref: '', author: null, length: '', category: '' },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function () {
        var courseId = this.props.params.id;
        if (courseId) {
            this.setState({ course: CourseStore.getCourseById(courseId) });
        }
    },
    setCourseState: function (event) {
        this.setState({ dirty: true });

        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({ course: this.state.course });
    },
    courseFormIsValid: function () {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.course.title.length < 3) {
            this.state.errors.title = 'Course title must be at least 3 characters';
            formIsValid = false;
        }

        if (this.state.course.category.length < 3) {
            this.state.errors.category = 'Category must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;

    },
    saveCourse: function (event) {
        event.preventDefault();

        if (!this.courseFormIsValid()) {
            return;
        }

        if (this.state.course.id) {
            CourseActions.updateCourse(this.state.course);
        } else {
            CourseActions.createCourse(this.state.course);
        }

        this.setState({ dirty: false });
        toastr.success('course saved.');
        this.transitionTo('courses');
    },
    render: function () {
        return (
            <CourseForm course={this.state.course}
                onChange={this.setCourseState}
                onSave={this.saveCourse}
                errors={this.state.errors}>
            </CourseForm>
        );
    }
});

module.exports = ManageCoursePage;