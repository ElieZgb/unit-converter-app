import { createSlice } from "@reduxjs/toolkit";
import { convertFromTo } from "../../utils/conversionFunction";
import { equations } from "../../utils/equations";

const converterSlice = createSlice({
	name: "converter",
	initialState: {
		fromInputValue: "",
		toInputValue: "",
		isFromInputFocused: true,
		isToInputFocused: false,
		dropDown: {
			convertFrom: "",
			convertTo: "",
		},
	},
	reducers: {
		addFromInputValue: (state, action) => {
			state.fromInputValue += action.payload;
			// This is for managing cut event
			if (action.payload.length === 0) {
				state.fromInputValue = "";
			}

			const conversionResult = convertFromTo({
				convertFrom: state.dropDown.convertFrom,
				convertTo: state.dropDown.convertTo,
				inputValue: state.fromInputValue,
			});

			state.toInputValue = conversionResult.resultValue;
		},
		addToInputValue: (state, action) => {
			state.toInputValue += action.payload;
			// This is for managing cut event
			if (action.payload.length === 0) {
				state.toInputValue = "";
			}

			const conversionResult = convertFromTo({
				convertFrom: state.dropDown.convertTo,
				convertTo: state.dropDown.convertFrom,
				inputValue: state.toInputValue,
			});

			state.fromInputValue = conversionResult.resultValue;
		},
		backspaceInput: (state, payload) => {
			if (state.isFromInputFocused) {
				state.fromInputValue = state.fromInputValue.slice(
					0,
					state.fromInputValue.length - 1
				);

				const conversionResult = convertFromTo({
					convertFrom: state.dropDown.convertFrom,
					convertTo: state.dropDown.convertTo,
					inputValue: state.fromInputValue,
				});

				state.toInputValue = conversionResult.resultValue;
			} else if (state.isToInputFocused) {
				state.toInputValue = state.toInputValue.slice(
					0,
					state.toInputValue.length - 1
				);

				const conversionResult = convertFromTo({
					convertFrom: state.dropDown.convertTo,
					convertTo: state.dropDown.convertFrom,
					inputValue: state.toInputValue,
				});

				state.fromInputValue = conversionResult.resultValue;
			}
		},
		clearInputs: (state, action) => {
			state.fromInputValue = "";
			state.toInputValue = "";
		},
		addFromInputValueCURRENCY: (state, action) => {
			state.fromInputValue += action.payload;
			// This is for managing cut event
			if (action.payload.length === 0) {
				state.fromInputValue = "";
			}
			state.toInputValue = "";
		},
		addToInputValueCURRENCY: (state, action) => {
			state.toInputValue += action.payload;
			// This is for managing cut event
			if (action.payload.length === 0) {
				state.toInputValue = "";
			}
			state.fromInputValue = "";
		},
		convertCurrency: (state, action) => {
			const { isFromInputFocused, isToInputFocused, result } =
				action.payload;

			const res = Math.round(result * 100) / 100;

			if (isFromInputFocused) {
				state.toInputValue = `${res.toFixed(3)}`;
			} else if (isToInputFocused) {
				state.fromInputValue = `${res.toFixed(3)}`;
			}
		},
		backspaceCurrency: (state, action) => {
			if (state.isFromInputFocused) {
				state.fromInputValue = state.fromInputValue.slice(
					0,
					state.fromInputValue.length - 1
				);
			} else if (state.isToInputFocused) {
				state.toInputValue = state.toInputValue.slice(
					0,
					state.toInputValue.length - 1
				);
			}
		},
		setIsFromInputFocused: (state, action) => {
			state.isFromInputFocused = action.payload;
		},
		setIsToInputFocused: (state, action) => {
			state.isToInputFocused = action.payload;
		},
		setConvertFrom: (state, action) => {
			state.dropDown.convertFrom = action.payload;
		},
		setConvertTo: (state, action) => {
			state.dropDown.convertTo = action.payload;
		},
		swapConversionSides: (state, action) => {
			let temp = state.dropDown.convertFrom;
			state.dropDown.convertFrom = state.dropDown.convertTo;
			state.dropDown.convertTo = temp;

			const found = equations.find(
				(e) =>
					e.units.includes(
						state.dropDown.convertFrom.toLowerCase()
					) &&
					e.units.includes(state.dropDown.convertTo.toLowerCase())
			);

			if (found) {
				state.toInputValue = `${found.calculate(
					state.fromInputValue,
					state.dropDown.convertFrom.toLowerCase()
				)}`;
			}
		},
	},
});

export const getRatesData = ({
	convertFrom,
	convertTo,
	amount,
	isFromInputFocused,
	isToInputFocused,
}) => {
	return async (dispatch) => {
		const getData = async () => {
			const API_KEY = "05e65afb0ab4de5747342f06";
			const res = await fetch(
				`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${convertFrom}/${convertTo}`
			);
			const data = await res.json();
			return amount * data.conversion_rate;
		};

		try {
			const currencyData = await getData();
			dispatch(
				convertCurrency({
					result: currencyData,
					isFromInputFocused: isFromInputFocused,
					isToInputFocused: isToInputFocused,
				})
			);
		} catch (e) {
			console.log(e);
		}
	};
};

export const {
	addFromInputValue,
	addToInputValue,
	backspaceInput,
	clearInputs,
	setIsFromInputFocused,
	setIsToInputFocused,
	setConvertFrom,
	setConvertTo,
	swapConversionSides,
	addFromInputValueCURRENCY,
	addToInputValueCURRENCY,
	convertCurrency,
	backspaceCurrency,
} = converterSlice.actions;
export default converterSlice;
