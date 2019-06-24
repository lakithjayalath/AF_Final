import React, {Component} from 'react';
import axios from 'axios';
let assigned = [];

export default class AssignInstructor extends Component {
    constructor(props) {
        super(props);

        this.onChangeSubjectId = this.onChangeSubjectId.bind(this);
        this.onChangeInstructorId = this.onChangeInstructorId.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            subjectId: '',
            instructorId: [],
            allInstructors: []
        };
    };

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
        console.log(`Course ID: ${this.state.instructorId}`);

        const newAssignInstructor = {
            _id: this.state.subjectId+this.state.instructorId,
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
    };

    render() {
        return(
            <div>
                <h1>Assign Instructors to {this.state.subjectId}</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <table>
                            <thead>Instructor  :  Faculty</thead>
                            <tbody>
                                {this.state.allInstructors.map( instructors => {
                                    return (
                                        <tr key={instructors._id}>
                                            <td>{instructors.NIC_or_Passport}  :  {instructors.Faculty}</td>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    name={instructors._id}
                                                    value={instructors._id}
                                                    onChange={this.onChangeSubjectTwo}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })}
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
