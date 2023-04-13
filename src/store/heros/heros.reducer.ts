import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { fetchHeros } from 'SRC/api/heros';

export type HeroCard = {
	hero: {
		id: string;
		name: string;
		image: string;
	};
};

export interface HeroState {
	heros: HeroCard[];
	listIsLoading: boolean;
	error: Error | null;
}

export const HEROS_INITIAL_STATE: HeroState = {
	heros: [],
	listIsLoading: false,
	error: null,
};

type GetHerosItems = {
	errCb: Function;
};

export const getHerosItems = createAsyncThunk(
	'heros/getHerosItems',
	async ({ errCb }: GetHerosItems, { rejectWithValue }) => {
		try {
			const herosArray = await fetchHeros();
			return herosArray;
		} catch (error) {
			errCb();
			return rejectWithValue(error);
		}
	},
);

export const herosSlice = createSlice({
	name: 'heros',
	initialState: HEROS_INITIAL_STATE,
	reducers: {},
	// extraReducers: {
	// 	[getHerosItems.pending]: (state) => {
	// 		state.listIsLoading = true;
	// 	},
	// 	[getHerosItems.fulfilled]: (state, action: PayloadAction<HeroCard[]>) => {
	// 		state.listIsLoading = false;
	// 		state.heros = action.payload;
	// 	},
	// 	[getHerosItems.rejected]: (state, action) => {
	// 		state.listIsLoading = false;
	// 		state.error = action.payload;
	// 	},
	// },
	extraReducers: (builder) => {
		builder.addCase(getHerosItems.pending, (state) => {
			state.listIsLoading = true;
		});
		builder.addCase(getHerosItems.fulfilled, (state, action: PayloadAction<HeroCard[]>) => {
			state.listIsLoading = false;
			state.heros = action.payload;
		});
		builder.addCase(getHerosItems.rejected, (state, action) => {
			state.listIsLoading = false;
			state.error = action.payload as Error;
			console.log('state.error: ', state.error);
		});
	},
});

export const herosReducer = herosSlice.reducer;
