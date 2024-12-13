import UserList from "./screens/usersList";
import UserDetails from "./screens/userDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { color } from "./consts/colors";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: color.blue500}, headerTintColor: "white", cardStyle: {backgroundColor: "#ccc"}}}>
        <Stack.Screen name="userList" component={UserList} options={{title: "Users List"}} />
        <Stack.Screen name="userDetails" component={UserDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

