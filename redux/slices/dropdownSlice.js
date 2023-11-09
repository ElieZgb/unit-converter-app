import { createSlice } from "@reduxjs/toolkit";

const dropdownSlice = createSlice({
	name: "dropdown",
	initialState: {
		isFromSide: false,
		isToSide: false,
		isDropdownOpen: false,
	},
	reducers: {
		setIsFromSide: (state, action) => {
			state.isFromSide = action.payload;
		},
		setIsToSide: (state, action) => {
			state.isToSide = action.payload;
		},
		setIsDropdownOpen: (state, action) => {
			state.isDropdownOpen = action.payload;
		},
	},
});

export const { setIsFromSide, setIsToSide, setIsDropdownOpen } =
	dropdownSlice.actions;
export default dropdownSlice;
