import React, {Component} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

import CreateCourse from "./components/create-course.component";
import CurrentCourse from "./components/current-course.component";
import CourseList from "./components/course-list.component";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/courses" className="navbar-brand">Welcome to Courses</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/courses" className="nav-link">Courses</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/createCourse" className="nav-link">Create Course</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/courses" exact component={CourseList}/>
                    <Route path="/createCourse" component={CreateCourse}/>
                    <Route path="/currentCourse" component={CurrentCourse}/>
                </div>
            </Router>
        )
    }
}

export default App;
