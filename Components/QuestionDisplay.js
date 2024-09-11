import axios from 'axios';

const FIRESTORE_API_KEY = 'AIzaSyAllY9t5Ob6SBu83UpjLwWZU3-ubzyy1fE';  
const PROJECT_ID = 'truthdare-7b551'; 

const QuestionDisplay = async (type) => {
  try {
    const response = await axios.get(
      `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/questions?key=${FIRESTORE_API_KEY}`
    );
    
    const documents = response.data.documents;

  const questions = documents
    .map(doc => doc.fields)
    .filter(doc => doc && doc.type && doc.question && doc.type.stringValue === type)  
    .map(doc => doc.question.stringValue);

 
  if (questions.length === 0) {
    throw new Error('No questions found of the requested type.');
  }

  const randomIndex = Math.floor(Math.random() * questions.length);

  return questions[randomIndex];

  } catch (error) {
    console.error('Error fetching questions: ', error);
    return 'Error fetching question!';
  }
};

export default QuestionDisplay