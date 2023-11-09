import React, { useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Dimensions,
} from "react-native";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";
import { useDispatch } from "react-redux";
import { setConvertFrom, setConvertTo } from "../redux/slices/converterSlice";
import {
	setIsDropdownOpen,
	setIsFromSide,
	setIsToSide,
} from "../redux/slices/dropdownSlice";

const WINDOW_WIDTH = Dimensions.get("window").width;

export default function Home({ navigation }) {
	const dispatch = useDispatch();

	useEffect(() => {
		const resetValues = navigation.addListener("focus", () => {
			dispatch(setConvertFrom(""));
			dispatch(setConvertTo(""));
			dispatch(setIsDropdownOpen(false));
			dispatch(setIsFromSide(false));
			dispatch(setIsToSide(false));
		});

		return resetValues;
	}, [navigation]);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text style={styles.header}>Welcome!</Text>
			<Text style={styles.subHeader}>What do you want to convert?</Text>
			<View style={styles.cardsView}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.categoryRow}>
						{categories
							.filter((c, index) => index < 3)
							.map((category, index) => (
								<CategoryCard
									category={category}
									navigation={navigation}
									key={index}
								/>
							))}
					</View>
					<View style={styles.categoryRow}>
						{categories
							.filter((c, index) => index > 2 && index <= 6)
							.map((category, index) => (
								<CategoryCard
									category={category}
									navigation={navigation}
									key={index}
								/>
							))}
					</View>
					<View style={styles.categoryRow}>
						{categories
							.filter((c, index) => index >= 7 && index < 10)
							.map((category, index) => (
								<CategoryCard
									category={category}
									navigation={navigation}
									key={index}
								/>
							))}
					</View>
					<View style={[styles.categoryRow, { marginBottom: 20 }]}>
						{categories
							.filter((c, index) => index >= 10 && index <= 12)
							.map((category, index) => (
								<CategoryCard
									category={category}
									navigation={navigation}
									key={index}
								/>
							))}
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	header: {
		fontWeight: "700",
		fontSize: WINDOW_WIDTH < 700 ? 40 : WINDOW_WIDTH / 12,
		color: "#fff",
		paddingLeft: WINDOW_WIDTH < 700 ? 27 : 20 + WINDOW_WIDTH * 0.03,
		marginTop: 20,
		marginBottom: 5,
		width: "80%",
		left:
			WINDOW_WIDTH < 700
				? null
				: WINDOW_WIDTH / 2 - (WINDOW_WIDTH * 0.8) / 2,
	},
	subHeader: {
		fontWeight: "400",
		fontSize: WINDOW_WIDTH < 700 ? 25 : WINDOW_WIDTH / 15,
		color: "#fff",
		paddingLeft: WINDOW_WIDTH < 700 ? 27 : 20 + WINDOW_WIDTH * 0.03,
		width: "80%",
		left:
			WINDOW_WIDTH < 700
				? null
				: WINDOW_WIDTH / 2 - (WINDOW_WIDTH * 0.8) / 2,
	},
	cardsView: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 25,
		width: WINDOW_WIDTH < 700 ? "100%" : "80%",
		left:
			WINDOW_WIDTH < 700
				? null
				: WINDOW_WIDTH / 2 - (WINDOW_WIDTH * 0.8) / 2,
	},
	categoryRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
