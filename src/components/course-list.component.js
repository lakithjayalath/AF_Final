import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Course = props => (
    <tr>
        <td>{props.course.courseName}</td>
        <td>{props.course.lecturerInCharge}</td>
        <td>{props.course.courseDuration}</td>
        <td>{props.course.subjectsOne}</td>
        <td>{props.course.subjectsTwo}</td>
        <td>
            <Link to={"/edit/"+props.course._id}>Edit</Link>
        </td>
    </tr>
)

export default class CourseList extends Component {
    constructor(props) {
        super(props);

        this.state = {courses : []}
    }

    componentDidMount() {
        axios.get('http://localhost:9000/course/getCourses')
            .then(response => {
                this.setState({courses : response.data});
            })
            .catch((err) => {
                console.log(err);
            });
    };

    courseList() {
        return this.state.courses.map((currentCourse, i) => {
            return <Course course={currentCourse} key={i}/>
        });
    };

    render() {
        return (
            <div>
                <h3>Courses</h3>
                <table className="table table-striped" style={{marginTop : 20}}>
                    <thead>
                    <tr>
                        <th>Course Name</th>
                        <th>Lecturer in Charge</th>
                        <th>Course Duration</th>
                        <th>Semester 1</th>
                        <th>Semester 2</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.courseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
