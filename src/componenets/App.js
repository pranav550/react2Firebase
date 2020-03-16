import React, { Component } from 'react';
import { database } from '../firebase';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      body: "",
      notes: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    database.on("value", snapshot => {
      this.setState({
        notes: snapshot.val()
      })
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSubmit(e) {
    e.preventDefault()
    const note = {
      title: this.state.title,
      body: this.state.body
    }
    database.push(note)
    this.setState({
      title: "",
      body: ""
    })

  }

  renderNotes() {
    return _.map(this.state.notes, (note, key) => {
      console.log(note)
      return (
        <div key={key}>
          <h3>{note.title}</h3>
          <p>{note.body}</p>

        </div>
      )
    })
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="col-sm-6 offset-sm-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text"
                name="title"
                placeholder="title"
                onChange={this.handleChange}
                className="form-control"
                value={this.state.title}
                required
              />
            </div>
            <div className="form-group">
              <textarea type="text"
                name="body"
                placeholder="body"
                onChange={this.handleChange}
                className="form-control"
                value={this.state.body}
                required
              />
            </div>
            <button className="btn btn-outline-primary btn-block">Save</button>
          </form>
          {this.renderNotes()}

        </div>
      </div>
    )
  }
}

export default App;
