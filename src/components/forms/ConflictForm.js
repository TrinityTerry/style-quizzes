import React, { useState, useEffect } from "react";
import {
  shuffleQuestions,
  answerObj,
  formAnswers,
  calculationObj,
} from "../../modules/conflictData";
import StyledForm from "./FormStyles";
const ConflictForm = (props) => {
  const [questions, setQuestions] = useState([]); // Stores all questions [{question:"", letter:""}, ..]
  const [answers, setAnswers] = useState({}); // Stores all user answers {a:0, b:0, ...}
  const [currentAnswer, setCurrentAnswer] = useState(0); // stores answer to the current answer
  const [currentQuestion, setCurrentQuestion] = useState({}); // stores question the user is currently on
  const [results, setResults] = useState({});
  useEffect(() => {
    //   Checks local storage for saved questions and answers
    const savedQuestions = window.localStorage.getItem("conflictQuestions");
    const savedAnswers = window.localStorage.getItem("conflictAnswers");
    // If there are saved questions, then get that data and push it to state
    // else generate the question array
    setQuestions(
      savedQuestions ? JSON.parse(savedQuestions) : shuffleQuestions()
    );

    // If there are saved answers, then get that data and push it to state
    // else generate the answer object
    setAnswers(savedAnswers ? JSON.parse(savedAnswers) : answerObj());
  }, []);

  useEffect(() => {
    //   If the answers and questions have been updated in state then get the current answer
    if (questions.length && Object.keys(answers).length)
      setCurrentQuestion(getQuestion());
  }, [answers, questions]);

  const renderQuestion = () =>
    currentQuestion.question ? (
      //   Generettes the HTML that will render the current question
      <StyledForm
        question={currentQuestion}
        answers={formAnswers}
        currentAnswer={currentAnswer}
        handleAnswerChange={setCurrentAnswer}
        handleBack={goBack}
        handleNext={goForward}
        questions={questions}
        handleSubmit={submitQuiz}
      />
    ) : (
      <>
        <div>Your Dominant Style is: {results.dominant}</div>
        <div>Your Back Up Style is: {results.backUp}</div>
      </>
    );

  const getQuestion = (last = false) => {
    const answerKeys = Object.keys(answers);
    if (answerKeys.length) {
      const lastQuestion = answerKeys.find((item) => answers[item] == 0);
      const index =
        questions.findIndex((item) => item.letter == lastQuestion) -
        (last ? 1 : 0);
      const questionData = questions[index];
      if (index === -1) {
        calculateResults();
      }

      return { index: index, ...questionData };
    }
  };

  const calculateResults = () => {
    const newArray = [];
    Object.keys(calculationObj).map((item) => {
      let value = 0;
      calculationObj[item].map((letter) => {
        value += answers[letter];
      });
      newArray.push([item, value]);
    });

    const sorted = newArray.sort(function (a, b) {
      return a[1] - b[1];
    });

    let dominant = sorted[0][0];
    let backUp = sorted[1][0];
    let startIndex = 1;
    console.log(sorted);
    if (sorted[0][1] == sorted[1][1]) {
      dominant = "";
      const value = sorted[0][1];
      startIndex = 0;
      sorted.forEach((item, i) => {
        if (item[1] == value) {
          dominant += item[0] + " ";
          startIndex = i + 1;
        }
      });
    }
    if (startIndex == 5) {
      backUp = "";
    } else {
      const start = sorted[startIndex];
      const value = start[1];
      if (sorted[startIndex + 1][1] == value) {
        backUp = "";
        sorted.forEach((item, i) => {
          if (item[1] == value) {
            backUp += item[0] + " ";
          }
        });
      }
    }

    setResults({ dominant: dominant, backUp: backUp });
  };

  const goBack = () => {
    if (window.confirm("This will erase this question's answer"))
      updateAnswers(0, true);
  };
  const submitQuiz = () => {
    if (window.confirm("You ready to submit this quiz?"))
      updateAnswers(Number(currentAnswer));
  };
  const goForward = () => {
    updateAnswers(Number(currentAnswer));
  };

  const updateAnswers = (number, previous = false) => {
    let newObj = { ...answers };
    newObj[currentQuestion.letter] = number;
    if (previous) {
      let last = getQuestion(true);
      newObj[last.letter] = number;
      setCurrentAnswer(answers[last.letter]);
    } else {
      setCurrentAnswer(0);
    }
    setAnswers(newObj);
    window.localStorage.setItem("conflictAnswers", JSON.stringify(newObj));
  };

  return <div>{renderQuestion()}</div>;
};

export default ConflictForm;
