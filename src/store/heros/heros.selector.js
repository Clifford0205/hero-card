import { createSelector } from 'reselect';

const selectHerosReducer = (state) => state.heros;

export const selectHeros = createSelector([selectHerosReducer], (herosSlice) => herosSlice.heros);

export const selectIsLoading = createSelector(
	[selectHerosReducer],
	(herosSlice) => herosSlice.isLoading,
);
