import React, {Component} from 'react';
import axios from 'axios';

export default class AddInstructor extends Component {

    constructor(props) {
        super(props);

        this.onChangeNIC = this.onChangeNIC.bind(this);
        this.onChangeFaculty = this.onChangeFaculty.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            nic: '',
            faculty: ''
        }
    }

    onChangeNIC(e) {
        this.setState({
            nic: e.target.value
        });
    };

    onChangeFaculty(e) {
        this.setState({
            faculty: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();

        console.log(`ID: ${this.state.nic}`);
        console.log(`NIC: ${this.state.nic}`);
        console.log(`Faculty: ${this.state.faculty}`);

        const newInstructor = {
            _id: this.state.nic,
            NIC_or_Passport: this.state.nic,
            Faculty: this.state.faculty
        }

        axios.post('http://localhost:9000/instructor/addInstructor', newInstructor)
            .then(res => {console.log(res.data)});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <label><b>NIC/Passport</b></label>
                    <input
                        type="text"
                        placeholder="Enter NIC or Passport"
                        value={this.state.nic}
                        onChange={this.onChangeNIC}
                        required
                    />
                    <br/>

                    <label><b>Faculty</b></label>
                    <select value={this.state.faculty} onChange={this.onChangeFaculty} required>
                        <option value="select faculty">Select Faculty</option>
                        <option value="Computing">Computing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Business">Business</option>
                    </select>
                    <br/>

                    <div className="clearfix">
                        <button type="reset" className="cancelbtn">Cancel</button>
                        <button type="submit" className="submitbtn">Confirm</button>
                    </div>
                </form>
            </div>
        )
    }
}