import * as types from './types'

export const getTags = _ => ({
  type: types.HOME_PAGE_LOADED_LOAD_TAGS,
  payload: {
    request: {
      method: 'post',
      url: '/posts'
    }
  }
})

export const dispatchTags = () => {
  return function (dispatch) {
    return dispatch(getTags())
  }
}
