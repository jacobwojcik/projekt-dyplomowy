'use client';
import { CopyBlock, googlecode } from 'react-code-blocks';

interface Props {
  code: string;
  highlight?: string;
  startingLine?: number;
}

const CodeBlock = ({ code, highlight, startingLine = 1 }: Props) => {
  return (
    <div className="border rounded-lg p-1 text-xs md:text-sm font-code relative">
      <div className=" overflow-x-auto">
        <CopyBlock
          // @ts-ignore
          text={code}
          language="typescript"
          showLineNumbers={true}
          theme={googlecode}
          highlight={highlight}
          startingLineNumber={startingLine}
        />
      </div>
    </div>
  );
};

export default CodeBlock;
