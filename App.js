import Home from './screens/home';
import * as Font from 'expo-font';
import { useState } from 'react';
import AppLoading from 'expo-app-loading';

const getFonts = () => Font.loadAsync({
  'nunito-bold': require('./assets/font/Nunito-Bold.ttf'),
  'nunito-italic': require('./assets/font/Nunito-Italic.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <Home />
    );
  } else {
    return (
      <AppLoading
        onError={console.warn}
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)} />
    )
  }
}