import { createSelector } from 'reselect';

const selectHerosReducer = (state) => state.heros;

export const selectHeros = createSelector([selectHerosReducer], (herosSlice) => herosSlice.heros);

export const selectListIsLoading = createSelector(
	[selectHerosReducer],
	(herosSlice) => herosSlice.listIsLoading,
);
