import React, { useState } from 'react';
import Qslist from './Qslist';

function Quizgame() {
    const questions = [
        {
            question: "What is React JS?",
            option: ["CSS framework", "React library", "React framework", "Testing tool"],
            answer: "React library",
        },
        {
            question: "What is 2+2?",
            option: ['2', '3', '4', '1'],
            answer: '4',
        },
        {
            question: "What is your name?",
            option: ["Jazib", "Liba", "Sneha", "Jazi"],
            answer: "Jazib",
        },
        {
            question: "What is your uni name?",
            option: ["UOL", "UCP", "UMT", "UOG"],
            answer: "UCP",
        },
        {
            question: "Are you married?",
            option: ['Yes', 'No'],
            answer: 'No',
        },
        {
            question: "What is your age?",
            option: ['2', '3', '4', '20'],
            answer: '20',
        },
        {
            question: "What is your dream?",
            option: ['Police', 'Dr', 'Eng', 'Pilot'],
            answer: 'Eng',
        },
        {
            question: "What is your mobile name?",
            option: ['Android', 'iPhone', 'Tecno', 'Oppo'],
            answer: 'iPhone',
        },
        {
            question: "Where is your home?",
            option: ['Multan', 'Gujranwala', 'Sialkot', 'Lahore'],
            answer: 'Lahore',
        },
    ];
    

  const [Qindex, setQindex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleranswer = (value) => {
    setAnswer(value);
    if (value === questions[Qindex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handlenewQ = () => {
    setQindex((prevQindex) => prevQindex + 1);
    setAnswer(null);
  };

  return (
    <div className= 'bg-[url(./img/js.jpg)] bg-cover bg-center h-screen w-screen flex items-center justify-center'>
      {Qindex < questions.length ? (
        <div className='m-auto '>
          <h1 className='flex items-center justify-center text-center text-[50px] '>Quiz Game</h1>
          <Qslist
            question={questions[Qindex].question}
            option={questions[Qindex].option}
            handleranswer={handleranswer}
            answer={answer}
          />

          <div className="btn text-center ">
            <button
              disabled={answer === null}
              className={`${answer === null ? 'cursor-not-allowed' : 'bg-red-600'} rounded-lg p-1 m-1`}
              onClick={handlenewQ}
            >
              Next Question
            </button>
          </div>
        </div>
      ) : (
<div className="flex items-center justify-center h-screen text-center font-bold text-2xl">
  Your score is = {score>5? `${score} win`:`${score}  lose`}  
</div>
      )}
    </div>
  );
}

export default Quizgame;
