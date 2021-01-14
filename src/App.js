import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuestionCard from './components/QuestionCard.js';

function App() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('https://polls.apiblueprint.org/questions')
      .then(response => {
        setQuestions(response.data)
      })
  })

  return (
    <div className="App">
      {
        questions.map(question => <QuestionCard question={question} />)
      }
    </div>
  );
}

export default App;
