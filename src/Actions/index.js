import * as todoActions from './todoActions'
import * as dummyActions from './dummyActions'
import * as homeActions from './homeActions'

export const ActionCreators = { ...todoActions, ...dummyActions, ...homeActions }
