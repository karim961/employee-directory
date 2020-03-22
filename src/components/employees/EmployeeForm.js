import React, {Component} from 'react';
import PropTypes from "prop-types";


//common employee update and create form componnet
class EmployeeForm extends Component {

    state = {
        id: null,
        first_name: '',
        last_name: '',
        department: '',
        email: '',
        gender: '',
        avatar_url: '',
        job_title: '',
        location: '',
        website: '',
        bio: '',
        dob: ''
    };

    componentDidMount() {
        if (this.props.employee) {
            this.setState(this.props.employee);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.submitForm(this.state);
    };

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    render() {


        const {
            id,
            first_name,
            last_name,
            department,
            email,
            gender,
            avatar_url,
            job_title,
            location,
            website,
            bio,
            dob
        } = this.state;

        return (
            <div className='col-12'>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="avatar_url">Avatar url</label>
                        <input type="text" className="form-control" id="avatar_url"
                               placeholder="Avatar url" name="avatar_url" onChange={this.onChange} value={avatar_url}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname">First name</label>
                        <input type="text" className="form-control" id="first_name"
                               placeholder="Fist name" name="first_name" onChange={this.onChange} value={first_name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" className="form-control" id="last_name"
                               placeholder="Last name" name="last_name" onChange={this.onChange} value={last_name}/>
                    </div>
                    <div className="form-group">
                        <label>Gender</label>

                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="exampleRadios1"
                                   value="Male" onChange={this.onChange} checked={gender === 'Male'}/>
                            <label className="form-check-label" htmlFor="exampleRadios1" >
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" id="exampleRadios2"
                                   value="Female" onChange={this.onChange} checked={gender === 'Female'}/>
                            <label className="form-check-label" htmlFor="exampleRadios2" >
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="Email">Date of birth</label>
                        <input type="date" className="form-control" id="dob"
                               placeholder="Date of birth" name="dob" onChange={this.onChange} value={dob}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                               placeholder="Email" name="email" onChange={this.onChange} value={email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="job_title">Job title</label>
                        <input type="text" className="form-control" id="job_title"
                               placeholder="Job title" name="job_title" onChange={this.onChange} value={job_title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="department">Department</label>
                        <input type="text" className="form-control" id="department"
                               placeholder="Department" name="department" onChange={this.onChange} value={department}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website</label>
                        <input type="text" className="form-control" id="website"
                               placeholder="Website" name="website" onChange={this.onChange} value={website}/>
                    </div>
                    <div className="form-group">
                        <label className="my-1 mr-2" htmlFor="location">Location</label>
                        <select className="custom-select my-1 mr-sm-2" id="location" name="location" value={location}
                                onChange={this.onChange}>
                            <option  disabled>Choose...</option>
                            <option value="United States">United States</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea className="form-control" id="bio" rows="3" name="bio" onChange={this.onChange} value={bio}/>
                    </div>

                    <button type="submit" className="btn btn-success float-right">Submit</button>
                </form>
            </div>
        );
    }
}

//PropTypes
EmployeeForm.propTypes = {
    submitForm: PropTypes.func.isRequired,
    employee: PropTypes.object,
};

export default EmployeeForm;