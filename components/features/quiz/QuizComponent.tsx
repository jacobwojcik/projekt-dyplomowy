'use client';

import { useState } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

import { Button } from '@/components/ui/Button';
import QuizQuestion from './QuizQuestion';
import QuizAnswer from './QuizAnswer';
import QuizNavigation from './QuizNavigation';
import { questions } from '@/lib/consts/questions';
import { quizSummary } from '@/lib/helpers';
import Image from 'next/image';

const QuizComponent = () => {
  const [step, setStep] = useState(0); // 0: start, 1: question, 2: scores
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [userHasSelected, setUserHasSelected] = useState(false);
  const [userScore, setUserScore] = useState(0);

  const handleAnswerClick = (index: number) => {
    if (!userHasSelected) {
      setSelectedAnswer(index);
      setUserHasSelected(true);
      if (index === questions[questionNumber].correctAnswer) {
        setUserScore((prev) => (prev = prev + 1));
      }
    }
  };

  const nextQuestion = () => {
    setUserHasSelected(false);
    if (questionNumber + 1 < questions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setStep(2);
    }
  };

  const restartQuiz = () => {
    setUserHasSelected(false);
    setQuestionNumber(0);
    setStep(1);
    setUserScore(0);
  };

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-zinc-200 p-4 text-center md:grid-cols-3 min-h-[500px] justify-center">
      {step === 0 && (
        <div className="col-span-1 flex flex-col items-center justify-center p-0 md:py-4 h-full">
          <Image
            src="/images/quiz-start.png"
            width={450}
            height={450}
            sizes="420px"
            alt="Quiz start"
            className="w-auto"
          />

          <Button onClick={() => setStep(1)} size="lg">
            Kliknij aby rozpocząć
          </Button>
        </div>
      )}
      {step === 1 && (
        <div className="col-span-3 flex flex-col items-center justify-around p-0 md:pb-4 h-full">
          <QuizQuestion question={questions[questionNumber].question} />
          {questions[questionNumber].answers.map((answer, index) => (
            <QuizAnswer
              key={index}
              index={index}
              onClick={handleAnswerClick}
              answer={answer}
              isCorrect={
                userHasSelected &&
                selectedAnswer !== null &&
                index === questions[questionNumber].correctAnswer
              }
              isSelected={userHasSelected && index === selectedAnswer}
              hasSelected={userHasSelected}
            />
          ))}
          <QuizNavigation
            options={{
              disabled: !userHasSelected,
              nextText:
                questionNumber === questions.length - 1
                  ? 'Zakończ quiz'
                  : 'Następne pytanie',
              nextAction: nextQuestion,
            }}
          />
        </div>
      )}
      {step === 2 && (
        <div className="col-span-3 flex flex-col items-center justify-around p-0 md:py-4 h-full">
          <h2 className="font-semibold text-xl">Wyniki</h2>
          <span className="text-3xl mt-3">
            {userScore} / {questions.length}
          </span>

          <span className="text-xl my-3">{quizSummary(userScore)}</span>
          <div className="mt-3">
            <Button variant={'outline'} onClick={restartQuiz}>
              <ArrowPathIcon className="h-5 w-5 text-black mr-2" />
              Rozwiąż quiz jeszcze raz
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
