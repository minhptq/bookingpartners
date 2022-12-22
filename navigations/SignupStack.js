import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneOrEmail from "../screens/PhoneOrEmail";

const Stack = createNativeStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PhoneOrEmail" component={PhoneOrEmail} />
    </Stack.Navigator>
  );
}
