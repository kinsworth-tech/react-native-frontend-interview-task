import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import BottomSheet from './components/BottomSheet';

export default function App() {
  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Kinsworth</Text>
      <Text style={styles.body}>
        Tap the button below to open the bottom sheet.
      </Text>

      <Button title="Leave feedback" onPress={() => {}} />

      <BottomSheet title="Leave feedback">
        <Text style={styles.body}>
          Ayrton Senna da Silva (21 March 1960 - 1 May 1994) was a Brazilian racing driver, who
          competed in Formula One from 1984 to 1994. Senna won three Formula One World Drivers'
          Championship titles with McLaren, and — at the time of his death — held the record for
          most pole positions (65).
        </Text>

        <TextInput
          style={styles.input}
          placeholder="What did you think?"
          multiline
        />

        <View style={styles.actions}>
          <Button title="Cancel" onPress={() => {}} />
          <Button title="Submit" onPress={() => {}} />
        </View>
      </BottomSheet>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 8,
    borderWidth: 1,
    minHeight: 80,
    padding: 12,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'flex-end',
  },
});
