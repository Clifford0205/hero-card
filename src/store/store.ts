import { compose, createStore, applyMiddleware, Middleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// eslint-disable-next-line no-undef
const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
	(middleware): middleware is Middleware => Boolean(middleware),
);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(middleWares),
});
