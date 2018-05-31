import * as types from './types'

/**
 * Action creator to get dummy data to prove caching works
 * @function
 */
export const getDummyData = () => ({
  type: types.GET_DUMMY_DATA,
  payload: {
    request: {
      url: '/dummy'
    }
  }
})
