import * as ActionTypes from './ActionTypes'

export const addToDo = (todo) => (dispatch) => {
  const newTodo = {
    activity: todo,
    complete: false,
  }
  dispatch(createTask(newTodo))
}

const createTask = (todo) => ({
  type:ActionTypes.ADD_TODO,
  payload: todo
})

export const toggleToDo = (id) => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: id,
})

export const clearCompletedTasks = () => (dispatch) => {
  dispatch({
    type: ActionTypes.CLEAR_COMPLETED_TASKS
  })
}

export const deleteAllTasks = () => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_TASKS
  })
}

export const removeSingle = (id) => (dispatch) => {
  dispatch({
    type: ActionTypes.DELETE_SINGLE,
    payload: id
  })
}
