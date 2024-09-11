import {React, useState} from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Bottle from './Components/Bottle'; // Bottle rotation component
import QuestionDisplay from './Components/QuestionDisplay'; // Component to fetch and display questions

const App = () => {
  const [question, setQuestion] = useState(null);

  const handleSelection = async (type) => {
    const fetchedQuestion = await QuestionDisplay(type); // Fetch a random question from Firestore
    setQuestion(fetchedQuestion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Truth or Dare Game</Text>

      <Bottle /> 
      <View style={styles.buttonContainer}>
        <Button title="Truth" onPress={() => handleSelection("truth")} />
        <Button title="Dare" onPress={() => handleSelection("dare")} />
      </View>

      {question && (
        <Text style={styles.questionText}>{question}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  questionText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default App;
