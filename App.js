import React from 'react';
import {useState} from 'react';
import {addNewText, getSavedText} from './api/api';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';

const App = () => {
  const [newText, setNewText] = useState('');
  const [allText, updateAllText] = useState([]);
  getSavedText().then(old_text_stored => {
    updateAllText(old_text_stored);
  });
  function inputChange(enteredText, eeee) {
    setNewText(enteredText);
  }
  function triggerAddNewText() {
    addNewText(newText).then(() => {
      setNewText('');
    });
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TextInput
          style={{
            borderWidth: 2,
            borderRadius: 10,
            borderColor: 'gainsboro',
            marginBottom: 20,
            textAlign: 'center',
          }}
          placeholder="Inserisci un nuovo testo"
          onChangeText={inputChange}
        />
        <TouchableOpacity>
          <Button title="ADD NEW" onPress={triggerAddNewText} />
        </TouchableOpacity>
      </ScrollView>
      <FlatList
        style={{
          padding: 20,
        }}
        data={allText}
        renderItem={({item}) => (
          <Text
            style={{
              textAlign: 'center',
              width: '100%',
            }}>
            {item.text}
          </Text>
        )}
      />
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
