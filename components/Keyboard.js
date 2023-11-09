import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	Animated,
	Easing,
	Dimensions,
} from "react-native";
import Backspace from "../assets/backspace.png";
import Loader from "../assets/loader.png";
import { useDispatch, useSelector } from "react-redux";
import {
	addFromInputValue,
	addToInputValue,
	backspaceInput,
	addFromInputValueCURRENCY,
	addToInputValueCURRENCY,
	backspaceCurrency,
	getRatesData,
} from "../redux/slices/converterSlice";
import { categories } from "../data/categories";

const WINDOW_WIDTH = Dimensions.get("window").width;

export default function Keyboard() {
	const dispatch = useDispatch();
	const isFromInputFocused = useSelector(
		(state) => state.converter.isFromInputFocused
	);
	const isToInputFocused = useSelector(
		(state) => state.converter.isToInputFocused
	);
	const convertFrom = useSelector(
		(state) => state.converter.dropDown.convertFrom
	);
	const convertTo = useSelector(
		(state) => state.converter.dropDown.convertTo
	);
	const fromValue = useSelector((state) => state.converter.fromInputValue);
	const toValue = useSelector((state) => state.converter.toInputValue);
	const [isCurrency, setIsCurrency] = useState(false);
	const [isDecimal, setIsDecimal] = useState(false);
	const [isBinary, setIsBinary] = useState(false);
	const [isOctal, setIsOctal] = useState(false);
	const [isHexadecimal, setIsHexadecimal] = useState(false);
	const [isDoubleComma, setIsDoubleComma] = useState(false);
	const [spinValue, setSpinValue] = useState(new Animated.Value(0));
	const [isLoading, setIsLoading] = useState(false);
	const [curencyDisabled, setCurrencyDisabled] = useState(true);

	Animated.loop(
		Animated.timing(spinValue, {
			toValue: 1,
			duration: 2000,
			easing: Easing.linear,
			useNativeDriver: true, // To make use of native driver for performance
		})
	).start();

	const spin = spinValue.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});

	useEffect(() => {
		if (
			categories.some((c) =>
				c.units.some((u) => u.abbreviation === convertFrom)
			)
		) {
			setIsCurrency(true);
		}
	}, [convertFrom]);

	useEffect(() => {
		if (
			(convertFrom === "Decimal" && isFromInputFocused) ||
			(convertTo === "Decimal" && isToInputFocused)
		) {
			setIsDecimal(true);
		} else {
			setIsDecimal(false);
		}
	}, [convertFrom, convertTo, isFromInputFocused, isToInputFocused]);

	useEffect(() => {
		if (
			(convertFrom === "Binary" && isFromInputFocused) ||
			(convertTo === "Binary" && isToInputFocused)
		) {
			setIsBinary(true);
		} else {
			setIsBinary(false);
		}
	}, [convertFrom, convertTo, isFromInputFocused, isToInputFocused]);

	useEffect(() => {
		if (
			(convertFrom === "Octal" && isFromInputFocused) ||
			(convertTo === "Octal" && isToInputFocused)
		) {
			setIsOctal(true);
		} else {
			setIsOctal(false);
		}
	}, [convertFrom, convertTo, isFromInputFocused, isToInputFocused]);

	useEffect(() => {
		if (
			(convertFrom === "Hexadecimal" && isFromInputFocused) ||
			(convertTo === "Hexadecimal" && isToInputFocused)
		) {
			setIsHexadecimal(true);
		} else {
			setIsHexadecimal(false);
		}
	}, [convertFrom, convertTo, isFromInputFocused, isToInputFocused]);

	useEffect(() => {
		if (!isCurrency) return;
		if (fromValue.length != 0 && toValue.length != 0) {
			setIsLoading(false);
		}

		if (
			(isFromInputFocused && fromValue.length != 0) ||
			(isToInputFocused && toValue.length != 0)
		) {
			setCurrencyDisabled(false);
		} else {
			setCurrencyDisabled(true);
		}
	}, [fromValue, toValue, isFromInputFocused, isToInputFocused]);

	useEffect(() => {
		if (
			(isFromInputFocused && fromValue.includes(".")) ||
			(isToInputFocused && toValue.includes("."))
		) {
			setIsDoubleComma(true);
		} else {
			setIsDoubleComma(false);
		}
	}, [fromValue, toValue, isFromInputFocused, isToInputFocused]);

	const handleKeyboardPress = (n) => {
		if (isFromInputFocused) {
			if (isCurrency) {
				return dispatch(addFromInputValueCURRENCY(n));
			}
			return dispatch(addFromInputValue(n));
		}

		if (isToInputFocused) {
			if (isCurrency) {
				return dispatch(addToInputValueCURRENCY(n));
			}
			return dispatch(addToInputValue(n));
		}
	};

	const handleLongPress = (n) => {
		if (!isHexadecimal) return;

		if (isFromInputFocused) {
			return dispatch(addFromInputValue(n));
		}

		if (isToInputFocused) {
			return dispatch(addToInputValue(n));
		}
	};

	const handleBackspace = () => {
		if (isCurrency) {
			return dispatch(backspaceCurrency());
		}

		dispatch(backspaceInput());
	};

	const convertCurrency = () => {
		setIsLoading(true);
		if (isFromInputFocused) {
			return dispatch(
				getRatesData({
					convertFrom: convertFrom,
					convertTo: convertTo,
					amount: fromValue,
					isFromInputFocused: isFromInputFocused,
					isToInputFocused: isToInputFocused,
					fromValue: fromValue,
					toValue: null,
				})
			);
		}

		if (isToInputFocused) {
			return dispatch(
				getRatesData({
					convertFrom: convertTo,
					convertTo: convertFrom,
					amount: toValue,
					isFromInputFocused: isFromInputFocused,
					isToInputFocused: isToInputFocused,
					fromValue: null,
					toValue: toValue,
				})
			);
		}
	};

	return (
		<View style={styles.wrapper}>
			{isCurrency && (
				<View style={styles.keyboardHead}>
					<TouchableOpacity
						disabled={curencyDisabled}
						onPress={convertCurrency}
						style={styles.currencyButton(curencyDisabled)}
					>
						<Text style={styles.currencyButtonText}>Convert</Text>
						{isLoading && (
							<View style={styles.loaderView}>
								<Animated.Image
									source={Loader}
									style={{
										height: "100%",
										width: "100%",
										resizeMode: "contain",
										transform: [{ rotate: spin }],
									}}
								/>
							</View>
						)}
					</TouchableOpacity>
				</View>
			)}
			<View style={[styles.row, { paddingTop: 3 }]}>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("7");
					}}
					style={styles.button(isBinary)}
					disabled={isBinary}
				>
					<Text style={styles.buttonText}>7</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("8");
					}}
					style={styles.button(isBinary || isOctal)}
					disabled={isBinary || isOctal}
				>
					<Text style={styles.buttonText}>8</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("9");
					}}
					style={styles.button(isBinary || isOctal)}
					disabled={isBinary || isOctal}
				>
					<Text style={styles.buttonText}>9</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("4");
					}}
					onLongPress={() => handleLongPress("D")}
					style={styles.button(isBinary)}
					disabled={isBinary}
				>
					<Text style={styles.buttonText}>4</Text>
					{isHexadecimal && <Text>D</Text>}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("5");
					}}
					onLongPress={() => handleLongPress("E")}
					style={styles.button(isBinary)}
					disabled={isBinary}
				>
					<Text style={styles.buttonText}>5</Text>
					{isHexadecimal && <Text>E</Text>}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("6");
					}}
					onLongPress={() => handleLongPress("F")}
					style={styles.button(isBinary)}
					disabled={isBinary}
				>
					<Text style={styles.buttonText}>6</Text>
					{isHexadecimal && <Text>F</Text>}
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("1");
					}}
					onLongPress={() => handleLongPress("A")}
					style={styles.button(false)}
				>
					<Text style={styles.buttonText}>1</Text>
					{isHexadecimal && <Text>A</Text>}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("2");
					}}
					onLongPress={() => handleLongPress("B")}
					style={styles.button(isBinary)}
					disabled={isBinary}
				>
					<Text style={styles.buttonText}>2</Text>
					{isHexadecimal && <Text>B</Text>}
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("3");
					}}
					onLongPress={() => handleLongPress("C")}
					style={styles.button(isBinary)}
					disabled={isBinary}
				>
					<Text style={styles.buttonText}>3</Text>
					{isHexadecimal && <Text>C</Text>}
				</TouchableOpacity>
			</View>
			<View style={styles.row}>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress(".");
					}}
					style={styles.button(
						isBinary ||
							isOctal ||
							isHexadecimal ||
							isDecimal ||
							isDoubleComma
					)}
					disabled={
						isBinary ||
						isOctal ||
						isHexadecimal ||
						isDecimal ||
						isDoubleComma
					}
				>
					<Text style={styles.buttonText}>.</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						handleKeyboardPress("0");
					}}
					style={styles.button(false)}
				>
					<Text style={styles.buttonText}>0</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleBackspace}
					style={styles.button(false)}
				>
					<Image
						source={Backspace}
						style={{ width: "25%", resizeMode: "contain" }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		marginBottom: 2,
	},
	row: {
		paddingHorizontal: 2,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	button: (disabled) => ({
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: disabled ? "#aaa" : "#fff",
		aspectRatio: 1.6,
		margin: 2,
		maxHeight: WINDOW_WIDTH < 700 ? 70 : null,
	}),
	buttonText: {
		fontSize: WINDOW_WIDTH < 700 ? 25 : 40,
	},
	keyboardHead: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	currencyButton: (disabled) => ({
		borderRadius: 50,
		paddingHorizontal: 16,
		marginTop: 6,
		marginBottom: 5,
		backgroundColor: disabled ? "#ccc" : "#9176FB",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	}),
	currencyButtonText: {
		fontSize: WINDOW_WIDTH < 700 ? 18 : 30,
		color: "#fff",
		fontWeight: "500",
	},
	loaderView: {
		height: 23,
		aspectRatio: 1,
		marginLeft: 3,
		marginRight: -10,
	},
});
