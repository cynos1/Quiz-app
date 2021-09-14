import React,{useState} from 'react';
import data from './question.json';
import './App.css';

function App() {
  const [questions, setquestions] = useState(data);
  const [score, setscore] = useState(0);
  const [number, setnumber] = useState(0);
  const [showscore, setshowscore] = useState(false);

  //handlenextbutton which does setnumber(number+1)
  //
  function handleoptionclick(iscorrect){
    if(iscorrect){
      setscore(score + 1)
    }
    if((number+1) < questions.length){
      setnumber(number + 1);
    }
    else{
      setshowscore(true)
    }
  };
  return (
    <div className="quizApp">
      {showscore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ):(
      <>
        <h4> {questions[number].questionText}</h4>
        <div className="options">
          {questions[number].answerOptions.map((choice)=>{
            return (
              <button onClick={()=> handleoptionclick(choice.isCorrect)}>{choice.answerText}</button>
            )
          })}
        </div>
      </>
    )
}
    </div>
  );
}

export default App;
