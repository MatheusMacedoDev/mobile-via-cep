import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.valueDisplay}>{count}</Text>

      <TouchableOpacity style={styles.greenButton}
        onPress={setPlusOneInCount}
      >
        <Text style={styles.buttonText}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.redButton}
        onPress={setMinusOneInCount}
      >
        <Text style={styles.buttonText}>Decrementar</Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  title: {
    fontSize: 24,
    fontWeight: '800'
  },
  valueDisplay: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 20,
    borderRadius: 40,
    textAlign: 'center'
  },
  redButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 15
  },
  greenButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 15
  },
  buttonTextRed: {
    color: '#fff',
    fontWeight: '700'
  }
});
