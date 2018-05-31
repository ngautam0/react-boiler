import configureMockStore from 'redux-mock-store'
import MockAdapter from 'axios-mock-adapter'

import { client, BASE_URL, middlewares } from '../testConfig'
import * as actions from '../../actions/TodoActions'
import * as types from '../types'

describe('todoActions', () => {
    let mockStore
    let store
    let MockApi

    beforeEach(() => {
        MockApi = new MockAdapter(client)
        mockStore = configureMockStore(middlewares)
        store = mockStore()
    })

    it('should create an action to add a todo', () => {
        const params = { id: 1, category: 'Icebox', todo: 'Random' }
        const expectedAction = {
            type: types.ADD_TODO, 
            payload: { ...params }
        }
        expect(actions.addTodo(params)).toEqual(expectedAction)
    })

    it('should create an action to post a todo', () => {
        const params = { id: 1, category: 'Icebox', todo: 'Random' }
        const expectedAction = {
            type: types.POST_TODO, 
            payload: {
                request: {
                    url: '/todos', 
                    method: 'POST', 
                    data: { ...params }
                }
            }
        }
        expect(actions.postTodo(params)).toEqual(expectedAction)
    })

    it('should create a new action on successful posting of a todo', () => {
        MockApi.onPost('/todos').reply(200, {})
        const params = { id: 1, category: 'Icebox', todo: 'Random' }
        const expectedAction = {
            type: types.POST_TODO,
            payload: {
                request: {
                    url: '/todos', 
                    method: 'POST', 
                    data: { ...params }
                }
            }
        }
        store.dispatch(actions.postTodo(params)).then(() => {
            const returnedActions = store.getActions()
            expect(returnedActions[0]).toEqual(expectedAction)
            expect(returnedActions[1].type).toEqual(types.POST_TODO_SUCCESS)
            expect(returnedActions[1].payload.status).toEqual(200)
        })
    })
})