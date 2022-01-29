import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

// import Login from './pages/LoginScreen';
// import Formulario from './pages/Formulario';
// import MenuInicial from './pages/MenuScreen';

import InitiApp from './pages/InitiApp';

let initRota = 'InitiApp';

//Barra de GoBack
const stackNav = createStackNavigator({
    InitiApp
//   MenuInicial,
//   Formulario
});

export default (Routes = createAppContainer(
  createSwitchNavigator(
    {
    //   Login: Login,
      InitiApp: InitiApp,
    //   Menu: MenuInicial,
    //   Formulario: Formulario,
      stackNav,
    },
    {
      initialRouteName: initRota,
    },
  ),
));