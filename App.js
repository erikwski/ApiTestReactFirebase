import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

const App = () => {
  const [newText, setNewText] = useState(true);

  function inputChange(enteredText) {
    setNewText(enteredText);
  }
  async function addNewText() {
    try {
      let data = await axios.post(
        'https://react-test-14109-default-rtdb.europe-west1.firebasedatabase.app/newtext.json',
        {text: newText},
      );
    } catch (error) {
      Alert.alert("Errore nell'inserimento", 'Riprovare più tardi');
    }
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <TextInput onChange={inputChange} />
        <TouchableOpacity>
          <Button title="" onPress={addNewText} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const {backgroundStyle} = StyleSheet.create({
  backgroundStyle: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
