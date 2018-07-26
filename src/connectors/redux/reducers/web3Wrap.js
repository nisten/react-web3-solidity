import web3Reducer from './web3'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    drawerState: MyDrawerReducer,
    topBarState: MyTopBarReducer,
    web3Wrap: web3Reducer,
    metaCoin: MetaCoinReducer,
    location: locationReducer,
    form: formReducer,
    ...asyncReducers
  })
}
