import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneOrEmail from "../screens/PhoneOrEmail";
import RoomBooking from "../screens/RoomBooking";

const Stack = createNativeStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RoomBooking" component={RoomBooking} />
      <Stack.Screen name="PhoneOrEmail" component={PhoneOrEmail} />
    </Stack.Navigator>
  );
}
