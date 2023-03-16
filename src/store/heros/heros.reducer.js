import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHeros } from 'SRC/api/heros';

export const HEROS_INITIAL_STATE = {
	heros: [],
	listIsLoading: false,
	error: null,
};

export const getHerosItems = createAsyncThunk(
	'heros/getHerosItems',
	async (_, { rejectWithValue }) => {
		try {
			const herosArray = await fetchHeros();
			return herosArray;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const herosSlice = createSlice({
	name: 'heros',
	initialState: HEROS_INITIAL_STATE,
	reducers: {
		setCategories(state, action) {
			state.categories = action.payload;
		},
	},
	extraReducers: {
		[getHerosItems.pending]: (state) => {
			state.listIsLoading = true;
		},
		[getHerosItems.fulfilled]: (state, action) => {
			state.listIsLoading = false;
			state.heros = action.payload;
		},
		[getHerosItems.rejected]: (state, action) => {
			state.listIsLoading = false;
			state.error = action.payload;
		},
	},
});

export const herosReducer = herosSlice.reducer;
