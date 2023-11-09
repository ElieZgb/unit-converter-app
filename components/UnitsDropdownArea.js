import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { swapConversionSides } from "../redux/slices/converterSlice";
import ArrowDown from "../assets/arrow-down.png";
import DoubleArrows from "../assets/double-arrows.png";
import {
	setIsFromSide,
	setIsToSide,
	setIsDropdownOpen,
} from "../redux/slices/dropdownSlice";

const WINDOW_WIDTH = Dimensions.get("window").width;

export default function UnitsDropdownArea() {
	const dispatch = useDispatch();
	const convertFrom = useSelector(
		(state) => state.converter.dropDown.convertFrom
	);
	const convertTo = useSelector(
		(state) => state.converter.dropDown.convertTo
	);
	const isDropdownOpen = useSelector(
		(state) => state.dropdown.isDropdownOpen
	);
	const isFromSide = useSelector((state) => state.dropdown.isFromSide);
	const isToSide = useSelector((state) => state.dropdown.isToSide);

	const openFromCategoryDropdown = () => {
		if (isDropdownOpen) {
			if (isToSide) {
				dispatch(setIsToSide(false));
			} else {
				dispatch(setIsFromSide(false));
				return dispatch(setIsDropdownOpen(false));
			}
		}

		dispatch(setIsFromSide(true));
		dispatch(setIsDropdownOpen(true));
	};

	const openToCategoryDropdown = () => {
		if (isDropdownOpen) {
			if (isFromSide) {
				dispatch(setIsFromSide(false));
			} else {
				dispatch(setIsToSide(false));
				return dispatch(setIsDropdownOpen(false));
			}
		}

		dispatch(setIsToSide(true));
		dispatch(setIsDropdownOpen(true));
	};

	const handleSwapConversion = () => {
		dispatch(swapConversionSides());
	};

	return (
		<View style={styles.wrapper}>
			<View style={styles.buttons}>
				<TouchableOpacity
					onPress={openFromCategoryDropdown}
					style={styles.selectorArea(isDropdownOpen, isFromSide)}
				>
					<Text
						style={{
							fontSize:
								convertFrom.length >= 14
									? WINDOW_WIDTH < 700
										? 15
										: 30
									: WINDOW_WIDTH < 700
									? 20
									: 35,
						}}
					>
						{convertFrom}
					</Text>
					<View
						style={{
							marginTop: 4,
							marginLeft: 8,
							height: 13,
							aspectRatio: 1,
						}}
					>
						<Image
							source={ArrowDown}
							style={{
								height: "100%",
								width: "100%",
								resizeMode: "contain",
							}}
						/>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleSwapConversion}
					style={{ alignSelf: "center" }}
				>
					<Image source={DoubleArrows} />
				</TouchableOpacity>
				<TouchableOpacity
					onPress={openToCategoryDropdown}
					style={[styles.selectorArea(isDropdownOpen, isToSide)]}
				>
					<Text
						style={{
							fontSize:
								convertTo.length >= 14
									? WINDOW_WIDTH < 700
										? 15
										: 30
									: WINDOW_WIDTH < 700
									? 20
									: 35,
						}}
					>
						{convertTo}
					</Text>
					<View
						style={{
							marginTop: 4,
							marginLeft: 8,
							height: 13,
							aspectRatio: 1,
						}}
					>
						<Image
							source={ArrowDown}
							style={{
								height: "100%",
								width: "100%",
								resizeMode: "contain",
							}}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		height: WINDOW_WIDTH < 700 ? 70 : 100,
		backgroundColor: "#fff",
		justifyContent: "center",
		alignItems: "center",
	},
	buttons: {
		flexDirection: "row",
		height: 70,
		justifyContent: "space-between",
	},
	selectorArea: (isDropdownOpen, side) => ({
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
		margin: isDropdownOpen ? (side ? 4 : 5) : 5,
		borderWidth: isDropdownOpen ? (side ? 1 : 0) : 0,
		borderColor: "#aaa",
	}),
});
