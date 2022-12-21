import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../screens/Signup";
const Stack = createNativeStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
