import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Assets as NavigationAssets } from '@react-navigation/elements';
import { DefaultTheme } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import { Navigation } from './navigation';

Asset.loadAsync([...NavigationAssets, require('./assets/no-stock.png')]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export function App() {
  return (
    <Navigation
      theme={DefaultTheme}
      linking={{
        enabled: 'auto',
        prefixes: [prefix],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
}
