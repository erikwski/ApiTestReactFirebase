import axios from 'axios';
import {Alert} from 'react-native';
const backend =
  'https://react-test-14109-default-rtdb.europe-west1.firebasedatabase.app/newtext.json';

export const addNewText = async newText => {
  try {
    let data = await axios.post(backend, {text: newText});
    if (data.status !== 200) {
      throw error.statusText;
    }
  } catch (error) {
    console.error(error);
    Alert.alert("Errore nell'inserimento", 'Riprovare più tardi');
  }
};
export const getSavedText = async () => {
  try {
    let return_data = [];
    let data = (await axios.get(backend)).data;
    Object.keys(data).forEach(kk => {
      return_data.push({
        id: kk,
        text: data[kk].text,
      });
    });
    return return_data;
  } catch (error) {
    console.error(error);
    Alert.alert('Errore !!!', 'Errore nella funzione di acquisizione dati');
    return [];
  }
};
