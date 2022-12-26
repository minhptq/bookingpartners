import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PhoneOrEmail from "../screens/PhoneOrEmail";
import RoomBooking from "../screens/RoomBooking";

const Stack = createNativeStackNavigator();

export default function SignupStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RoomBooking" component={RoomBooking} />
    </Stack.Navigator>
  );
}
