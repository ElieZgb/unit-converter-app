import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
				<Text>Open up App.js to start working on your app!</Text>
				<StatusBar style="auto" />

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
		alignItems: "center",
		justifyContent: "center",
	},
});
