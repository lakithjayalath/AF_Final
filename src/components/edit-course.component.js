import React, {Component} from 'react';
import axios from 'axios';

export default class EditCourse extends Component {

    constructor(props) {
        super(props);

        // this.onChangeCourseId = this.onChangeCourseId.bind(this);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeLecturerInCharge = this.onChangeLecturerInCharge.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeSubjectOne = this.onChangeSubjectOne.bind(this);
        this.onChangeSubjectTwo = this.onChangeSubjectTwo.bind(this);
        // this.onChangeSemOneSubjectId = this.onChangeSemOneSubjectId.bind(this);
        // this.onChangeSemTwoSubjectId = this.onChangeSemTwoSubjectId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name:'',
            lecturerInCharge:'',
            duration:'',
            // allSubjects:[],
            // semOneSubjectId:'',
            // semTwoSubjectId:'',
            semOneSubjects: [],
            semTwoSubjects : [],
            // limitOne : 4,
            // limitTwo : 6
        };
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.get('http://localhost:9000/course/'+this.props.match.params.id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    name : res.data.courseName,
                    lecturerInCharge: res.data.lecturerInCharge,
                    duration: res.data.courseDuration,
                    semOneSubjects: res.data.semOneSubjects,
                    semTwoSubjects: res.data.semTwoSubjects
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    onChangeCourseName(e) {
        this.setState({
            name: e.target.value
        });
    };

    onChangeLecturerInCharge(e) {
        this.setState({
            lecturerInCharge: e.target.value
        });
    };

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    };

    onChangeSubjectOne(e) {
        this.setState({
            semOneSubjects: [this.state.semOneSubjects]
        })
    }

    onChangeSubjectTwo(e) {
        this.setState({
            semTwoSubjects: [this.state.semTwoSubjects]
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            courseName: this.state.name,
            lecturerInCharge: this.state.lecturerInCharge,
            courseDuration: this.state.duration
        };
        axios.post('http://localhost:9000/course/updateCourse/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Edit Course</h3>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label><b>Course Name</b></label><br/>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeCourseName}
                        />
                    </div>
                    <div>
                        <label><b>Lecturer in Charge</b></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.lecturerInCharge}
                            onChange={this.onChangeLecturerInCharge}
                        />
                    </div>
                    <div>
                        <label><b>Duration</b></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div>
                        <label><b>Semester 1 Subjects</b></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.semOneSubjects}
                            onChange={this.onChangeSubjectOne}
                            disabled
                        />
                    </div>
                    <div>
                        <label><b>Semester 2 Subjects</b></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.semTwoSubjects}
                            onChange={this.onChangeSubjectTwo}
                            disabled
                        />
                    </div>
                    <br/>

                    <div className="form-group">
                        <input type="submit" value="Edit Course" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}