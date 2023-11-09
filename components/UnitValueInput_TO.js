import React, { useState, useEffect } from "react";
import { View, TextInput, Text, StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
	setIsToInputFocused,
	addToInputValue,
	addToInputValueCURRENCY,
} from "../redux/slices/converterSlice";
import { categories } from "../data/categories";

const WINDOW_WIDTH = Dimensions.get("window").width;

export default function UnitValueInput_TO({ border }) {
	const value = useSelector((state) => state.converter.toInputValue);
	const convertTo = useSelector(
		(state) => state.converter.dropDown.convertTo
	);
	const dispatch = useDispatch();
	const [unit, setUnit] = useState();
	const [abbreviation, setAbbreviation] = useState();
	const [isCurrency, setIsCurrency] = useState(false);

	useEffect(() => {
		categories.filter((c) => {
			let unitFound = c.units.find((u) => u.name === convertTo);
			if (unitFound) {
				return setUnit(unitFound);
			} else {
				unitFound = c.units.find((u) => u.abbreviation === convertTo);
				if (unitFound) {
					return setAbbreviation(unitFound);
				}
			}
		});
	}, [convertTo]);

	useEffect(() => {
		if (
			categories.some((c) =>
				c.units.some((u) => u.abbreviation === convertTo)
			)
		) {
			setIsCurrency(true);
		}
	}, [convertTo]);

	const handleInputFocus = () => {
		dispatch(setIsToInputFocused(true));
	};

	const handleInputBlur = () => {
		dispatch(setIsToInputFocused(false));
	};

	const handlePasteEvent = (e) => {
		// for on paste event in text input
		const eventText = e.nativeEvent.text;
		const addedPart = eventText.slice(value.length);

		if (isCurrency) {
			return dispatch(addToInputValueCURRENCY(addedPart));
		}
		dispatch(addToInputValue(addedPart));
	};

	return (
		<View style={styles.wrapper(border)}>
			<TextInput
				value={value}
				onFocus={handleInputFocus}
				onBlur={handleInputBlur}
				onChange={handlePasteEvent}
				showSoftInputOnFocus={false}
				style={styles.input}
				placeholder={unit?.name || abbreviation?.abbreviation}
				placeholderTextColor="#ddd"
			/>
			{unit && unit.name.toLowerCase().includes("square") && (
				<Text style={styles.unitSymbol}>
					{unit.unit}
					<Text style={styles.superscript}>2</Text>
				</Text>
			)}

			{unit && unit.name.toLowerCase().includes("cubic") && (
				<Text style={styles.unitSymbol}>
					{unit.unit}
					<Text style={styles.superscript}>3</Text>
				</Text>
			)}

			{unit &&
				!unit.name.toLowerCase().includes("cubic") &&
				!unit.name.toLowerCase().includes("square") && (
					<Text style={styles.unitSymbol}>{unit.unit}</Text>
				)}
			{abbreviation && (
				<Text style={styles.unitSymbol}>
					{abbreviation.abbreviation}
				</Text>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: (border) => ({
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderTopWidth: border ? 1 : 0,
		borderBottomWidth: 1,
		borderColor: "#ddd",
		paddingHorizontal: 50,
		flex: 1,
		maxHeight: WINDOW_WIDTH < 700 ? 120 : 200,
	}),
	input: {
		paddingLeft: 5,
		flex: 1,
		fontSize: WINDOW_WIDTH < 700 ? 20 : 35,
		borderBottomWidth: 2,
		borderBottomColor: "#9176FB",
	},
	unitSymbol: {
		fontSize: WINDOW_WIDTH < 700 ? 20 : 30,
		marginLeft: 10,
	},
	superscript: {
		fontSize: 12,
	},
});
