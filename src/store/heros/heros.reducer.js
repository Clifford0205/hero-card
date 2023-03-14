import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchHeros } from 'SRC/api/heros';

export const HEROS_INITIAL_STATE = {
	heros: [],
	isLoading: false,
	error: null,
};

export const getHerosItems = createAsyncThunk(
	'heros/getHerosItems',
	async (_, { rejectWithValue }) => {
		try {
			const herosArray = await fetchHeros();
			console.log('herosArray', herosArray);
			return herosArray;
		} catch (error) {
			console.log('error: ', error);
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
			state.isLoading = true;
		},
		[getHerosItems.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.heros = action.payload;
		},
		[getHerosItems.rejected]: (state, action) => {
			console.log('action: ', action);
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

// export const { getCategoryItems } = herosSlice.actions;

export const herosReducer = herosSlice.reducer;
