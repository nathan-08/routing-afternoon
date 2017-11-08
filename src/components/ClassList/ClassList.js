import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
  }
  componentDidMount() {
    return axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res =>
      (this.setState({ students: res.data })))
  }
  render() {
    const students = this.state.students.map((e, i) => (
      <Link key={i} to={`/student/${e.id}`}><h3 >{e.first_name} {e.last_name}</h3></Link>
    ))
    return (
      <div>
        <div className="subnav">
          <Link to='/'><button className='back-btn'>Return to class list</button></Link>
        </div>
        <div className="box">
          <h1>{this.props.match.params.class}</h1>
          <h2>ClassList:</h2>
          {students}
        </div>
      </div>
    )
  }

}