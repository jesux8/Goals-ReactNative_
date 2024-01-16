import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholeder='Input your Goal'/>
      <Button title='Add Goal'/>
    </View>
    <View>
      <Text>Your list of goals</Text>
    </View>
     
  );
}