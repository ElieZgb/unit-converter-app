import { StyleSheet, View, Image, StatusBar, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Background from "./assets/background.png";
import Ellipse_1 from "./assets/ellipse-1.png";
import Ellipse_2 from "./assets/ellipse-2.png";
import Home from "./screens/Home";
import Converter from "./screens/Converter";
import store from "./redux";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const screenOptions = {
	headerShown: false,
};
const navTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: "transparent",
	},
};

export default function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
				<View style={styles.background}>
					<Image
						source={Background}
						style={{
							height: "100%",
							width: Dimensions.get("window").width,
							resizeMode: "cover",
						}}
					/>
				</View>
				<View style={styles.background}>
					<Image
						source={Ellipse_1}
						style={{
							position: "absolute",
							top: -15,
							width: Dimensions.get("window").width,
							resizeMode: "cover",
						}}
					/>
				</View>
				<View style={styles.background}>
					<Image
						source={Ellipse_2}
						style={{
							width: "100%",
							width: Dimensions.get("window").width,
							resizeMode: "cover",
							position: "absolute",
							bottom: -18,
						}}
					/>
				</View>

				<NavigationContainer theme={navTheme}>
					<Stack.Navigator
						initialRouteName="home"
						screenOptions={screenOptions}
					>
						<Stack.Screen name="home" component={Home} />
						<Stack.Screen name="converter" component={Converter} />
					</Stack.Navigator>
				</NavigationContainer>
			</View>
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	background: {
		position: "absolute",
		height: "100%",
		width: Dimensions.get("window").width,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		zIndex: -1,
	},
});
