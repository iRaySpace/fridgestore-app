import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';
import { AddItem } from './screens/AddItem';
import { EditItem } from './screens/EditItem';

const RootStack = createNativeStackNavigator({
  screens: {
    home: {
      screen: Home,
      options: {
        title: 'Home',
        headerShown: false,
      },
    },
    addItem: {
      screen: AddItem,
      options: {
        title: 'Adding an item',
      },
    },
    editItem: {
      screen: EditItem,
      options: {
        title: 'Editing an item',
      },
    },
    notFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
