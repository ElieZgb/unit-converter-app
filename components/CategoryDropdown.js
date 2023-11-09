import React from "react";
import {
	Text,
	StyleSheet,
	Dimensions,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setConvertFrom, setConvertTo } from "../redux/slices/converterSlice";
import {
	setIsFromSide,
	setIsToSide,
	setIsDropdownOpen,
} from "../redux/slices/dropdownSlice";

const windowHeight = Dimensions.get("window").height;

export default function CategoryDropdown({ category }) {
	const dispatch = useDispatch();
	const convertFrom = useSelector(
		(state) => state.converter.dropDown.convertFrom
	);
	const convertTo = useSelector(
		(state) => state.converter.dropDown.convertTo
	);
	const isFromSide = useSelector((state) => state.dropdown.isFromSide);
	const isToSide = useSelector((state) => state.dropdown.isToSide);

	const handleChoseCategory = (categoryName) => {
		if (isFromSide) {
			dispatch(setConvertFrom(categoryName));
		} else if (isToSide) {
			dispatch(setConvertTo(categoryName));
		}

		closeDropdown();
	};

	const closeDropdown = () => {
		dispatch(setIsFromSide(false));
		dispatch(setIsToSide(false));
		dispatch(setIsDropdownOpen(false));
	};

	return (
		<ScrollView showsVerticalScrollIndicator={true}>
			{category.units.map((unit, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => {
						handleChoseCategory(unit.name || unit.abbreviation);
					}}
					style={
						(isFromSide &&
							styles.dropdownElement(
								unit.name || unit.abbreviation,
								convertFrom
							)) ||
						(isToSide &&
							styles.dropdownElement(
								unit.name || unit.abbreviation,
								convertTo
							))
					}
				>
					<Text
						style={
							(isFromSide &&
								styles.dropdownElementText(
									unit.name || unit.abbreviation,
									convertFrom
								)) ||
							(isToSide &&
								styles.dropdownElementText(
									unit.name || unit.abbreviation,
									convertTo
								))
						}
					>
						{`${unit.name || unit.dropdownLabel} `}
						{unit.name &&
							unit.name.toLowerCase().includes("square") && (
								<Text style={styles.unitSymbol}>
									[{unit.unit}
									<Text style={styles.superscript}>2</Text>]
								</Text>
							)}

						{unit.name &&
							unit.name.toLowerCase().includes("cubic") && (
								<Text style={styles.unitSymbol}>
									[{unit.unit}
									<Text style={styles.superscript}>3</Text>]
								</Text>
							)}

						{unit.name &&
							!unit.name.toLowerCase().includes("cubic") &&
							!unit.name.toLowerCase().includes("square") && (
								<Text style={styles.unitSymbol}>
									[{unit.unit}]
								</Text>
							)}
					</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	dropdownElement: (unitName, selected) => ({
		backgroundColor: unitName === selected ? "#9176FB" : "#fff",
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",
		paddingVertical: 5,
		paddingHorizontal: 10,
	}),
	dropdownElementText: (unitName, selected) => ({
		color: unitName === selected ? "#fff" : "#000",
		fontSize: 22,
		fontWeight: "500",
	}),
	unitSymbol: {
		fontSize: 16,
		fontWeight: "400",
	},
	superscript: {
		fontSize: 11,
	},
});
