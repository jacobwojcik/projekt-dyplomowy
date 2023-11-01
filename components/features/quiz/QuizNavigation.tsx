import { Button } from '@/components/ui/Button';

interface Props {
  options: {
    nextAction?: () => void;
    nextText?: string;
    disabled?: boolean;
  };
}

const QuizNavigation = ({ options }: Props) => {
  const { nextAction, nextText, disabled } = options;
  return (
    <div className="w-full flex justify-end">
      {nextText && (
        <Button className="mt-3" onClick={nextAction} disabled={disabled}>
          {nextText}
        </Button>
      )}
    </div>
  );
};

export default QuizNavigation;
