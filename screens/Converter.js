import React, { useEffect } from "react";
import {
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Image,
	Dimensions,
} from "react-native";
import ArrowBack from "../assets/arrow-back.png";
import Background from "../assets/background.png";
import Ellipse_1 from "../assets/ellipse-1.png";
import Ellipse_2 from "../assets/ellipse-2.png";
import KeyboardComponent from "../components/Keyboard";
import UnitsDropdownArea from "../components/UnitsDropdownArea";
import UnitValueInput_FROM from "../components/UnitValueInput_FROM";
import UnitValueInput_TO from "../components/UnitValueInput_TO";
import CategoryDropdown from "../components/CategoryDropdown";
import { setConvertFrom, setConvertTo } from "../redux/slices/converterSlice";
import { useDispatch, useSelector } from "react-redux";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

export default function Converter({ route, navigation }) {
	const { category } = route.params;
	const dispatch = useDispatch();
	const isDropdownOpen = useSelector(
		(state) => state.dropdown.isDropdownOpen
	);

	useEffect(() => {
		dispatch(
			setConvertFrom(
				category.units[0].name || category.units[0].abbreviation
			)
		);
		dispatch(
			setConvertTo(
				category.units[1].name === "Microsecond"
					? category.units[7].name || category.units[7].abbreviation
					: category.units[1].name || category.units[1].abbreviation
			)
		);
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "#9176FB" }}>
			<View style={styles.dropdownArea(isDropdownOpen)}>
				<CategoryDropdown category={category} />
			</View>
			<View style={styles.header}>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
					style={styles.arrowBack}
				>
					<Image
						source={ArrowBack}
						style={{
							height: "35%",
							width: "35%",
							resizeMode: "contain",
						}}
					/>
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 30,
						fontWeight: "700",
						color: "#fff",
					}}
				>
					{category.name}
				</Text>
			</View>
			<UnitsDropdownArea />
			<View style={{ flex: 1, backgroundColor: "#fff" }}>
				<UnitValueInput_FROM border={true} />
				<UnitValueInput_TO border={false} />
			</View>
			<KeyboardComponent />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#9176FB",
		height: WINDOW_WIDTH < 700 ? 60 : 100,
		alignItems: "center",
		justifyContent: "center",
	},
	headerBackground: {
		position: "absolute",
		width: "100%",
		zIndex: -1,
	},
	arrowBack: {
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		aspectRatio: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	dropdownArea: (isDropdownOpen) => ({
		display: isDropdownOpen ? "flex" : "none",
		position: "absolute",
		backgroundColor: "#fff",
		borderWidth: 1,
		top: 60 + 70,
		height: WINDOW_HEIGHT - 60 - 70,
		left: 0,
		right: 0,
		zIndex: 10,
	}),
});
