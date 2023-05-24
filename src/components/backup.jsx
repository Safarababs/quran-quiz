import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import questions from "./Questions";

const App = () => {
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
      setShowUserForm(false);
    } else {
      if (currentQuestionIndex === questions.length - 1) {
        setShowResults(true);
        saveUserDataAndAnswers();
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const calculateMarks = () => {
    let totalMarks = questions.length;
    let obtainedMarks = 0;
    let resultDetails = [];

    questions.forEach((question, index) => {
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

    // Display "Please wait" message
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
            placeholder="Name"
          />
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleUserDataChange}
            placeholder="Phone Number"
          />
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleUserDataChange}
            placeholder="City"
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
          <h3>Question-wise Results:</h3>
          {calculateMarks().resultDetails.map((result, index) => (
            <div key={index}>
              <p className="questions">
                Question {index + 1}: {result.question.question}
              </p>
              <p className="questions" >Correct Answer:   {result.question.correctAnswer}</p>
              <p className="questions">Your Answer:   {result.answer}</p>
              
              {result.isCorrect ? (
                <p className="questions">
                  درست جواب: <span style={{ color: "green" }}>&#10004;</span>
                </p>
              ) : (
                <p className="questions">
                  غلط جواب: <span style={{ color: "red" }}>&#10006;</span>
                </p>
              )}
            </div>
          ))}
        </div>
      ) : (
        questions.length > 0 &&
        currentQuestionIndex < questions.length && (
          <div className="question-container">
            <p>{questions[currentQuestionIndex].question}</p>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={answers[currentQuestionIndex] === option}
                  onChange={handleAnswerSelect}
                />
                {option}
              </label>
            ))}
            <button onClick={handleNextClick}>
              {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        )
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default App;
