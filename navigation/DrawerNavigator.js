import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import Interaction from "../screens/Interaction";
import Settings from "../screens/Settings";
import routes from "./routes";
import InteractionSetup from "../screens/InteractionSetup";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={routes.INTERACTIONSETUP}
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name={routes.INTERACTION} component={Interaction} />
        <Drawer.Screen
          name={routes.INTERACTIONSETUP}
          component={InteractionSetup}
        />
        <Drawer.Screen name={routes.SETTINGS} component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
