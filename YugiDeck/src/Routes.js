import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

// import Login from './pages/LoginScreen';
// import Formulario from './pages/Formulario';
// import MenuInicial from './pages/MenuScreen';

import InitiApp from './pages/InitiApp';
import CardInformation from './pages/CardInformation';


let initRota = 'InitiApp';

//Barra de GoBack
const stackNav = createStackNavigator({
    InitiApp,
    CardInformation
});

export default (Routes = createAppContainer(
  createSwitchNavigator(
    {
      CardInformation: CardInformation,
      InitiApp: InitiApp,
      stackNav,
    },
    {
      initialRouteName: initRota,
    },
  ),
));