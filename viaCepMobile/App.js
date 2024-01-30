import { StatusBar } from 'expo-status-bar';
import { Text, SafeAreaView } from 'react-native';

import { useFonts, Roboto_300Light, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  let [fonstLoaded, fontError] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fonstLoaded && !fontError)
    return;

  return (
    <SafeAreaView>
      <Text>ViaCep Mobile</Text>
      <StatusBar />
    </SafeAreaView>
  );
}