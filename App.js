import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholeder='Input your Goal' />
        <Button title='Add Goal' />
      </View>

      <View style={styles.container}>
        <Text>
          Your list of goals
        </Text>
      </View>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 25

  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  textInput: {
    paddingStart: 10,
    borderWidth: 1,
    width: "70%",
  },
  goalsContainer: {
    flex: 4,
  }
});
