import React, {Component} from 'react';
import axios from 'axios';

export default class addLecturer extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {

        }
    }

    onSubmit(e) {

    }

    render() {
        return(
            <div>
                <h1>Add New Lecturer</h1>
                <form onSubmit={this.onSubmit}>
                    <label><b>Name with Initials</b></label>
                    <input
                        type="text"
                        placeholder="Enter Name with initials"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>Full Name</b></label>
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>NIC/Passport</b></label>
                    <input
                        type="text"
                        placeholder="Enter NIC or Passport"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>Address</b></label>
                    <input
                        type="text"
                        placeholder="Enter Address"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>Contact No</b></label>
                    <input
                        type="text"
                        placeholder="Enter Contact Number"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>Date of Birth</b></label>
                    <input
                        type="date"
                        placeholder="Enter your Date of Birth"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>Faculty</b></label>
                    <select value={}
                            onChange={}
                            required>
                        <option value="select faculty" selected="selected">Select Faculty</option>
                        <option value="computing">Computing</option>
                        <option value="engineering">Engineering</option>
                        <option value="business">Business</option>
                    </select>
                    <br/>

                    <label><b>Campus</b></label>
                    <select value={}
                            onChange={}
                            required>
                        <option value="select campus" selected="selected">Select Campus</option>
                        <option value="malabe">Malabe</option>
                        <option value="kandy">Kandy</option>
                        <option value="metro">Metro</option>
                        <option value="academy">SLIIT Academy</option>
                        <option value="matara">Matara</option>
                        <option value="kurunagala">Kurunagala</option>
                        <option value="jaffna">Jaffna</option>
                    </select>
                    <br/>

                    <label><b>Degree</b></label>
                    <input
                        type="text"
                        placeholder="Enter Degree"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>
                    <label><b>Qualifications</b></label>
                    <textarea
                        placeholder="Enter Contact Number"
                        value={}
                        onChange={}
                        required></textarea>
                    <br/>

                    <label><b>Email</b></label>
                    <input
                        type="text"
                        placeholder="Enter Email"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>Password</b></label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        value={}
                        onChange={}
                        required
                    />
                    <br/>

                    <label><b>Profile Photo</b></label>
                    <input
                        type="text"
                        placeholder="Enter Profile Photo"
                        value={}
                        onChange={}
                        required
                    />
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
