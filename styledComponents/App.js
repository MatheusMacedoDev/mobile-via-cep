import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Container } from './src/components/Container';
import { ButtonText, GreenButton, RedButton, Button } from './src/components/Button';
import { Title } from './src/components/Title';
import { ValueDisplay } from './src/components/ValueDisplay';
import { LogoImage } from './src/components/LogoImage';

import Icon from './assets/icon.png';

export default function App() {
  const [count, setCount] = useState(0);

  const setPlusOneInCount = () => {
    setCount(count + 1);
  }

  const setMinusOneInCount = () => {
    setCount(count - 1);
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])
  
  return (
    <Container>
      <LogoImage source={Icon}/>
      <Title>Contador</Title>
      <ValueDisplay>{count}</ValueDisplay>

      <Button color='green'
        onPress={setPlusOneInCount}
      >
        <ButtonText>Incrementar</ButtonText>
      </Button>

      <Button color='red'
        onPress={setMinusOneInCount}
      >
        <ButtonText>Decrementar</ButtonText>
      </Button>
      
      <StatusBar style="auto" />
    </Container>
  );
}
