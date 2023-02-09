import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../screens/Signin";
import SignupStack from "./SignupStack";

const Stack = createNativeStackNavigator();

export default function IsPartner() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignupStack" component={SignupStack} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}
