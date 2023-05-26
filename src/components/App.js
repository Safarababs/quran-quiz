import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import questions from "./Questions";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const App = () => {
  

  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    city: "",
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [showUserForm, setShowUserForm] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleUserDataChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAnswerSelect = (event) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[currentQuestionIndex] = value;
      return updatedAnswers;
    });
  };

  const handleNextClick = () => {
    if (showUserForm) {
      if (!userData.name || !userData.phoneNumber || !userData.city) {
        const errors = {
          name: !userData.name,
          phoneNumber: !userData.phoneNumber,
          city: !userData.city,
        };
        setFormErrors(errors);
      } else {
        setFormErrors({});
        setShowUserForm(false);
      }
    } else {
      if (currentQuestionIndex === shuffledQuestions.length - 1) {
        setShowResults(true);
        saveUserDataAndAnswers();
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex === 0) {
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const calculateMarks = () => {
    let totalMarks = shuffledQuestions.length;
    let obtainedMarks = 0;
    let resultDetails = [];

    shuffledQuestions.forEach((question, index) => {
      const answer = answers[index];
      const isCorrect = answer === question.correctAnswer;
      if (isCorrect) {
        obtainedMarks++;
      }
      resultDetails.push({ question, answer, isCorrect });
    });

    return { totalMarks, obtainedMarks: Number(obtainedMarks), resultDetails };
  };

  const saveUserDataAndAnswers = () => {
    setIsLoading(true);
    const obtainedMarks = calculateMarks();
    const name = userData.name;
    const phoneNumber = userData.phoneNumber;
    const city = userData.city;
    const data = { name, phoneNumber, city, obtainedMarks };

    swal("Please wait", "We are saving", "warning");

    axios.post("http://localhost:5000/result", data).then((res) => {
      if (res.data.message === "Successfully sent") {
        swal("Thank you!", "Your result has been saved", "success");
        setIsLoading(false);
      } else {
        swal(
          "Please Check your internet and try again",
          "Please Check your network",
          "error"
        );
        setIsLoading(false);
      }
    });
  };

  useEffect(() => {
    const shuffledArray = shuffleArray(questions.map((question) => {
      return {
        ...question,
        options: shuffleArray(question.options),
      };
    }));
    setShuffledQuestions(shuffledArray);
  }, []);

  return (
    <div className="container">
      {showUserForm ? (
        <div className="form-group">
          <h1>Welcome to Serially Muarif Quranic Quiz Competition</h1>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleUserDataChange}
            placeholder={formErrors.name ? "Name is required" : "Name"}
            className={formErrors.name ? "error" : ""}
          />
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleUserDataChange}
            placeholder={
              formErrors.phoneNumber ? "Phone Number is required" : "Phone Number"
            }
            className={formErrors.phoneNumber ? "error" : ""}
          />
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleUserDataChange}
            placeholder={formErrors.city ? "City is required" : "City"}
            className={formErrors.city ? "error" : ""}
          />
          <button onClick={handleNextClick}>Start Quiz</button>
        </div>
      ) : showResults ? (
        <div className="results">
          <p>Name: {userData.name}</p>
          <p>Phone Number: {userData.phoneNumber}</p>
          <p>City: {userData.city}</p>
          <p>Total Marks: {calculateMarks().totalMarks}</p>
          <p>Obtained Marks: {calculateMarks().obtainedMarks}</p>
          <h3 style={{ color: "white" }}>Question-wise Results:</h3>
          {calculateMarks().resultDetails.map((result, index) => (
            <div key={index}>
              <p className="questions">
                Question {index + 1}: {result.question.question}
              </p>
              <p className="questions">
                Correct Answer: {result.question.correctAnswer}
              </p>
              <p className="questions">Your Answer: {result.answer}</p>

              {result.isCorrect ? (
                <p className="questions">
                  Correct Answer:{" "}
                  <span style={{ color: "green", width:"1rem" , height: "1rem"}}>&#10004;</span>
                </p>
              ) : (
                <p className="questions">
                  Wrong Answer: <span style={{ color: "red",width:"1rem", height: "1rem" }}>&#10006;</span>
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{shuffledQuestions[currentQuestionIndex].question}</p>
          <div className="options">
            {shuffledQuestions[currentQuestionIndex].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  onChange={handleAnswerSelect}
                  checked={answers[currentQuestionIndex] === option}
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
          <div className="navigation-buttons">
            {currentQuestionIndex > 0 && (
              <button onClick={handleBackClick}>Back</button>
            )}
            <button onClick={handleNextClick}>
              {currentQuestionIndex === shuffledQuestions.length - 1
                ? "Submit"
                : "Next"}
            </button>
          </div>
        </div>
      )}
      {isLoading && <div className="loading">Saving results...</div>}
    </div>
  );
};

export default App;
