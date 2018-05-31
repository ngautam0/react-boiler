import * as types from './types'
import { writeBulkDocs, writeDoc } from '../Helpers/dbHelper'

/**
 * Action creator to add todos to redux store
 * @function
 * @param {number} id - The id for the todo
 * @param {string} category - The category for the todo
 * @param {string} todo - The name of the todo
 */
export const addTodo = ({ id, category, todo }) => ({
  type: types.ADD_TODO,
  payload: { id, category, todo }
})

/**
 * Action creator to send network request to post data
 * Called by addTodoAndUpdateDB
 * @function
 * @param {number} id - The id of the todo
 * @param {string} category - The category of the todo
 * @param {string} todo - The name of the todo
 */
export const postTodo = ({ id, category, todo }) => ({
  type: types.POST_TODO,
  payload: {
    request: {
      url: '/todos',
      method: 'POST',
      data: { id, category, todo }
    }
  }
})

/**
 * Action creator to post todo and update DB
 * @function
 * @param {number} id - The id of the todo
 * @param {string} category - The category of the todo
 * @param {string} todo - The title of the todo
 * @returns {object}
 */
export const postTodoAndUpdateDB = ({ id, category, todo }) => {
  return async (dispatch, getState) => {
    const response = await dispatch(postTodo({ id, category, todo }))
    if (response) {
      await writeDoc({ id, category, todo })
      return response
    }
  }
}

/**
 * Action creator to fetch todos and then update pouchDB with
 * the result
 * @function
 * @returns {object}
*/
export const getTodosAndUpdateDB = () => {
  return async (dispatch, getState) => {
    const response = await dispatch(getTodos())
    if (response) {
      await writeBulkDocs(response.payload.data)
      return response
    }
  }
}

/**
 * Action creator to fetch the todos
 * @function
 */
export const getTodos = () => ({
  type: types.GET_TODOS,
  payload: {
    request: {
      url: '/todos'
    }
  }
})
