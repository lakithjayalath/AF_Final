import React, {Component} from 'react';
import axios from 'axios';

export default class AddSubject extends Component {
    constructor(props) {
        super(props);

        this.onChangeSubjectId = this.onChangeSubjectId.bind(this);
        this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
        this.onChangeHoursPerMonth = this.onChangeHoursPerMonth.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            name: '',
            hoursPerMonth: ''
        };
    }

    onChangeSubjectId(e) {
        this.setState({
            id: e.target.value
        });
    };

    onChangeSubjectName(e) {
        this.setState({
            name: e.target.value
        });
    };

    onChangeHoursPerMonth(e) {
        this.setState({
            hoursPerMonth: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        console.log(`Subject ID: ${this.state.id}`);
        console.log(`Subject Name: ${this.state.name}`);
        console.log(`Hours/Month: ${this.state.hoursPerMonth}`);

        const newSubject = {
            _id: this.state.id,
            name: this.state.name,
            hoursPerMonth: this.state.hoursPerMonth
        }
        console.log(newSubject);
        axios.post('http://localhost:9000/subject/addSubject', newSubject)
            .then(res => {console.log(res.data)});
    };

    render() {
        return (
            <div>
                <h1>Add New Subject</h1>
                <form onSubmit={this.onSubmit}>
                    <label><b>Subject ID</b></label>
                    <input
                        type="text"
                        placeholder="Enter Subject ID"
                        value={this.state.id}
                        onChange={this.onChangeSubjectId}
                        required
                    />
                    <br/>

                    <label><b>Subject Name</b></label>
                    <input
                        type="text"
                        placeholder="Enter Subject Name"
                        value={this.state.name}
                        onChange={this.onChangeSubjectName}
                        required
                    />
                    <br/>

                    <label><b>Hours/Month</b></label>
                    <input
                        type="text"
                        placeholder="Enter the hours per month"
                        value={this.state.hoursPerMonth}
                        onChange={this.onChangeHoursPerMonth}
                        required
                    />

                    <div className="clearfix">
                        <button type="reset" className="cancelbtn">Cancel</button>
                        <button type="submit" className="submitbtn">Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
}