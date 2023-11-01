import React from 'react';

interface Props {
  question: string;
}

const QuizQuestion = ({ question }: Props) => {
  return (
    <div className="h-[80px] flex justify-center items-start">
      <h2>{question}</h2>
    </div>
  );
};

export default QuizQuestion;
