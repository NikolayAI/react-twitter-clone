import {compose, createStore} from 'redux'
import {rootReducer} from './rootReducer'
import createSagaMiddleware from 'redux-saga'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof  compose
    }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(rootReducer, composeEnhancers())

// sagaMiddleWare.run()