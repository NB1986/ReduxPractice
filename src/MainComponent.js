import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToDo, clearCompletedTasks, toggleToDo, deleteAllTasks, removeSingle } from './redux/ActionCreators'

const mapStateToProps = (state) => {
  console.log(state)
  return {
    ToDo: state.ToDo
  }
}

const mapDispatchToProps = {
  addToDo,
  toggleToDo,
  clearCompletedTasks,
  deleteAllTasks,
  removeSingle
}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
    }
  }

  handleSubmit() {
    if (this.state.todoInput.length > 0) {
      this.props.addToDo(this.state.todoInput)
      this.setState({ todoInput: '' })
    }
  }

  render() {
    return (
      <div className='App'>
        <h1>Redux To Do List</h1>
        <ul>
          {this.props.ToDo.todo.map((todo, index) => <li key={index}>
                <input
                  type='checkbox'
                  checked={todo.complete}
                  // Task: dispatch toggle instead of console.log. Use the index of the array
                  onChange={() => this.props.toggleToDo(index)}
                />
                {/* Task: Replace this with task activity */}
                {todo.activity}
                <button onClick={() => this.props.removeSingle(todo.id)}>Delete</button>
              </li>
          )}

          <div className='AddField'>
            <input
              type='text'
              onChange={(e) => this.setState({ todoInput: e.target.value })}
              value={this.state.todoInput}
            />
            <div>
              <button onClick={() => this.handleSubmit()}>Add Task</button>
              <button onClick={() => this.props.clearCompletedTasks()}>
                Remove Completed
              </button>
              <button onClick={() => this.props.deleteAllTasks()}>
                Empty List
              </button>
            </div>
          </div>
          <div>
            <br />
            Redux Challenge
            <br />
            <br />
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <ol>
                <div style={{ margin: 10 }}>
                  This website is broken. We are missing some functionality and need your help fixing it.
                </div>
                <li>Tasks do not render on the page. There should be 2 when the page loads.</li>
                <li>Can't add tasks.</li>
                <li>The tasks do not toggle when clicked. This should be dispatched into redux.</li>
                <li>Completed tasks do not remove.</li>
                <li>All tasks do not remove.</li>
                <div>Extra:</div>
                <li>Ability to remove single tasks.</li>
              </ol>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

// Task: Connect this function to redux
export default connect(mapStateToProps, mapDispatchToProps)(Main)
