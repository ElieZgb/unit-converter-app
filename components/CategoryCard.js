import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
} from "react-native";
import { clearInputs } from "../redux/slices/converterSlice";
import { useDispatch } from "react-redux";

const WINDOW_WIDTH = Dimensions.get("window").width;

export default function CategoryCard({ category, navigation }) {
	const dispatch = useDispatch();
	const CardsViewWidth = Dimensions.get("window").width - 25 * 2;
	const breakpoints = [330, 306, 290, 272, 256];
	const fontSizePoints = [14, 13, 12, 11, 10];
	const foundBreakpoint = breakpoints.find((b) => CardsViewWidth >= b);
	const indexOfBreakPoint = foundBreakpoint
		? breakpoints.indexOf(foundBreakpoint)
		: breakpoints.length - 1;
	const FONT_SIZE = fontSizePoints[indexOfBreakPoint];

	const handlePress = () => {
		dispatch(clearInputs());
		navigation.navigate("converter", { category: category });
	};

	return (
		<TouchableOpacity onPress={handlePress} style={styles.card}>
			<View style={styles.cardImage}>
				<Image
					source={category.image}
					style={{ height: "100%", width: "100%" }}
				/>
			</View>
			<View style={styles.cardTitle}>
				<Text
					style={{
						fontWeight: "700",
						fontSize: FONT_SIZE,
					}}
				>
					{category.name}
				</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		flex: 1,
		aspectRatio: 0.95,
		backgroundColor: "#fff",
		borderRadius: 15,
		marginVertical: WINDOW_WIDTH < 700 ? 11 : "3%",
		marginHorizontal: WINDOW_WIDTH < 700 ? 7 : "3%",
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#8A6AFC",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 1,
		shadowRadius: 5,
	},
	cardImage: {
		width: "55%",
		aspectRatio: 1,
		marginBottom: 10,
	},
});
