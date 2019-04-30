import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';


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
          <div>
            <div class="row">
              <div class="input-field col s6">
                <i class="material-icons prefix"> Title</i>
                <input
                  placeholder="Subject"
                  id='Title' onChange={this.handleChange}
                  type="text"
                  class="validate"
                />
                {/* <label for="Name of Item">Name Of Item</label> */}
              </div>
            </div>

            {/* Item Description */}
            <div class="row">
              <div class="input-field col s12">
                <i class="material-icons prefix"> description</i>
                <textarea
                  id='description' onChange={this.handleChange}
                  class="materialize-textarea"
                  data-length="120"
                />
                <label for="textarea2">description</label>
              </div>
            </div>

            <button
              class="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i class="material-icons right">send</i>
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