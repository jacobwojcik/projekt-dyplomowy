import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
interface Props {
  answer: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean;
  hasSelected: boolean;
  onClick: (index: number) => void;
}

const QuizAnswer = ({
  answer,
  onClick,
  index,
  isCorrect,
  isSelected,
  hasSelected,
}: Props) => {
  return (
    <div
      className={`w-full border rounded-md px-5 h-[60px] text-left my-1 flex justify-between items-center
      ${isCorrect ? 'border-green-500 text-green-500 hover:white' : ''} ${
        isSelected && !isCorrect
          ? 'border-red-500 text-red-500 hover:bg-white'
          : ''
      }
      ${hasSelected ? '' : 'cursor-pointer hover:bg-gray-100'}
      
      `}
      onClick={() => onClick(index)}
    >
      <span>{answer}</span>

      {isCorrect && <CheckCircleIcon className="w-8 h-8" />}
      {!isCorrect && isSelected && <XCircleIcon className="w-8 h-8" />}
    </div>
  );
};

export default QuizAnswer;
