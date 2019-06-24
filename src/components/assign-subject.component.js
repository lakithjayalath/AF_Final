import React, {Component} from 'react';
import axios from 'axios';
let assigned = [];

export default class AssignedSubject extends Component {
    constructor(props) {
        super(props);

        this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
        this.onChangeSubjectId = this.onChangeSubjectId.bind(this);
        this.onChangeInstructorId = this.onChangeInstructorId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            id: '',
            subjectId: '',
            instructorId: [],
            allInstructors: [],
            allSubjects: []
        }
    }

    onChangeSubjectName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeSubjectId(e) {
        this.setState({
            subjectId: e.target.value
        });
    };

    onChangeInstructorId(e) {
        if(e.target.checked) {
            assigned.push(e.target.value);
            console.log(assigned);
        }
        else if(!e.target.checked) {
            var index = assigned.indexOf(e.target.value);
            assigned.splice(index,1);
            console.log(assigned)
        }
    };

    onSubmit(e) {
        e.preventDefault();

        console.log(`Subject ID: ${this.state.subjectId}`);
        // console.log(`Instructor ID: ${this.state.instructorId}`);

        const newAssignInstructor = {
            _id: new Date(),
            subjectId: this.state.subjectId,
            instructorId: assigned
        }
        console.log(newAssignInstructor);
        axios.post('http://localhost:9000/assignInstructor/addAssignInstructor', newAssignInstructor)
            .then(res => {console.log(res.data)});
    }

    componentDidMount() {
        axios.get('http://localhost:9000/instructor/getInstructors')
            .then(res => {
                console.log(res.data);
                this.setState({
                    allInstructors : res.data.instructors,
                });
            });


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
                <h1>Assign Instructors to Subject</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Subjects</th>
                                </tr>
                            </thead>
                            <tbody>
                                    {
                                        this.state.allSubjects.map( subjects => {
                                            return (
                                                <tr>
                                                    <td>
                                                        {subjects.name}
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="radio"
                                                            id={subjects._id}
                                                            name="subjects"
                                                            value={subjects._id}
                                                            onChange={this.onChangeSubjectId}
                                                        />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                            </tbody>
                        </table>
                        <table>
                            <thead>
                            <tr>
                                <td><th>Instructor  :  Faculty</th></td>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.allInstructors.map( instructors => {
                                        return (
                                            <tr>
                                            <td>
                                                {instructors.NIC_or_Passport}  :  {instructors.Faculty}
                                            </td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name={instructors._id}
                                                    value={instructors._id}
                                                    onChange={this.onChangeInstructorId}
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