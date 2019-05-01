import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';
import './StudyGroupForm.css';


const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});


class StudyGroupForm extends React.Component {
  state = {
      Title: '',
      description: ''
  }


  handleChange = (e) => {
      this.setState({
      [e.target.id]: e.target.value
    })
  }


  submitForm = (e) => {
    e.preventDefault();
    const { Title, description  } = this.state
    const addStudyGroup = {
        Title: Title,
        description: description 
    }


 axios.post(`http://localhost:5000/addstudygroup`, addStudyGroup)
      .then(res => console.log(res.data));

  }

render() {

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <form onSubmit={this.submitForm}>
          <div className="g-form">
            <div className="group-subject">
              <div class="input-field col s6">
                <h6>Subject:</h6>
                <input
                  placeholder="Calc I, physics 50, eng 1A, etc."
                  id='Title' onChange={this.handleChange}
                  type="text"
                  class="validate"
                />
                {/* <label for="Name of Item">Name Of Item</label> */}
              </div>
            </div>

            {/* Item Description */}
            <div className="group-desc">
              <div class="input-field col s12">
                <h6>Description:</h6>
                <textarea
                  id='description' onChange={this.handleChange}
                  class="materialize-textarea"
                  data-length="120"
                  placeholder="Describe the purpose of the group."
                />
              </div>
            </div>

            <button
              class="btn postBtn"
              type="submit"
              name="action"
            >
              Post!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

StudyGroupForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(StudyGroupForm);