import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings113324Navigator from '../features/Settings113324/navigator';
import BlankScreen1113319Navigator from '../features/BlankScreen1113319/navigator';
import BlankScreen0113318Navigator from '../features/BlankScreen0113318/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings113324: { screen: Settings113324Navigator },
BlankScreen1113319: { screen: BlankScreen1113319Navigator },
BlankScreen0113318: { screen: BlankScreen0113318Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
