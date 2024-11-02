import { useState } from 'react'
import { ContextResult } from '../context/result';
import { useContext } from 'react';
import { useNavigate } from 'react-router';


export function QuizCards (){
  
  let navigate = useNavigate();



const questionArr = [
  {
    question: "What is the purpose of the `useState` hook in React?",
    key: 1,
    option: ["To manage component state", "To handle side effects", "To create context", "To memoize values"],
    correctAnswer: "To manage component state",
  },
  {
    question: "Which method is used to update the state in a class component?",
    key: 2,
    option: ["setState", "useState", "updateState", "stateUpdate"],
    correctAnswer: "setState",
  },
  {
    question: "What is the default value of `props.children` in a React component?",
    key: 3,
    option: ["undefined", "null", "an empty array", "an empty object"],
    correctAnswer: "undefined",
  },
  {
    question: "How do you conditionally render a component in React?",
    key: 4,
    option: ["Using `if` statements", "Using the `&&` operator", "Using a `switch` statement", "Using `try-catch` blocks"],
    correctAnswer: "Using the `&&` operator",
  },
  {
    question: "What is the purpose of the `useEffect` hook?",
    key: 5,
    option: ["To handle side effects", "To manage component state", "To memoize values", "To handle context"],
    correctAnswer: "To handle side effects",
  },
  {
    question: "Which of the following is used for routing in a React application?",
    key: 6,
    option: ["react-router-dom", "react-navigation", "react-router", "react-route"],
    correctAnswer: "react-router-dom",
  },
  {
    question: "What does the `key` prop do in a list of components?",
    key: 7,
    option: ["Identifies each item uniquely", "Controls the rendering order", "Sets the style of the item", "Changes the component's state"],
    correctAnswer: "Identifies each item uniquely",
  },
  {
    question: "How do you pass data from a parent component to a child component?",
    key: 8,
    option: ["Using props", "Using state", "Using context", "Using refs"],
    correctAnswer: "Using props",
  },
  {
    question: "What does JSX stand for?",
    key: 9,
    option: ["JavaScript XML", "JavaScript XHTML", "JavaScript Extension", "JavaScript eXtensible"],
    correctAnswer: "JavaScript XML",
  },
  {
    question: "Which hook is used to get the current context value?",
    key: 10,
    option: ["useContext", "useReducer", "useCallback", "useMemo"],
    correctAnswer: "useContext",
  }
]

    const [selectedOption, setSelectedOption] = useState(null);
    const [showAnswer, setShowAnswer] = useState(false);

    let {result , setResult} = useContext(ContextResult)
    let [counter , setCounter] = useState(0)
  

    

    const handleOptionClick = (option) => {
      setSelectedOption(option);
      console.log(option);
      questionArr.length-1 == counter ?( 
        navigate('/resultpage'),
        setCounter(0)
       
    ): (
            setCounter(counter+1)) 
          if(option == questionArr[counter].correctAnswer) { setResult(result +10) }      //................................. changing
      
    };
  
    // const handleSubmit = () => {
    //   setShowAnswer(true);
    //   setTimeout(() => {
    //     // Reset state for next question or any other action
    //     setSelectedOption(null);
    //     setShowAnswer(false);
    //   }, 2000); // 2 second delay to simulate answer reveal
    // };

    return(
        <div className="quiz-app">
      <div className="question-card animate__animated animate__fadeInDown">
        <div className="question-count">
          <span>Question {counter+1}/{questionArr.length}</span>
        </div>
        <div className="question-text">
          {questionArr[counter].question}
        </div>
        <div className="answer-options">
          {questionArr[counter].option.map((option) => (
            <button
              key={option}
              className={`option ${
                selectedOption === option ? "selected" : ""
              } ${showAnswer ? "answer-reveal" : ""}`}
              onClick={() => handleOptionClick(option)}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="quiz-progress">
        <button
          className="submit-button animate__animated animate__pulse"
          onClick={handleSubmit}
          disabled={showAnswer}
        >
          {showAnswer ? "Submitted!" : "Submit"}
        </button>
      </div> */}
    
    </div>
    )
}