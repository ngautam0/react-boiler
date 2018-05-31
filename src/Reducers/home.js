import createReducer from '../Helpers/createReducer'
import * as types from '../Actions/types'

export const homeReducer = createReducer({
  tags: []
}, {
  [types.HOME_PAGE_LOADED_LOAD_TAGS_SUCCESS] (state, action) {
    let data = action.payload.data
    console.log(data)
    return {
      ...state,
      tags: data
    }
  },
  [types.HOME_PAGE_LOADED_LOAD_TAGS_FAIL] (state, action) {
    return {
      ...state,
      tags: ['some fixed data', 'or some error to be given']
    }
  }
})
