import { combineReducers } from '@reduxjs/toolkit';

import { herosReducer } from './heros/heros.reducer';

export const rootReducer = combineReducers({
	heros: herosReducer,
});
