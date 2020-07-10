import React from "react";
import "./formStyles.scss";
const StyledForm = ({
  question,
  answerHeight = 0,
  currentAnswer,
  handleAnswerChange,
  handleBack,
  handleNext,
  questions,
  handleSubmit,
}) => {
  return (
    <div className="form-container">
      <div className="form-question">
        <div>{question.question}</div>
      </div>
      <div className="form-all-answers ">
        {Object.keys(question.answers).map((item) => {
          return (
            <div className={`form-answer d-flex h-${answerHeight}`}>
              <input
                type="radio"
                name="answer"
                className="form-answer-radios"
                id={`answer--${item}`}
                checked={currentAnswer == item}
                value={item}
                onChange={() => handleAnswerChange(item)}
              />{" "}
              <label htmlFor={`answer--${item}`} className="">
                <div
                  htmlFor={`answer--${item}`}
                  className={`${
                    currentAnswer == item && "selected"
                  } form-answer-text `}
                >
                  {question.answers[item]}
                </div>
              </label>
            </div>
          );
        })}
        <div className="form-buttons d-flex justify-content-center align-items-center">
          {/* If past questions exist, allow the user to go back */}
          {question.index > 0 && (
            <div className={`form-buttons-previous`} onClick={handleBack}>
              Previous
            </div>
          )}
          {/* If the current question has been answered and there's a next question, allow the user to submit and go to the next question */}
          {question.index !== questions.length - 1 && (
            <div
              className={`form-buttons-next ${
                currentAnswer == 0 && "form-buttons-hidden"
              }`}
              //   disabled={currentAnswer == 0}
              onClick={handleNext}
            >
              Next
            </div>
          )}
          {/*If user is on the last question, allow them to submit the quiz */}
          {question.index === questions.length - 1 && (
            <div
              className={`form-buttons-finish ${
                currentAnswer == 0 && "form-buttons-hidden"
              }`}
              //   disabled={currentAnswer == 0}
              onClick={handleSubmit}
            >
              Finish
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyledForm;
