import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { theme } from './src/theme';
import Widget from './src/components/Widget';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar 
        style="light"
        backgroundColor="transparent" 
        translucent
      />
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <Widget />

    </View>
    </>
  );
}
