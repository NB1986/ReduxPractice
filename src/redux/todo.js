import * as ActionTypes from './ActionTypes'

const initialState = {
  todo: [
    { activity: 'First ToDo', complete: false, id: 0 },
    { activity: 'Second ToDo', complete: true, id: 1},
  ],
}

export const ToDo = (state = initialState, action) => {
  switch (action.type) {
    // TASK: Change the cases to match with the code
    case ActionTypes.ADD_TODO:
      const todo = action.payload
      todo.id = state.todo.length
      return { ...state, todo: state.todo.concat(todo) }
    case ActionTypes.TOGGLE_COMPLETE:
      let updatedTodo = [...state.todo]
      updatedTodo[action.payload].complete = !updatedTodo[action.payload].complete
      return { ...state, todo: updatedTodo }
    case ActionTypes.CLEAR_COMPLETED_TASKS:
      return { ...state, todo: state.todo.filter((task) => !task.complete) }
    case ActionTypes.DELETE_TASKS:
      return {...state, todo: []}
    case ActionTypes.DELETE_SINGLE:
      return {...state, todo: state.todo.filter((task) => task.id !== action.payload)}
    default:
      return state
  }
}
