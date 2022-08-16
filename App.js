
/**
 * Represents App screen
 * @author Nishma Shah
 * @version 1.0.0
 */
import { View } from 'react-native';
import MemoryGame from './src/screens/MemoryGame';
import styles from './src/styles/App.styles';

export default function App() {
  return (
    <View style={styles.container}>
      <MemoryGame />
    </View>
  );
}
