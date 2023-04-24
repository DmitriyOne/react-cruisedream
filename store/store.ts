import { createWrapper } from 'next-redux-wrapper'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { portApi } from './port'

const rootReducer = combineReducers({
	[portApi.reducerPath]: portApi.reducer,
})

export const makeStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: (gDM) => gDM().concat(portApi.middleware),
	})

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: false })
