import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { DefaultTheme } from '@react-navigation/native';
import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import { createURL } from 'expo-linking';
import { ApolloProvider } from '@apollo/client/react';

import { Navigation } from './navigation';
import apolloClient from './graphql/apollo-client';

Asset.loadAsync([...NavigationAssets, require('./assets/no-stock.png')]);

SplashScreen.preventAutoHideAsync();

const prefix = createURL('/');

export function App() {
  return (
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
  );
}
