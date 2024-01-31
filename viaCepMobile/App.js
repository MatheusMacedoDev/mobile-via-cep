import { StatusBar } from 'react-native';

import { useFonts, Roboto_300Light, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import Header from './src/components/Header';
import Container from './src/components/Container';
import ViaCepForm from './src/components/ViaCepForm';

export default function App() {
  let [fonstLoaded, fontError] = useFonts({
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold
  });

  if (!fonstLoaded && !fontError)
    return;

  return (
    <Container>
      <StatusBar />
      <Header />
      <ViaCepForm />
    </Container>
  );
}