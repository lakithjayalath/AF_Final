import React, {Component} from 'react';
import axios from 'axios';
let semOne = [];
let semTwo = [];

export default class CreateCourse extends Component {
    constructor(props) {
        super(props);

        this.onChangeCourseId = this.onChangeCourseId.bind(this);
        this.onChangeCourseName = this.onChangeCourseName.bind(this);
        this.onChangeLecturerInCharge = this.onChangeLecturerInCharge.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeSubjectOne = this.onChangeSubjectOne.bind(this);
        this.onChangeSubjectTwo = this.onChangeSubjectTwo.bind(this);
        // this.onChangeSemOneSubjectId = this.onChangeSemOneSubjectId.bind(this);
        // this.onChangeSemTwoSubjectId = this.onChangeSemTwoSubjectId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id:'',
            name:'',
            lecturerInCharge:'',
            duration:'',
            allSubjects:[],
            semOneSubjectId:'',
            semTwoSubjectId:'',
            semOneSubjects: [],
            semTwoSubjects : [],
            limitOne : 4,
            limitTwo : 6
        };
    }

    onChangeCourseId(e) {
        this.setState({
            id: e.target.value
        });
    };

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
        if(e.target.checked) {
            if(this.state.semOneSubjects.length <= this.state.limitOne) {
                semOne.push(e.target.value);
                this.setState({
                    semOneSubjects : semOne
                });
            }
            else {
                
            }
            console.log(semOne);
        }
        else if(!e.target.checked) {
            var index = semOne.indexOf(e.target.value);  console.log(index);
            semOne.splice(index,1);
            console.log(semOne);
        }
    }

    onChangeSubjectTwo(e) {
        if(e.target.checked) {
            if(this.state.semTwoSubjects.length <= this.state.limitTwo) {
                semTwo.push(e.target.value);
                this.setState({
                    semOneSubjects : semTwo
                });
            }
            console.log(semTwo);
        }
        else if(!e.target.checked) {
            var index = semTwo.indexOf(e.target.value);
            semTwo.splice(index,1);
            console.log(semTwo);
        }
    }

    // onChangeSemOneSubjectId(e) {
    //     this.setState({
    //         semOneSubjectId: e.target.checked
    //     });
    // };
    //
    // onChangeSemTwoSubjectId(e) {
    //     this.setState({
    //         semTwoSubjectId: e.target.checked
    //     });
    // };


    checkSemOne() {
                document.getElementById("sem2").disabled = true;
    };

    checkSemTwo() {
            document.getElementById("sem1").disabled = true;

    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form Submitted:`);
        console.log(`Course ID: ${this.state.id}`);
        console.log(`Course Name: ${this.state.name}`);
        console.log(`Lecturer in Charge: ${this.state.lecturerInCharge}`);
        console.log(`Duration: ${this.state.duration}`);
       // console.log(`Semester One Subjects: ${this.state.subjectsOne}`);
       // console.log(`Semester Two Subjects: ${this.state.subjectsTwo}`);

        const newCourse = {
            _id: this.state.id,
            courseName: this.state.name,
            lecturerInCharge: this.state.lecturerInCharge,
            courseDuration: this.state.duration,
            subjectsOne: semOne,
            subjectsTwo: semTwo
        };
        console.log(newCourse);
        axios.post('http://localhost:9000/course/addCourse', newCourse)
            .then(res => {console.log(res.data)});
    }

    componentDidMount() {
        axios.get('http://localhost:9000/subject/getSubjects')
            .then(res => {
                console.log(res.data);
                this.setState({
                    allSubjects : res.data.subjects,
                })
            });
    };

    render() {
        return (
            <div>
                <h1>Add New Course</h1>
                <form onSubmit={this.onSubmit}>
                    <label><b>Course ID</b></label>
                    <input
                        type="text"
                        placeholder="Enter Course ID"
                        value={this.state.id}
                        onChange={this.onChangeCourseId}
                        required
                    />
                    <br/>

                    <label><b>Course Name</b></label>
                    <input
                        type="text"
                        placeholder="Enter Course Name"
                        value={this.state.name}
                        onChange={this.onChangeCourseName}
                        required
                    />
                    <br/>

                    <label><b>Lecturer in Charge</b></label>
                    <input
                        type="text"
                        placeholder="Enter the Lecturer in Charge"
                        value={this.state.lecturerInCharge}
                        onChange={this.onChangeLecturerInCharge}
                        required
                    />
                    <br/>

                    <label><b>Duration</b></label>
                    <input
                        type="text"
                        placeholder="Enter the Duration"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        required
                    />
                    <br/>

                    <div>
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>Subject ID</th>
                                    <th>Name</th>
                                    <th>Hours/Month</th>
                                    <th>Select(Sem 1)</th>
                                    <th>Select(Sem 2)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.allSubjects.map( subjects => {
                                        return (
                                            <tr key={subjects._id}>
                                                <td>{subjects._id}</td>
                                                <td>{subjects.name}</td>
                                                <td>{subjects.hoursPerMonth}</td>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        id="sem1"
                                                        name={subjects._id}
                                                        value={subjects._id}
                                                        onClick={this.checkSemOne}
                                                        onChange={this.onChangeSubjectOne}
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="checkbox"
                                                        id="sem2"
                                                        name={subjects._id}
                                                        value={subjects._id}
                                                        onClick={this.checkSemTwo}
                                                        onChange={this.onChangeSubjectTwo}
                                                    />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="clearfix">
                        <button type="reset" className="cancelbtn">Cancel</button>
                        <button type="submit" className="submitbtn">Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
}