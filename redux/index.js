import { configureStore } from "@reduxjs/toolkit";
import dropdownSlice from "./slices/dropdownSlice";
import converterSlice from "./slices/converterSlice";

const store = configureStore({
	reducer: {
		converter: converterSlice.reducer,
		dropdown: dropdownSlice.reducer,
	},
});

export default store;
